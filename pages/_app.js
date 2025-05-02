import Head from 'next/head';
import '../styles/globals.scss';
import React from "react";
import {PT_Sans, Sofia_Sans_Condensed} from "next/font/google";

// Optimize Google Fonts
const ptSans = PT_Sans({weight: ["400", "700"], subsets: ["latin"], display: "swap"});
const sofiaSansCondensed = Sofia_Sans_Condensed({weight: ["300", "400", "700"], subsets: ["latin"], display: "swap"});

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <title>Ashley & Jon | Wedding</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description"
                      content="Welcome to our wedding website! Oct. 18 2025 is the day - can't wait to see you there!"/>
                <meta name="keywords" content="Jon,Ashley,wedding,website,rsvp"/>
                <meta name="author" content="Ashley & Jon"/>

                <meta property="og:title" content="Ashley & Jon | Wedding"/>
                <meta property="og:description"
                      content="Welcome to our wedding website! Oct. 18 2025 is the day - can't wait to see you there!"/>
                <meta property="og:image"
                      content={`${process.env.NEXT_PUBLIC_BASE_PATH}/ring-photo-opengraph.png`}/>
                <meta property="og:url" content="https://wedding.ashandjon.com"/>
                <meta property="og:type" content="website"/>
            </Head>
            {/* Apply fonts globally */}
            <main className={`${ptSans.className} ${sofiaSansCondensed.className}`}>
                <Component {...pageProps} />
            </main>
        </>
    );
}