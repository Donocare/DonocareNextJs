'use client'
import BottomFooter from "@/components/re/bottomFooter"

const Disclaimer:()=>void = ()=>{
    return (
        <>
            <div className="text-gray-700">
                <div className="flex h-fit bg-gradient-to-b from-o1 to-o2 ">
                    <label className="text-2xl pl-6 text-white font-bold
                    py-4 lg:text-4xl lg:py-8 lg:pl-20">Disclaimer</label>
                </div>
                <div className="flex relative flex-col space-y-4 m-2 pl-4 mt-2 bg-bg2  lg:justify-center lg:items-center lg:mt-20 lg:mb-20 lg:ml-32 lg:mr-32
                lg:pl-[5%] lg:pr-[5%] lg:pb-10">
                  <div className="absolute w-8 h-8 border right-0 top-0 border-gray-400 bg-white">
                        <div className="w-8  overflow-hidden ">
                            <div className="-mt-8 h-16 bg-primaryGreen -rotate-45 transform origin-bottom-right"></div>
                        </div>

                    </div>
                    <h2 className="text-pH text-xl font-bold pt-4 lg:text-4xl ">Disclaimer </h2>
                    <p className="text-sm lg:text-lg">
                    All content available on this site is the sole property of Donocare.  
                     The software, text, images, and graphics used on this site belong to  
                       Donocare. No material from this site may be copied, modified,   reproduced, 
                       
                       republished, uploaded, transmitted, posted or distributed in  
                        any form without prior written permission from Donocare. All rights 
                          not expressly granted herein are reserved. Illegal use of the materials 
                            appearing on this site may violate copyright, trademark and other 
                      applicable laws, and could result in criminal or civil penalty.
                    </p>
                    <p className="text-sm pb-4 lg:text-lg">
                    We have taken appropriate precautions to ensure that your 
                      access to this website is secure and free from any viruses or similar 
                        destructive software. However, Donocare does not, in any manner and 
                          for any purpose, warrant that your access to this website will be secure  
                           and free from any destructive software and you are hereby cautioned  
                            that viruses, Trojans or similar will not, under any circumstances, 
                              accept any liability for
                     any damage sustained as a result of your   accessing this website.

                    </p>
                    
                </div>
            </div>
            <div className="mt-4">
                <BottomFooter/>
            </div>
        </>
    )
}
export default Disclaimer