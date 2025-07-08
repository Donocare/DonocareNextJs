
"use client";
import BottomFooter from "@/components/re/bottomFooter"
import LetsTalk from "@/components/re/letsTalk";

import op from "@/utils/op"
import { motion } from "framer-motion"
import { useRef } from "react";

const Contact: () => void = () => {
    const handleContactUs=()=>{
        window.location.replace("/enquiry")
    }
    let letstalk = useRef()
    return (
        <>
            <motion.main initial="initial"
        animate="animate"
        variants={op}
        transition={{
          duration: 1,
          delay: 0.1,
        }}>
                <div>
                    <div className="flex w-full h-fit bg-gradient-to-t from-o1 to-o2 " onClick={handleContactUs}>
                        <label className="py-4 text-3xl font-bold text-white pl-14 lg:py-8 lg:text-4xl lg:pl-20 cursor-pointer">
                            Contact us </label>
                    </div>


                </div>
                <div className="mt-10">
                    <LetsTalk letsTalkRef={letstalk} />
                </div>
                <div className="mt-20">
                    <BottomFooter />
                </div>
            </motion.main>
        </>
    )
}
export default Contact