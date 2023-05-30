import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Active On Holiday</title>
        <meta name="description" content="Ez Web Page" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./pixel-icon-cat.png"
        />
        <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css" />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
