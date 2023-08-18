import { useEffect } from "react";
import { defineCustomElements, applyPolyfills } from "stencil-pw/loader";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
