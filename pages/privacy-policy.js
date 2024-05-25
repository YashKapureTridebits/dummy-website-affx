import Image from "next/image";
import React from "react";
import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";

const PriacyPolicy = () => {
  return (
    <>
      <PageMeta
        title="Affinix Digital - Privacy Policy Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency"
      />
      <Head>
        <meta
          name="keywords"
          content="Privacy Policy, Affinix Digital PRovacy Policy, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
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
        <div id="content" className="clearfix">
          <ul id="full-width" className="clearfix">
            <li
              id="post-1449"
              className="post post-1449 page type-page status-publish hentry"
            >
              <div className="post-content clearfix">
                <div className="post-title-block leading-10">
                  <h1
                    style={{ textAlign: "left" }}
                    className="text-4xl mt-4 font-semibold"
                  >
                    Our Privacy Policy
                  </h1>
                </div>
              </div>
            </li>
          </ul>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="post-content clearfix">
                  <div className="post-title-block leading-10">
                    <p className="text-lg mt-4">
                      We collect the email addresses of those who communicate
                      with us via email, aggregate information on what pages
                      consumers access or visit, and information volunteered by
                      the consumer (such as survey information and/or site
                      registrations). The information we collect is used to
                      improve the content on the Affinix Digital website and the
                      quality of our service, and is not shared with or sold to
                      other organizations for commercial purposes, except to
                      provide products or services you&apos;ve requested, when
                      we have your permission, or under the following
                      circumstances:
                    </p>
                    <p className="text-lg mt-4">
                      We may transfer information about you if Affinix Digital
                      is acquired by or merged with another company. In this
                      event, Affinix Digital will notify you before information
                      about you is transferred and becomes subject to a
                      different privacy policy.
                    </p>
                  </div>
                  {/* <hr className="obox-divider" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-6">
            <div className="row">
              <div className="col-md-12">
                <div className="post-content clearfix">
                  <div className="post-title-block leading-10">
                    <h2 className="text-2xl font-semibold">
                      Information Gathering and Usage
                    </h2>
                    <br />
                    <p className="text-lg mt-4">
                      When you register for Affinix Digital we ask for
                      information such as your name, company name, email
                      address, billing address and credit card information.
                      Members who sign up for the free account are not required
                      to enter a credit card.
                    </p>
                    <p className="text-lg mt-4">
                      Affinix Digital uses collected information for the
                      following general purposes: products and services
                      provision, billing, identification and authentication,
                      services improvement, contact and research.
                    </p>
                    <br />
                    <h2 className="text-xl font-semibold">Data Storage</h2>
                    <p className="text-lg mt-4">
                      Affinix Digital uses third party vendors and hosting
                      partners to provide the necessary hardware, software,
                      networking, storage, and related technology required to
                      run Affinix Digital. Although Affinix Digital owns the
                      code, databases, and all rights to the Affinix Digital
                      application, you retain all rights to your data.
                    </p>
                    <br />
                    <h2 className="text-xl font-semibold">Disclosure</h2>
                    <p className="text-lg mt-4">
                      Affinix Digital may disclose personally identifiable
                      information under special circumstances, such as to comply
                      with subpoenas or when your actions violate the Terms of
                      Service.
                    </p>
                    <br />
                    <h2 className="text-xl font-semibold">Changes</h2>
                    <p className="text-lg mt-4">
                      Affinix Digital may periodically update this policy. We
                      will notify you about significant changes in the way we
                      treat personal information by sending a notice to the
                      primary email address specified in your Affinix Digital
                      primary account holder account or by placing a prominent
                      notice on our site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PriacyPolicy;
