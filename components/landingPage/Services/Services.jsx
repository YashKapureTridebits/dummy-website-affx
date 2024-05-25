import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';



const TabContent = ({ id, title, description, imageUrl }) => (
    <div className="  " style={{ zIndex: 99, opacity: 1 }} tabindex="1" data-slick-index="1" aria-hidden="false">
        <div id={id} className="relative mx-auto lg:pb-48 last:pb-0 group">
            <div className="w-full  ">
                <div className="mb-12 lg:mb-0">
                    <div className="lg:max-w-xs">
                        <h2 className="mt-8 mb-6 text-black lg:mb-10 lg:pr-8 text-4xl font-bold">{title}</h2>
                        <p className="mb-6 lg:mb-12 text-xl text-gray-700">{description}</p>
                        {/* <a
                            className="inline-block md:w-auto text-center mb-2 py-3 px-8 md:mr-4 text-md text-white font-semibold leading-normal bg-[#ffa726] hover:bg-[#ffa726] hover:text-white rounded transition duration-200"
                            style={{ textShadow: 'none', color: 'white !important' }}
                            href={learnMoreLink}
                        >
                            <span>Learn More</span>
                        </a> */}
                    </div>
                </div>
                <div className="relative p-5 w-full  hidden lg:w-1/2">
                    <img className="rounded-xl object-cover shadow  lg:h-128" src={imageUrl} alt="" />
                </div>
            </div>
        </div>
    </div >
);
const Services = () => {
    const sliderRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const backgroundRef = document.getElementById('tabs-bg-highlighter');
        const items = document.getElementsByClassName("my-tab-entry");

        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 1140);
        };

        checkWindowSize(); // Initial check

        // Attach event listener for window resize
        window.addEventListener('resize', checkWindowSize);





        // Attach event listener for window resize

        // Cleanup event listener on component unmount


        const handleTabClick = (index) => {
            document.querySelectorAll('.my-tab-entry').forEach(element => {
                element.classList.remove('active');
                element.style.borderBottom = "none"; // Reset border for all tabs
            });

            items[index].classList.add('active');
            items[index].style.borderBottom = "6px solid #ffa726";

            const tabPanels = document.getElementsByClassName("home-feature-tab");
            for (let n = 0; n < tabPanels.length; n++) {
                tabPanels[n].style.display = "none";
            }

            const tabName = "tab" + (index + 1);
            document.getElementById(tabName).style.display = "block";

        };

        handleTabClick(0);


        const handleMouseEnter = (event, index) => {
            const li = event.currentTarget;
            const ul = li.parentNode.getBoundingClientRect();
            const rect = li.getBoundingClientRect();

            backgroundRef.style.top = '0px';
            backgroundRef.style.left = `${rect.left - ul.left}px`;
            backgroundRef.style.width = `${rect.width}px`;
            backgroundRef.style.height = `${rect.height}px`;
        };

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', () => handleTabClick(i));
            items[i].addEventListener('mouseenter', (event) => handleMouseEnter(event, i));
        }


        // Cleanup event listeners on component unmount
        return () => {
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('click', () => handleTabClick(i));
                items[i].removeEventListener('mouseenter', (event) => handleMouseEnter(event, i));
            }
            window.removeEventListener('resize', checkWindowSize);
        };

    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        adaptiveHeight: true,
    };

    return (
        <>

            <section className="relative -mt-[50px] pb-8 px-8 hidden lg:block">
                <div className="rounded-xl max-w-7xl shadow-xl overflow-hidden mx-auto text-left px-16 py-16 pt-10 bg-white container z-20">
                    <div className="relative max-lg:text-left lg:text-center">

                        <div className="relative w-full mx-auto">
                            {/* <!-- Tabs control (with subtle backgroud highlight animation) --> */}
                            <div id="tabs-section" className="relative w-full overflow-hidden hidden lg:block">
                                <div className="group relative border-none w-full rounded-lg border-zinc-800 border-4 mx-auto bg-white text-center">
                                    <ul className="flex space-x-5 justify-between z-10 relative">

                                        <li className="my-tab-entry whitespace-nowrap flex-grow py-8 text-center items-center group flex select-none tab active">
                                            <div className="mx-auto">
                                                <div>
                                                    <i className="tab-entry-icon text-4xl mb-4 inline-block fa-regular fa-duotone fa-chart-line-up" aria-hidden="true"></i>
                                                </div>
                                                <span className="tab-entry-label text-lg font-medium text-gray-800">Search Engine  <br />Optimization</span>
                                            </div>

                                        </li>

                                        <li className="my-tab-entry whitespace-nowrap flex-grow py-8 text-center items-center group flex select-none tab ">
                                            <div className="mx-auto">
                                                <div>
                                                    <i className="tab-entry-icon text-4xl mb-4 inline-block fa-regular fa-duotone fa-newspaper" aria-hidden="true"></i>
                                                </div>
                                                <span className="tab-entry-label text-lg font-medium text-gray-800">Social Media  <br />Management</span>
                                            </div>

                                        </li>

                                        <li className="my-tab-entry whitespace-nowrap flex-grow py-8 text-center items-center group flex select-none tab ">
                                            <div className="mx-auto">
                                                <div>
                                                    <i className="tab-entry-icon text-4xl mb-4 inline-block fa-regular fa-duotone fa-link" aria-hidden="true"></i>
                                                </div>
                                                <span className="tab-entry-label text-lg font-medium text-gray-800">Pay-Per-Click (PPC)
                                                    <br />Advertising</span>
                                            </div>

                                        </li>

                                        <li className="my-tab-entry whitespace-nowrap flex-grow py-8 text-center items-center group flex select-none tab ">
                                            <div className="mx-auto">
                                                <div>
                                                    <i className="tab-entry-icon text-4xl mb-4 inline-block fa-regular fa-duotone fa-toolbox" aria-hidden="true"></i>
                                                </div>
                                                <span className="tab-entry-label text-lg font-medium text-gray-800">Website Design <br />and Development
                                                </span>
                                            </div>

                                        </li>
                                        <li className="my-tab-entry whitespace-nowrap flex-grow py-8 text-center items-center group flex select-none tab ">
                                            <div className="mx-auto">
                                                <div>
                                                    <i className="tab-entry-icon text-4xl mb-4 inline-block fa-regular fa-duotone fa-toolbox" aria-hidden="true"></i>
                                                </div>
                                                <span className="tab-entry-label text-lg font-medium text-gray-800">Content Marketing
                                                </span>
                                            </div>

                                        </li>
                                    </ul>
                                    <div id="tabs-bg-highlighter" className="group-hover:bg-gray-50 rounded-0 click-events-none duration-300 top-0 absolute hover-background" style={{ border: "0px solid red", top: " 0px", left: " 878.516px", width: "273.5px", height: " 162px" }}></div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* <!-- Tab contents: Large screens tab content wrapper --> */}
                    <div className="tab-content-wrapper  inset-x-0 lg:mt-10 mx-auto">

                        <div id="tab1" className="rounded-b-lg home-feature-tab ">
                            {/* <!-- Managed SEO section --> */}
                            <div className="relative mx-auto lg:pb-48 last:pb-0 group">
                                <div className="flex w-full max-lg:flex-col lg:flex-row flex-wrap items-center">
                                    <div className="group-odd:pr-12 group-even:pl-12 w-full lg:w-1/2 mb-12 lg:mb-0">
                                        <div className=" pl-8  lg:max-w-lg">
                                            <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-bold">Search Engine Optimization (SEO)
                                            </h2>
                                            <p className="mb-6 lg:mb-12 text-xl font-normal text-zinc-500">Enhance your online visibility and climb the search engine ranks with our SEO services. We employ cutting-edge strategies to optimize your website for search engines, ensuring your brand stands out in the competitive digital landscape.
                                            </p>
                                            {/* <!-- Learn more button --> */}
                                            <Link className="inline-block md:w-auto text-center mb-2 py-3 px-8 md:mr-4 text-md text-white font-semibold leading-normal bg-[#ffa726] hover:bg-[#ffa726] hover:text-white rounded transition duration-200"
                                                style={{ textShadow: "none", color: "white !important" }}
                                                href="/services/search-engine-optimization"><span>Learn More</span>
                                                <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-1/2 pr-4">
                                        <img className="rounded-xl object-cover lg:h-128" src="/img/seo.png" alt="Search Engine Optimization (SEO) AT AFFINIX DIGITAL" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="tab2" className="rounded-b-lg home-feature-tab hidden">
                            {/* <!-- Managed SEO section --> */}
                            <div className="relative mx-auto lg:pb-48 last:pb-0 group">
                                <div className="flex w-full max-lg:flex-col lg:flex-row flex-wrap items-center">
                                    <div className="group-odd:pr-12 group-even:pl-12 w-full lg:w-1/2 mb-12 lg:mb-0">
                                        <div className=" pl-8  lg:max-w-lg">
                                            <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-bold">Social Media Management
                                            </h2>
                                            <p className="mb-6 lg:mb-12 text-xl font-normal text-zinc-500">Connect, engage, and grow your audience on social media platforms. Our experts craft compelling social media campaigns to boost brand awareness and drive meaningful interactions with your audience.
                                            </p>
                                            {/* <!-- Learn more button --> */}
                                            <Link className="inline-block md:w-auto text-center mb-2 py-3 px-8 md:mr-4 text-md text-white font-semibold leading-normal bg-[#ffa726] hover:bg-[#ffa726] hover:text-white rounded transition duration-200"
                                                style={{ textShadow: "none", color: "white !important" }}
                                                href="/services/social-media-management"><span>Learn More</span>
                                                <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-1/2 pr-4">
                                        <img className="rounded-xl object-cover lg:h-128" src="/img/social media marketing.png" alt="Social Media Management AT AFFINIX DIGITAL" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="tab3" className="rounded-b-lg home-feature-tab hidden">
                            {/* <!-- Managed SEO section --> */}
                            <div className="relative mx-auto lg:pb-48 last:pb-0 group">
                                <div className="flex w-full max-lg:flex-col lg:flex-row flex-wrap items-center">
                                    <div className="group-odd:pr-12 group-even:pl-12 w-full lg:w-1/2 mb-12 lg:mb-0">
                                        <div className=" pl-8  lg:max-w-lg">
                                            <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-bold">Pay-Per-Click (PPC) Advertising
                                            </h2>
                                            <p className="mb-6 lg:mb-12 text-xl font-normal text-zinc-500">Maximize your ROI with targeted PPC campaigns. We design and execute result-driven advertising strategies to bring high-quality leads to your business while optimizing your ad spend.</p>
                                            {/* <!-- Learn more button --> */}
                                            <Link className="inline-block md:w-auto text-center mb-2 py-3 px-8 md:mr-4 text-md text-white font-semibold leading-normal bg-[#ffa726] hover:bg-[#ffa726] hover:text-white rounded transition duration-200" style={{ textShadow: "none", color: "white !important" }} href="/services/pay-per-click-advertising"><span>Learn More</span>
                                                <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-1/2 pr-4">
                                        <img className="rounded-xl object-cover lg:h-128" src="/img/ppc.png" alt="Pay-Per-Click (PPC) Advertising AT AFFINIX DIGITAL" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="tab4" className="rounded-b-lg home-feature-tab hidden">
                            {/* <!-- Managed SEO section --> */}
                            <div className="relative mx-auto lg:pb-48 last:pb-0 group">
                                <div className="flex w-full max-lg:flex-col lg:flex-row flex-wrap items-center">
                                    <div className="group-odd:pr-12 group-even:pl-12 w-full lg:w-1/2 mb-12 lg:mb-0">
                                        <div className=" pl-8  lg:max-w-lg">
                                            <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-bold">Website Design and Development
                                            </h2>
                                            <p className="mb-6 lg:mb-12 text-xl font-normal text-zinc-500">Make a lasting impression with a visually appealing and user-friendly website. Our expert designers and developers create websites that not only look great but also provide a seamless user experience, driving conversions and customer satisfaction.
                                            </p>
                                            {/* <!-- Learn more button --> */}
                                            <Link className="inline-block md:w-auto text-center mb-2 py-3 px-8 md:mr-4 text-md text-white font-semibold leading-normal bg-[#ffa726] hover:bg-[#ffa726] hover:text-white rounded transition duration-200"
                                                style={{ textShadow: "none", color: "white !important" }}
                                                href="/services/website-design-and-development"><span>Learn More</span>
                                                <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-1/2 pr-4">
                                        <img className="rounded-xl object-cover lg:h-128" src="/img/website design service.png" alt="Website Design and Development AT AFFINIX DIGITAL" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="tab5" className="rounded-b-lg home-feature-tab hidden">
                            {/* <!-- Managed SEO section --> */}
                            <div className="relative mx-auto lg:pb-48 last:pb-0 group">
                                <div className="flex w-full max-lg:flex-col lg:flex-row flex-wrap items-center">
                                    <div className="group-odd:pr-12 group-even:pl-12 w-full lg:w-1/2 mb-12 lg:mb-0">
                                        <div className=" pl-8  lg:max-w-lg">
                                            <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-bold">Content Marketing
                                            </h2>
                                            <p className="mb-6 lg:mb-12 text-xl font-normal text-zinc-500">Tell your brand story effectively with our content marketing services. From engaging blog posts to captivating videos, we create content that resonates with your audience and establishes your brand as an industry authority.
                                            </p>
                                            {/* <!-- Learn more button --> */}
                                            <Link className="inline-block md:w-auto text-center mb-2 py-3 px-8 md:mr-4 text-md text-white font-semibold leading-normal bg-[#ffa726] hover:bg-[#ffa726] hover:text-white rounded transition duration-200"
                                                style={{ textShadow: "none", color: "white !important" }}
                                                href="/services/content-marketing"><span>Learn More</span>
                                                <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="relative w-full lg:w-1/2 pr-4">
                                        <img className="rounded-xl object-cover lg:h-128" src="/img/content-marketing-services.png" alt="Content Marketing AT AFFINIC DIGITAL" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

            <section className="slider-container relative -mt-[50px] pb-8 p-4 lg:hidden">
                <div className="rounded-xl max-w-4xl shadow-xl  pt-10 bg-white container z-20">
                    {isMobile && (
                        <Slider ref={sliderRef} {...settings}>
                            <TabContent
                                id="tab1"
                                title="Search Engine Optimization (SEO)"
                                description="Enhance your online visibility and climb the search engine ranks with our SEO services. We employ cutting-edge strategies to optimize your website for search engines, ensuring your brand stands out in the competitive digital landscape."
                                imageUrl="/img/seo.png"
                            />
                            <TabContent
                                id="tab2"
                                title="Social Media Management"
                                description="Connect, engage, and grow your audience on social media platforms. Our experts craft compelling social media campaigns to boost brand awareness and drive meaningful interactions with your audience."
                                imageUrl="/img/social media marketing.png"

                            />
                            <TabContent
                                id="tab3"
                                title="Pay-Per-Click (PPC) Advertising"
                                description="Maximize your ROI with targeted PPC campaigns. We design and execute result-driven advertising strategies to bring high-quality leads to your business while optimizing your ad spend."
                                imageUrl="/img/ppc.png"

                            />
                            <TabContent
                                id="tab4"
                                title="Website Design and Development"
                                description="Make a lasting impression with a visually appealing and user-friendly website. Our expert designers and developers create websites that not only look great but also provide a seamless user experience, driving conversions and customer satisfaction."
                                imageUrl="/img/website design service.png"

                            />
                            <TabContent
                                id="tab5"
                                title="Content Marketing"
                                description="Tell your brand story effectively with our content marketing services. From engaging blog posts to captivating videos, we create content that resonates with your audience and establishes your brand as an industry authority."
                                imageUrl="/img/content-marketing-services.png"
                            />
                        </Slider>
                    )
                    }
                </div>
            </section>



        </>

    )
}

export default Services