"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const Partners = () => {
   
``
    return (
        <>
            <section>
                <div className="relative ">
                    <div className="hidden  lg:block absolute top-0 right-0 w-20 h-36">
                        <img src="ark1.png" />
                    </div>
                    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
                        <div className="m-6 mt-12 lg:m-20">
                            <img  src="partner_img.webp" />
                        </div>
                        <div className="flex flex-col p-4 pt-8 space-y-4 lg:justify-center lg:items-center lg:p-16">
                            <h3 className="font-bold text-xl text-pH lg:text-4xl  "
                                 >Partner with us for customized solutions</h3>
                            <p  className="pb-2 text-light text-gray-700 lg:text-xl ">At Donocare, we are committed to delivering exceptional customer service
                                and producing high-quality work. Our team is dedicated to providing tailored
                                solutions that meet your specific requirements
                                and preferences. We work closely with our clients to ensure that their projects
                                are completed within their specified timeframe, budget, and to the highest
                                standards.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )


}


export default Partners