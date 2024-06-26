import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import NewsLetter from "@/components/newsLetter";
import { inter } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NavBar />
      <main className={`scroll-smooth ${inter.className} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
      <NewsLetter />
      <Footer />
    </Fragment>
  );
}
