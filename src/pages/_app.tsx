import Navbar from "@/components/layouts/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        ></link>
      </Head>
      <div className={lato.className}>
        <Navbar />
        <Component {...pageProps} />;
      </div>
    </SessionProvider>
  );
}
