import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { inter } from "@/lib/utils";
import "@/styles/globals.css";

import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import NewsLetter from "@/components/newsLetter";
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalytics from "@/components/googleAnalytics";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Consology – Consulting On Technology, Cloud, I.T Support, 1st Line, 2nd Line, 3rd Line, Microsoft, Teams, OneDrive,Sharepoint, OneDrive for Business, Viva, Exchange, Exchange Online"
          key="description"
        />
        <title>Consology</title>

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());  

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {             
              });
          `}
        </Script>
      </Head>
      <NavBar />
      <main className={`scroll-smooth ${inter.className} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
      <NewsLetter />
      <Footer />
      <Toaster />
    </Fragment>
  );
}
