import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { Product } from '../components';

import WooCommerce from './../services/woocommerce/config_woocommerce';

function Index({ products }) {

    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {
                    console.log(products),

                    products && products.length ?

                        products.map((product, index) => {
                            console.log("Map", product)
                            return (
                                // <Link as={`/product/${product.id}`} href="/[product]/[single-product]">
                                <Product key={index} product={product} />
                                // </Link>
                            )
                        })
                        : 'Loading'
                }
            </main>

        </div>

    );
}

export default Index;


Index.getInitialProps = async () => {

    return WooCommerce.get("products")
        .then(response => ({ products: response.data }))
        .catch(error => ({ products: error.response.data }));

}


