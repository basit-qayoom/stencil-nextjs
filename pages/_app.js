import Head from "next/head";
import { useEffect } from "react";
import { defineCustomElements, applyPolyfills } from "stencil-pw/loader";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }, []);
  return (
    <>
      <Head>
        <title>NEXT V</title>
        <meta
          name="google-site-verification"
          content="ukpf0_hN5N4IQLTrvLSH2xd9kaWmk6E_TYRkjjNTI64"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
