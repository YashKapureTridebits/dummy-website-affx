import Link from 'next/link'
import React, { useState } from 'react'

const Hero = () => {
    const [state, setState] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const { name, email, contact, options } = state;

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    //function to check if contact field is 10 digit number
    const [contactError, setContactError] = useState(false);

    const checkContact = (e) => {
        const contactRegex = /^\d{10}$/;

        if (!contactRegex.test(e.target.value)) {
            setContactError(true); // Set contact error state to true
        } else {
            setContactError(false); // Reset contact error state if contact is valid
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // var requestBody = {
        // message: `Email: ${email}\nName: ${firstName} ${lastName}\nMob No: ${contact}\nMessage: ${message}\nLocated Country: ${countryName}`,
        var requestBody = {
            message: `Lead Generated from LandingPage: \n\n Email: ${email} \n Name: ${name} \n Mob No: ${contact} \n Service: ${options}`,
        };

        //   };
        if (contactError) {
            return setErrorMessage(true);
        } else {
            setErrorMessage(false);
        }

        console.log("submit handler called", requestBody);
        try {
            let res = await fetch(
                `https://chat.googleapis.com/v1/spaces/AAAAa5HkN3Y/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qGmAqN93rrL9-9w38ZkV5mq9NOlrvY1ZhwPy_zaJ3T0`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        text: requestBody.message,
                    }),
                }
            );
            setSuccessMessage(true);
            setState({});
            setTimeout(() => {
                setSuccessMessage(false);
            }, 3000);
        } catch (error) {
            console.log(error);
            setErrorMessage(true);
            setTimeout(() => {
                setErrorMessage(false);
            }, 3000);
        }
    };

    return (
        <section className="items-center justify-center relative w-full flex  -mt-24 flex-col-reverse md:flex-row">
            <div id="bg-pattern" className="absolute w-full -top-24 left-0 right-0 -bottom-24 bg-[#263238]"></div>
            {/* <img className="max-2xl:hidden 2xl:absolute top-20 -left-16 mt-32" src="/img/blue-dot-left-bars.svg" alt="Blue background flourish left top" />
            <img className="max-2xl:hidden 2xl:absolute top-80 right-0 mt-20" src="/img/yellow-dot-right.svg" alt="Right background flourish left top" /> */}

            <div className="relative pt-4  order-2 md:order-1">
                {/* md:w-1/2 md:left-0 text-left */}
                <div className="hero-copy-container mt-20 sm:ml-0 lg:pl-0 md:ml-1 lg:ml-36 overflow-x-hidden  relative container pt-12 px-4 lg:px-0 mx-auto  " style={{ marginLeft: '0px', paddingLeft: '26px' }}>
                    <h1 className="lg:max-w-3xl   text-white mx-auto mt-4 mb-8 lg:mb-12 text-5xl lg:text-6xl font-bold"
                        style={{ lineHeight: 1.4 }}
                    >Empower Your Brand&apos;s Digital Story</h1>
                    <p className="lg:max-w-3xl   text-zinc-400 mx-auto text-xl text-gray-500 font-medium">
                        Unleashing Social Brilliance with <span className='text-[#ffa726] font-bold'>Affinix Digital</span> The Best Digital Marketing Company</p>
                </div>
                <div className="mb-20"></div>
            </div>

            <div className="relative pt-4 lg:pr-12 sm:mt-24 mr-2 sm:ml-16 lg:ml-16 md:ml-16 md:w-1/2  md:right-0 top-0 order-1 md:order-1">
                <form className="max-w-md mx-auto  isolate aspect-video  bg-white rounded-2xl ring-1 ring-black/5 p-6 mb-20  shadow-lg"
                    onSubmit={handleSubmit}
                >
                    {successMessage && <div className="text-green-700 px-4 py-3 rounded relative">
                        <h1 className="block sm:inline"> Thank you! Our Team will get in touch with you soon.</h1>
                    </div>}
                    {errorMessage && <div className="text-red-700 px-4 py-3 rounded relative">
                        <span className="block sm:inline"> Please enter the details in correct format. Please try again.</span>
                    </div>}

                    <>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-900 font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name"
                                onChange={handleChange}
                                value={name || ""}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter Your Name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tel" className="block text-gray-900 font-medium mb-2">Your Contact</label>
                            <input type="tel" id="tel" name="contact"
                                onChange={(e) => {
                                    handleChange(e);
                                    checkContact(e);
                                }}
                                value={contact || ""}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter Your Contact Number"
                                required />
                            {contactError && <p className="text-red-500 text-sm mt-1">Please enter a valid 10 digit number</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-900 font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email"
                                onChange={handleChange}
                                value={email || ""}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter Your Email ID" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dropdown" className="block text-gray-900 font-medium mb-2">Service</label>
                            <select id="dropdown"
                                onChange={handleChange}
                                value={options || ""}
                                required
                                name="options" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="" className='text-gray-400 bg-gray-100'>Select Service</option>
                                <option className='m-4  text-gray-900' value="Search Engine Optimization">Search Engine Optimization</option>
                                <option value="Social Media Management">Social Media Management</option>
                                <option value="Pay-pewr-Click Advertising">Pay-Per-Click Advertising</option>
                                <option value="Website Design & Development">Website Design & Development</option>
                                <option value="Content Marketing">Content Marketing</option>
                            </select>
                        </div>
                        <div className="left-0">
                            <button type="submit" className="inline-block rounded-full order border-2 border-[#ffa726] hover:bg-black px-8 py-3 text-center font-medium text-white bg-[#ffa726] transition hover:text-[#ffa726]">Submit</button>
                        </div>
                    </>

                </form>
            </div >
        </section >


    )
}

export default Hero

{/* <div className="flex flex-wrap justify-center mb-8">
                        <Link className="block w-full md:w-auto text-center justify-center mb-2 py-3 px-8 text-white font-semibold bg-[#ffa726] hover:bg-[#ffa726] rounded border !hover:border-gray-300 flex gap-2 items-center" style={{ textShadow: "none", border: "0px solid #eee" }} href="/contactus">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path>
                            </svg>
                            Talk with an expert</Link>
                    </div> */}
