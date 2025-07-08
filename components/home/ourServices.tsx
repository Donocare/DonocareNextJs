import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const OurServices = () => {
  return (
    <>
      <section className=" font-poppins">
        <div 
         className=" flex flex-col bg-lG mt-6 justify-center items-center relative">
          <div>
            <img
              src="ark3.png"
              className="absolute w-20 h-32 lg:w-32 lg:h-52 top-4 left-0"
            />
          </div>
          <div className="mt-6 lg:mb-14 lg:pt-14">
            <label className="text-2xl font-bold text-pH lg:text-5xl ">
              Our Service{" "}
            </label>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-y-14 m-10 w-full lg:grid lg:grid-cols-3 lg:grid-row-1 lg:pb-14 
            xl:px-14 md:grid md:grid-cols-2 md:text-center"
          >
            <Service1 />
            <Service2 />
            <Service3 />
          </div>
        </div>
      </section>
    </>
  );
};

const Service2 = () => {
  
  return (
    <>
      <div
       
      
      className="  flex flex-col justify-center items-center w-full ">
        <div className="flex flex-col justify-center  items-center bg-white w-20 h-20 rounded-full border border-lo">
          <div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-lt to-g
                flex justify-center items-center"
          >
            <img src="outsourcing.png" className="h-10 w-10" />
          </div>
        </div>

        <div className="w-[2px] h-12 bg-gray-800"></div>

        <div className="flex flex-col w-4/5 justify-center items-center relative ">
          <div
            className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl "
          >
            <label className=" py-2 text-white text-md font-bold">
            Outsourcing Services
            </label>
          </div>
          <div className="absolute top-14 flex justify-between w-full">
            <div className="w-6  overflow-hidden inline-block">
              <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
            </div>
            <div className="w-6  overflow-hidden inline-block">
              <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl  "
          >
            <div className="flex flex-col justify-center items-center list-none ">
              <p className="text-sm text-gray-300 lg:mt-4 ml-5 mr-5 pt-20 ">
              We provide dedicated tech employees to work on your projects, ensuring that you have access 
              to the right talent to complete your projects.
              </p>
              <li
                className="flex justify-center mt-4  items-center mb-4
          w-fit h-fit px-8  bg-lt rounded-xl text-white "
              >
                <Link href={'/outsourcing'}>More</Link>
                <span className="pl-2 ">
                  <AiOutlineArrowRight />
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Service1 = () => {
  
  return (
    <>
      <div 
      className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
          <div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-lt to-g
                flex justify-center items-center"
          >
            <img src="itServices.png" className="h-10 w-10" />
          </div>
        </div>

        <div className="w-[2px] h-12 bg-gray-800"></div>

        <div className="flex flex-col w-4/5 justify-center items-center relative ">
          <div
            className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl "
          >
            <label className=" py-2 text-white text-md font-bold">
              DIGITAL IT SERVICES
            </label>
          </div>
          <div className="absolute top-14 flex justify-between w-full">
            <div className="w-6  overflow-hidden inline-block">
              <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
            </div>
            <div className="w-6  overflow-hidden inline-block">
              <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl  "
          >
            <div className="flex flex-col justify-center items-center list-none ">
              <p className="text-sm text-gray-300 lg:mt-4 ml-5 mr-5 pt-20 ">
                Our team of experts is dedicated to providing top-tier IT
                services to help your business and succeed in the digital world.
              </p>
              <li
                className="flex justify-center mt-4  items-center mb-4
          w-fit h-fit px-8  bg-lt rounded-xl text-white "
              >
                <Link href={'/itservices'}>More</Link>
                <span className="pl-2 ">
                  <AiOutlineArrowRight />
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Service3 = () => {
  
  return (
    <>
      <div  
     className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center bg-white w-20 h-20 rounded-full border border-lo">
          <div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-lt to-g
                flex justify-center items-center"
          >
            <img src="support.png" className="h-10 w-10" />
          </div>
        </div>

        <div className="w-[2px] h-12 bg-gray-800"></div>
        <div className="flex flex-col w-4/5 justify-center items-center relative ">
          <div
            className="flex justify-center items-center  bg-gradient-to-r from-o1 to-o2 
                    absolute top-4 w-full shadow-xl "
          >
            <label className=" py-2 text-white text-md font-bold">
              CUSTOMER SUPPORT
            </label>
          </div>
          <div className="absolute top-14 flex justify-between w-full">
            <div className="w-6  overflow-hidden inline-block">
              <div className=" h-16  bg-o1 -rotate-45 transform origin-top-left"></div>
            </div>
            <div className="w-6  overflow-hidden inline-block">
              <div className=" h-16  bg-o2 rotate-45 transform origin-top-right"></div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center  
                 bg-gradient-to-tr from-darkBlue to-darkBlue ml-6 mr-6
                 rounded-tl-xl rounded-tr-xl "
          >
            <div className="flex flex-col justify-center items-center list-none">
              <p className="text-sm text-gray-300 ml-5 mr-5 pt-20 ">
                Donocare has established partnership with clients to
                facilitate the smooth transition of critical business processes
                to our state-of-the-art.
              </p>
              <li
                className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-8  bg-lt rounded-xl text-white"
              >
                <Link href={'/customer-support'}>More</Link>
                <span className="pl-2">
                  <AiOutlineArrowRight />
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
