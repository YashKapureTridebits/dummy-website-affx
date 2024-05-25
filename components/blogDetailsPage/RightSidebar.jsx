"use client"
import { BASE_URL } from "@/public/config";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";



const RightSidebar = ({ img }) => {

    const router = useRouter();

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);





    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
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
                    });

                setLoading(false);
            }
            catch (error) {
                console.log("eerror", error);
            }
        }
        fetchPosts();
    }, []);
    // 
    const mediaBaseUrl = posts?.otherParameters?.mediaBaseUrl;


    return (
        <>
            <div className="max-w-[370px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                <h4 className="font-semibold text-custom-4 text-dark mb-7">
                    Recent Posts
                </h4>
                <div className="flex flex-col gap-7.5">
                    {posts?.data?.slice(0, 4).map((post, index) => {


                        const recentPostImage = mediaBaseUrl + "/" + post.blogImage;
                        return (
                            <Link
                                href={`/blog/${post.slug}`}
                                // onClick={window.location.reload}
                                className="group flex items-center gap-8 p-2" key={index}>
                                <div className="w-20 h-16 overflow-hidden shadoow-lg rounded-lg">
                                    <Image
                                        height={100}
                                        width={100}
                                        src={recentPostImage}
                                        className="w-full h-full object-cover rounded-md"
                                        alt={post.blogTitle}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h5 className="font-medium text-sm duration-200 mb-1.5 ">
                                        {post.blogTitle}
                                    </h5>
                                    <div className="flex items-center gap-2">
                                        <p className="text-custom-xs"></p>
                                        <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                                        <p className="text-custom-xs"></p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </>

    )
}
// get static props
// export const getStaticProps = async () => {
//     const res = await axios.get(
//         "http://localhost:8000/api/blogs


export default RightSidebar;


