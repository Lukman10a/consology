import GoogleAnalytics from "@/components/googleAnalytics";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <GoogleAnalytics />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
