"use client";
import Letter from "@/components/about/letter";
import Partners from "@/components/about/partners";
import Technologies from "@/components/about/technologies";
import BottomFooter from "@/components/re/bottomFooter";
import LetsTalk from "@/components/re/letsTalk";
import op from "@/utils/op";
import { motion } from "framer-motion";
import { useRef } from "react";
import Teams from "../../components/teams/Teams"
const About = () => {
    let letsTalkRef = useRef()


    return (
        <>
            <motion.main
            initial="initial"
            animate="animate"
            variants={op}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            >
                <div>
                    <div className="flex w-full h-fit bg-gradient-to-t from-o1 to-o2 ">
                        <label className="py-4 text-3xl font-bold text-white pl-14 lg:py-8 lg:pl-20 ">About us </label>
                    </div>

                    <Letter />
                    <Partners />
                    <Technologies />




                </div>
                
                <div className=" flex justify-center items-center max-w-screen bg-blue-100 p-5 box-border">
<Teams/>
                </div>
                <div className="mt-8">
                    <LetsTalk letsTalkRef={letsTalkRef} />
                </div>
                <div className="mt-12">
                    <BottomFooter />
                </div>
            </motion.main>


        </>
    )
}
export default About