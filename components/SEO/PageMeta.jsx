import React from "react";
import { NextSeo } from "next-seo";

const PageMeta = ({ title, desc, img, host, blogDate }) => {

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={host}
      openGraph={{
        type: "article",
        article: {
          publishedTime: blogDate,
        },
        url: host || "https://affinixdigital.com/",
        title: title,
        description: desc,
        images: [
          {
            url: img,
            secureUrl: img,
          },
        ],
        site_name: "Affinix Digital | Best Digital Marketing Agency",
      }}
      twitter={{
        cardType: "summary_large_image",
        site: host,
        description: desc,
        title: title,
        image: img,
      }}
    />
  );
};

export default PageMeta;
