
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import MobileNav from "./MobileNav";

const Navbar = () => {


  return (
    <>
      <div className="max-lg:hidden">
        <nav className="flex-end sticky  bg-[#263238]  z-50 w-full gap-5 p-1 shadow-md sm:px-12">
          <header className="mx-auto px-1  flex items-center justify-around">
            <Link href={"/"} className="cursor-pointer  top-0 lg:-ml-12">
              <Image
                src="/logo/Affinix Digital Yellow White Logo.png"
                alt="The Affinix Digital"
                width={200}
                height={50}
              />
            </Link>
            <div className="flex ">
              <ul className="flex gap-5 items-center justify-center text-white">
                <li className="relative group px-3 py-2">
                  <Link href="/" className="block w-full p-2 text-white">
                    Home
                  </Link>
                </li>
                <li className="relative group px-3 ">
                  <button className=" text-[15px] hover:opacity-50 cursor-default">
                    Services
                  </button>

                  <div className="absolute  top-2 lg:-left-30 transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50  min-w-[350px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl  w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0  transition-transform group-hover:translate-x-[0.2rem] duration-500 ease-in-out rounded-sm"></div>

                      <div className=" relative w-full z-10 divide-x-2 ">
                        <div className="lg:grid lg:grid-cols-1 grid-cols-1 gap-14">
                          <div>
                            <div className="flex w-full gap-5 space-x-16">
                              <ul className="text-[15px]">
                                <li>
                                  <Link
                                    href="/services/search-engine-optimization"
                                    className="block  w-full p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                  >
                                    Search Engine Optimization (SEO)
                                  </Link>

                                  <Link
                                    href="/services/social-media-management"
                                    className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                  >
                                    Social Media Management
                                  </Link>
                                  <Link
                                    href="/services/pay-per-click-advertising"
                                    className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                  >
                                    Pay-Per-Click (PPC) Advertising
                                  </Link>
                                  <Link
                                    href="/services/website-design-and-development"
                                    className="block w-full p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                  >
                                    Website Design and Development
                                  </Link>
                                  <Link
                                    href="/services/content-marketing"
                                    className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                  >
                                    Content Marketing
                                  </Link>
                                  <Link
                                    href="/services/free-website-audit-report"
                                    className="block p-2 ml-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-[#ffa726]"
                                  >
                                    Free Website Audit Report
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="relative group px-3 py-2">
                  <Link href="/aboutus" className="block w-full p-2 text-white">
                    About Us
                  </Link>
                </li>
                <li className="relative group px-3 py-2">
                  <Link href="/blog" className="block w-full p-2 text-white">
                    Blogs
                  </Link>
                </li>
              </ul>
              <ul className="ml-56 mt-3">
                <li className="relative flex items-center text-[15px] py-2 px-2 cursor-pointer text-white hover:text-white rounded-full bg-[#ffa726] hover:bg-[#ffa726]">
                  <Link href="tel:+919922589033"><IoCallOutline className="w-4 h-4 text-white mr-2" /></Link>
                  <Link href="tel:+919922589033">+91 9922589033</Link>
                </li>
              </ul>
            </div>

            <div className="flex-between gap-5"></div>
          </header>
        </nav>
      </div>
      {/* Mobile menu */}
      <MobileNav />
    </>
  );
};

export default Navbar;
