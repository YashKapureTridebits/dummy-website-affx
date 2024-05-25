import React from "react";
import SectionOne from "@/components/services/sectionOne";
import SectionTwo from "@/components/services/sectionTwo";
import SectionThree from "@/components/services/sectionThree";
import ServicesComponent from "@/components/services/servicesComponent";
import SectionFour from "@/components/services/sectionFour";
import { PiStrategy } from "react-icons/pi";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";

import { FaBookReader } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineHandshake } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";
import { FeaturedBlogs } from "@/components";

const ContentMarketing = () => {
  const features = [
    {
      name: "Strategic Creativity",
      icon: <PiStrategy className="w-8 h-8 text-white" />,
      description: `Our content is not just creative; it's strategically crafted to achieve your business goals.`,
    },
    {
      name: "Customized Solutions",
      icon: <GiTeamIdea className="w-8 h-8 text-white" />,
      description:
        "very brand is unique, and so is our approach. We tailor our content marketing strategies to fit your brand identity and resonate with your audience.",
    },
    {
      name: "Transparent Collaboration",
      icon: <MdOutlineDashboard className="w-8 h-8 text-white" />,
      description: `We believe in collaboration. Your insights and feedback are valued throughout the content creation process.`,
    },
  ];
  return (
    <>
      <PageMeta
        title="Affinix Digital - Content Marketing with Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency | Content Marketing | Elevate your brand with our strategic content solutions. In the dynamic digital landscape, content is more than just words; it's the driving force that connects, engages, and converts. Our Content Marketing services are designed to elevate your brand story, captivate your audience, and establish your presence as a thought leader in your industry."
      />
      <Head>
        <meta
          name="keywords"
          content="Why Choose Affinix Digital for Content Marketing?, Content Marketing, Our Content Marketing Services, Why Invest in Content Marketing?, Best Content Marketing, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="/img/content-marketing-service.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="/img/content-marketing-service.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="twitter:image"
          content="/img/content-marketing-service.jpg"
        />
        <meta
          name="twitter:image:src"
          content="/img/content-marketing-service.jpg"
        />
      </Head>
      <Layout>
        <div>
          <ServicesComponent
            h1="Elevate your brand with our strategic content solutions"
            details="In the dynamic digital landscape, content is more than just words; it's the driving force that connects, engages, and converts. Our Content Marketing services are designed to elevate your brand story, captivate your audience, and establish your presence as a thought leader in your industry."
            image={"/img/content-marketing-service.jpg"}
            imgAlt={"Elevate your brand with our strategic content solutions"}
          />
          <SectionOne
            h2="Why Invest in Content Marketing?"
            p=" "
            firstTitle="Storytelling that Resonates"
            icon1={<FaBookReader className="w-8 h-8 text-white" />}
            firstContent="Every brand has a unique story, and we're here to tell yours. Our content strategists craft narratives that resonate with your audience, creating an emotional connection that goes beyond transactions."
            secondTitle="SEO-Optimized Content"
            icon2={<FaSackDollar className="w-8 h-8 text-white" />}
            secondContent="Elevate your search engine rankings with content that speaks the language of algorithms. We integrate SEO best practices seamlessly into our content, ensuring your brand stays visible to those actively seeking your products or services."
            thirdTitle="Thought Leadership and Authority"
            icon3={<MdOutlineHandshake className="w-8 h-8 text-white" />}
            thirdContent="Position your brand as an industry leader. Through well-researched and expertly crafted content, we showcase your expertise, building trust and credibility among your audience."
            fourthTitle="Multi-Channel Reach"
            icon4={<CiGlobe className="w-8 h-8 text-white" />}
            fourthContent="From blog posts to videos, infographics to social media snippets, we create content that resonates across diverse channels. Our multi-channel approach ensures your message reaches your audience wherever they are."
          />
          <SectionTwo
            h2="Our Content Marketing Services"
            p=" "
            firstTitle="Content Strategy"
            firstContent="We start with a comprehensive content strategy that aligns with your business goals. Whether you aim to increase brand awareness, drive website traffic, or boost conversions, our strategies are tailored to your objectives."
            secondTitle="Content Creation"
            secondContent="Engage your audience with captivating content. Our team of skilled writers, designers, and creators develop content that not only captures attention but also compels action."
            thirdTitle="Content Distribution"
            thirdContent="Amplify your reach through strategic content distribution. From social media platforms to email newsletters, we ensure your content reaches the right audience at the right time."
            fourthTitle="Performance Analysis"
            fourthContent="Data is at the core of our approach. We analyze the performance of your content, providing insights that inform future strategies and ensure continuous improvement."
          />

          <SectionFour
            title="Why Choose Affinix Digital for Content Marketing?"
            features={features}
          />

          <SectionThree
            title="Ready to tell your brand's story in a way that captivates and converts?"
            details="Contact Affinix Digital today, and let's embark on a content marketing journey that takes your brand to new heights."
            dark={true}
          />
        </div>
        <FeaturedBlogs />
      </Layout>
    </>
  );
};

export default ContentMarketing;
