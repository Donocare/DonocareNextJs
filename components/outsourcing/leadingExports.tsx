"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const LeadingExperts = () => {
    


    return (
        <>
            <section>
                <div className="p-4 md:pl-8 md:pr-8 flex flex-col lg:justify-center lg:items-center lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
                    <Text />
                    <img  src="experts.webp" className="p-6 lg:p-10 md:p-10 " />


                </div>
            </section>
        </>
    )
}

function Text() {
    
    return (
        <div  className="flex flex-col pt-6 lg:pt-0 md:pt-0 space-y-6 lg:p-10">
            <h2 className="font-bold text-3xl md:text-2xl  text-pH lg:text-4xl">
                We are commited to providing industry leading experts
            </h2>
            <p className="font-light text-sm lg:text-md xl:text-lg md:text-xs">We are committed to providing exceptional service to our customers.
                We work closely with you to understand your
                business needs and provide customized solutions to help you achieve your goals.
            </p>
        </div>

    )
}



export default LeadingExperts