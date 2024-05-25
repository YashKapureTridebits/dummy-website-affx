import React from "react";
import { FaBookReader } from "react-icons/fa";

const SectionOne = ({
    h2,
    p,
    firstTitle,
    firstContent,
    secondContent,
    secondTitle,
    thirdTitle,
    thirdContent,
    fourthTitle,
    fourthContent,

    icon1,
    icon2,
    icon3,
    icon4,
}) => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="py-16 lg:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            {h2 ? h2 : "Why Social Media Management Matters?"}
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600">
                            {p
                                ? p
                                : "In a world where online presence is paramount, SEO is the key to unlocking the full potential of your digital strategy. Here&apos;s why:"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-around items-center sm:flex-row">
                        <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                                <div className="text-gray-700">
                                    <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                                        {/* <FaBookReader className="w-8 h-8 text-white" /> */}
                                        {icon1 ? (
                                            icon1
                                        ) : (
                                            <FaBookReader className="w-8 h-8 text-white" />
                                        )}
                                    </div>
                                    <div className="items-center font-bold text-sm pt-3 mt-2">
                                        <span className="text-lg ">
                                            {" "}
                                            {firstTitle ? firstTitle : "Brand Visibility"}
                                        </span>
                                    </div>
                                    <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                                        {firstContent
                                            ? firstContent
                                            : "Be where your audience is. Our social media experts strategically position your brand across platforms, ensuring maximum visibility and recall among your target audience."}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                                <div className="text-gray-700">
                                    <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                                        {/* <FaSackDollar className="w-8 h-8 text-white" /> */}
                                        {icon2 ? (
                                            icon2
                                        ) : (
                                            <FaBookReader className="w-8 h-8 text-white" />
                                        )}
                                    </div>
                                    <div className="items-center font-bold text-sm pt-3 mt-2">
                                        <span className="text-lg ">
                                            {" "}
                                            {secondTitle ? secondTitle : "Engaging Content Creation"}
                                        </span>
                                    </div>
                                    <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                                        {secondContent
                                            ? secondContent
                                            : "Content is king, especially on social media. We create compelling and shareable content that resonates with your audience, sparking conversations and establishing your brand as an industry authority."}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-around items-center sm:flex-row">
                        <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                                <div className="text-gray-700">
                                    <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                                        {/* <MdOutlineHandshake className="w-8 h-8 text-white" /> */}
                                        {icon3 ? (
                                            icon3
                                        ) : (
                                            <FaBookReader className="w-8 h-8 text-white" />
                                        )}
                                    </div>
                                    <div className="items-center font-bold text-sm pt-3 mt-2">
                                        <span className="text-lg ">
                                            {" "}
                                            {thirdTitle ? thirdTitle : "Community Building"}
                                        </span>
                                    </div>
                                    <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                                        {thirdContent
                                            ? thirdContent
                                            : "Foster a loyal community around your brand. We engage with your audience, respond to comments, and actively participate in relevant conversations to build a strong and interactive online community."}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[520px]  mt-16 mx-4 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            <div className="bg-white h-[auto] rounded rounded-lg p-3   duration-200 grid place-items-center flex-1 selected shadow-xl ">
                                <div className="text-gray-700">
                                    <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                                        {/* <CiGlobe className="w-8 h-8 text-white" /> */}
                                        {icon4 ? (
                                            icon4
                                        ) : (
                                            <FaBookReader className="w-8 h-8 text-white" />
                                        )}
                                    </div>
                                    <div className="items-center font-bold text-sm pt-3 mt-2">
                                        <span className="text-lg ">
                                            {" "}
                                            {fourthTitle ? fourthTitle : "Data-Driven Strategies"}
                                        </span>
                                    </div>
                                    <div className="max-lg:mt-8 font-normal max-lg:mx-auto  max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4 mb-6">
                                        {fourthContent
                                            ? fourthContent
                                            : "Our approach is rooted in data. We analyze social media insights to refine our strategies continually, ensuring your campaigns are always optimized for the best results."}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;
