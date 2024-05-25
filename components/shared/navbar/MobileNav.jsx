import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoCallOutline } from "react-icons/io5";

const MobileNav = () => {
    const toggleMobileMenu = () => {
        console.log("I am clicked");
        const mobileMenuFlyout = document.getElementById("mobile-menu-flyout");
        mobileMenuFlyout.classList.toggle("hidden");
    };
    return (
        <div className="hidden max-lg:block">
            <nav className="flex-grow bg-[#263238] sticky z-50 w-full p-1 pt-5 shadow-md dark:shadow-none sm:px-12">
                <div className="flex items-center justify-between">
                    <Link href={"/"} className="cursor-pointer">
                        <Image
                            src="/logo/Affinix Digital Yellow White Logo.png"
                            alt="The Affinix Digital"
                            width={200}
                            height={50}
                        />
                    </Link>
                    <div className="flex items-center">
                        <div className="mr-4">
                            {/* add link to call */}
                            <a href="tel:+91 9922589033" class='flex bg-[#ffa726] p-2 text-center justify-center font-semibold rounded-full text-white'>
                                <IoCallOutline class="w-4 h-4 " />
                                <span className="absolute  -mt-1.5 h-7 w-7 animate-ping rounded-full bg-[#ffa726] bg-opacity-20 delay-300 duration-1000"></span>
                                {/* <span class='lg:hidden md:flex sm:flex hidden'>+91 9922589033</span> */}
                            </a>


                        </div>
                        {/* call icon */}
                        <button
                            id="mobile-menu-button"
                            onClick={toggleMobileMenu}
                            className="navbar-burger flex items-center p-3 bg-zinc-800 hover:bg-zinc-700 duration-200 focus:outline-none ring-0 rounded"
                            aria-expanded="false"
                        >
                            <svg
                                className="fill-white block h-4 w-4 pointer-events-none"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                            <svg
                                id="mobile-menu-close-icon"
                                onClick={toggleMobileMenu}
                                className="fill-white block h-4 w-4 pointer-events-none hidden"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Close mobile menu</title>
                                <path
                                    d="M14.95 4.05a.75.75 0 011.06 1.06L11.061 10l4.95 4.95a.75.75 0 11-1.06 1.06L10 11.061l-4.95 4.95a.75.75 0 01-1.06-1.06L8.939 10 3.99 5.05a.75.75 0 111.06-1.06L10 8.939l4.95-4.95z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <header className="container mx-auto px-1 py-3 flex items-center justify-end">
                    {/* <div className="">
              <IoCallOutline className="w-4 h-4 text-[#ffa726]" />
            </div> */}
                    <div>
                        {/* call icon */}
                        {/* <button
                id="mobile-menu-button"
           onClick={toggleMobileMenu}
                className="navbar-burger -mr-24 flex items-center p-3 bg-zinc-800 hover:bg-zinc-700 duration-200 focus:outline-none ring-0 rounded"
                aria-expanded="false"
              >
                <svg
                  className="fill-white block h-4 w-4 pointer-events-none"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
                <svg
                  id="mobile-menu-close-icon"
             onClick={toggleMobileMenu}
                  className="fill-white block h-4 w-4 pointer-events-none hidden"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Close mobile menu</title>
                  <path
                    d="M14.95 4.05a.75.75 0 011.06 1.06L11.061 10l4.95 4.95a.75.75 0 11-1.06 1.06L10 11.061l-4.95 4.95a.75.75 0 01-1.06-1.06L8.939 10 3.99 5.05a.75.75 0 111.06-1.06L10 8.939l4.95-4.95z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    ></path>
                    </svg>
                </button> */}
                        <div
                            id="mobile-menu-flyout"
                            className="absolute hidden lg:hidden header-flyout-menu  top-0 right-0 z-10 mt-20 flex w-screen max-w-max px-4"
                        >
                            <div className="w-1/2 max-w-md flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-2">
                                    <div className=" relative flex gap-x-6 rounded-lg p-3 hover:bg-gray-50">
                                        <div>

                                            <div>

                                                <p className="font-semibold text-gray-900 text-lg">
                                                    Services
                                                    <span className="relative inset-0"></span>
                                                </p>

                                                <div className="grid grid-cols-1">
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/services/search-engine-optimization"
                                                        className="block  p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Search Engine Optimization (SEO)
                                                    </Link>

                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/services/social-media-management"
                                                        className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Social Media Management
                                                    </Link>
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/services/pay-per-click-advertising"
                                                        className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Pay-Per-Click (PPC) Advertising
                                                    </Link>
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/services/website-design-and-development"
                                                        className="block w-full p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Website Design and Development
                                                    </Link>
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/services/content-marketing"
                                                        className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Content Marketing
                                                    </Link>
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/services/free-website-audit-report"
                                                        className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Free Website Audit Report
                                                    </Link>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 text-lg">
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/"
                                                        className="block p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Home
                                                    </Link>
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 text-lg">
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/aboutus"
                                                        className="block p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        About
                                                    </Link>
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 text-lg">
                                                    <Link
                                                        onClick={toggleMobileMenu}
                                                        href="/blog"
                                                        className="block p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                                    >
                                                        Blogs
                                                    </Link>
                                                </p>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-[#ffa726] ml-5 mr-5 rounded-lg mb-6">
                                    <Link
                                        onClick={toggleMobileMenu}
                                        href="/contactus"
                                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white"
                                    >
                                        <svg
                                            className="h-5 w-5 flex-none "
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </nav>
        </div>
    )
}

export default MobileNav