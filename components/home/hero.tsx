import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sfl from "@/utils/sfl";
import { FaArrowRight } from "react-icons/fa";


const Hero= ({scrollTo}) => {
    
  return (
    <>
      <section>
        <div  className=" relative flex flex-col w-full h-[48vh] lg:h-[95vh] justify-center items-center  ">
          <div className="relative top-0 w-full">
            <img
              className="relative top-0 w-full h-[48vh]   lg:h-[85vh] "
              src="banner.webp"
            />
          </div>
          <motion.div            
            

            className="flex flex-col w-full h-[48vh]  justify-center items-center p-6 absolute top-0 
          lg:h-[85vh]"
          >
            <h1 
            
            className="text-[21px] lg:w-[50vw] text-center  text-white lg:text-[34px] xl:text-[43px]">
              OFFSHORE DEVELOPMENT &
              <span className="text-[26px] font-bold pl-[5px] lg:text-[42px] xl:text-[50px] hero  ">
               IT CONSULTANCY
              </span>{" "}
              SERVICES
            </h1>
            <p
            
              className=" text-[12px] text-white lg:text-white text-center  mt-2 lg:text-[23px]
             lg:pl-36 lg:pr-36 xl:pl-72 xl:pr-72 lg:mt-[10vh] md:pl-10 md:pr-10 "
            >
              Our aim is to assist our clients in enhancing their productivity
              and efficiency by offering a range of services. We have a team of
              skilled resources who specialize in talent and can undertake
              projects of varying magnitudes, from small to large-scale.
            </p>
            <a onClick={()=>{
              scrollTo()
            }}
            
              className="flex text-center mt-8 text-sm  text-white items-center  cursor-pointer
                bg-o w-fit h-fit px-6 py-2 rounded-3xl lg:mt-[4vh] lg:px-28 lg:py-6 lg:bg-transparent  
                lg:border-2 lg:border-o lg:hover:bg-o transform ease-in duration-300 lg:text-2xl"
            >
              ENQUIRY NOW
              <label className="pl-2 lg:pl-6">
                <FaArrowRight />
              </label>{" "}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Hero;
