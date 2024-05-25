import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const FeatureOne = ({ title, img, desc }) => {
    const sanitizeHTML = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, "text/html");
        return doc.body.textContent || "";
    };

    return (
        <>

            <div className="bg-[#263238] relative pt-16 pb-16 lg:pb-24">
                <div id="triangle" className="h-10 w-10 z-[10] rotate-45 absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 rounded-sm bg-[#263238]">
                </div>
                {/* <img
                    className="max-2xl:hidden 2xl:absolute top-20 left-0 mt-32"
                    src="/img/blue-dot-left-bars.svg"
                    alt="Blue background flourish left top"
                />
                <img
                    className="max-2xl:hidden 2xl:absolute top-80 right-0 mt-20"
                    src="/img/yellow-dot-right.svg"
                    alt="Right background flourish left top"
                /> */}
                <div id="product-hero-container" className="hero-content max-w-7xl z-5 relative mx-auto bg-white/0 px-6 sm:px-6 lg:px-8">

                    <div className="min-[900px]:flex items-start gap-x-8">
                        <div id="hero-copy-col" className="flex-1 space-y-6 lg:space-y-8 text-white bg-white/0">
                            <div className="title-wrapper">

                                <div className="badges flex gap-x-4" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>

                                    <span className="badge text-white/95 bg-white/20 py-1 px-3 rounded-sm text-xs uppercase tracking-wider font-bold mb-2 inline-block">
                                        BEST BLOG</span>
                                </div>

                                <h1 className="text-4xl !mt-4 sm:text-4xl md:text-5xl min-[900px]:text-4xl min-[1200px]:text-5xl !leading-[1.15em] font-extrabold text-white" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>
                                    {title}

                                </h1>
                                <div className="subtitle text-lg lg:text-xl mt-6  " style={{ transform: "translate(0px, 0px)", opacity: 1 }}>

                                    {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {desc}
                                    </ReactMarkdown> */}
                                    <div className="prose subtitle text-lg lg:text-xl mt-6   text-white" style={{ textAlign: 'justify' }}>
                                        {HTMLReactParser(desc)}
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="flex-1 min-[900px]:max-w-2xl mx-auto lg:w-full mt-8 min-[900px]:mt-0">
                            <div className="relative h-full w-full">
                                <div className="absolute z-1 lg:-right-12 top-36 hidden lg:block">
                                    <img src="https://octaneapps.com/assets/img/shape/dot-big-square.svg" alt="shape" />
                                </div>

                                <div className="relative group w-full h-full rounded-2xl    grid" >
                                    <img
                                        height={700}
                                        width={1100}
                                        src={img}
                                        optimized={true}
                                        draggable="false" className=" relative group w-full h-full rounded-2xl   grid "
                                        alt={title} />

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default FeatureOne;
