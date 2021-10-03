import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../override.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
