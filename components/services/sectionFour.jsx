import React from "react";


const SectionFour = ({ title, features, dark }) => {
    console.log("fffffffffffff", features.icon);
    return (
        <div className="bg-white  py-36 sm:py-32 mt-6  mb-4" style={{ backgroundColor: dark ? "#f8f6f6" : "white" }} >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title ? title : "Why Choose Affinix Digital for Social Media Management?"}
                    </p>
                </div>


                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                    <div className="grid max-w-2xl grid-cols-1  mt-16  gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="bg-neutral-50 backdrop-blur relative p-5  rounded-md md:rounded-lg">
                                <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full">
                                    {feature.icon}
                                </div>
                                <div className="items-center font-bold text-sm pt-3 mt-2">
                                    <span className="text-lg  text-gray-900">

                                        {feature.name}
                                    </span>
                                </div>
                                <dd className="leading-7 text-gray-500 text-lg text-regular mt-2 md:mt-4">{feature.description}</dd>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}


export default SectionFour;