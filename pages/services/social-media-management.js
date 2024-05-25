import React from "react";

import { FaDatabase } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { PiStrategy } from "react-icons/pi";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import Link from "next/link";

import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";
import { FeaturedBlogs } from "@/components";
import Image from "next/image";

const SocialMediaManagement = () => {
  const features = [
    {
      name: "Strategic Approach",

      icon: <PiStrategy className="w-8 h-8 text-white" />,
      description:
        "Our team develops customized strategies based on your business goals and target audience, ensuring a tailored approach that resonates with your audience.",
    },
    {
      name: "Creative Excellence",

      icon: <GiTeamIdea className="w-8 h-8 text-white" />,
      description:
        "From visually striking graphics to engaging copy, we infuse creativity into every aspect of your social media presence.",
    },
    {
      name: "Transparent Reporting",

      icon: <MdOutlineDashboard className="w-8 h-8 text-white" />,
      description:
        "Stay informed with detailed analytics and reports that provide insights into the performance of your social media campaigns.",
    },
  ];
  return (
    <>
      <PageMeta
        title="Affinix Digital - Social Media Management at Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency  Affinix Digital takes your social media presence to new
                      heights. In the age of digital connections, social media
                      is your powerhouse for brand visibility, engagement, and
                      growth. Our Social Media Management services are crafted
                      to amplify your online impact and build meaningful
                      connections with your audience."
      />
      <Head>
        <meta
          name="keywords"
          content="Why Social Media Management Matters?, Social Media Management,   Social Media Management that Ignites Engagement and Boosts, Your Brand Celebrity Social Media Management, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="/img/Social-Media-Management-service.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="/img/Social-Media-Management-service.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="twitter:image"
          content="/img/Social-Media-Management-service.jpg"
        />
        <meta
          name="twitter:image:src"
          content="/img/Social-Media-Management-service.jpg"
        />
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
                      Social Media Management that Ignites Engagement and Boosts
                      Your Brand
                    </h1>
                    <div
                      className="subtitle text-lg lg:text-xl mt-6"
                      style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                    >
                      Affinix Digital takes your social media presence to new
                      heights. In the age of digital connections, social media
                      is your powerhouse for brand visibility, engagement, and
                      growth. Our Social Media Management services are crafted
                      to amplify your online impact and build meaningful
                      connections with your audience.
                    </div>
                  </div>

                  <div className="benefit-list-wrapper">
                    <div className="cta-button-wrapper flex max-sm:flex-col max-sm:gap-y-3 gap-x-4 mt-8">
                      <a
                        href=""
                        className="cta-button px-6 py-2.5 hover:shadow-xl hover:text-white group rounded-sm justify-center duration-500 font-semibold bg-[#ffa726] text-base inline-flex gap-x-2 items-center"
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
                        className=" object-cover  w-full cursor-pointer  select-none duration-500"
                        src="/img/Social-Media-Management-service.jpg"
                        alt="Affinix Digital Social Media Management Service"
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
          <div className="">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
              <div className="py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Why Social Media Management Matters?
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600">
                    In a world where online presence is paramount, SEO is the
                    key to unlocking the full potential of your digital
                    strategy. Here&apos;s why:
                  </p>
                </div>
                <div className="flex flex-col justify-around items-center sm:flex-row">
                  <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                      <div className="text-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                          <FaEye className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg "> Brand Visibility</span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          Be where your audience is. Our social media experts
                          strategically position your brand across platforms,
                          ensuring maximum visibility and recall among your
                          target audience.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                      <div className="text-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                          <GrAnnounce className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg ">
                            Engaging Content Creation
                          </span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          Content is king, especially on social media. We create
                          compelling and shareable content that resonates with
                          your audience, sparking conversations and establishing
                          your brand as an industry authority.
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
                          <MdPeople className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg ">Community Building</span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          Foster a loyal community around your brand. We engage
                          with your audience, respond to comments, and actively
                          participate in relevant conversations to build a
                          strong and interactive online community.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                      <div className="text-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                          <FaDatabase className="w-8 h-8 text-white" />
                        </div>
                        <div className="items-center font-bold text-sm pt-3 mt-2">
                          <span className="text-lg ">
                            Data-Driven Strategies
                          </span>
                        </div>
                        <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                          Our approach is rooted in data. We analyze social
                          media insights to refine our strategies continually,
                          ensuring your campaigns are always optimized for the
                          best results.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f6f6] pt-16 pb-16">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
              <div className="">
                <div className="text-center">
                  <h2 className="text-gray-800 max-lg:text-center max-lg:mx-auto text-4xl sm:text-4xl md:text-5xl leading-[1.2em] mt-8 font-extrabold">
                    Our Social Media Management
                    <i> Services</i>.
                  </h2>
                  <p className="max-lg:mt-8 font-normal max-lg:mx-auto max-lg:text-center max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4">
                    When you join AFFINIX DIGITAL, you’ll get a dedicated
                    campaign manager – an experienced SEO veteran.
                  </p>
                </div>
                <div className="grid max-w-xl grid-cols-1  mt-16  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                  <div
                    className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8  rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      Platform Strategy
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      We tailor our approach to match the dynamics of each
                      platform, whether it&apos;s Instagram, Facebook, Twitter,
                      LinkedIn, or others. Each platform is a unique opportunity
                      to connect with your audience in a meaningful way.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      Content Calendar and Scheduling{" "}
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      Stay consistent with a well-planned content calendar. We
                      schedule posts at optimal times to maximize reach and
                      engagement, keeping your audience eagerly anticipating
                      your next update.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      Social Media Advertising{" "}
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      Boost your reach and drive targeted traffic with our
                      social media advertising expertise. From ad creation to
                      audience targeting, we ensure your budget is optimized for
                      the best results.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">
                      {" "}
                      Influencer Collaborations
                    </h3>
                    <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                      Leverage the power of influencers in your industry. We
                      identify and collaborate with influencers who align with
                      your brand, expanding your reach and building trust with a
                      wider audience.
                    </p>
                  </div>
                  <div
                    className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg"
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
                  Why Choose Affinix Digital for Social Media Management?
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

export default SocialMediaManagement;
