import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import { inter } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NavBar />
      <main className={`scroll-smooth ${inter.variable} ${inter.className}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}
