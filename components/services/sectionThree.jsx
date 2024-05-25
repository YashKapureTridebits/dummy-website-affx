import React from "react";


const SectionThree = ({ title, details, dark }) => {
    const features = [
        {
            name: 'Strategic Approach',
            description:
                'Our team develops customized strategies based on your business goals and target audience, ensuring a tailored approach that resonates with your audience.',
        },
        {
            name: 'Creative Excellence',
            description:
                'From visually striking graphics to engaging copy, we infuse creativity into every aspect of your social media presence.',
        },
        {
            name: 'Transparent Reporting',
            description:
                'Stay informed with detailed analytics and reports that provide insights into the performance of your social media campaigns.',
        },
    ]
    return (
        <div className="py-36 sm:py-32 mt-6  mb-4" style={{ backgroundColor: dark ? "#f8f6f6" : "white" }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title ? title : " Why Choose Affinix Digital for Social Media Management?"}
                    </p>

                </div>
                <div className="pt-3 text-center font-normal text-gray-500 text-lg text-regular mt-2 md:mt-4">
                    {details ? details : "Invest in PPC advertising that delivers tangible results. Partner with Affinix Digital and experience the power of targeted, efficient, and high-impact Pay-Per-Click campaigns. Whether you're looking to increase brand visibility, drive website traffic, or boost conversions, we have the expertise to make it happen."}
                </div>
                {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="bg-neutral-50 backdrop-blur relative p-5  rounded-md md:rounded-lg">
                                <dt className="text-base font-semibold leading-7 text-gray-900">

                                    {feature.name}
                                </dt>
                                <dd className="leading-7 text-gray-500 text-lg text-regular mt-2 md:mt-4">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div> */}
            </div>
        </div>
    )
}

export default SectionThree;