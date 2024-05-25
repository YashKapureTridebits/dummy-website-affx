import Head from "next/head";
import React, { useState } from "react";
import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [state, setState] = useState({});

  const { name, firstName, lastName, contact, message, countryName, email } =
    state;
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // var requestBody = {
    // message: `Email: ${email}\nName: ${firstName} ${lastName}\nMob No: ${contact}\nMessage: ${message}\nLocated Country: ${countryName}`,
    var requestBody = {
      message: `Email: ${email}, Name: ${firstName} ${lastName}, Mob No: ${contact}, Message: ${message}`,
    };

    //   };

    console.log("submit handler called", requestBody);
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
      alert(
        "Thank you for your response. We will contact you shortly. Have a nice day!"
      );
      setState({});
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    // <div>Contact page</div>
    <>
      <PageMeta
        title="Affinix Digital - Contact Affinix Digital"
        desc="Affinix Digital | Best Digital Marketing Agency"
      />
      <Head>
        <meta
          name="keywords"
          content="Contact Affinix Digital, Contact Digital Marketing, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation"
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
        <section
          id="meet-hero"
          className="relative mb-20 md:p-6 lg:p-6 pb-0 antialiased selection:bg-[#E22D1B] selection:text-white "
        >
          <div className="bg-gray-950 relative md:rounded-xl py-8 lg:py-16">
            <div
              id="triangle"
              className="h-10 w-10 rotate-45 absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 rounded-sm bg-gray-950"
            ></div>

            <img
              draggable="false"
              src="/img/background-element-swirl.svg"
              alt="Background swirl element"
              aria-hidden="true"
              className="absolute top-0 max-xl:hidden -right-6 select-none"
            />
            <div
              id="meet-hero-container"
              className="max-w-7xl z-5 relative mx-auto bg-white/0 px-6 sm:px-6 lg:px-8"
            >
              <div className="lg:flex gap-8">
                <div
                  id="hero-copy-col"
                  className="flex-1 space-y-6 lg:space-y-8 text-white bg-white/0"
                >
                  <div className="title-wrapper">
                    <h1 className="text-4xl sm:text-5xl !mt-4 leading-tight font-extrabold text-white">
                      Book A Free Consultation
                    </h1>
                    <p
                      id="hero-copy"
                      className="text-base sm:text-lg mt-8 font-normal max-w-xl text-gray-400 mb-0 sm:mb-0 mb:md-5 mb:lg-5"
                    >
                      Fill out the form to apply for a free consultation with
                      our experts, 1-on-1! Looking forward to meeting you!
                    </p>
                  </div>
                  <div className="benefit-list-wrapper max-w-xl ">
                    <ul
                      id="hero-benefits-list"
                      className="benefits-list space-y-2"
                    >
                      <li className="text-base md:text-lg text-gray-400 flex gap-x-2 items-baseline">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-green-400 shrink-0"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Let&apos;s discuss what&apos;s best for your business{" "}
                      </li>
                      <li className="text-base md:text-lg text-gray-400 flex gap-x-2 items-baseline">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-green-400 shrink-0"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        This is where excellence knows no bounds{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="benefit-list-wrapper max-w-xl ">
                    {/* design for contact sales email and phone number */}
                    <ul
                      id="hero-benefits-list"
                      className="benefits-list space-y-2"
                    >
                      <h1 className="text-2xl font-[700]">Contact Sales</h1>
                      <li className="text-base md:text-lg text-gray-400 flex gap-x-2 items-baseline">
                        <a
                          href="mailto:info@affinixdigital.com"
                          className="font-semibold flex"
                        >
                          <CiMail className="text-white p-2 h-12 w-12 bg-[#ffa726] rounded-full " />
                          <span className="text-[#ffa726] mt-3 pl-2">
                            info@affinixdigital.com
                          </span>
                        </a>
                      </li>
                      <li className="text-base md:text-lg pt-4 text-gray-400 flex gap-x-2 items-baseline">
                        <a
                          href="tel:+91 9922589033"
                          className="font-semibold flex"
                        >
                          <FaPhoneAlt className="text-white p-2 h-12 w-12 bg-[#ffa726] rounded-full " />
                          <span className="text-[#ffa726] mt-3 pl-2">
                            +91 9922589033
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1 max-w-2xl mx-auto lg:w-full mt-12 lg:mt-0">
                  <div className="bg-white opacity-[0.98] grid grid-cols-1 rounded p-2 lg:p-6">
                    <div>
                      <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-12 gap-6">
                          <div className="col-span-12 lg:col-span-6 mt-6 -pb-1">
                            <label
                              for="firstName"
                              className="mb-1 sm-text-lg text-sm"
                            >
                              First Name
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="firstName"
                                onChange={handleChange}
                                value={firstName || ""}
                                required
                                placeholder="Enter first name here"
                              />
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-6 mt-6 -pb-1">
                            <label
                              for="lastName"
                              className="mb-1 sm-text-lg text-sm"
                            >
                              Last Name
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="lastName"
                                onChange={handleChange}
                                value={lastName || ""}
                                required
                                placeholder="Enter last name here"
                              />
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-6 -pb-1">
                            <label
                              for="email"
                              className="mb-1 sm-text-lg text-sm"
                            >
                              Email
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="email"
                                onChange={handleChange}
                                value={email || ""}
                                required
                                placeholder="Enter email here"
                              />
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-6  -pb-1">
                            <label
                              for="contact"
                              className="mb-1 sm-text-lg text-sm"
                            >
                              Phone number
                            </label>
                            <div className="relative">
                              <input
                                type="number"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="contact"
                                onChange={handleChange}
                                value={contact || ""}
                                required
                                placeholder="Enter number here"
                              />
                            </div>
                          </div>

                          <div className="col-span-12 mt-6 pb-8">
                            <label
                              for="message"
                              className="mb-1  sm-text-lg text-base"
                            >
                              What would you like to discuss?
                            </label>
                            <div className="relative">
                              <textarea
                                type="text"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                name="message"
                                onChange={handleChange}
                                value={message || ""}
                                required
                                rows="6"
                                placeholder=""
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-span-12  flex justify-center">
                            <button
                              type="submit"
                              className="py-3 px-8 text-white font-semibold bg-[#ffa726] hover:bg-[#ffa726] rounded border !hover:border-gray-300 flex gap-2 items-center"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactUs;
