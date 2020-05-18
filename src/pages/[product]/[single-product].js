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



function SingleProduct({ product }) {
    const router = useRouter();

    console.log("Product", product)

    const [productIndex, setProductIndex] = useState(0);
    const [productSize, setProductSize] = useState('L');

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null)

    function setUniqueColors() {
        let colorArr = [];
        product.variations.map((object, index) => {
            if (!colorArr.includes(object.attributes.attribute_pa_color)) {
                colorArr.push(object.attributes.attribute_pa_color)
            }
            setColors(colorArr)
        })
    }

    function getSizes() {
        let obj = [];
        console.log("size", obj)
        product.variations.map((object, index) => {
            console.log(object.attributes.attribute_pa_color === selectedColor)
            if (object.attributes.attribute_pa_color === selectedColor) {
                obj.push(object.attributes.attribute_pa_size)
            }

            setSizes(obj)
        })
    }

    useState(() => {
        setUniqueColors()

    }, [])

    function changeColor({ object, index }) {
        // console.log("changcol", object, index)
        setSelectedColor(object)
        // setProductIndex(index ? index : 0)
        getSizes()
    }
    console.log("RERE", selectedColor, selectedSize)

    return (
        <div>
            <div>
                <div>Name: {product.name}</div>

                <div>Price: {product.variations[productIndex].display_regular_price}</div>
                {/* <div>Sale Price: {product.variations[productIndex].display_price}</div> */}

                <div>
                    {
                        colors.map((object, index) =>
                            <button onClick={() => changeColor(object)} key={index} style={{ border: index === productIndex ? '3px solid red' : '', height: '50px', width: '50px', backgroundColor: `${object}` }}></button>
                        )
                    }

                    {
                        sizes.map((object, index) =>
                            <div>
                                {console.log("Sd", object)}
                                <div onClick={() => setSelectedSize(object)} style={{ height: '50px', width: '50px', border: '2px solid grey' }}>{object}</div>
                            </div>
                        )
                    }
                </div>
                <button style={{ margin: "20px 0", padding: '14px 14px', fontSize: '1em' }}>Add to cart</button>
            </div>

            {
                product.variations[productIndex].variation_gallery_images.map((product, index) => {
                    return <img
                        src={product.url}
                        height="300px"
                        title="Contemplative Reptile"
                    />
                })
            }

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

