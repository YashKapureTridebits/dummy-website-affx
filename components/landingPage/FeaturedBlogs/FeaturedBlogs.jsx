import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from "next/link";
import { BASE_URL } from '@/public/config';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from 'next/image';
import HTMLReactParser from 'html-react-parser';


const Posts = ({ posts, loading }) => {
    console.log("post page", posts.data);

    const mediaBaseUrl = posts?.otherParameters?.mediaBaseUrl;


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-3 mb-16">
                {posts?.data?.map((post, index) => (
                    <article key={index} className="h-full">
                        <Link href={`/blog/${post.slug}`}>
                            <div className="inline-block flex flex-col" style={{ textDecoration: 'none !important' }}>
                                <div className="w-full flex flex-col h-full p-3">
                                    <div className="p-6 grow h-full border rounded-lg bg-gray-50 cursor-pointer duration-200 hover:shadow-lg" style={{ border: '1px solid #eee' }}>
                                        <div className="relative h-52 mb-6">
                                            <span className="absolute top-0 right-0 mt-4 z-20 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">{post.category}</span>
                                            <Link href={`/blog/${post.slug}`}>
                                                <div className="relative w-full h-52 overflow-hidden rounded-md">
                                                    <Image
                                                        height={400}
                                                        width={400}
                                                        className="w-full h-full object-contain z-10 relative rounded-md" src={`${mediaBaseUrl}/${post.blogImage}`} alt={post.blogTitle} />

                                                    <Image
                                                        height={200}
                                                        width={200}
                                                        className="w-full h-full absolute top-0 blur object-contain z-0 rounded-md" src={`${mediaBaseUrl}/${post.blogImage}`} alt={post.blogTitle} />
                                                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <span className="inline-block mb-4 text-sm text-gray-500">{post?.blogDate &&
                                        format(
                                            new Date(post?.blogDate),
                                            "MMMM dd, yyyy"
                                        )}
                                    </span> */}
                                        <h2 className="mb-4 text-2xl font-semibold text-zinc-800 font-heading">{post.blogTitle}</h2>
                                        <p className="mb-4 text-gray-500 leading-relaxed font-normal !underline-none" style={{ border: '0px solid red', maxHeight: '5em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {/* <ReactMarkdown
                                                className="mb-4 text-gray-500 leading-relaxed font-normal !underline-none"
                                                style={{
                                                    border: "0px solid red",
                                                    maxHeight: "5em",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}
                                                remarkPlugins={[remarkGfm]}
                                            >
                                                {post.blogDetails.slice(0, 75) + "..."}
                                            </ReactMarkdown> */}
                                            {HTMLReactParser(post.blogDetails.slice(0, 75) + "...")}
                                        </p>
                                        <Link className="text-lg font-medium text-red-500  hover:no-underline" href={`/blog/${post.slug}`}>
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

const FeaturedBlogs = () => {


    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const body = {
                isSnakeCase: true,
                parameter: {
                    draw: 0,
                    start: 0,
                    length: 3,
                    applyFilter: false,
                    applySearch: false,
                    order: [
                        {
                            columnName: "createdDate",
                            dir: "desc"
                        }
                    ]
                },
                search: [
                    {
                        columnName: "blogTitle",
                        value: "",
                        regex: false
                    }
                ],
                filteroptions: [
                    {
                        columnName: "academicYearId",
                        isSnakeCase: true,
                        filterType: "filter_type_string_equals",
                        filterOperator: "AND",
                        filterValue: "9ed9d57b-ff87-4590-8289-8bc5030905c4"
                    }
                ]
            }
            try {
                const res = await axios
                    .post(`${BASE_URL}/WebsiteBlogs/GetDataTable`, body,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "text/plain",
                                "x-api-key": "a990fb30-7621-4cea-926a-b5ad5d6ea5ef"
                            }
                        })
                    .then((res) => {
                        setPosts(res.data);
                    })

                setLoading(false);
            }
            catch (error) {
                console.log("eerror", error);
            }
        }
        fetchPosts();
    }, []);

    const mediaBaseUrl = posts?.otherParameters?.mediaBaseUrl;

    return (
        <>


            <section className="blog-post-section max-md:px-6 relative py-20 pt-4 xl:pb-24 ">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl max-md:mb-8 md:mb-20 mx-auto text-center">
                        <span className="text-md lg:text-lg tracking-wide text-[#ffa726] font-bold tracking-wide">THE AFFINIX DIGITAL BLOG</span>
                        <h2 className="mt-4 md:mt-6 mb-10 text-4xl lg:text-5xl font-bold font-heading">Featured Blogs</h2>
                    </div>
                    <Posts posts={posts} />
                </div>
            </section>
        </>
    );
}

export default FeaturedBlogs;
