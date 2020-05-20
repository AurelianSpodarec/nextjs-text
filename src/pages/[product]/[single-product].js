import React, { useState, useEffect, useMemo } from 'react';

import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import WooCommerce from './../../services/woocommerce/config_woocommerce';


function getAllProductSizes(product, selectedColor) {
    let allColorSizes = [];

    for (const variation of product.variations) {
        if (variation.attributes.attribute_pa_color === selectedColor) {
            allColorSizes.push(variation.attributes.attribute_pa_size)
        }
    }

    return allColorSizes;
}


function SingleProduct({ product }) {
    const router = useRouter();

    console.log("Product", product)

    const [colors, setColors] = useState([]);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null)

    const [selectedProduct, setSelectedProduct] = useState({})

    const sizes = useMemo(() => getAllProductSizes(product, selectedColor), [product, selectedColor])

    function setInitialValues() {
        if (!selectedColor) {
            setSelectedColor(product.variations[0].attributes.attribute_pa_color)
        }
    }

    function setUniqueColors() {
        let colorSet = new Set([]);
        for (const variation of product.variations) {
            if (variation.attributes.attribute_pa_color) {
                colorSet.add(variation.attributes.attribute_pa_color);
            }
        }
        setColors(Array.from(colorSet));
    }

    function getProduct(color, size) {
        for (const variation of product.variations) {
            if (!selectedSize) {
                if (variation.attributes.attribute_pa_color === selectedColor) {
                    setSelectedProduct(variation)
                }
            } else {
                if (variation.attributes.attribute_pa_color === selectedColor &&
                    variation.attributes.attribute_pa_size === selectedSize) {
                    setSelectedProduct(variation)
                }
            }
        }
    }

    console.log('Color, size', selectedColor, selectedSize)

    useEffect(() => {
        setSelectedSize(null)
    }, [selectedColor])

    useEffect(() => {
        getProduct()
    }, [selectedColor, selectedSize])

    useEffect(() => {
        setUniqueColors()
        setInitialValues()
    }, [])

    return (
        <div>
            <div>
                <div>Name: {product.name}</div>

                <div>Price: {selectedProduct.display_regular_price}</div>
                <div>Sale Price: {selectedProduct.display_price}</div>

                <div>
                    {
                        colors.map((color, index) =>
                            <button onClick={() => setSelectedColor(color)} key={index} style={{ border: selectedColor === color ? '3px solid red' : '', height: '50px', width: '50px', backgroundColor: `${color}` }}></button>
                        )
                    }

                    {
                        sizes.map((size, index) =>
                            <div>
                                <div
                                    onClick={() => setSelectedSize(size)}
                                    style={{ height: '50px', width: '50px', border: selectedSize === size ? '2px solid black' : "1px solid grey" }}
                                >
                                    {size}
                                </div>
                            </div>
                        )
                    }
                </div>
                <button style={{ margin: "20px 0", padding: '14px 14px', fontSize: '1em' }}>Add to cart</button>
            </div>
            {console.log("sss", sizes)}
            {/* {

                selectedProduct == {} ? "null" : selectedProduct.variation_gallery_images.map((product, index) => {
                    return <img
                        src={product.url}
                        height="300px"
                        title="Contemplative Reptile"
                    />
                })
            } */}

        </div>
    )
}

export default SingleProduct;


SingleProduct.getInitialProps = async (ctx) => {

    const { query } = ctx;
    console.log("Query Single Product", WooCommerce.get('route').then(res => ({ p: res.data })))
    // return WooCommerce.get(`product/slug=${ctx.query['single-product']}`)
    return WooCommerce.get(`product/slug=${ctx.query['single-product']}/variations`)
        // return WooCommerce.get(`products/${ctx.query['single-product']}`)
        .then(response => ({ product: response.data }))
        .catch(error => ({ product: error.response.data }));
}

// $query = new WP_Query( array( 'name' => 'about-my-life' ) );

