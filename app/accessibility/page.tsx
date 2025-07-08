
'use client'
import BottomFooter from "@/components/re/bottomFooter"

const Accessibility:()=>void = ()=>{
    return (
        <>
            <div className="text-gray-700">
                <div className="flex h-fit bg-gradient-to-b from-o1 to-o2 lg:py-8 lg:pl-20 ">
                    <label className="text-2xl pl-6 text-white font-bold
                    py-4 lg:text-4xl">Accessibility</label>
                </div>
                <div className="flex relative flex-col space-y-4 m-2 pl-4 mt-2 bg-bg2 lg:justify-center lg:items-center lg:mt-20 lg:mb-20 lg:ml-32 lg:mr-32
                lg:pl-[5%] lg:pr-[5%] lg:pb-10">
                    <div className="absolute w-8 h-8 border right-0 top-0 border-gray-400 bg-white">
                        <div className="w-8  overflow-hidden ">
                            <div className="-mt-8 h-16 bg-primaryGreen -rotate-45 transform origin-bottom-right"></div>
                        </div>

                    </div>
                    <h2 className="text-pH lg:pt-10 text-xl font-bold pt-4 lg:text-4xl">Accessibility </h2>
                    <p className="text-sm lg:text-lg">
                    Donocare Website provides its users with disabilities who find difficult 
                    or even impossible to access the information that is available to all our 
                    other customers.
                     We have adopted and have used the techniques to make the website simpler. 
                    </p>
                    <p className="text-sm pb-4 lg:text-lg">
                    We have designed our website to meet the Web Accessibility Initiative 
                    (WAI) Content Accessibility Guidelines set by the World Wide Web
                     Consortium (W3C). We have implemented 'Double-A' standards wherever possible,
                      if you come across a part of our
                     site which is difficult to access please let us inform about it.

                    </p>
                    
                </div>
            </div>
            <div className="mt-4">
                <BottomFooter/>
            </div>
        </>
    )
}
export default Accessibility