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
              <meta charSet="utf-8"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <title>Wedding | Ashley & Jon</title>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta name="description"
                    content="Welcome to our wedding website! Oct. 18 2025 is the day - can't wait to see you there!"/>
              <meta name="keywords" content="Jon,Ashley,wedding,website,rsvp"/>
              <meta name="author" content="Ashley & Jon"/>
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
