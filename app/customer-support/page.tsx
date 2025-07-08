"use client"
import BottomFooter from "@/components/re/bottomFooter"
import LetsTalk from "@/components/re/letsTalk"
import { useRef } from "react"

const CustomerSupport: () => void = () => {
    let letsTalk = useRef()
 const handleContactUs=()=>{
        window.location.replace("/enquiry")
    }
    return (
        <>
            <div>
                <div className="flex flex-col w-full bg-gradient-to-b from-o1 to-o2 
                p-6 lg:p-20">
                    <h1 className="text-white font-bold text-xl text-center lg:text-5xl lg:text-center">Tele services Fully Managed for
                        Sales / Customer / Technical support and Operations Teams.</h1>
                    <p className="text-sm text-gray-200 p-4 lg:text-lg lg:text-center">
                        Donocare has established partnerships with clients to
                        facilitate the smooth transition of critical business processes
                        to our state-of-the-art BPO service delivery center. Our track
                        record speaks for itself, as we have consistently provided
                        high-value outsourcing services to various industries.
                    </p>
                </div>
                <div className="p-6 mt-4 relative  lg:mt-10">
                    <div className="hidden lg:block absolute top-0 right-0 lg:w-14 xl:w-20 xl:h-40">
                        <img src="ark1.png" />

                    </div>
                    <div className="flex flex-col lg:grid  lg:grid-cols-2 justify-center items-center md:grid md:grid-cols-2">
                        <div className="lg:p-10 xl:p-10">
                            <img src="partnership.webp" />

                        </div>
                        <div className="lg:p-10 xl:p-20 md:p-10">
                            <p className="pt-4 text-md text-gray-700 md:text-xs lg:text-md xl:text-lg " >
                                Donocare has established partnerships with clients to facilitate
                                the smooth transition of critical business processes to our state-of-the-art BPO
                                service delivery center. Our track record speaks for itself, as we have
                                consistently
                                provided high-value outsourcing services to various industries<br />

                                Donocare has established strategic alliances with clients to ensure a
                                smooth transition of critical business processes to our cutting-edge BPO service delivery
                                center.Our track record speaks for itself, as we have provided high-value outsourcing services
                                to a variety of industries on a consistent basis.


                            </p>
                            <button className="mt-8 ml-4 mb-10 rounded-xl flex justify-center items-center text-center bg-o1 text-white w-fit h-fit 
                    py-[8px] px-6 cursor-pointer" onClick={handleContactUs} >Contact Us</button>
                        </div>

                    </div>
                    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
                        <div className=" lg:p-10 xl:p-20">
                            <p className="pt-4 text-md text-gray-800 md:text-xs lg:text-lg ">
                                At Donocare, we offer an extensive range of business process services
                                to industry leaders in multiple countries, including India, UK, USA, Australia, Middle East,
                                and Southeast Asia. Our primary objective is to provide end-user customer satisfaction while
                                ensuring optimal ROI for our
                                clients in both front and back-office outsourcing requirements.
                            </p>
                            <p className="pt-4 tetx-md text-gray-800 md:text-xs lg:text-lg">
                                At Donocare, we provide customized BPO services that cater to every business requirement.
                                Our track record speaks for itself, as we have consistently delivered exceptional BPO services to
                                various industries. Our main focus is to provide a delightful customer experience while ensuring optimal
                                ROI for our clients. With over 15 years of experience, our support team members offer high-quality
                                outsourcing solutions,
                                making us the preferred BPO service provider for businesses.
                            </p>
                        </div>
                        <div className="lg:p-20">
                            <img className="mt-4 p-4" src="business.webp" />

                        </div>
                    </div>

                </div>
                <div className="flex relative flex-col p-4 mt-6 gap-y-6 lg:grid md:grid md:grid-cols-2 md:gap-x-6
                 lg:grid-cols-2 xl:grid xl:grid-cols-3 lg:gap-x-10 lg:p-28  ">
                    <div className="hidden lg:block absolute top-0 left-0 lg:w-16 xl:w-20  ">
                        <img src="ark2.png" />

                    </div>

                    <div className="flex flex-col p-4 space-y-2 border border-primaryGreen rounded-2xl hover:border-o">
                        <img className="w-20 h-24 mt-4" src="chatsupport.png" />
                        <h2 className="font-bold text-primaryGreen text-xl ">Live Chat Support Services</h2>
                        <p className="text-sm tex-gray-600 font-light pb-4">
                            Donocare's live chat support services offer a strategic and
                            cost-effective solution to provide 24/7 live chat support to our clients.
                            Our expert professionals take the time to understand your requirements and
                            provide convincing answers to resolve customer queries, ultimately persuading
                            them to convert. With our live chat support services, you can obtain real-time
                            assistance, convert visitors into customers, reduce cart abandonment rates, and
                            gather detailed information about your visitors.
                        </p>
                    </div>
                    <div className="flex flex-col p-4 space-y-2 border border-primaryGreen rounded-2xl hover:border-o">
                        <img className="w-20 h-24 mt-4" src="customer.png" />
                        <h2 className="font-bold text-primaryGreen text-xl ">Customer Support Services</h2>
                        <p className="text-sm tex-gray-600 font-light pb-4">
                            At Donocare, our certified and experienced team provides
                            round-the-clock customer support that effectively boosts your sales,
                            allowing you to outsource customer services and focus on growing your business.
                            Our customer support team provides assistance across multiple channels, enhances
                            productivity, saves time and money, and ultimately boosts your customer
                            satisfaction. With our services, you can rest assured that your customers are
                            receiving top-notch support, while you concentrate on scaling your business.

                        </p>
                    </div>
                    <div className="flex flex-col p-4 space-y-2 border border-primaryGreen rounded-2xl hover:border-o">
                        <img className="w-20 h-24 mt-4" src="call-center.png" />
                        <h2 className="font-bold text-primaryGreen text-xl ">Product Support Services</h2>
                        <p className="text-sm tex-gray-600 font-light pb-4">
                            At Donocare, our customer service outsourcing company provides
                            a broad range of product support services focused on delivering excellent
                            customer satisfaction. Our expert team fulfills the specific needs of
                            businesses with our customized product support services and system-level
                            reports. We understand the importance of providing timely and effective product
                            support to customers, and we work diligently to ensure that their needs are met.
                            With our services, you can rest assured that your customers are receiving
                            top-notch product support, allowing you to focus on other aspects of your
                            business.

                        </p>
                    </div>
                    <div className="flex flex-col p-4 space-y-2 border border-primaryGreen hover:border-o rounded-2xl">
                        <img className="w-20 h-24 mt-4" src="technical.png" />
                        <h2 className="font-bold text-primaryGreen text-xl ">Technical Support Services</h2>
                        <p className="text-sm tex-gray-600 font-light pb-4">
                            At Donocare, we help you build long-lasting customer
                            relationships with our post-purchase technical support
                            services. Our technical experts handle a wide range of
                            issues, from tier one i.e. solving simple queries to
                            providing multiple tier support applications. We
                            understand the importance of providing timely and
                            effective technical support to customers, and we work
                            diligently to ensure that their needs are met.
                            Through regular feedback cycles obtained from our
                            clients, we continuously monitor the performance
                            of our tech support professionals and strive to
                            improve our services.

                        </p>
                    </div>
                    <div className="flex flex-col p-4 space-y-2 border border-primaryGreen rounded-2xl hover:border-o">
                        <img className="w-20 h-24 mt-4" src="order-processing.png" />
                        <h2 className="font-bold text-primaryGreen text-xl ">Order Proccessing Services</h2>
                        <p className="text-sm tex-gray-600 font-light pb-4">
                            At Donocare, we offer a complete range of order processing services,
                            which includes management of order taking, upselling and cross-selling,
                            and inbound sales. Our operators provide customized responses to your customers,
                            ensuring that their orders are processed efficiently and accurately. We understand
                            the importance of providing an excellent customer experience during the order processing stage,
                            and our team works diligently to ensure
                            that your customers receive top-notch service. With our order processing services.

                        </p>
                    </div>



                </div>
                <div className="flex flex-col mt-12 lg:mt-0 justify-center items-center p-4 lg:p-20 ">
                    <h2 className="text-center font-bold text-xl text-pH lg:text-4xl">Outsourcing Support </h2>
                    <p className="font-light text-sm text-center  pt-4 lg:text-lg">
                        We are a perfect business partner for any company as we deliver cost-effective and
                        scalable outsourcing customer
                        service solutions by understanding the value of a good customer relationship.
                    </p>

                </div>
                <div className="p-4 ">
                    <div className="bg-white flex flex-col p-4 rounded-2xl shadow-2xl lg:grid lg:grid-cols-2
                    md:grid md:grid-cols-2 md:justify-center md:items-center lg:justify-center lg:items-center">
                        <div className="lg:p-14 lg:justify-center lg:items-center">
                            <label className="text-2xl font-bold pt-4 text-pH pb-4 lg:text-3xl lg:mb-20" >Why Choose Us</label>
                            <p className="font-light text-sm pb-3 lg:text-md xl:text-lg lg:pt-14 md:text-xs">
                                We understand that every business is unique, and we work closely with our
                                clients to deeply analyze their business and fulfill all their requirements.
                                Whether you are looking for cost-effective solutions, technical improvements,
                                or improvement in the quality of services, we are experts in all areas as a
                                leading BPO service provider and customer service outsourcing provider.

                            </p>
                            <p className="font-light text-sm pb-3 lg:text-md xl:text-lg md:text-xs">
                                We pride ourselves on offering flexible business solutions and unique offerings
                                that allow our clients to easily expand their business operations in the long run.
                                Our team of experts is dedicated to providing high-quality services that exceed our clients'
                                expectations,
                                ensuring that they receive the best possible value from our partnership.
                            </p>
                        </div>
                        <div>
                            <img className="p-4 lg:p-14" src="chooseus.webp" /></div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <LetsTalk letsTalkRef={letsTalk}/>
            </div>
            <div className="mt-6">
                <BottomFooter />
            </div>
        </>
    )
}



export default CustomerSupport