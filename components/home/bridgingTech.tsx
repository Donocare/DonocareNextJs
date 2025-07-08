import { useInView } from "framer-motion";
import { useRef } from "react";

const BridgingTech = ()=>{
    return(
        <>
            <section>
            <div className="flex flex-col mt-6 relative">
          <div className="">
            <div className="flex flex-col m-4 md:justify-center md:items-center lg:justify-center lg:items-center lg:mb-10">
              <h4 className="text-pH text-xl font-bold lg:text-5xl lg:pt-10 lg:pl-14">
                INDUSTRIES & COMPANIES
              </h4>
              <h2 className="text-xl ml-2 mr-2 mt-2 text-red lg:text-4xl lg:pl-14 lg:pt-6">
                Bridging tech gaps for companies of all scales
              </h2>
            </div>
            <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:px-10">
                <Tech1/>
                <Tech2/>
                <Tech3/>
                <Tech4/>
                <Tech5/>
            </div>
          </div>
        </div>

            </section>
        </>
    )

}


const Tech1 = ()=>{
   
    return(
        <>
        <div
        
        

        className="flex m-4  lg:shadow-xl hover:shadow-2xl hover:rounded-lg p-4 lg:p-4 lg:rounded-xl">
                <img src="startup.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-lg font-bold text-primaryGreen">
                    Startup company
                  </label>
                  <p className="text-sm font-light pt-2">
                    we can help you get of the ground by providing the necessary
                    support and resources to help you grow and succees . Our
                    team of experts can assist you with everything from product
                    drvelopment to marketing and sales.
                  </p>
                </div>
              </div>

        </>
    )
}
const Tech2 = ()=>{
   
    return(
        <>
        <div 
        
           className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="manufacturing.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4 ">
                  <label className="text-2xl text-primaryGreen font-bold">
                    Manufacturing company
                  </label>
                  <p className="text-sm font-light pt-2 ">
                    we can help you optimize your production processes and
                    improve your product quality to meet the demands of your
                    customers.Our team of experts can assist you with everything
                    from proccess optimization to supply chain management to
                    ensure that your operation run smoothly and efficiently
                  </p>
                </div>
              </div>

        </>
    )
}
const Tech3 = ()=>{
   
    return(
        <>
        <div 
        
           className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="productbased.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">
                    Product-based company
                  </label>
                  <p className="text-sm font-light pt-2">
                    we can help you streamline your optimization and optimize
                    your supply chain to increase efficiency and reduce costs.
                    We can also assist you with product design, prototypin, and
                    testing to ensure that your products. meet the highest
                    standards of quality and functionality.
                  </p>
                </div>
              </div>

        </>
    )
}
const Tech4 = ()=>{
   
    return(
        <>
        <div 
        
           className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="saascompany.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">
                    A SAAS company
                  </label>
                  <p className="text-sm font-light pt-2 ">
                    We can help you develop and implement innovative solutions
                    to help you stand out in a crowded market. We can assist you
                    with everything from software development to customer
                    support to help you grow and scale your business.
                  </p>
                </div>
              </div>
        </>
    )
}
const Tech5 = ()=>{
   
    return(
        <>
        <div 
        
           className="flex m-4 lg:shadow-xl hover:shadow-2xl lg:p-4 lg:rounded-xl hover:rounded-lg p-4">
                <img src="serviesbased.png" className="w-20 h-14" />
                <div className="flex flex-col  ml-4">
                  <label className="text-2xl text-primaryGreen font-bold">
                    Services-based company
                  </label>
                  <p className="text-sm font-light pt-2">
                    We can help you develop and implement innovative solutions
                    to help you stand out in a competitive market. We can assist
                    you with everything from marketing and sales to customer
                    support to help you grow and scale your business.
                  </p>
                </div>
              </div>

        </>
    )
}


export default BridgingTech 

