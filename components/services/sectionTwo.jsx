import React from "react";

const SectionTwo = ({ h2, p, firstContent, firstTitle, secondTitle, secondContent, thirdTitle, thirdContent, fourthTitle, fourthContent }) => {
    return (
        <div className='bg-[#f8f6f6] pt-16 pb-16'>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
                <div className="">
                    <div className="text-center">
                        <h2 className="text-gray-800 max-lg:text-center max-lg:mx-auto text-4xl sm:text-4xl md:text-5xl leading-[1.2em] mt-8 font-extrabold">
                            {h2 ? h2 : "Our Social Media Management"}
                            {/* <i> Services</i>. */}
                        </h2>
                        <p className="max-lg:mt-8 font-normal max-lg:mx-auto max-lg:text-center max-lg:max-w-md text-xl lg:text-lg max-lg:text-gray-500 text-gray-600 mt-4">
                            {p ? p : "When you join AFFINIX DIGITAL, you’ll get a dedicated campaign manager – an experienced SEO veteran."}</p>
                    </div>
                    <div className="grid max-w-xl grid-cols-1  mt-16  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        <div className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8  rounded-md md:rounded-lg" style={{ opacity: 1, transform: "translate(0px, 0px)" }}>

                            <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">{firstTitle ? firstTitle : "Platform Strategy"}</h3>
                            <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                                {firstContent ? firstContent : "We tailor our approach to match the dynamics of each platform, whether it&apos;s Instagram, Facebook, Twitter, LinkedIn, or others. Each platform is a unique opportunity to connect with your audience in a meaningful way."}</p>
                        </div>
                        <div className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg" style={{ opacity: 1, transform: "translate(0px, 0px)" }}>

                            <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">{secondTitle ? secondTitle : "Content Calendar and Scheduling"} </h3>
                            <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                                {secondContent ? secondContent : "Stay consistent with a well-planned content calendar. We schedule posts at optimal times to maximize reach and engagement, keeping your audience eagerly anticipating your next update."}</p>
                        </div>
                        <div className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg" style={{ opacity: 1, transform: "translate(0px, 0px)" }}>

                            <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg">{thirdTitle ? thirdTitle : "Social Media Advertising"} </h3>
                            <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                                {thirdContent ? thirdContent : "Boost your reach and drive targeted traffic with our social media advertising expertise. From ad creation to audience targeting, we ensure your budget is optimized for the best results."}</p>
                        </div>
                        <div className="feature-card bg-neutral-50 backdrop-blur p-6 md:p-8 rounded-md md:rounded-lg" style={{ opacity: 1, transform: "translate(0px, 0px)" }}>

                            <h3 className="mt-5 md:mt-8 text-gray-700 font-bold text-lg md:text-lg"> {fourthTitle ? fourthTitle : "Influencer Collaborations"}</h3>
                            <p className="font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                                {fourthContent ? fourthContent : "Leverage the power of influencers in your industry. We identify and collaborate with influencers who align with your brand, expanding your reach and building trust with a wider audience."}

                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;