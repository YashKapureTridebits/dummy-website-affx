import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ServicesComponent = ({ h1, details, image, imgAlt }) => {

    return (
        <div>
            <div className="bg-[#263238] relative pt-12 lg:pt-16 pb-16 lg:pb-24">
                <div id="triangle" className="h-10 w-10 z-[91] rotate-45 absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 rounded-sm bg-[#263238]">
                </div>

                <div id="product-hero-container" className="hero-content max-w-7xl z-5 relative mx-auto bg-white/0 px-6 sm:px-6 lg:px-8">

                    <div className="min-[900px]:flex items-start gap-x-8">
                        <div id="hero-copy-col" className="flex-1 space-y-6 lg:space-y-8 text-white bg-white/0">
                            <div className="title-wrapper">

                                <div className="badges flex gap-x-4" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>
                                    <span className="badge text-gray-900 bg-amber-400 py-1 px-3 rounded-sm text-xs uppercase tracking-wider font-bold mb-2 inline-block">
                                        PROMO</span>
                                    <span className="badge text-white/95 bg-white/20 py-1 px-3 rounded-sm text-xs uppercase tracking-wider font-bold mb-2 inline-block">
                                        BEST SELLER</span>
                                </div>

                                <h1 className="text-4xl !mt-4 sm:text-4xl md:text-5xl min-[900px]:text-4xl min-[1200px]:text-5xl !leading-[1.15em] font-extrabold text-white" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>
                                    {h1 ? h1 : "Social Media Management that Ignites Engagement and Boosts Your Brand"}
                                </h1>
                                <div className="subtitle text-lg lg:text-xl mt-6" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>

                                    {details ? details : "Affinix Digital takes your social media presence to new heights. In the age of digital connections, social media is your powerhouse for brand visibility, engagement, and growth. Our Social Media Management services are crafted to amplify your online impact and build meaningful connections with your audience."}
                                </div>
                            </div>

                            <div className="benefit-list-wrapper">

                                <div className="cta-button-wrapper flex max-sm:flex-col max-sm:gap-y-3 gap-x-4 mt-8">
                                    <a href="" className="cta-button px-6 py-2.5 hover:shadow-xl hover:text-white group rounded-sm justify-center duration-500 font-semibold bg-[#ffa726]  text-base inline-flex gap-x-2 items-center" style={{ opacity: 1, transform: "translate(0px, 0px)" }}>Get
                                        Started<i className="fa-solid group-hover:translate-x-0.5 duration-500 text-xs fa-chevron-right" aria-hidden="true"></i></a>
                                    <Link href="/contactus" className="cta-button px-6 py-2.5 font-semibold hover:opacity-90 justify-center group duration-500 bg-white text-base text-[#ffa726] inline-flex gap-x-2 items-center" style={{ opacity: 1, transform: "translate(0px, 0px)" }}>Book a Call <i className="fa-solid inline-block duration-500 text-xs fa-chevron-right relative group-hover:translate-x-0.5" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 min-[900px]:max-w-2xl mx-auto lg:w-full mt-8 min-[900px]:mt-0">
                            <div className="relative h-full w-full">
                                <div className="absolute z-1 lg:-right-12 top-36 hidden lg:block">
                                    <img src="https://octaneapps.com/assets/img/shape/dot-big-square.svg" alt="shape" />
                                </div>
                                <div className="absolute hidden uppercase bg-red-900 text-white py-0.5 px-4 rounded-t-sm font-bold text-xs top-0 -translate-y-full left-1/2 -translate-x-1/2">
                                    <i className="fa-solid fa-circle-play text-xs" aria-hidden="true"></i> 5 min Explainer video
                                </div>

                                <div data-fancybox="" className="relative rounded-lg grid overflow-hidden" >
                                    <Image
                                        height={500}
                                        width={500}
                                        draggable="false" className=" object-cover  w-full cursor-pointer  select-none duration-500"
                                        src={image ? image : "/img/Social-Media-Management-service.jpg"}
                                        alt={imgAlt ? imgAlt : "Social Media Management that Ignites Engagement and Boosts Your Brand"}
                                    />
                                </div>

                                <div className="mt-6">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServicesComponent;