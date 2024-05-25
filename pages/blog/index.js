import { Pagination } from "@/components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";
import { Loader } from "@/components/loader";

import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import Head from "next/head";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BASE_URL } from "@/public/config";
import HTMLReactParser from "html-react-parser";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  // const sanitizeHTML = (htmlString) => {
  //   const doc = new DOMParser().parseFromString(htmlString, "text/html");
  //   return doc.body.textContent || "";
  // };

  function trimText(text) {
    if (text) {
      let temp = text;
      if (text.length > 150) {
        return temp.substring(0, 150) + "...";
      }
    }
    return text;
  }

  function getText(text) {
    var htmlString = text;
    var plainString = htmlString?.replace(/<[^>]+>/g, "");
    return plainString;
  }

  const mediaBaseUrl = posts?.otherParameters?.mediaBaseUrl;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-3 mb-16">
        {posts?.data?.map((post, index) => (
          <article key={index} className="h-full">
            {/*  */}
            <div
              className="inline-block flex flex-col"
              style={{ textDecoration: "none !important" }}
            >
              <div className="w-full flex flex-col h-full p-3">
                <div
                  className="p-2 grow h-full border rounded-lg bg-gray-50 cursor-pointer duration-200 hover:shadow-lg"
                  style={{ border: "1px solid #eee" }}
                >
                  <div className="relative h-52 mb-6">
                    <span className="absolute top-0 right-0 mt-4 z-20 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">
                      {post.category}
                    </span>
                    <div className="relative w-full h-52 overflow-hidden rounded-md">
                      <Link href={`blog/${post.slug}`}>
                        <img
                          height={500}
                          width={500}
                          optimized={true}
                          className="w-full h-full object-contain z-10 relative rounded-md"
                          src={`${mediaBaseUrl}/${post.blogImage}`}
                          alt={post.blogTitle}
                        />
                        <img
                          height={500}
                          width={500}
                          optimized={true}
                          className="w-full h-full absolute top-0 blur object-cover z-0 rounded-md"
                          src={`${mediaBaseUrl}/${post.blogImage}`}
                          alt={post.blogTitle}
                        />
                      </Link>
                    </div>
                  </div>

                  <h2 className="mb-4 text-2xl font-semibold text-zinc-800 font-heading">
                    <Link href={`blog/${post.slug}`}> {post.blogTitle}</Link>
                  </h2>
                  {/* 
                    <ReactMarkdown
                      className="mb-4 text-gray-500 prose leading-relaxed font-normal !underline-none"
                      style={{
                        border: "0px solid red",
                        maxHeight: "5em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      remarkPlugins={[remarkGfm]}
                    ></ReactMarkdown> */}
                  <div className="mb-4 text-gray-500  leading-relaxed font-normal !underline-none">
                    {HTMLReactParser(post.blogDetails.slice(0, 75) + "...")}
                  </div>

                  <Link
                    className="text-lg font-medium text-red-500  hover:no-underline"
                    href={`blog/${post.slug}`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </article>
        ))}
      </div>
    </div>
  );
};

const Blogs = ({ data }) => {
  function getText(text) {
    var htmlString = text;
    var plainString = htmlString?.replace(/<[^>]+>/g, "");
    return plainString;
  }
  const blogTitle = data?.data.map((post) => post.blogTitle);
  const blogTitleString = blogTitle.toString();

  const blogDetail = data?.data.map((post) => post.blogDetails);
  const blogDetailsString = getText(blogDetail.toString());
  console.log(blogDetailsString);
  return (
    <>
      <PageMeta
        title="Affinix Digital - Best Blogs Affinix Digital"
        desc={`Affinix Digital | Best Digital Marketing Agency ${blogDetailsString}`}
      />
      <Head>
        <meta
          name="keywords"
          content={`THE AFFINIX DIGITAL BLOG, Featured Blog Articles, What is a website audit?, Generate Free Audit Report, Why Affinix Digital?, Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation, ${blogTitleString}`}
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
        <div className="bg-[#263238] relative pt-20 lg:pt-24 pb-6 lg:pb-7">
          <div
            id="triangle"
            className="h-10 w-10 z-[1] rotate-45 absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 rounded-sm bg-[#263238]"
          ></div>
          {/* <Image
            height={100}
            width={100}
            className="max-2xl:hidden 2xl:absolute top-20 left-0 mt-32"
            src="/img/blue-dot-left-bars.svg"
            alt="Blue background flourish left top"
          />
          <Image
            height={100}
            width={100}
            className="max-2xl:hidden 2xl:absolute top-80 right-0 mt-20"
            src="/img/yellow-dot-right.svg"
            alt="Right background flourish left top"
          /> */}

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

                  <h1
                    style={{ textAlign: "center" }}
                    className="mt-4 md:mt-6 mb-10 text-4xl lg:text-5xl font-bold font-heading tracking-widw text-[#ffa726]  "
                  >
                    THE AFFINIX DIGITAL BLOG
                  </h1>
                  <h1
                    style={{ textAlign: "center" }}
                    className="text-2xl font-semibold text-white"
                  >
                    Featured Blog Articles
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <section className="mt-10 blog-post-section max-md:px-6 relative py-2 -mb-12 pt-4  ">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <Posts posts={data} />
              {/* <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          /> */}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const body = {
    isSnakeCase: true,
    parameter: {
      draw: 0,
      start: 0,
      length: 20,
      applyFilter: false,
      applySearch: false,
      order: [
        {
          columnName: "createdDate",
          dir: "desc",
        },
      ],
    },
    search: [
      {
        columnName: "blogTitle",
        value: "",
        regex: false,
      },
    ],
    filteroptions: [
      {
        columnName: "academicYearId",
        isSnakeCase: true,
        filterType: "filter_type_string_equals",
        filterOperator: "AND",
        filterValue: "9ed9d57b-ff87-4590-8289-8bc5030905c4",
      },
    ],
  };
  const fetchData = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/WebsiteBlogs/GetDataTable`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "text/plain",
            "x-api-key": "a990fb30-7621-4cea-926a-b5ad5d6ea5ef",
          },
        }
      );

      return {
        props: {
          data: res.data,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const res = await fetchData();
  return res;
}

export default Blogs;
