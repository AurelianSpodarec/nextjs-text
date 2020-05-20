import App from 'next/app';

import { Header, Footer } from "../components";

import { CartProvider } from "./../context/ContextCart";

function MyApp({ Component, pageProps }) {
    return (

        <CartProvider>
            <Header {...pageProps} />
            <Component {...pageProps} />
            <Footer {...pageProps} />
        </CartProvider>

    )
}

export default MyApp;