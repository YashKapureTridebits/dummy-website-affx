import React from 'react'
import { FaSearchDollar } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import Link from "next/link";

const WhyChoose = () => {
    const features = [
        {
            name: 'Proven Results Approach',
            icon: <FaSearchDollar className="w-8 h-8 text-white" />,
            description:
                'We have a track record of delivering tangible results for our clients, helping them achieve their digital marketing goals.',
        },
        {
            name: 'Customized Strategies',
            icon: <GiBrain className="w-8 h-8 text-white" />,
            description:
                ' Our team tailors strategies to fit the unique needs of your business, ensuring a personalized and effective approach.',
        },
        {
            name: 'Transparent Communication',
            icon: <IoCallOutline className="w-8 h-8 text-white" />,
            description:
                'Stay informed with regular updates and transparent reporting on the performance of your digital campaigns',
        },
        {
            name: 'Dedicated Support',
            icon: <HiOutlineSupport className="w-8 h-8 text-white" />,
            description:
                'Our team is here to support you every step of the way, providing guidance and insights to help your business thrive in the digital landscape.',
        },
    ]
    return (
        <>

            <section className="   max-md:px-6 relative  ">
                <div className="py-12 sm:py-16 mt-6" >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
                                Why Choose Affinix Digital?
                            </p>
                        </div>
                        <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 lg:max-w-6xl">
                            <div className="grid max-w-full grid-cols-1  justify-between gap-x-14 gap-y-14 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="bg-neutral-50 cursor-pointer duration-200 hover:shadow-lg backdrop-blur relative p-5  rounded-xl border">
                                        {/* icon */}
                                        <div className="flex items-center justify-center w-12 h-12 bg-[#ffa726] rounded-full mb-6">
                                            {feature.icon}
                                        </div>
                                        <dt className="text-lg font-semibold leading-7 text-gray-900">

                                            {feature.name}
                                        </dt>
                                        <dd className="leading-7 text-gray-500 text-lg text-regular mt-2 md:mt-4">{feature.description}</dd>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="relative overflow-hidden bg-slate-50">
                <div className="pb-12 pt-6 sm:pt-12 lg:pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-full">
                            <h1 className=" lg:text-4xl md:text-4xl font-bold tracking-tight leading-10  text-3xl">
                                Ready to take your digital presence to the next level?<br />

                                <br />
                                <p className="mt-4 md:text-2xl text-xl sm:text-xl font-normal text-gray-500">
                                    Contact Affinix Digital today and let&apos;s embark on a journey of digital excellence together.
                                </p>
                            </h1>



                            <div className="mt-10">
                                <Link href="/contactus" className="inline-block rounded-full order border-2 border-[#ffa726] hover:bg-black px-8 py-3 text-center font-medium text-white bg-[#ffa726] transition hover:text-[#ffa726]">
                                    Talk with an expert
                                </Link>
                            </div>
                        </div>
                        <div className="md:block ">
                            <img src="/img/affinix-digital-marketing.jpg" alt="Affinix Digital Marketing Agency" className="mx-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WhyChoose