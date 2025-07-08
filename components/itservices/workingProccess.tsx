"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WorkingProccess = () => {
    return (
        <>
            <section>
                <div className="flex flex-col p-4 pt-6 w-full justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-lg text-pH lg:text-4xl font-bold ">Working Process</h4>
                        <h2 className="mt-2 font-bold text-2xl text-center text-red lg:text-3xl">Industry Best Practices to the Core</h2>
                    </div>
                    <div className=" mt-10 flex flex-col gap-y-10 w-full  gap-x-20 justify-center  relative  
                    md:grid md:grid-cols-2 md:p-10 lg:p-10 xl:p-14 xl:grid xl:grid-cols-3 ">
                       
                        <Box1 />
                        <Box2 />
                        <Box3 />
                        <Box4 />
                        <Box5 />
                    </div>
                </div>
            </section>
        </>
    )
}

function Box1() {
   
    return (
        <div className="" >
            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">01</a>
            </div>
            <div className="relative mt-6 ">
                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                </div>
                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                    <h2 className="text-2xl font-bold ">Discovery</h2>
                    <p className="text-xs font-light mt-2">We recognize the significance and value of constucting an application
                        based on a thorough  understanding of their business needs.
                    </p>
                </div>
            </div>
        </div>

    )
}
function Box2() {
    
    return (
        <div  className="">
            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">02</a>
            </div>
            <div className="relative mt-6 ">
                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                </div>
                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                    <h2 className="text-2xl font-bold ">Planning</h2>
                    <p className="text-xs font-light mt-2">in order to estimate the time, cos ,resources,and
                        other factory , we engage in through project planning and prepare a project scope document.
                    </p>
                </div>
            </div>
        </div>

    )
}
function Box3() {
    
    return (
        <div  className="">
            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">03</a>
            </div>
            <div className="relative mt-6 ">
                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                </div>
                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                    <h2 className="text-2xl font-bold ">Design</h2>
                    <p className="text-xs font-light mt-2">To meet our customer's specific business
                        needs. we leverage AI and various other tools to develop the application
                    </p>
                </div>
            </div>
        </div>

    )
}
function Box4() {
    
    return (
        <div  className="">
            <div className="w-20 ml-10 h-20 rounded-full bg-white  shadow-2xl flex justify-center items-center">
                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">04</a>
            </div>
            <div className="relative mt-6 ">
                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                </div>
                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                    <h2 className="text-2xl font-bold ">Testing</h2>
                    <p className="text-xs font-light mt-2">Before progressing to the production phase, each development phase must
                        successfully pass multiple testing scenarios.
                    </p>
                </div>
            </div>
        </div>

    )
}
function Box5() {
    
    return (
        <div  className="">
            <div className="w-20 ml-10 h-20 rounded-full bg-white shadow-2xl flex justify-center items-center">
                <a className=" bg-sec flex justify-center items-center 
                                w-14 h-14 rounded-full text-xl font-bold text-white">05</a>
            </div>
            <div className="relative mt-6 ">
                <div className=" absolute w-8  top-[-21px] left-[35px] overflow-hidden ">
                    <div className="-mt-8 h-16 bg-gray-200 -rotate-45 transform origin-bottom-right"></div>
                </div>
                <div className="  mt-8 flex flex-col w-full bg-gray-200 rounded-xs p-6">
                    <h2 className="text-2xl font-bold ">Project Delivery</h2>
                    <p className="text-xs font-light mt-2">Upon receiving approval from our quality assurance team, we will
                        proceed with deploying the project to the Live environment.
                    </p>
                </div>
            </div>
        </div>

    )
}


export default WorkingProccess