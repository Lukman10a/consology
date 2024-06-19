import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
