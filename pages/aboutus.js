import Image from "next/image";
import React from "react";
import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <PageMeta
        title="Affinix Digital - About Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency"
      />
      <Head>
        <meta
          name="keywords"
          content="Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
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
        <div className="bg-[#263238] relative pt-20 lg:pt-24 pb-16 lg:pb-24">
          <div
            id="triangle"
            className="h-10 w-10 z-[10] rotate-45 absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 rounded-sm bg-[#263238]"
          ></div>
          <img
            className="max-2xl:hidden 2xl:absolute top-20 left-0 mt-32"
            src="/img/blue-dot-left-bars.svg"
            alt="Blue background flourish left top"
          />
          <img
            className="max-2xl:hidden 2xl:absolute top-80 right-0 mt-20"
            src="/img/yellow-dot-right.svg"
            alt="Right background flourish left top"
          />

          <div
            id="product-hero-container"
            className="hero-content max-w-7xl z-5 relative mx-auto bg-white/0 px-6 sm:px-6 lg:px-8"
          >
            <div className="min-[900px]:flex items-center gap-x-2">
              <div className="flex-1 min-[900px]:max-w-2xl mx-auto lg:w-full  min-[900px]:mt-0">
                <div className="relative h-full w-full">
                  <div className="absolute z-1 lg:-right-64 top-16 hidden lg:block">
                    <img
                      src="https://octaneapps.com/assets/img/shape/dot-big-square.svg"
                      alt="shape"
                    />
                  </div>
                  <Image
                    height={600}
                    width={600}
                    draggable="false"
                    className="w-full h-full object-cover select-none duration-500"
                    decoding="async"
                    src="/logo/Affinix Digital Yellow White Logo.png"
                    alt="The Best SEO Company - Affinix Digital"
                  />
                  <h1
                    style={{ textAlign: "center" }}
                    className="text-2xl font-semibold text-white"
                  >
                    Best Digital Marketing Agency
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-10 mb-12 overflow-hidden pt-12 pb-16">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14">
              <div className="lg:max-w-[570px] w-full rounded-lg mb-4">
                <Image
                  height={600}
                  width={600}
                  src="https://octaneapps.com/assets/img/about-img-2.jpg"
                  alt="about"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="lg:max-w-[490px] p-6 text-justify w-full">
                <span className="inline-flex text-[#ffa726] font-bold text-xl mb-2.5">
                  Our Story
                </span>
                <h1 className="font-bold text-3xl  text-black mb-5">
                  We help businesses grow with SEO, Link Building & Content
                  Marketing
                </h1>
                <p className="text-lg mt-4">
                  Established with a vision to redefine digital marketing,
                  Affinix Digital has grown from a concept into a thriving
                  agency known for its innovation, expertise, and unwavering
                  dedication to client success. Our journey is a testament to
                  the power of collaboration, creativity, and strategic
                  thinking.
                </p>
              </div>
            </div>

            <div
              className="mt-12 flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14"
              style={{
                background:
                  'url("https://octaneapps.com/assets/img/shape/dot-dot-wave-shape.svg") left top no-repeat',
              }}
            >
              <div className="lg:max-w-[490px] p-6 text-justify w-full">
                <span className="inline-flex text-[#ffa726] font-bold text-xl mb-2.5">
                  What Sets Us Apart
                </span>

                <h2 className="text-xl font-semibold">
                  Client-Centric Approach
                </h2>
                <p className="text-lg mt-4">
                  At Affinix, our clients are at the heart of everything we do.
                  We believe in forging strong partnerships, understanding your
                  unique goals, and tailoring our strategies to ensure your
                  success in the digital realm.
                </p>
                <br />
                <h2 className="text-xl font-semibold">
                  Innovation in Every Campaign
                </h2>
                <p className="text-lg mt-4">
                  Digital marketing is not just a service; it&apos;s a
                  constantly evolving landscape. Our team of creative minds
                  thrives on innovation, staying ahead of trends to deliver
                  campaigns that stand out and make a lasting impact
                </p>
                <br />
                <h2 className="text-xl font-semibold">
                  Global Vision, Local Expertise
                </h2>
                <p className="text-lg mt-4">
                  Based in India, we bring a global vision to our strategies
                  while understanding the intricacies of the local market. Our
                  localized approach ensures that your brand resonates with the
                  diverse audience in this dynamic region.
                </p>
                <br />
                <h2 className="text-xl font-semibold">
                  Transparency and Accountability
                </h2>
                <p className="text-lg mt-4 mb-6">
                  We believe in transparent communication and accountability.
                  From detailed reporting to collaborative discussions, we keep
                  you informed every step of the way, ensuring that your digital
                  marketing efforts are aligned with your business objectives.
                </p>
              </div>
              <div className="lg:max-w-[570px] w-full rounded-lg mb-4">
                <Image
                  height={600}
                  width={600}
                  src="https://octaneapps.com/assets/img/about-img-3.jpg"
                  alt="about"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>

            <div
              className="mt-12 flex flex-col lg:flex-row items-center gap-7.5 xl:gap-14"
              style={{
                background:
                  'url("https://octaneapps.com/assets/img/shape/dot-dot-wave-shape.svg") left top no-repeat',
              }}
            >
              <div className="lg:max-w-[570px] w-full rounded-lg mb-4">
                <Image
                  height={600}
                  width={600}
                  src="https://octaneapps.com/assets/img/about-img-1.jpg"
                  alt="about"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="lg:max-w-[490px] p-6 text-justify w-full">
                <span className="inline-flex text-[#ffa726] font-bold text-xl mb-2.5">
                  Join Us on the Digital Journey
                </span>

                <p className="text-lg">
                  Whether you&apos;re a startup looking to establish a digital
                  presence or an established business aiming to enhance your
                  online strategies, Affinix Digital is here to be your guide.
                  Let&apos;s embark on a digital journey together, where
                  innovation, strategy, and success converge.
                </p>
                <p className="text-lg mt-4">
                  Contact Affinix Digital today, and let&apos;s transform your
                  digital aspirations into a reality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default AboutUs;
