"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ItConsulting = () => {
    return (
        <>
            <section>
                <div className="flex flex-col justify-center items-center gap-y-10  lg:gap-x-10 lg:p-10  mt-10 m-4 lg:grid lg:grid-cols-2
                 md:grid md:grid-cols-2 md:gap-x-7 md:gap-y-10 md:p-10">
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
        <div className="rounded-md shadow-xl p-4 hover:shadow-2xl ">
            <label className="text-2xl font-bold text-pH">IT Consulting</label>
            <p className="font-light text-sm mt-4 lg:pb-4 md:pb-10">Our IT consulting services are designed to help you make informed decisions about your IT infrastructure
                and technology investments. We provide expert advice and guidance on a wide range of IT-related topics,
                including cybersecurity, cloud computing, software development, and digital transformation.</p>
        </div>

    )
}
function Box2() {
    
    return  <div className="rounded-md shadow-xl p-4 hover:shadow-2xl ">
            <label className="text-2xl font-bold text-pH">Digital Marketing</label>
            <p className="font-light text-sm mt-4 ">To succeed in the digital world, your business needs a strong online presence. Our digital
                marketing services are designed to help you increase your
                online visibility and attract more customers to your business. We provide a wide range of digital
                marketing services, including search engine optimization (SEO), social media marketing, email marketing,
                and content marketing.</p>
        </div>

    
}
function Box3() {
   
    return (
        <div className="rounded-md shadow-xl p-4 hover:shadow-2xl  ">
            <label className="text-2xl font-bold text-pH">Software Development</label>
            <p className="font-light text-sm mt-4 ">Our software development services are designed to help you develop custom software solutions
                that streamline your business operations and improve your efficiency. We have a team of experienced
                developers
                who specialize in developing software solutions that are tailored to your business needs.</p>
        </div>


    )
}
function Box4() {
   
    return (
        <div  className="rounded-md shadow-xl p-4 hover:shadow-2xl ">
            <label className="text-2xl font-bold text-pH">Cloud Services</label>
            <p className="font-light text-sm mt-4 md:pb-3 lg:pb-2 ">Our cloud services are designed to help you move your business to the cloud, giving you access
                to a wide range of benefits, including increased flexibility, scalability, and security.
                Our team of experts will help you migrate your business
                to the cloud and provide ongoing support to ensure that your business runs smoothly.</p>
        </div>

    )
}



export default ItConsulting