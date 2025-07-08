"use client";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import axios from "axios";
import URL from "../../utils/Auth";
import { toast } from "react-toastify";
const Enquiry = () => {
  const [loader, setloader] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceName: "",
    message: "",
  });
  const onSubmitData = (e) => {
    e.preventDefault();
    if (
      contactData?.fullName?.trim() &&
      contactData?.serviceName?.trim() &&
      contactData?.message?.trim()
    ) {
      setloader(true);

      const body = {
        fullname: contactData?.fullName,
        email: contactData?.email,
        phone_number: contactData?.phoneNumber,
        services: contactData?.serviceName,
        message: contactData?.message,
      };

      axios
        .post(`${URL}/api/contact`, body)
        .then((res) => {
          setloader(false);
          toast.success("Form Submited");
          setContactData({
            fullName: "",
            phoneNumber: "",
            email: "",
            serviceName: "",
            message: "",
          });
        })
        .catch((err) => {
          setloader(false);
          toast.error(err?.response?.data?.message);
          console.log(err, "err");
        });
    } else {
      toast.warning("All Field Required");
      setContactData({
        fullname: contactData?.fullName?.trim(),
        email: contactData?.email?.trim(),
        phone_number: contactData?.phoneNumber?.trim(),
        services: contactData?.serviceName?.trim(),
        message: contactData?.message?.trim(),
      });
    }
  };
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-6 md:p-12 bg-white">
        {/* Left Side - Contact Information */}
        <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0 p-4">
          <h2 className="lg:text-6xl text-3xl   font-bold mb-6 ">
            Transforming Vision into Reality
          </h2>

          <div className="px-10 lg:max-w-[25vw]">
            <h3 className="text-xl font-semibold text-blue-800"> New Delhi</h3>
            <p className="text-gray-600">
              DDA Park, Palam Colony, Raj Nagar II Extension, Palam, New Delhi,
              Delhi, 110077
            </p>
            <p className="mt-4 flex items-center">
              <AiOutlinePhone className="mr-2" /> +91 – 91201 83508
            </p>
            <p className="mt-2 flex items-center">
              <AiOutlineMail className="mr-2" /> info@donocare.com
            </p>
          </div>

          <div className="mb-8 px-10 lg:max-w-[25vw] mt-10">
            <h3 className="text-xl font-semibold text-blue-800">Patna</h3>
            <p className="text-gray-600">
              Panchwati nagar, Bazar Samiti, Bahadurpur, Patna, Bihar 800016
            </p>
            <p className="mt-4 flex items-center">
              <AiOutlinePhone className="mr-2" /> +91 – 8986113306
            </p>
            <p className="mt-2 flex items-center">
              <AiOutlineMail className="mr-2" /> support@Donocare.com
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Tell Us Everything</h3>
          <form className="space-y-4" onSubmit={onSubmitData}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={contactData?.fullName}
                minLength={4}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Full Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number *
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={contactData?.phoneNumber}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Phone Number"
                required
                pattern="\d{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                onChange={handleChange}
                id="email"
                name="email"
                value={contactData?.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address (e.g., user@example.com)"
                required
              />
            </div>
            <div>
              <label
                htmlFor="serviceName"
                className="block text-sm font-medium text-gray-700"
              >
                Service Name *
              </label>
              <input
                type="text"
                id="serviceName"
                onChange={handleChange}
                name="serviceName"
                value={contactData?.serviceName}
                minLength={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Service Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                value={contactData?.message}
                rows="4"
                minLength={50}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                disabled={loader}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                {loader ? "Submiting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default Enquiry;
