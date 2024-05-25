"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { format } from "date-fns";
import axios from "axios";
import Image from "next/image";
import { BASE_URL } from "@/public/config";



const Footer = () => {
    const socialIcons = (icons) => (
        <div className="flex  space-x-4">
            {icons.map((icon, idx) => (
                <Link href={icon.url} target="_blank" key={idx}>
                    {icon.label}
                </Link>
            ))}
        </div>
    );



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
                    .catch((err) => console.log(err));


                setLoading(false);
            }
            catch (error) {
                console.log("eerror", error);
            }
        }
        fetchPosts();
    }, []);
    const blogList = (posts) => {
        const mediaBaseUrl = posts?.otherParameters?.mediaBaseUrl;


        return (
            <div>
                <div className="">
                    <h3 className="text-white text-xl  font-extrabold mb-6">Latest Blogs</h3>
                    {posts?.data?.map((post, index) => {
                        const footerImage = mediaBaseUrl + "/" + post.blogImage;
                        return (

                            <article key={index} className="h-full">
                                <div className="flex flex-col" style={{ textDecoration: 'none !important' }}>
                                    <div className="p-3">
                                        <div className="grow flex w-full rounded-lg bg-black p-4 shadow-xl text-white cursor-pointer duration-200 hover:shadow-lg">
                                            <div className="relative w-20 h-16 overflow-hidden  shadow-lg  rounded-lg">
                                                <Image
                                                    height={200}
                                                    width={200}
                                                    className="shadow-lg w-full h-full z-10 relative rounded-md"
                                                    src={`${footerImage}`} alt={post.blogTitle} />
                                                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                                            </div>
                                            <div className="flex-1 flex items-center justify-center pl-4">
                                                <Link className="text-sm font-semibold text-white w-[150px]" href={`/blog/${post.slug}`}>{post.blogTitle}</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }


    const products = [
        {
            id: 1,
            section: "Services",
            links: [
                {
                    label: "Search Engine Optimization (SEO)",
                    url: "/services/search-engine-optimization",
                },
                {
                    label: "Social Media Management",
                    url: "/services/social-media-management",
                },
                {
                    label: "Pay-Per-Click (PPC) Advertising",
                    url: "/services/pay-per-click-advertising",
                },
                {
                    label: "Website Design and Development",
                    url: "/services/website-design-and-development",
                },
                { label: "Content Marketing", url: "/services/content-marketing" },
                { label: "Free Website Audit Report", url: "/services/free-website-audit-report" },
            ],
        },
        {
            id: 2,
            section: "Our Company",
            links: [
                { label: "About Affinix Digital", url: "/aboutus" },
                { label: "Privacy Policies", url: "/privacy-policy" },
                { label: "Terms & Conditons", url: "/terms-condition" },
                { label: "Talk to sales", url: "/contactus" },
                {
                    label: "",
                    icons: [
                        { label: <FaFacebookSquare className="w-8 h-8 text-white" />, url: "https://www.facebook.com/affinixdigital" },
                        {
                            label: <FaInstagram className="w-8 h-8 text-white" />, url: " https://www.instagram.com/affinixdigitalagency"
                        },
                        { label: <CiLinkedin className="w-8 h-8 text-white" />, url: "https://www.linkedin.com/company/102201647/admin/feed/posts/" },
                        { label: <FaXTwitter className="w-8 h-8 text-white" />, url: "https://twitter.com/affinixdigital" },
                    ],
                },
            ],
        },
    ];
    return (
        <>
            <section className="relative -mt-16 ">
                <div className="xl:container px-4 mx-auto">
                    <div className="bg-gray-100 shadow-md rounded-xl px-3 lg:px-24">
                        <div className="flex flex-wrap items-stretch -px-4">


                            <div className="w-full border-0 border-amber-400 lg:w-3/5 px-4 mb-6 md:mb-0 py-10 lg:py-20 ">
                                <div className="mb-0">
                                    <h3 className="mb-4  text-3xl font-semibold font-heading text-zinc-800">
                                        Talk Strategy With An Expert{" "}
                                    </h3>
                                    <p className="text-xl text-zinc-500">
                                        Find out how SEO can work for you. Get expert advice on the
                                        right strategy for your business!{" "}
                                    </p>

                                    <a target="_blank" href="/contactus" >
                                        <button className="lg:hidden mt-8 whitespace-nowrap w-full ml-auto lg:w-auto py-3 px-6 text-md font-bold border-0 outline-0  ring-0 text-white font-medium leading-normal bg-[#ffa726] hover:bg-[#ffa726] rounded transition duration-200">
                                            Book a call
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full hidden lg:block md:w-1/5 py-10 lg:py-20">
                                <div className="relative ml-auto items-center text-right border-0 border-red-500 h-full flex flex-col justify-center lg:flex-nowrap my-auto">
                                    <Link href="/contactus">
                                        <button className="block md:w-auto text-center justify-center mb-2 py-3 px-8 text-white font-semibold bg-[#ffa726] hover:bg-[#ffa726] rounded border !hover:border-gray-300 flex gap-2 items-center">
                                            Book a call
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full hidden lg:block lg:w-1/5 md:mb-6 md:mb-0 relative">
                                <div className="absolute origin-bottom-left scale-[0.9] lg:scale-[1] bottom-0 -translate-x-12 translate-y-6 lg:translate-x-4 2xl:translate-x-16 w-[18rem] h-72 border-0 border-green-500">
                                    <img
                                        src="/img/affinix-cta-test-removebg-preview.png"
                                        alt="SEO Expert at The Affinix Digital Agency, Best Digital Marketing Agency in India, Best Digital Marketing Agency in Maharashtra"
                                        className="absolute pointer-events-none xl:-left-16 md:-left-24 bottom-0 w-[auto] h-[350px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-[#263238] -mt-40">
                <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-5xl lg:px-8">
                    <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-8  xl:grid-cols-9">

                        {products.map((product) => (
                            <div key={product.id} className="group relative col-span-3 flex flex-col">
                                <p className="text-white text-xl font-extrabold mb-9">
                                    {product.section}
                                </p>
                                <ul>
                                    {product.links.map((link, index) => (
                                        <li key={index} className="mb-5">
                                            {Array.isArray(link.icons) ? (
                                                <div key={index}>
                                                    <p className="text-white text-lg font-normal mb-6">{link.label}</p>
                                                    <div className="flex">
                                                        {socialIcons(link.icons)}
                                                        {/* <Link className="pl-3" href="mailto:info@affinixdigital.com" target="_blank">
                                                            <CiMail className="w-8 h-8 text-white" />
                                                        </Link> */}
                                                    </div>
                                                </div>
                                            ) : (
                                                link.url ? (
                                                    <Link href={link.url} className="text-white text-lg font-normal mb-6">
                                                        {link.label}

                                                    </Link>
                                                ) : (
                                                    <span className="text-white text-lg font-normal mb-6">
                                                        <blogList />
                                                    </span>
                                                )
                                            )}
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))}
                        <div className="flex">

                            {blogList(posts)}
                        </div>

                    </div>
                </div>

                <div className="mx-auto  lg:max-w-7xl">
                    <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                        <div className="mt-4  gap-y-10 gap-x-16  xl:gap-x-8">
                            <div>
                                <h3 className="text-center md:text-start text-offwhite text-md">
                                    Copyright © 2024 - All Rights Reserved by{" "}
                                    <Link href="https://octaneapps.com/" target="_blank">
                                        Tridebits Technologies Pvt. Ltd.
                                    </Link>
                                </h3>
                            </div>
                            {/* <div className="flex justify-center md:justify-end">
                                <Link href="/privacy-policy">
                                    <h3 className="text-offwhite pr-6">Privacy policy</h3>
                                </Link>
                                <Link href="/terms-condition">
                                    <h3 className="text-offwhite pl-6 pr-6 border-solid border-l border-footer">
                                        Terms & Conditions
                                    </h3>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
        // </footer>
    );
};

export default Footer;
