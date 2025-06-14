import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title }) {
  const siteTitle = "IMEX UZ";
  const siteDescription =
    "Explore a wide range of products at IMEX. Find the latest trends in Health, Turizm, Logistic, Dried Fruits, and more.";
  const siteKeywords =
    "IMEX, Health, Turizm, Logistic, Dried Fruits and More.";
  const siteImage = "/media/ChatGPT_Image_13_июн._2025_г.__14_28_59-removebg-preview.png";

  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={title ? `${title} - ${siteTitle}` : siteTitle}
        key="ogtitle"
      />
      <meta property="og:description" content={siteDescription} key="ogdesc" />
      <meta property="og:site_name" content={siteTitle} key="ogsitename" />
      <meta property="og:image" content={siteImage} key="ogimage" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={title ? `${title} - ${siteTitle}` : siteTitle}
      />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:site" content="@imexuz1" />
      <meta name="twitter:creator" content="@imexuz1" />
      <meta name="twitter:image" content={siteImage} />

      <link rel="icon" href="/logo.png" />
    </Helmet>
  );
}
