import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../override.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Youtube</title>
        <link
          rel="shortcut icon"
          href="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
          type="image/png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
