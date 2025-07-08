'use client'
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";
import { FcLock } from "react-icons/fc";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({
    userType: "client",
    userId: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  return (
    <>
      <section>
        <div className="flex flex-col w-full h-full justify-between md:grid md:grid-cols-2 ">
          <div className=" flex object-cover">
            <embed src="login.svg" className="" />
          </div>
          <div className="md:mt-20">
            <div className="">
              <label className="flex p-4 text-4xl font-mono  ">
                Welcome Back
              </label>
            </div>
            <FormControl sx={{ display: "flex" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="userType"
                sx={{ margin: "auto" }}
                onChange={handleChange}
                value={formData?.userType}
              >
                <FormControlLabel value="client" control={<Radio />} label="Client" />
                <FormControlLabel value="admin" control={<Radio />} label="Admin" />

              </RadioGroup>
            </FormControl>

            <div className="flex flex-col p-4">
              <div className="flex w-full justify-center items-center shadow-md rounded-lg">
                <a className="p-4 bg-transparent text-2xl">
                  <FaUserTie />
                </a>
                <input
                  className=" p-4 w-full h-full bg-transparent outline-none border-none text-md"
                  type="text"
                  name=""
                  placeholder="User Id"
                />
              </div>
              <div className="flex w-full justify-center items-center shadow-md rounded-lg mt-6">
                <a className="p-4 bg-transparent text-2xl">
                  <FcLock />
                </a>
                <input
                  className=" p-4 w-full h-full bg-transparent outline-none border-none text-md"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-14">
              <button
                className="flex w-2/4 h-10 bg-y justify-center items-center rounded-lg 
                        shadow-xl
                        text-black text-xl text-center "
              >
                Login
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-6 ">
            <label className="text-gray-700 text-sm">Login as HR ?<span className="pl-4 text-blue-600 text-lg"><Link href={'/dashboard'}>Click Here</Link> </span></label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
