"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Skilled = () => {
    
    return (
        <>
            <section>
                <div className="flex flex-col justify-center items-center p-4 text-white gap-y-6 lg:gap-x-10 
                lg:p-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 md:grid md:grid-cols-2 md:gap-x-10 md:p-10">
                    <Box1 />
                    <Box2 />
                    <Box3 />
                    <Box4 />
                </div>

            </section>
        </>
    )
}

function Box1() {
    
    return (
        <div  className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
            <img  src="skilled.png" className="w-20 h-16 mt-4 " />
            <h3 className="mt-6 lg:text-xl ">Skilled and Experienced Talent</h3>
            <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg">Our tech employees are highly skilled and experienced in their respective fields.
                ensuring that you have access to the right talent to complete your projects.
            </p>
        </div>

    )
}
function Box2() {
    
    return (
        <div  className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
        ">
            <img src="effective.png" className="w-20 h-16 mt-4 " />
            <h3 className="mt-6 lg:text-xl">Cost-Effective Solution</h3>
            <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg lg:pb-8 md:pb-8">
                We provide cost-effective solution that can help you save money on your IT-related
                projects.
            </p>
        </div>


    )
}
function Box3() {
    
    return (
        <div className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
            <img src="flex.png" className="w-20 h-16 mt-4 " />
            <h3 className="mt-6 lg:text-xl">Flexibility</h3>
            <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg">
                We offer flexible hiring models that allow you to hire a
                tech person on a full-time, part-time, or project basis, depending on your business needs.
            </p>
        </div>

    )
}
function Box4() {
    
    return (
        <div  className="flex flex-col p-4 justify-center items-center bg-darkBlue rounded-xl
                    ">
            <img  src="ongoing.png" className="w-20 h-16 mt-4 " />
            <h3 className="mt-6 lg:text-xl ">Ongoing Support</h3>
            <p className="text-sm font-light mt-4 text-center mb-4 lg:text-lg lg:pb-8">
                We provide ongoing support to ensure that your tech person
                is performing optimally and meeting your business needs.
            </p>
        </div>

    )
}


export default Skilled