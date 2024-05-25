import { useState, useEffect } from "react";
import axios from "axios";
import FeatureOne from "@/components/blogDetailsPage/featureOne";
import FeatureTwo from "@/components/blogDetailsPage/featureTwo";
import Head from "next/head";
import Layout from "@/layout/Layout";
import PageMeta from "@/components/SEO/PageMeta";
import { useRouter } from "next/router";
import { BASE_URL } from "@/public/config";

const BlogPost = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const slug = router.query.slug;
        const res = await axios.get(
          `${BASE_URL}/WebsiteBlogs/GetById/${slug}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "text/plain",
              "x-api-key": "a990fb30-7621-4cea-926a-b5ad5d6ea5ef",
            },
          }
        );
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
        // Handle error appropriately, e.g., set state to indicate error
      }
    };

    fetchPost();
  }, [router.query]);

  if (!post) {
    return <div>Loading...</div>;
  }
  const mediaBaseUrl = post?.mediaBaseUrl;
  function getText(text) {
    var htmlString = text;
    var plainString = htmlString?.replace(/<[^>]+>/g, "");
    return plainString;
  }
  const metaBlogDetails = getText(post.blogDetails);
  const metaBlogDes = getText(post.description);
  return (
    <>
      <PageMeta
        title={`Affinix Digital - ${post.blogTitle}`}
        desc={metaBlogDetails + " " + metaBlogDes}
      />
      <Head>
        <meta
          name="keywords"
          content={`Who are Affinix Digital?, SEO Link Building & Content Marketing,SEO, Link Building,Content Marketing ,About Affinix Digital, Best Digital Marketing Agency, best digital marketing company, Digital Marketing, SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Web Development, Web Design, Graphic Design, Branding, Marketing Automation, Marketing Strategy, Marketing Consultation, ${post.metaKeywords}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content={`${mediaBaseUrl}${post.blogImage}`}
        />
        <meta
          property="og:image:secure_url"
          content={`${mediaBaseUrl}${post.blogImage}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          name="twitter:image"
          content={`${mediaBaseUrl}${post.blogImage}`}
        />
        <meta
          name="twitter:image:src"
          content={`${mediaBaseUrl}${post.blogImage}`}
        />
      </Head>
      <Layout>
        <div>
          {/* <h1>{post.blogTitle}</h1> */}
          <FeatureOne
            title={post.blogTitle}
            img={`${mediaBaseUrl}${post.blogImage}`}
            desc={post.description}
          />
          <FeatureTwo
            img={`${mediaBaseUrl}${post.blogImage}`}
            details={post.blogDetails}
            desc={post.description}
          />
          {/* <p>{post.blogDetails}</p> */}
          {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.blogDetails}
            </ReactMarkdown> */}
        </div>
      </Layout>
    </>
  );
};
export default BlogPost;
