import "@/styles/globals.css";

import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter(0);
  const { metaTags, ...rest } = pageProps;

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.query]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        {metaTags &&
          Object.entries(metaTags).map((entry, idx) => (
            <meta key={idx} property={entry[0]} content={entry[1]} />
          ))}
      </Head>
      <LoadingBar
        color="#ffa726"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />

      {/* cookies */}

      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies"
        cookieName="AffinixDigital"
        style={{
          background: "#263238",
          hover: {
            backgroundColor: "black",
            color: "#ffa726",
          },
        }}
        buttonStyle={{
          color: "#252525",
          fontSize: "16px",
          fontWeight: "700",
          display: "inline-block",
          borderRadius: "9999px",
          padding: "8px 16px",
          textAlign: "center",
          fontWeight: "medium",
          backgroundColor: "#ffa726",
          // hover effect
          transition: "all 0.3s",
          cursor: "pointer",
          hover: {
            backgroundColor: "black",
            color: "#ffa726",
          },
        }}
        expires={365}
      >
        This site uses cookies to improve your experience.{" "}
        <Link
          href="/privacy-policy"
          className="
          text-[#ffa726] underline hover:text-[#ffa726]
          "
        >
          Learn more
        </Link>
      </CookieConsent>

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-LQR04KYSPH"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LQR04KYSPH',{
          page_path: window.location.pathname,
        });`,
        }}
      />

      <Script
        id="clarity1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "lkfwhauyf2");`,
        }}
      />

      {/* Facebook Pixel Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '376443615249387');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=376443615249387&ev=PageView&noscript=1"
        />
      </noscript>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "http://affinixdigital.com/",
          siteName: "Affinix Digital",
        }}
      />

      <Component {...rest} />
    </>
  );
}
