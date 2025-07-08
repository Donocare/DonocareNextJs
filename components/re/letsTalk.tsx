"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Enquiry from "../enquiry/Enquiry"

export default function LetsTalk({letsTalkRef}) {
 
  return (
    <>
      <section >
        <div id="contact" className=" flex flex-col relative lg:mt-12">
          <div>
            <img src="ark2.png" className="absolute hidden lg:block w-20 h-40 top-0 left-0 " />
          </div>
          <div className="flex flex-col m-4 space-y-4 lg:justify-center lg:items-center lg:px-20  xl:px-40 lg:text-center sm:pt-36 md:pt-4">
            <h2 className="text-xl  text-pH font-bold lg:text-4xl xl:text-5xl">We have handpicked developers ready to work for your projects</h2>
            <p className="flex font-light lg:text-center lg:text-2xl">We know that hiring remote developers can be a daunting process.
              We’ve made it as easy as possible for you to find the perfect candidate</p>
          </div>

        </div>
        <div className="">
          {/* <div c */}
<Enquiry />
      
        </div>
      </section>
      {/* testing  */}
      {/* testing  */}


    </>
  )
}



function Field1() {
 
  return (
    <>
      <div   className="flex">
        <label className="font-bold text-2xl border-b border-o lg:border-b-2 lg:text-4xl lg:mb-10" >
          Get in </label>
        <a className="font-bold text-2xl pl-1 lg:text-4xl">touch</a>
      </div>

    </>
  )
}
function Field2() {
 
  return (
    <>
     <div   className="flex flex-col w-full">
              <label className="font-bold lg:text-2xl ">Full name <span className="text-red text-xl lg:text-4xl">*</span></label>
              <input type="text" placeholder="Enter your name" className=" p-2 outline-none border-b bg-transparent border-gray-600 justify-start
            w-5/6 ml-4"/>
            </div>

    </>
  )
}
function Field3() {
 
  return (
    <>
      <div   className="flex flex-col w-full">
              <label className="font-bold lg:text-2xl">Email <span className="text-red text-xl lg:text-4xl">*</span></label>
              <input type="text" placeholder="Enter your email" className="p-2 outline-none border-b bg-transparent border-gray-600 justify-start
            w-5/6 ml-4"/>
            </div>

    </>
  )
}
function Field4() {
 
  return (
    <>
      <div  className="flex flex-col w-full">
              <label className="font-bold lg:text-2xl">Message <span className="text-red text-xl lg:text-4xl">*</span></label>
              <textarea placeholder="Message" className=" m-2 outline-none border-b bg-transparent border-gray-600 justify-start
            w-5/6 ml-4"></textarea>
            </div>

    </>
  )
}
function Field5() {
 
  return (
    <>
     <div   className="flex justify-center items-center">
              <button className="bg-o1 text-white h-fit w-fit
               px-8 py-2 text-xl rounded-3xl ml-4 lg:px-14 lg:py-3 lg:text-2xl">Submit</button>

            </div>
    </>
  )
}
