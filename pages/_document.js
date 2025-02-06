// /pages/_document.js
import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=PT+Sans:300,400,700,800"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="preload" href="/fonts/AmsterdamOne.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
                    <link rel="preload" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/beach-hd.jpg`} as="image" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;