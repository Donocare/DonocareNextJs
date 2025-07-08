"use client";
import op from "@/utils/op";
import { motion, useInView } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Dialog, DialogTitle } from "@mui/material";
import CustomDailog from "../Dailogs/CustomDailog"
import { IoIosArrowDown } from "react-icons/io";
export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const [newMenuDailog, setNewMenuDailog] = useState(false);
  const newMenuRef = useRef();

  const handleClickOutside = (event) => {
    if (newMenuRef.current && !newMenuRef.current.contains(event.target)) {
      setNewMenuDailog(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const openDialog = () => setNewMenuDailog(true);
  const closeDialog = () => setNewMenuDailog(false);
  return (
    <>

      <div>
        <div className="App ">
          {newMenuDailog && (
            <div
              id="dropdown"
              ref={newMenuRef}
              className="z-10 absolute min-w-[600px] top-[65px] right-[500px]  bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2   rounded-md  dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <div className="p-1 flex  justify-between px-2 ">
                  <div className="flex flex-col">
                    <Link
                      onClick={() => setOpen(true)}
                      className=" flex  px-6 rounded-md py-2   hover:text-rose-500  font-bold "
                      href={"/itservices"}
                    >
                      IT  Services
                    </Link>
                    <Link
                      onClick={() => closeDialog()}

                      href={"/itservices"}
                    >
                      <ul className="  px-6 ">
                        <li className="hover:text-rose-500  cursor-pointer">Website Design and Development</li>
                        <li className="hover:text-rose-500 cursor-pointer">Digital Marketing</li>
                        <li className="hover:text-rose-500 cursor-pointer">Video  Editing</li>
                        <li className="hover:text-rose-500 cursor-pointer">Digital IT services</li>

                      </ul>
                    </Link>

                  </div>
                  <div>

                    <Link
                      // onClick={() => closeDialog()}

                      className=" flex  px-6 rounded-md py-2   hover:text-rose-500  font-bold "
                      href={"/business"}
                    >
                      Business
                    </Link>
                    <Link
                      onClick={() => closeDialog()}

                      href={"/business"}
                    >
                      <ul className="  px-6 ">
                        <li className="hover:text-rose-500  cursor-pointer">International Shipping</li>
                      </ul>
                    </Link>
                  </div>


                </div>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="  bg-white p-4">
        <nav className="flex justify-between  items-center pl-4 ">
          <div>
            <label className="text-primaryGreen font-bold   text-xl   pl-4 flex items-center cursor-pointer ">
              <Link href={"/"} >
                <Image src={logo} height={100} width={100} alt="logo"></Image>
              </Link>
            </label>
          </div>
          <a className=" lg:hidden">
            <Hamburger toggled={isOpen} size={22} toggle={setOpen} />
          </a>{" "}
          <div className="hidden  lg:block">
            {
              <LapView
                setopen={() => {
                  setOpen;
                }}
                openDialog={openDialog}
                closeDialog={closeDialog}
              />
            }
          </div>
        </nav>
      </div>

      {isOpen ? (
        <MobileNav
          setopen={() => {
            setOpen(false);
          }}
        />
      ) : null}
    </>
  );
}

function LapView({ setopen, openDialog, closeDialog }) {
  return (
    <>
      <div className="">
        <div className="flex w-full  xl:gap-x-[5vh] xl:pr-[3vh]  gap-x-[3vh] pr-[3vh] justify-center items-center ">
          <li className="flex gap-x-[1vh] xl:gap-x-[2vh] text-lg justify-center items-center">
            <Link
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500  font-bold "
              onClick={setopen}
              href={"/"}
            >
              Home
            </Link>

            <span
              onClick={() => { setopen(); openDialog() }}
              onMouseEnter={() => { setopen(); openDialog() }}
              // onMouseLeave={() => { setopen(); closeDialog() }}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500  font-bold items-center "

            >
              Services <IoIosArrowDown className="ml-1" />
            </span>
            {/* <Link
              onClick={setopen}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500  font-bold "
              href={"/itservices"}
            >
              Services
            </Link> */}

            <Link
              onClick={setopen}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500  font-bold "
              href={"/about"}
            >
              Our Vision
            </Link>
            <Link
              onClick={setopen}
              className=" flex  px-6 rounded-md py-2   hover:text-rose-500  font-bold "
              href={"/contact"}
            >
              Contact
            </Link>
            <span className="space-x-2 ">
              <a
                href="tel:+919120183508"
                className=" cursor-pointer text-blue-400 flex items-center  "
              >
                <FaPhoneAlt className="mr-2" />

                9120183508
              </a>

            </span>

            <Link
              onClick={setopen}
              className=" flex  px-6  py-2  text-white bg-blue-500 rounded-3xl  font-bold "
              href={"/enquiry"}
            >
              Enquiry
            </Link>
          </li>

          {<motion.li
            className="list-none"
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
          >
            <Link
              onClick={setopen}
              className=" text-lg rounded-3xl px-8 bg-pH py-3 text-white"
              href={"/login"}
            >
              Login
            </Link>
          </motion.li>}
        </div>
      </div>
    </>
  );
}

function MobileNav({ setopen }) {
  return (
    <>
      <div className="absolute flex flex-col  z-50 w-fit h-fit py-2 bg-white top-[10vh] right-0  p-4 min-w-[50vw]">
        <div className="flex flex-col h-fit justify-between ">
          <li className=" list-none flex flex-col space-y-4 pt-4  justify-end items-center text-center    ">
            <Link onClick={setopen} className=" " href={"/"}>
              Home
            </Link>
            <Link onClick={setopen} className=" " href={"/itservices"}>
              Services
            </Link>
            <Link onClick={setopen} className=" " href={"/about"}>
              Our Vision
            </Link>
            <Link onClick={setopen} className=" " href={"/contact"}>
              Contact
            </Link>
          </li>
          <label className="text-xs font-light text-gray-600 text-center pt-6 pb-2 ">
            Employee ?
            <span className="text-sm text-pH font-normal">
              {" "}
              <Link onClick={setopen} href={"/login"}>
                Login
              </Link>
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
