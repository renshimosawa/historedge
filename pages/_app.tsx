import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import * as gtag from "@/src/libs/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <Component {...pageProps} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_TAG_ID}');
           `,
        }}
      />
    </>
  );
}
