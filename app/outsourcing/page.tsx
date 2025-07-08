
'use client'
import DedicatedTechEmployees from "@/components/outsourcing/dedicatedTechEmployees"
import LeadingExperts from "@/components/outsourcing/leadingExports"
import Skilled from "@/components/outsourcing/skillled"
import BottomFooter from "@/components/re/bottomFooter"

const OutsourcingServices: () => void = () => {


    return (
        <>
            <div>
                <div
                    className="flex flex-col space-y-4 text-white p-4 bg-gradient-to-b from-o1 to-o2 w-full h-fit
                    lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:justify-center md:items-center">
                    <div className="lg:p-8 lg:justify-center lg:items-center md:justify-center md:items-center">
                        <label className="text-white font-bold text-3xl mt-6 lg:text-4xl md:text-2xl   ">OutSourcing Services</label>
                        <p className="text-gray-100 text-sm lg:text-md lg:pt-10 xl:text-lg md:text-xs md:pt-6 pt-4">As a leading IT outsourcing company, we are committed to helping businesses achieve their
                            goals by providing them with access to skilled and cost-effective resources that can improve
                            their efficiency. Whether you need to outsource a single task or an entire project, we can help
                            you find the right solution to meet your business needs.</p>
                        <p className="text-gray-100 text-sm lg:text-md xl:text-lg md:text-xs">We provide a dedicated team of tech employees to work on your projects
                            , ensuring that you have access to the right talent to complete your projects on
                            time and within budget. Our team of experts specializes in a wide range of technologies and can
                            help you develop custom software solutions, build websites
                            , manage your IT infrastructure, and more.</p>
                    </div>
                    <div className="lg:p-10 ">
                        <img className="lg:p-20 md:p-16 p-10" src="outservices.webp" />
                    </div>
                </div>

                <DedicatedTechEmployees/>
                <LeadingExperts/>

                <Skilled/>
            </div>
            <div className="mt-8">
                <BottomFooter />
            </div>
        </>
    )
}



export default OutsourcingServices