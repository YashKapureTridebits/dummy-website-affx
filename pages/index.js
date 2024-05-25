import { FeaturedBlogs, Hero, Services } from "@/components";
import PageMeta from "@/components/SEO/PageMeta";
import WhyChoose from "@/components/landingPage/WhyChoose/WhyChoose";
import Layout from "@/layout/Layout";
import Head from "next/head";

import React from "react";
const Home = () => {
  return (
    <>
      <PageMeta
        title="Best Digital Marketing Company | Best Digital Marketing Agency | Social Media Marketing"
        desc="Affinix Digital | Best Digital Marketing Agency Unleashing Social Brilliance with Affinix Digital The Best Digital Marketing Company"
      />
      <Head>
        <meta
          name="keywords"
          content="Best Digital Marketing Company | Best Digital Marketing Agency | Social Media Marketing, Best Digital Marketing Company In Nashik | Social Media Marketing, Digital Marketing,Recommended Digital Marketing Agency, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation, Online Branding in Digital Marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="http://affinixdigital.com/logo/Affinix%20Digital%20Yellow%20Black%20Logo.png"
        />
        <meta
          property="og:image:secure_url"
          content="http://affinixdigital.com/logo/Affinix%20Digital%20Yellow%20Black%20Logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="twitter:image"
          content="http://affinixdigital.com/logo/Affinix%20Digital%20Yellow%20Black%20Logo.png"
        />
        <meta
          name="twitter:image:src"
          content="http://affinixdigital.com/logo/Affinix%20Digital%20Yellow%20Black%20Logo.png"
        />
      </Head>
      <Layout>
        <Hero />
        <Services />
        <WhyChoose />
        <FeaturedBlogs />
      </Layout>
    </>
  );
};

export default Home;
