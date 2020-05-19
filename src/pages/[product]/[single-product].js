import React, { useState, useEffect } from 'react';

import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import WooCommerce from './../../services/woocommerce/config_woocommerce';



function ChooseColor({ colors }) {

    return (
        colors.map((color, index) =>
            <button style={{ height: '50px', width: '50px', backgroundColor: `${color}` }}></button>
        )
    )

}

function getColors(variation) {
    console.log("color", variation.variations)
    return variation.variations.map((item, index) => {
        return item.attributes.attribute_pa_color;
    })
}

// function getProductById(products, id) {
//     return products.find(product => product.variation_id === id);
// }


// Select the first one by index
// Change it later by 'color' and 'size';

// color and Size is unknown untill the item is loaded - need to show the first item at start

// Need to select first item automatically.
// If use changes the color, we need to get the color and change it by the size

// variations": [
//     priduct 1 - {
//     "attributes": {
//     "attribute_pa_color": "green",
//     "attribute_pa_size": "m"
//     },

//     product 2 -"attributes": {
//         "attribute_pa_color": "green",
//         "attribute_pa_size": "l"
//         },

//     prodiuct 3 -"attributes": {
//             "attribute_pa_color": "pink",
//             "attribute_pa_size": "xl"
//             },


// Loop buttons, if color already exists, loop it once

// Go get the first product, set it as color, get its size - since the prodict colros and sizes and unknown

// Maybe set sizes and map them to a new array map

function SingleProduct({ product }) {
    const router = useRouter();

    console.log("Product", product)

    const [productIndex, setProductIndex] = useState(0);
    const [productSize, setProductSize] = useState('L');

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null)

    const [selectedProduct, setSelectedProduct] = useState({})

    function setInitialValues() {
        if (!selectedColor) {
            setSelectedColor(product.variations[0].attributes.attribute_pa_color)

            let obj = [];
            for (const variation of product.variations) {
                if (variation.attributes.attribute_pa_color === product.variations[0].attributes.attribute_pa_color) {
                    obj.push(variation.attributes.attribute_pa_size)
                }
                setSizes(obj)
            }

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

    function getSizes() {
        let obj = [];
        for (const variation of product.variations) {
            if (variation.attributes.attribute_pa_color === selectedColor) {
                obj.push(variation.attributes.attribute_pa_size)
            }
        }
        // only need to call this once
        setSizes(obj)
    }

    function changeColor(color) {
        setSelectedColor(color)
    }

    useEffect(() => {
        getSizes()
        getProduct()
    }, [selectedColor, selectedSize])

    useEffect(() => {
        setSelectedSize(null)
    }, [selectedColor])

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
                        colors.map((object, index) =>
                            <button onClick={() => changeColor(object)} key={index} style={{ border: selectedColor === object ? '3px solid red' : '', height: '50px', width: '50px', backgroundColor: `${object}` }}></button>
                        )
                    }

                    {
                        sizes.map((object, index) =>
                            <div>
                                <div
                                    onClick={() => setSelectedSize(object)}
                                    style={{ height: '50px', width: '50px', border: selectedSize === object ? '2px solid black' : "1px solid grey" }}
                                >
                                    {object}
                                </div>
                            </div>
                        )
                    }
                </div>
                <button style={{ margin: "20px 0", padding: '14px 14px', fontSize: '1em' }}>Add to cart</button>
            </div>
            {console.log("sss", selectedProduct.variation_gallery_images)}
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

