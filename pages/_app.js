// import '../styles/reset.scss';
import '../styles/globals.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}