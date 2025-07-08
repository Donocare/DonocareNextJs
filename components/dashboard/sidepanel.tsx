"use client";
import { BiSolidDashboard } from "react-icons/bi";
import { BsInbox } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import Hamburger from "hamburger-react";

const Sidepanel = ({ setindex, index }) => {
  let [sidePanel, setSidePanel] = useState(true);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={isOpen?"relative bg-transparent left-[2vh]  z-50  ":"relative bg-lightBlue left-[5vh]  z-50  "}>
        <a className="">
          <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
        </a>{" "}
      </div>

      {isOpen?<section className="fixed z-10 w-fit pr-16 overflow-hidden">
        <div className=" w-fit  h-[90vh] bg-white px-10 py-4 border-r border-zinc-400 shadow-lg">
          <div className="flex flex-col gap-y-32 pt-10 ">
            <div
              onClick={() => {
                // setOpen(false)
                setindex(0);
              }}
              className={
                index == 0
                  ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full"
                  : "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"
              }
            >
              <a className=" text-3xl ">
                <BiSolidDashboard />
              </a>
              <label className="text-2xl pt-1  font-mono text-center   ">
                Dashboard
              </label>
            </div>
            <div
              onClick={() => {
                // setOpen(false)
                setindex(1);
              }}
              className={
                index == 1
                  ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full"
                  : "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"
              }
            >
              <a className=" text-3xl ">
                <BsInbox />
              </a>
              <label className="text-2xl pt-1  font-mono text-center   ">
                Inbox
              </label>
            </div>
            <div
              onClick={() => {
                // setOpen(false)
                setindex(2);
              }}
              className={
                index == 2
                  ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full"
                  : "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"
              }
            >
              <a className=" text-3xl ">
                <BiUser />
              </a>
              <label className="text-2xl pt-1  font-mono text-center   ">
                Employees
              </label>
            </div>
            <div
              onClick={() => {
                // setOpen(false)
                setindex(3);
              }}
              className={
                index == 3
                  ? "flex  justify-center w-fit items-center  text-purple-600 bg-purple-100  h-fit px-10 py-2 gap-x-4 rounded-full"
                  : "flex  justify-center w-fit items-center  text-zinc-600  h-fit px-10 py-2 gap-x-4 rounded-full"
              }
            >
              <a className=" text-3xl ">
                <HiOutlineInboxArrowDown />
              </a>
              <label className="text-2xl pt-1  font-mono text-center   ">
                Jobs
              </label>
            </div>
          </div>
        </div>
      </section>
      :null
}
    </>
  );
};
export default Sidepanel;
