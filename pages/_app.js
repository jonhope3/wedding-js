// import '../styles/reset.scss';
import Head from 'next/head';
import '../styles/globals.scss';
import React from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <title>Wedding | Ashley & Jon</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description"
                      content="Welcome to our wedding website! Oct. 18 2025 is the day - can't wait to see you there!"/>
                <meta name="keywords" content="Jon,Ashley,wedding,website,rsvp"/>
                <meta name="author" content="Ashley & Jon"/>

                <meta property="og:title" content="Wedding | Ashley & Jon"/>
                <meta property="og:description"
                      content="Welcome to our wedding website! Oct. 18 2025 is the day - can't wait to see you there!"/>
                <meta property="og:image"
                      content="https://github.com/jonhope3/wedding-js/blob/main/public/ring-photo-og.png?raw=true"/>
                <meta property="og:url" content="https://wedding.ashandjon.com"/>
                <meta property="og:type" content="website"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}