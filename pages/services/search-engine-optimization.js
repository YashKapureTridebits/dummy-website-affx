import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiDollar } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";

import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";
import { FeaturedBlogs } from "@/components";
import Image from "next/image";

const SearchEngineOptimization = () => {
  const features = [
    {
      name: "Proven Results",
      icon: <CiGlobe className="w-8 h-8 text-white" />,
      description:
        "Our track record speaks for itself. We've helped businesses across industries achieve and sustain high search engine rankings.",
    },
    {
      name: "Customized Strategies",
      icon: <MdPeople className="w-8 h-8 text-white" />,
      description:
        "Your business is unique, and so is our approach. We tailor our SEO strategies to fit your industry, goals, and target audience.",
    },
    {
      name: "Transparent Reporting",
      icon: <MdOutlineDashboard className="w-8 h-8 text-white" />,
      description:
        " Stay informed with regular reports detailing the performance of your SEO efforts, providing insights into key metrics and areas for improvement.",
    },
  ];
  return (
    <>
      <PageMeta
        title="Affinix Digital - Search Engine Optimization (SEO) at Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency Affinix Digital empowers businesses to dominate search
                      engine results and stand out in the digital crowd. Our
                      Search Engine Optimization (SEO) services are meticulously
                      crafted to boost your online visibility, drive targeted
                      traffic, and ultimately propel your business to new
                      heights."
      />
      <Head>
        <meta
          name="keywords"
          content="Why SEO Matters?, Online Potential with Expert SEO Services, What is a website audit?, Generate Free Audit Report, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="/img/seo-service.jpg" />
        <meta property="og:image:secure_url" content="/img/seo-service.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:image" content="/img/seo-service.jpg" />
        <meta name="twitter:image:src" content="/img/seo-service.jpg" />
      </Head>
      <Layout>
        <div>
          <div className="bg-[#263238] relative pt-12 lg:pt-16 pb-16 lg:pb-24">
            <div
              id="triangle"
              className="h-10 w-10 z-[91] rotate-45 absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 rounded-sm bg-[#263238]"
            ></div>

            <div
              id="product-hero-container"
              className="hero-content max-w-7xl z-5 relative mx-auto bg-white/0 px-6 sm:px-6 lg:px-8"
            >
              <div className="min-[900px]:flex items-start gap-x-8">
                <div
                  id="hero-copy-col"
                  className="flex-1 space-y-6 lg:space-y-8 text-white bg-white/0"
                >
                  <div className="title-wrapper">
                    <div
                      className="badges flex gap-x-4"
                      style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                    >
                      <span className="badge text-gray-900 bg-amber-400 py-1 px-3 rounded-sm text-xs uppercase tracking-wider font-bold mb-2 inline-block">
                        PROMO
                      </span>
                      <span className="badge text-white/95 bg-white/20 py-1 px-3 rounded-sm text-xs uppercase tracking-wider font-bold mb-2 inline-block">
                        BEST SELLER
                      </span>
                    </div>

                    <h1
                      className="text-4xl !mt-4 sm:text-4xl md:text-5xl min-[900px]:text-4xl min-[1200px]:text-5xl !leading-[1.15em] font-extrabold text-white"
                      style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                    >
                      Unlock Your Online Potential with Expert SEO Services
                    </h1>
                    <div
                      className="subtitle text-lg lg:text-xl mt-6"
                      style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                    >
                      Affinix Digital empowers businesses to dominate search
                      engine results and stand out in the digital crowd. Our
                      Search Engine Optimization (SEO) services are meticulously
                      crafted to boost your online visibility, drive targeted
                      traffic, and ultimately propel your business to new
                      heights.
                    </div>
                  </div>

                  <div className="benefit-list-wrapper">
                    <div className="cta-button-wrapper flex max-sm:flex-col max-sm:gap-y-3 gap-x-4 mt-8">
                      <a
                        href=""
                        className="cta-button px-6 py-2.5 hover:shadow-xl hover:text-white group rounded-sm justify-center duration-500 font-semibold bg-[#ffa726]  text-base inline-flex gap-x-2 items-center"
                        style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                      >
                        Get Started
                        <i
                          className="fa-solid group-hover:translate-x-0.5 duration-500 text-xs fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <Link
                        href="/contactus"
                        className="cta-button px-6 py-2.5 font-semibold hover:opacity-90 justify-center group duration-500 bg-white text-base text-[#ffa726] inline-flex gap-x-2 items-center"
                        style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                      >
                        Book a Call{" "}
                        <i
                          className="fa-solid inline-block duration-500 text-xs fa-chevron-right relative group-hover:translate-x-0.5"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-[900px]:max-w-2xl mx-auto lg:w-full mt-8 min-[900px]:mt-0">
                  <div className="relative h-full w-full">
                    <div className="absolute z-1 lg:-right-12 top-36 hidden lg:block">
                      <img
                        src="https://octaneapps.com/assets/img/shape/dot-big-square.svg"
                        alt="shape"
                      />
                    </div>
                    <div className="absolute hidden uppercase bg-red-900 text-white py-0.5 px-4 rounded-t-sm font-bold text-xs top-0 -translate-y-full left-1/2 -translate-x-1/2">
                      <i
                        className="fa-solid fa-circle-play text-xs"
                        aria-hidden="true"
                      ></i>{" "}
                      5 min Explainer video
                    </div>

                    <div
                      data-fancybox=""
                      className="relative rounded-lg grid overflow-hidden"
                    >
                      <Image
                        height={500}
                        width={500}
                        draggable="false"
                        className="object-cover  w-full cursor-pointer  select-none duration-500"
                        src="/img/seo-service.jpg"
                        alt="Affinix Digital SEO Services"
                      />
                      <div className="absolute z-20 h-full w-full grid place-items-center">
                        <button className="group">
                          <i
                            className="fa-solid backdrop-blur opacity-50 shadow-xl duration-500 group-hover:opacity-90 fa-circle-play text-white text-6xl"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                      <div className="absolute hidden z-20 flex bottom-6 left-6 gap-x-4">
                        <button className="bg-gray-950/70 group backdrop-blur-sm rounded-full grid place-items-center h-10 w-10">
                          <i
                            className="fa-sharp opacity-70 group-hover:opacity-100 duration-100 fa-pause text-white text-lg"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button className="bg-gray-950/80 group backdrop-blur-sm rounded-full grid place-items-center h-10 w-10">
                          <i
                            className="fa-sharp opacity-70 group-hover:opacity-100 duration-100 fa-solid fa-volume-xmark text-lg text-white"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
              <div className="py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Why SEO Matters?
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600">
                    In a world where online presence is paramount, SEO is the
                    key to unlocking the full potential of your digital
                    strategy. Here&apos;s why:
                  </p>
                </div>
                <div className="flex flex-col justify-around items-center sm:flex-row">
                  <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="bg-white h-[auto] rounded rounded-lg p-3  duration-200 grid place-items-center flex-1 selected  shadow-xl    ">
                      <div className=" text-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                          <FaSearchDollar className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg ">Increased Visibility</span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          Our SEO strategies are designed to elevate your
                          website&apos;s ranking on major search engines,
                          ensuring that your brand is front and center when
                          potential customers are searching for products or
                          services you offer.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="bg-white h-[auto] rounded rounded-lg p-3 duration-200 grid place-items-center flex-1 selected shadow-xl ">
                      <div className="text-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                          <MdPeople className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg ">Targeted Traffic</span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          We don&apos;t just bring any traffic; we bring the
                          right traffic. Our SEO experts identify and target the
                          keywords and phrases that matter most to your
                          business, attracting visitors who are genuinely
                          interested in what you have to offer.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-around items-center sm:flex-row">
                  <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                      <div className="text-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                          <VscWorkspaceTrusted className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg ">Improved Credibility</span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          A high-ranking website instills trust and credibility
                          in the eyes of your audience. Our SEO services
                          establish your brand as an authoritative figure in
                          your industry, fostering confidence and loyalty among
                          potential customers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="bg-white h-[auto]  rounded-lg p-3 duration-200 grid place-items-center flex-1 selected shadow-xl ">
                      <div className="text-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                          <CiDollar className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg ">Maximized ROI</span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          Investing in SEO is an investment in long-term
                          success. Our strategies are geared towards sustainable
                          growth, ensuring that your business continues to reap
                          the benefits of increased organic traffic over time.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 ">
              <div className="">
                <div className="text-center">
                  <h2 className="text-gray-800 max-lg:text-center max-lg:mx-auto text-4xl sm:text-4xl md:text-5xl leading-[1.2em] mt-8 font-extrabold">
                    Our Approach to SEO.
                  </h2>
                  <p className="max-lg:mt-8 font-normal max-lg:mx-auto max-lg:text-center max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                    When you join AFFINIX DIGITAL, you’ll get a dedicated
                    campaign manager – an experienced SEO veteran.
                  </p>
                </div>
                <div className="grid max-w-xl grid-cols-1  mt-16  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                  <div
                    className="feature-card bg-white backdrop-blur p-6 md:p-8  rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      Comprehensive Website Audit
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      We begin by conducting a thorough audit of your website to
                      identify strengths, weaknesses, and opportunities for
                      improvement. This forms the foundation of our tailored SEO
                      strategy.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-white backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      Keyword Research and Analysis{" "}
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      Our experts delve deep into industry-specific keywords,
                      analyzing search trends and competition to pinpoint the
                      most valuable keywords for your business.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-white backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      On-Page Optimization{" "}
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      We optimize every element of your website, from meta tags
                      and headings to content and images, ensuring that search
                      engines recognize and prioritize your site for relevant
                      queries.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-white backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      {" "}
                      Quality Link Building
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      Backlinks are the backbone of effective SEO. We build
                      high-quality, authoritative links to your website,
                      establishing your online presence as a reliable source of
                      information.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-white backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      Regular Monitoring and Reporting{" "}
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      SEO is an evolving process. We continuously monitor your
                      website&apos;s performance, making data-driven adjustments
                      to ensure ongoing success. Our transparent reporting keeps
                      you informed every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white  py-36 sm:py-32 mt-6  mb-4">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why Choose Affinix Digital for SEO?
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                <div className="grid max-w-xl grid-cols-1  mt-16  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="bg-neutral-50 backdrop-blur relative p-5  rounded-md md:rounded-lg"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                        {feature.icon}
                      </div>
                      <div className="items-center font-bold text-sm pt-3 mt-2">
                        <span className="text-lg  text-gray-900">
                          {feature.name}
                        </span>
                      </div>
                      <dd className="leading-7 text-gray-500 text-lg text-regular mt-2 md:mt-4">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturedBlogs />
      </Layout>
    </>
  );
};

export default SearchEngineOptimization;
