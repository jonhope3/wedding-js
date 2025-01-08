// /pages/_document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
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
