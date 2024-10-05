import Head from "next/head";
import React from "react";

interface props {
  pageTitle?: string;
  pageDescription?: string;
  pathname?: string;
  ogImage?: string;
}

const CommonHead: React.FC<props> = ({
  pageTitle,
  pageDescription,
  pathname,
  ogImage,
}) => {
  const baseTitle = "Historedge";
  const baseDescription = "歴史に取り憑かれたエンジニアが自己満足するサイト";
  const domain = "https://historedge.com";

  const title = pageTitle ? `${pageTitle} - ${baseTitle}` : baseTitle;

  const formatDescription = pageDescription?.substring(0, 200);
  const description = pageDescription
    ? formatDescription + "..."
    : baseDescription;
  const currentPath = domain + pathname + "/";
  const defaultOgImage =
    "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP-100.jpg?alt=media&token=607b69df-42b7-47fd-b5fe-11b042b6f16f";
  const ogImg = ogImage ? `${domain}/${ogImage}` : defaultOgImage;
  return (
    <Head>
      {/* <link
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
      /> */}
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#433d36" /> */}
      {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
      {/* <meta name="msapplication-config" content="/browserconfig.xml" /> */}
      {/* <meta name="theme-color" content="#ffffff" /> */}

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentPath} />
      <link rel="icon" href="/site-favicon.png" />
      {/* OG */}
      <meta property="og:site_name" content={baseTitle} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentPath} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="448" />
      <meta property="og:image:height" content="448" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={currentPath} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />
    </Head>
  );
};

export default CommonHead;
