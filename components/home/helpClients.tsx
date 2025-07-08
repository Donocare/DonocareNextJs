import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const HelpClients = () => {
  return (
    <>
      <section>
        <div className="relative mt-6 w-full h-full bg-gradient-to-r from-lightGreen to-lightOrange ">
          <div className="hidden lg:block absolute right-0 w-4/6 bg-darkBlue h-[100vh] rounded-bl-[70%] ">
            <img
              src="about-background.jpg"
              className="absolute  w-full h-[100vh] rounded-bl-[70%]"
            />
          </div>
          <div className="absolute justify-center  right-0 w-4/6 bg-darkBlue h-[100vh] rounded-bl-full lg:rounded-bl-[70%] lg:opacity-90">
            <img
              src="about-rightimage.png"
              className="hidden lg:block animate-pulse absolute right-0 top-[20%]  opacity-85"
            />
            <img
              src="about-rightcircle.png"
              className="hidden lg:block absolute animate-pulse top-[85%] right-[15vh] opacity-85"
            />
          </div>
          <div className="relative h-[100vh] w-full pb-14 mb-4 ">
            <div className="relative h-full w-full ">
              <div
                className="flex flex-col text-white  lg:absolute lg:right-0 lg:w-4/6 lg:h-full lg:justify-center lg:items-center
              "
              >
                <div className="flex justify-start items-start lg:justify-center lg:items-center">
                  <h3 className="text-2xl mt-5 font-bold pl-16 text-orange-500 pt-6 ">
                    About Us{" "}
                  </h3>
                </div>
                <div className="flex flex-col justify-center items-center m-4  md:m-10 md:gap-20">
                  <label className=" text-4xl lg:pl-48 lg:pr-40">
                    We help clients invent their future.
                  </label>
                  <div className=" flex flex-col space-y-8 ml-10 lg:ml-48 md:ml-28 md:mr-28 lg:mr-44 mr-4 mt-8 text-gray-300">
                    <p className="text-md md:text-xl lg:text-xs  xl:text-lg">
                      At Donocare , we are committed to delivering
                      exceptional customer service and producing high-quality
                      work. Our team is dedicated to providing tailored
                      solutions that meet your specific requirements and
                      preferences.
                    </p>
                    <p className="lg:text-xs xl:text-lg">
                      We work closely with our clients to ensure that their
                      projects are completed within their specified timeframe,
                      budget, and to the highest standards.
                    </p>
                    <div className="w-full flex justify-center items-center">
                      <button
                        className=" flex 
                  bg-o1 h-fit w-fit mt-6 px-10 py-3 text-xl items-center rounded-3xl
                  shadow-xl "
                      >
                        <Link href={'/itservices'}>Read More</Link>
                        <span className="pl-2 text-2xl">
                          <AiOutlineArrowRight />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex ">
                <img
                  className=" absolute bottom-0 left-[-100px] opacity-50 lg:top-20 lg:left-4 lg:opacity-95"
                  src="about-dot.png"
                />
                <img
                  className=" absolute top-[20%] left-[10%] opacity-50 hidden lg:block  lg:opacity-95 w-2/6 
                 rounded-tr-[20%]  rounded-bl-[20%]  rounded-br-[20%]  "
                  src="about-image1.jpg"
                />
                <img
                  className=" absolute bottom-[10vh] left-[25%] hidden lg:block opacity-50 lg:opacity-95 
                rounded-tl-[20%]  rounded-bl-[20%]  rounded-br-[20%]  w-1/5 xl:bottom-0"
                  src="about-image2.jpg"
                />
                <img
                  className=" absolute bottom-[70%] left-[38%] hidden lg:block opacity-50 lg:opacity-95  w-32"
                  src="about-imagecircle.png"
                />
                <div className=" absolute bottom-[73%] left-[38%] hidden lg:block opacity-50 lg:opacity-95  w-32">
                  <div className="flex flex-col p-4 justify-center items-center animate-hang">
                    <h2 className="text-white text-xl font-bold">15 +</h2>
                    <p className="text-center text-white font-bold text-sm">
                      Years Of Experience
                    </p>
                  </div>
                </div>

                <img
                  className=" absolute opacity-50 animate-pulse hidden lg:block lg:top-[55%] lg:left-[2%] lg:opacity-95"
                  src="about-leftcircle.png"
                />
                <img
                  className=" absolute  opacity-50 hidden lg:block 
                 lg:top-[70%] lg:left-[-25%] lg:opacity-95"
                  src="about-layer.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpClients;
