import Link from "next/link";
import React, { useState } from "react";
import Loader from "../loader/Loader";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import URL from "../../utils/Auth";
import { toast } from "react-toastify";
import { BsWhatsapp } from "react-icons/bs";
import { FcCallback, FcVideoCall } from "react-icons/fc";
import { BiPhoneCall } from "react-icons/bi";
const Footer = () => {
  const [loader, setloader] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    setloader(true);
    e.preventDefault();
    const body = {
      email: email,
    };
    axios
      .post(`${URL}/api/subscribe`, body)
      .then((res) => {
        setloader(false);
        toast.success("Subscribetion Added");
        setEmail("");
      })
      .catch((err) => {
        setloader(false);
        toast.error(err?.response?.data?.error?.message);
        console.log(err?.response?.data?.error?.message, "err");
      });
  };
  return (
    <footer>
      {/* {loader && <Loader />} */}
      <div className="bg-[#0b0c2a] text-white p-8">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Address Section */}
          <div className="w-full md:w-[25vw] lg:max-w-[20vw] mb-8 md:mb-0 md:p-2 p-1">
            <h3 className="text-xl font-semibold mb-4">Head Office</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              DDA Park, Palam Colony, Raj Nagar II Extension, Palam, New Delhi,
              Delhi, 110077
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> 9120183508
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" />
              info@donocare.com
            </p>
          </div>

          {/* Address Section */}
          <div className="w-full md:w-[25vw] mb-8 md:mb-0  md:p-2 p-1">
            <h3 className="text-xl font-semibold mb-4">Branch Office</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> Panchwati nagar, Bazar Samiti,
              Bahadurpur, Patna, Bihar 800016
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> 8986113306
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> services@donocare.com
            </p>
          </div>

          {/* Address Section */}
          <div className="w-full md:w-[25vw] mb-8 md:mb-0  md:p-2 p-2">
            <h3 className="text-xl font-semibold mb-4">Branch Office</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              Donocare Training Centre, Near OHMS Mission School, Manda Road,
              Prayagraj - 212104*
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> 9120183508
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> conatct@Donocare.com
            </p>
          </div>
          {/* Description Section */}
          <div className="w-full md:w-[40vw] items-center text-center px-8 py-1">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Donocare Technology
            </h2>
            <p className="mb-4">
              We Are Reimagining The Relationship Between People & Technology
            </p>
            <div className="flex flex-col items-center mt-4">
              <p className="text-gray-400">Newsletter</p>
              <p className="text-gray-400 text-center">
                By subscribing to our mailing list you will always be updated
                with the latest news from us.
              </p>
              <form className="flex mt-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-2 rounded-l-md text-black sm:max-w-[60vw] xs:max-w-[60vw] md:max-w-[60vw]"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                />
                <button
                  className="bg-gray-500 p-2 rounded-r-md "
                  type="submit"
                  disabled={loader}
                >
                  {loader ? "Loading" : "Subscribe"}
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <p className="flex items-center mb-2 mt-4">
                <FaPhoneAlt className="mr-2" /> +91 91201 83508
              </p>
              <p className="flex items-center mb-2">
                <FaEnvelope className="mr-2" /> info@donocare.com
              </p>
              <p className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" /> Delhi | Patna
              </p> */}
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                {/* <a href="#" className="text-xl">
                  <FaInstagram />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/donocare-p-v-t-b58a65326/?originalSubdomain=in"
                  className="text-xl"
                >
                  <FaLinkedin />
                </a>
                {/* <a href="" className="text-xl">
                  <BiPhoneCall />
                </a> */}
                <a
                  href="https://www.facebook.com/profile.php?id=100084494085613"
                  className="text-xl"
                >
                  <FaFacebookF />
                </a>
                <a href="https://x.com/satyammish62514" className="text-xl">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.youtube.com/@donocare./playlists?app=desktop"
                  className="text-xl"
                >
                  <FaYoutube />
                </a>
                <a href="https://alvo.chat/4N6y" className="text-xl">
                  <BsWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-[#0b0c2a] text-white py-6 pt-2 px-4 lg:px-10 relative">
          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-center items-center  space-y-4 lg:space-y-0 lg:space-x-6 mb-4 list-none flex-wrap ">
            <li className="m-2  min-w-[150px] text-center md:mb-[-10px] lg:mb-2 ">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="m-2  min-w-[150px] text-center  ">
              <Link href={"/itservices"}>It Services</Link>
            </li>
            <li className="m-2  min-w-[150px] text-center  ">
              <Link href={"/outsourcing"}>Out Sourcing</Link>
            </li>
            <li className="m-2  min-w-[150px] text-center  ">
              <Link href={"/customer-support"}>Customer Support </Link>
            </li>

            <li className="m-2  min-w-[150px] text-center  ">
              <Link href={"/accessibility"}>Accessibility</Link>
            </li>
            <li className="m-2  min-w-[150px] text-center  ">
              <Link href={"/disclaimer"}>Disclaimer</Link>
            </li>
            <li className="m-2  min-w-[150px] text-center  ">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li className="m-2  min-w-[150px] text-center  ">
              <Link href={"/terms-conditions"}>Terms Conditions</Link>
            </li>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-4"></div>

          {/* Copyright Section */}
          <div className="text-center text-sm lg:text-base">
            <p>Copyright © 2024 All Rights Reserved | Donocare.com</p>
          </div>

          {/* Scroll to Top Button */}
          <button
            className="fixed bottom-6 left-4 lg:bottom-10 lg:left-10 bg-blue-600 p-2 lg:p-3 rounded-lg shadow-lg hover:bg-blue-500"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp className="text-white text-lg lg:text-xl" />
          </button>

          {/* WhatsApp Button */}
          <a
            // href="https://wa.me/8986113306"
            href="https://alvo.chat/4N6y"
            className="fixed bottom-6 right-4 lg:bottom-10 lg:right-10 bg-green-500 p-3 lg:p-4 rounded-full shadow-lg hover:bg-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-white text-2xl lg:text-3xl" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
