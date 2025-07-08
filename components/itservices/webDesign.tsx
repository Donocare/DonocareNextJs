"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WebDesign = () => {
  


    return (

        <>
            <section>
                <div className="p-4 mt-10 relative lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:justify-center
                md:items-center ">
                    <div  className="absolute hidden lg:block top-0 right-0 md:w-12 lg:w-12 xl:w-20">
                        <img src="ark1.png" />
                    </div>
                    <Img/>
                    <div  >
                        <h2 className="font-bold text-2xl text-pH lg:text-4xl md:text-xl md:pl-2">
                            Website Design and Development</h2>
                        <p className="p-4 font-light text-sm lg:text-md xl:text-xl md:text-xs">
                            Despite having a fully functional website, often business firms fail to make a
                            significant mark among their targeted market. Investing in the right areas will certainly lead your
                            business towards a promising success and help you climb higher on the ladder of market competition.
                            With Donocare, hitting the right note and making an impressive web presentation is possible
                            through our exclusive services. Being a web application service provider in this domain for many
                            years, we have the right blend of talent and industry insight to make your business flourish and
                            emerge stronger. We feel pride to we have a wide range of business firms from various types of
                            industries as our clients.
                        </p>
                    </div>
                </div>
            </section>
        </>

    )
}



function Img(){
    
    return <div >
        <img src="webdesign.webp" />

    </div>
}

export default WebDesign