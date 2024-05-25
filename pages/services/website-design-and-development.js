import React from "react";
import SectionOne from "@/components/services/sectionOne";
import SectionTwo from "@/components/services/sectionTwo";
import SectionThree from "@/components/services/sectionThree";
import ServicesComponent from "@/components/services/servicesComponent";
import SectionFour from "@/components/services/sectionFour";
import { PiStrategy } from "react-icons/pi";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";

import { AiOutlineSolution } from "react-icons/ai";
import { CiMobile1 } from "react-icons/ci";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { GrUserExpert } from "react-icons/gr";
import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";
import { FeaturedBlogs } from "@/components";

const WebsiteDesign = () => {
  const features = [
    {
      name: "Proven Expertise",
      icon: <PiStrategy className="w-8 h-8 text-white" />,
      description:
        "With a portfolio of successful projects, we have the experience to bring your vision to life.",
    },
    {
      name: "Collaborative Process",
      icon: <GiTeamIdea className="w-8 h-8 text-white" />,
      description:
        "We believe in collaboration. Your input is valued at every stage, ensuring the final product aligns perfectly with your goals.",
    },
    {
      name: "Post-Launch Support",
      icon: <MdOutlineDashboard className="w-8 h-8 text-white" />,
      description: `Our commitment doesn't end with the launch.We provide ongoing support and maintenance to keep your website performing at its best.`,
    },
  ];
  return (
    <>
      <PageMeta
        title="Affinix Digital - Website Design and Development at Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency"
      />
      <Head>
        <meta
          name="keywords"
          content="Best Website Design and Development Services in world, Why Choose Affinix Digital for Your Website Design and Development Needs?, Approach to Website Design and Development, What is a website audit?,Elevate Your Online Presence with Exceptional Website Design and Development,  Generate Free Audit Report, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="/img/Website-Design-and-Development-service.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="/img/Website-Design-and-Development-service.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="twitter:image"
          content="/img/Website-Design-and-Development-service.jpg"
        />
        <meta
          name="twitter:image:src"
          content="/img/Website-Design-and-Development-service.jpg"
        />
      </Head>
      <Layout>
        <div>
          <ServicesComponent
            h1="Elevate Your Online Presence with Exceptional Website Design and Development"
            details="we transform your digital vision into a captivating online reality. As a leading force in website design and development, we combine creativity, functionality, and user experience to craft websites that leave a lasting impression."
            image={"/img/Website-Design-and-Development-service.jpg"}
            imgAlt={
              "Elevate Your Online Presence with Exceptional Website Design and Development"
            }
          />
          <SectionOne
            h2="Our Approach to Website Design and Development"
            p=" "
            firstTitle="Custom Solutions for Every Business"
            icon1={<AiOutlineSolution className="w-8 h-8 text-white" />}
            firstContent="Your business is unique, and your website should reflect that. Our team of skilled designers and developers creates custom solutions tailored to your brand identity, ensuring your online presence stands out from the crowd."
            secondTitle="User-Centric Design"
            icon2={<GrUserExpert className="w-8 h-8 text-white" />}
            secondContent="We prioritize user experience in every design decision. From intuitive navigation to engaging visuals, we create websites that not only look stunning but also provide a seamless and enjoyable user journey."
            thirdTitle="Mobile Responsiveness"
            icon3={<CiMobile1 className="w-8 h-8 text-white" />}
            thirdContent="In an era where mobile browsing is ubiquitous, we ensure your website looks and functions flawlessly on all devices. Our responsive designs guarantee a consistent and optimized experience, regardless of screen size."
            fourthTitle="SEO-Optimized Architecture"
            icon4={
              <SiGooglecontaineroptimizedos className="w-8 h-8 text-white" />
            }
            fourthContent="Your website's visibility matters. Our developers integrate SEO best practices into the architecture, ensuring your site is easily discoverable by search engines and maximizing your chances of reaching the right audience."
          />
          <SectionTwo
            h2="Comprehensive Website Services"
            p=" "
            firstTitle="Website Design"
            firstContent="Our creative team crafts visually stunning designs that align with your brand identity, conveying professionalism and capturing the essence of your business."
            secondTitle="Website Development"
            secondContent="From front-end to back-end, our developers bring designs to life with clean and efficient code, ensuring your website is not only beautiful but also functional and scalable."
            thirdTitle="E-Commerce Solutions"
            thirdContent="Open new avenues for your business with our e-commerce solutions. We create seamless online shopping experiences that drive conversions and enhance customer satisfaction."
            fourthTitle="Content Management Systems (CMS)"
            fourthContent="Take control of your website's content with our user-friendly CMS solutions. Update and manage your content effortlessly, keeping your site fresh and relevant."
          />

          <SectionFour
            title="Why Choose Affinix Digital for Your Website Design and Development Needs?"
            features={features}
          />

          <SectionThree
            title="Ready to elevate your online presence?"
            details="Contact Affinix Digital today, and let's embark on a journey to create a website that not only impresses but also delivers tangible results."
            dark={true}
          />
        </div>
        <FeaturedBlogs />
      </Layout>
    </>
  );
};

export default WebsiteDesign;
