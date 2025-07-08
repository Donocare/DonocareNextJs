"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const Technologies = () => {
    
    const technologies = [
        {
            name: "Android",
            image: 'brand-icon-1.png'
        },
        {
            name: "Codeigniter",
            image: 'brand-icon-2.png'
        },
        {
            name: "Flutter",
            image: 'brand-icon-3.png'
        },
        {
            name: "NodeJs",
            image: 'brand-icon-4.png'
        },
        {
            name: "python",
            image: 'brand-icon-5.png'
        },
        {
            name: "React",
            image: 'brand-icon-6.png'
        },
        {
            name: "MYSQL",
            image: 'brand-icon-7.png'
        },
        {
            name: "Angular",
            image: 'brand-icon-8.png'
        },
        {
            name: "Salesforce",
            image: 'brand-icon-9.png'
        },
        {
            name: "Java",
            image: 'brand-icon-10.png'
        }, {
            name: "UI/UX",
            image: 'brand-icon-11.png'
        }, {
            name: "Larvel",
            image: 'brand-icon-12.png'
        },

    ]
    return (
        <>
            <section>
                <div className="flex flex-col justify-center items-center p-4 pt-10 ">
                    <h3 className="font-bold text-pH text-xl lg:text-4xl "> Technologies We Use</h3>
                    <div className="flex flex-col gap-y-6 lg:gap-y-10 lg:gap-x-10 w-full pt-10 lg:grid lg:grid-cols-3 lg:p-20
                    md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-8  md:p-10">
                        <TechBox img={technologies[0].image} label={technologies[0].name}/>
                        <TechBox img={technologies[1].image} label={technologies[1].name}/>
                        <TechBox img={technologies[2].image} label={technologies[2].name}/>
                        <TechBox img={technologies[3].image} label={technologies[3].name}/>
                        <TechBox img={technologies[4].image} label={technologies[4].name}/>
                        <TechBox img={technologies[5].image} label={technologies[5].name}/>
                        <TechBox img={technologies[6].image} label={technologies[6].name}/>
                        <TechBox img={technologies[7].image} label={technologies[7].name}/>
                        <TechBox img={technologies[8].image} label={technologies[8].name}/>
                        <TechBox img={technologies[9].image} label={technologies[9].name}/>
                        <TechBox img={technologies[10].image} label={technologies[10].name}/>
                        <TechBox img={technologies[11].image} label={technologies[11].name}/>
                    </div>
                </div>
            </section>
        </>
    )
}

function TechBox({ img, label }) {
    
    return <div  className=" w-full h-fit bg-gray-100 rounded-lg flex hover:shadow-2xl lg:bg-white lg:shadow-md
     justify-start items-center">
        <img src={img} className="w-12 h-12 m-4 p-2 rounded-lg shadow-xl bg-white 
        "/>
        <label className="pl-3 text-lg font-bold text-gray-700 lg:text-xl">{label}</label>

    </div>

}


export default Technologies