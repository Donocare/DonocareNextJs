"use client"
import BottomFooter from "@/components/re/bottomFooter"
import ItConsulting from "@/components/itservices/itConsulting"
import OurExpertise from "@/components/itservices/ourExpertise"
import WebDesign from "@/components/itservices/webDesign"
import WorkingProccess from "@/components/itservices/workingProccess"
import LetsTalk from "@/components/re/letsTalk"
import { useRef } from "react"

const IteServices: () => void = () => {
    const letsTalkRef = useRef(null)
  const scrollTo = () => {
    // letsTalkRef.current.scrollIntoView({ behavior: 'smooth' })
    window.location.replace(`/enquiry`)
  };
 
    return (
        <>
            <div>
                <div className=" p-6 bg-gradient-to-b  from-o1 to-o2 w-full h-fit flex justify-between lg:grid lg:grid-cols-2
                lg:justify-between lg:items-center">
                    <div className="lg:p-14">
                        <h1 className="font-bold text-2xl text-white
                    mt-10  lg:text-4xl " >Digital IT services</h1>
                        <p className="text-gray-200 p-4 text-sm lg:text-lg ">Our team of experts is dedicated to providing top-tier It services
                            to help your business grow and succees in the digital world. We offer a wide range
                            of services to meet your business needs. from website design and development to software
                            development and digital marketing.
                        </p>
                        <button className="flex justify-center items-center rounded-3xl mt-8 h-fit w-fit py-2 px-8 text-lg 
                        text-white bg-darkBlue lg:text-xl lg:py-3 lg:px-14 cursor-pointer" onClick={
                            ()=>{
                                scrollTo()
                            }
                        }>Contact Us </button>

                    </div>
                    <div className="hidden lg:block pl-36 pr-36 p-8">
                        <img src="digitalban.webp" />

                    </div>
                </div>

                <WebDesign/>
                <OurExpertise/>
                <WorkingProccess/>
                <ItConsulting/>
            </div>
            <div className="mt-10">
                <LetsTalk letsTalkRef={letsTalkRef} />
            </div>
            <div className="mt-10">
                <BottomFooter />
            </div>
        </>
    )
}


export default IteServices