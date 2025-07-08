"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Letter = () => {
   


    return (
        <>
            <section>
                <div  className="bg-bg2 m-2  h-fit relative lg:justify-center lg:items-center lg:mt-20 lg:mb-20 lg:ml-32 lg:mr-32">
                    <div className="absolute w-8 h-8 border right-0 top-0 border-gray-400 bg-white">
                        <div className="w-8  overflow-hidden ">
                            <div className="-mt-8 h-16 bg-primaryGreen -rotate-45 transform origin-bottom-right"></div>
                        </div>

                    </div>
                    <div className="lg:pl-[5%] lg:pr-[5%] lg:gap-y-8 lg:justify-center
                     lg:items-center">
                        <h2 className="pl-4 pr-4 pt-8 text-xl font-bold text-pH text-center pb-4 lg:text-4xl lg:text-center ">
                            We are passionate about serving our customers and leading-edge</h2>
                        <p  className="pl-5 pt-2  text-gray-700 text-center pr-5 text-sm lg:text-lg">Through years of hard work, we have earned a reputation for top-tier services.
                            At Donocare, we implement our strategy proactively. Our expert team makes it
                            their mission to maintain your business, allowing you to focus on your core
                            busines
                            As a comprehensive service provider, Donocare can handle all the details for
                            you.
                        </p>
                        <p  className="pl-5 pt-6 pb-6 text-gray-700 text-center pr-5 text-sm lg:text-lg lg:pb-12">
                            Donocare has been helping its customers achieve a promising future by collaborating with them to succeed.
                            We have achieved an award-winning reputation with cutting-edge technologies and industry knowledge
                            across all business sectors, establishing strong relationships with our customers. Being the best means
                            delivering products that customers can trust for unparalleled performance. Donocare is committed to
                            being the market leader you can rely on,
                            determined to blend your business with technology to accelerate progress.</p>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Letter