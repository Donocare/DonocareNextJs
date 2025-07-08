import { useInView } from "framer-motion";
import { useRef } from "react";

const KeyDifference = () => {
  
  return (
    <>
      <section className="font-poppins">
        <div className="flex flex-col justify-center items-center m-4 mt-4 mb-20 ">
          <div className="flex justify-center items-center ">
            <label className="text-3xl  text-lightBlue font-bold text-center lg:text-5xl lg:mb-10 mb-10">
              Our key differentiators
            </label>
          </div>
          <div className="flex flex-col gap-y-10 lg:pl-4 lg:grid lg:grid-cols-3 lg:grid-rows-3 md:grid md:grid-cols-2">
            <Key1 />
            <Key2 />
            <Key3 />
            <Key4 />
            <Key5 />
            <Key6 />
            <Key7 />
            <Key8 />
          </div>
        </div>
      </section>
    </>
  );
};

function Key1() {
  
  return (
    <>
      <div
        
        
        className="flex   m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 "
      >
        <img src="01.png" className="w-14 h-12 mt-6 " />
        <div className="flex flex-col mt-4">
          <h1 className="text-xl text-darkBlue font-bold">
            End-to-End Solution
          </h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            We offer complete package of it solutions and security services from
            end point of Data center.
          </p>
        </div>
      </div>
    </>
  );
}

const Key2 = () => {
  
  return (
    <>
      <div
        
        
        className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4"
      >
        <img src="02.png" className="w-14 h-12 mt-6" />
        <div className="flex flex-col mt-4">
          <h1 className="text-xl text-darkBlue font-bold ">Cost Effective</h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            By reducing the deployment cost and effective network design we off
            low price solutions.
          </p>
        </div>
      </div>
    </>
  );
};
const Key3 = () => {
  
  return (
    <>
      <div
        
        
        className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4"
      >
        <img src="03.png" className="w-14 h-12 mt-6" />
        <div className="flex flex-col mt-4">
          <h1 className="text-xl text-darkBlue font-bold">Proactive</h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            We manage your network 24x7 to identify issues and address them
            before it affect your routine tasks.
          </p>
        </div>
      </div>
    </>
  );
};
const Key4 = () => {
  
  return (
    <>
      <div
        
        
        className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 "
      >
        <img src="04.png" className="w-14 h-12 mt-6" />
        <div className="flex flex-col mt-4">
          <h1 className="text-xl text-darkBlue font-bold">Customer friendly</h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            Customer services is the experience we deliver to the customers and
            we facilitate them.
          </p>
        </div>
      </div>
    </>
  );
};
const Key5 = () => {
  
  return (
    <>
      <div
        
        
        className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 "
      >
        <img src="05.png" className="w-14 h-12 mt-6" />
        <div className="flex flex-col mt-4">
          <h1 className="text-xl text-darkBlue font-bold">Quick response </h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            We alot dedicated line with our engineers so that issue can be
            addressed without delay.
          </p>
        </div>
      </div>
    </>
  );
};
const Key6 = () => {
  
  return (
    <>
      <div
        
        
        className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4 "
      >
        <img src="06.png" className="w-14 h-12 mt-6" />
        <div className="flex flex-col mt-4 ml-2">
          <h1 className="text-xl text-darkBlue font-bold">Vibrant team</h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            We have vibrant team of engineers with multi-domin expertise who
            meet your needs.
          </p>
        </div>
      </div>
    </>
  );
};
const Key7 = () => {
  
  return (
    <>
      <div
        
        
        className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4"
      >
        <img src="08.png" className="w-14 h-12 mt-6" />
        <div className="flex flex-col mt-4">
          <h1 className="text-xl text-darkBlue font-bold">Highly secure</h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            We remotly secure your facility on space internet,data transfers and
            end points protection with NGFW.
          </p>
        </div>
      </div>
    </>
  );
};
const Key8 = () => {
  
  return (
    <>
      <div
        
        
        className="flex  m-4 lg:shadow-xl  lg:p-4 lg:rounded-lg hover:shadow-2xl hover:rounded-lg hover:p-4"
      >
        <img src="09.png" className="w-14 h-12 mt-6" />
        <div className="flex flex-col mt-4">
          <h1 className="text-xl text-darkBlue font-bold">Highly scalable</h1>
          <p className="font-light ml-2 mt-4 text-darkBlue ">
            Our cloud services, container services, DB services and storage
            services are highly scalable.
          </p>
        </div>
      </div>
    </>
  );
};

export default KeyDifference;
