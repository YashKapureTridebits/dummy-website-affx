
import React, { useState } from "react";
import FeatureFour from "./featureFour";
import RightSidebar from "./RightSidebar";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureTwo = ({ details, desc, img }) => {
    const [state, setState] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);
    const { email } = state;
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const pathName = window.location.pathname;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = `\n${email} has subscribed for newsletter from ${pathName}`;
        try {
            let res = await fetch(
                `https://chat.googleapis.com/v1/spaces/AAAAa5HkN3Y/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qGmAqN93rrL9-9w38ZkV5mq9NOlrvY1ZhwPy_zaJ3T0`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        text: requestBody,
                    }),
                }
            );
            setSuccessMessage(true);
            setState({});
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    };
    return (

        <div id="post-2652" className=" p-3">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    {/* <div className="col-span-2 gap-2">
                        <LeftSidebar />
                    </div> */}
                    <div className="col-span-12 lg:col-span-8 mt-12">
                        <FeatureFour details={details} />
                    </div>
                    <div className="col-span-12 lg:col-span-4 mt-16">
                        <RightSidebar img={img} />
                    </div>
                </div>
                <section aria-label="Newsletter">
                    <div className="mx-auto max-w-7xl px-4 sm:px-3 lg:px-8 py-6 mb-16">
                        <div className="relative -mx-4   bg-indigo-50 rounded-2xl px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
                            {/* <img alt="" width="919" height="1351" decoding="async" className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]" style={{ color: 'transparent' }} src="/_next/static/media/background-newsletter.488a0204.jpg" /> */}
                            <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2"><div>
                                <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">Stay up to date</p>
                                <p className="mt-4 text-lg tracking-tight text-gray-900">
                                    Get the latest SEO news, tips, and special offers!
                                </p>
                            </div>
                                <form
                                    onSubmit={handleSubmit}
                                    action="#"
                                >
                                    <h3 className="text-lg font-semibold tracking-tight text-blue-900">Sign up to our newsletter <span aria-hidden="true">↓</span></h3>
                                    {successMessage && (
                                        <p className="text-green-500">Thank you for subscribing our newsletter!</p>
                                    )}
                                    {!successMessage && (

                                        <div className="mt-5 flex rounded-3xl bg-black py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                // className=" flex-auto bg-transparent pl-6 pr-2.5 text-base text-[#ffa726] placeholder:text-slate-400 focus:outline-none"
                                                className=" flex-auto bg-transparent w-[250px]  pl-6  text-base text-[#ffa726] placeholder:text-slate-400 focus:outline-none"

                                                onChange={handleChange}
                                                value={email || ""}
                                                required
                                            />
                                            <button
                                                // className="inline-flex justify-center rounded-2xl bg-[#ffa726] p-4 text-base font-semibold text-white hover:bg-[#ffa726] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:text-white/70"
                                                className="inline-flex justify-center rounded-2xl bg-[#ffa726] p-4 -ml-4 text-base font-semibold text-white hover:bg-[#ffa726] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:text-white/70"
                                                type="submit">
                                                <span className="sr-only sm:not-sr-only">Sign up today</span>
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FeatureTwo;
