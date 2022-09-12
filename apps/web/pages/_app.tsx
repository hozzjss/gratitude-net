import React from 'react'
import Head from 'next/head'
import {AppProps, } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Gratitude Network</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp