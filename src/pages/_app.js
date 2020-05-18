import App from 'next/app';

import { Header, Footer } from "../components"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header {...pageProps} />
            <Component {...pageProps} />
            <Footer {...pageProps} />
        </>
    )
}

export default MyApp;