import Link from "next/link";
import React, { useState } from "react";

import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";
import { FeaturedBlogs } from "@/components";

const FreeAuditReport = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [showEmailPhoneFields, setShowEmailPhoneFields] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleGetReport = async (e) => {
    e.preventDefault();
    if (!showEmailPhoneFields) {
      localStorage.setItem("websiteUrl", websiteUrl);
      await handleSubmit(e);
    } else {
      handleSubmit(e);
      setSuccessMessage(
        "Thank you for your request. You will shortly recieve website audit report on your email."
      );

      localStorage.removeItem("websiteUrl");
      setEmail("");
      setPhoneNumber("");
      setWebsiteUrl("");
    }
    setShowEmailPhoneFields(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var requestBody = {
      message: `Audit Report Enquiry \n\n Website: ${localStorage.getItem(
        "websiteUrl"
      )}\n\nEmail: ${email}\n\nPhone: ${phoneNumber}`,
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      let res = await fetch(
        `https://chat.googleapis.com/v1/spaces/AAAAa5HkN3Y/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qGmAqN93rrL9-9w38ZkV5mq9NOlrvY1ZhwPy_zaJ3T0`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: requestBody.message,
          }),
        }
      );
    } catch (err) {
      console.log(err);
      alert("Message not sent");
    }
  };
  return (
    <>
      <PageMeta
        title="Free Website Audit Report at Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency  A website audit is an examination of page performance before
                    large-scale search engine optimization (SEO) or a website
                    redesign. Auditing your website can determine whether or not
                    it's optimized to achieve your traffic goals and give
                    you a sense of how you can improve it to reach those goals."
      />
      <Head>
        <meta
          name="keywords"
          content="What is a website audit?, Generate Free Audit Report, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
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
        <div className="bg-[#263238] relative  pt-12 lg:pt-16 pb-16 lg:pb-24">
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
                    What is a website audit?{" "}
                  </h1>
                  <div
                    className="subtitle text-lg lg:text-xl mt-6"
                    style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                  >
                    A website audit is an examination of page performance before
                    large-scale search engine optimization (SEO) or a website
                    redesign. Auditing your website can determine whether or not
                    it&apos;s optimized to achieve your traffic goals and give
                    you a sense of how you can improve it to reach those goals.
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
                  <div className="  bg-gray-900  w-full grid rounded">
                    <div className="space-y-10 ">
                      {successMessage ? (
                        <div className="p-3 mt-6 text-green-500 dark:text-green-400">
                          {successMessage}
                        </div>
                      ) : (
                        <form
                          onSubmit={handleGetReport}
                          className="relative rounded-2xl  p-6 dark:border-zinc-700/40"
                        >
                          {/* ... your existing content ... */}
                          <h2 className="flex text-sm font-semibold text-white dark:text-zinc-100">
                            <span className="text-2xl">
                              Generate Free Audit Report
                            </span>
                          </h2>
                          <p className="mt-2 text-sm text-gray-400 dark:text-zinc-400">
                            Please fill the form below to get a free detailed
                            audit of your website
                          </p>
                          {/* Website Input */}

                          {showEmailPhoneFields ? (
                            <div>
                              {/* Email Input */}
                              <div className="mt-6 ">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  aria-label="Email"
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className=" w-[100%] appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                />
                              </div>

                              {/* Phone Input */}
                              <div className="mt-6 flex">
                                <input
                                  type="tel"
                                  placeholder="Phone Number"
                                  aria-label="Phone Number"
                                  required
                                  value={phoneNumber}
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                  className=" w-[100%] appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="mt-6 flex">
                              <input
                                type="text"
                                placeholder="https://"
                                aria-label="Website"
                                required
                                value={websiteUrl}
                                onChange={(e) => setWebsiteUrl(e.target.value)}
                                className=" w-[100%] appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                              />
                            </div>
                          )}

                          <div className="mt-6 flex">
                            <button
                              className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-[#ffa726] font-semibold flex-none text-white"
                              type="submit"
                            >
                              {successMessage
                                ? "Get My Report"
                                : "Get My Report"}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                    <div className="z-20 h-full w-full grid place-items-center">
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

          <div className="mx-auto grid max-w-2xl p-10 grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"></div>
        </div>
        <FeaturedBlogs />
      </Layout>
    </>
  );
};

export default FreeAuditReport;
