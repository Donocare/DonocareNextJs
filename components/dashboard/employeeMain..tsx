"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import { VictoryPie } from "victory";

const EmployeeMain = ({ userData }) => {
  let [maleCount, setMaleCount] = useState(0);
  let [feMaleCount, setFeMaleCount] = useState(0);
  let [attendance, setAttendance] = useState(0);
  const data1 = [
    { x: " ", y: maleCount },
    { x: " ", y: feMaleCount },
  ];
  const data2 = [
    { x: " ", y: userData.projectData.completedProjects },
    { x: " ", y: userData.projectData.onGoingProjects},
    { x: " ", y: userData.projectData.pendingProjects },
  ];

  function getGenderCount() {
    userData.employeeData.employees.map((e) => {
      if (e.gender === "male") {
        setMaleCount((e) => e + 1);

        if (
          e.attendance.toLowerCase() === "present" ||
          e.attendance.toLowerCase() === "late"
        ) {
          console.log(e.name);
          setAttendance((e) => e + 1);
        }
      } else {
        setFeMaleCount((e) => e + 1);
        if (
          e.attendance.toLowerCase() === "present" ||
          e.attendance.toLowerCase() === "late"
        ) {
          setAttendance((e) => e + 1);
        }
      }
    });
  }
  useLayoutEffect(() => {
    getGenderCount();
  }, []);

  return (
    <>
      <main className="bg-lightBlue w-full p-6">
        <section>
          <div>
            <div className="pl-10">
              <label className="text-2xl text-sH"></label>
            </div>
            <div className="flex w-full pt-6 gap-x-6">
              <div className=" flex flex-col  w-1/2 h-[80vh]  bg-white rounded-xl p-6">
                <div className="flex pl-10 gap-x-4">
                  <label className="text-2xl  text-sH lg:text-xl">
                    {" "}
                    Employees Attendence
                  </label>
                  <a className="text-2xl ">
                    <FaUserTie />
                  </a>
                </div>
                <div className="w-full m-4 p-4 flex justify-between items-start gap-x-4">
                  <div className="flex w-1/3 justify-center items-center flex-col">
                    <label className="text-xl text-black">Name</label>
                    <div className="flex flex-col justify-start gap-y-2 items-center">
                      {userData.employeeData.employees.map((e) => {
                        return (
                          <div className="pt-6">
                            <h1 className="text-lg text-zinc-700 lg:text-xs ">{e.name}</h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex w-1/3 justify-center items-center flex-col ">
                    <label className="text-xl text-black">Role</label>
                    <div className="flex flex-col gap-y-2 justify-center items-center">
                      {userData.employeeData.employees.map((e) => {
                        return (
                          <div className="pt-6">
                            <h1 className="text-lg text-zinc-700 lg:text-xs ">{e.role}</h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex w-1/3 justify-center items-center flex-col ">
                    <label className="text-xl text-black">Status</label>
                    <div className="flex flex-col justify-center items-center">
                      {userData.employeeData.employees.map((e) => {
                        return (
                          <div className="pt-6 flex justify-center items-center">
                            <h1
                              className={
                                e.attendance.toLowerCase() === "late"
                                  ? "text-lg text-p bg-purple-100 h-fit w-fit px-6 p-1  rounded-lg lg:text-xs flex justify-center items-center "
                                  : e.attendance.toLowerCase() === "present"
                                  ? "text-lg text-pureGreen bg-green-100 h-fit w-fit px-6 p-1  rounded-lg  lg:text-xs flex justify-center items-center"
                                  : "text-lg text-red bg-orange-100 h-fit w-fit px-6 p-1  rounded-lg lg:text-xs flex justify-center items-center"
                              }
                            >
                              {e.attendance}
                            </h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2  flex flex-col ">
                <div className="flex gap-x-4 w-full">
                  <div
                    className="flex flex-col  
                      w-1/2 bg-white rounded-xl shadow-xl p-4"
                  >
                    <h2 className="text-xl text-sH pl-4 lg:text-md">Total Attendence</h2>
                    <p className=" pt-4 font-bold text-3xl pl-6 lg:text-xl">
                      {attendance}
                    </p>
                    <p className="pt-2 text-md pl-6 text-gray-700 lg:text-xs">
                      Employees In building
                    </p>
                  </div>
                  <div
                    className="flex flex-col  
                      w-1/2 bg-white rounded-xl shadow-xl p-4"
                  >
                    <h2 className="text-xl text-sH pl-4 lg:text-md">
                      Today's Performance
                    </h2>
                    <div className="flex w-full justify-between pr-6 items-center pt-2">
                      <p className=" pt-4 font-bold text-3xl pl-6 lg:text-lg">32%</p>
                      <p className="text-pureGreen gap-x-2 text-xl flex pt-4">
                        <span className="text-pureGreen text-2xl lg:text-lg">
                          <GrUpgrade />
                        </span>
                        18%
                      </p>
                    </div>
                    <p className="pt-2 text-md pl-6 text-gray-700 lg:text-xs">
                      vs Previous Day
                    </p>
                  </div>
                </div>
                <div className="flex w-full pt-6 gap-x-6">
                  <div className="flex flex-col  rounded-xl shadow-xl w-1/2 pl-6 pr-20 h-[40vh]  bg-white">
                    <div className=" pl-6 pt-6 lg:pl-0">
                      <label className="text-2xl  text-zinc-800 lg:text-md">
                        Gender Diversity
                      </label>
                    </div>
                    <div className="">
                      <VictoryPie
                        padAngle={({ datum }) => 6}
                        animate={{
                          duration: 2000,
                        }}
                        innerRadius={(val) => {
                          return 30;
                        }}
                        width={200}
                        height={140}
                        colorScale={["#8142f5", "#2de80c"]}
                        data={data1}
                      />
                    </div>
                    <div className="flex gap-x-3 justify-evenly pb-4 lg:justify-center">
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-g "></div>
                        <label className="lg:text-xs">Male</label>
                      </div>
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-p"></div>
                        <label className="lg:text-xs">Female</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col  rounded-xl shadow-xl w-1/2 pl-6 pr-20 h-[40vh]  bg-white">
                    <div className=" pl-6 pt-6">
                      <label className="text-2xl  text-zinc-800 lg:text-xl">
                        Total Projects
                      </label>
                    </div>
                    <div className="">
                      <VictoryPie
                        padAngle={({ datum }) => 6}
                        animate={{
                          duration: 2000,
                        }}
                        innerRadius={(val) => {
                          return 30;
                        }}
                        width={200}
                        height={140}
                        colorScale={["#2de80c", "#007bff", "#ff0000"]}
                        data={data2}
                      />
                    </div>
                    <div className="grid grid-cols-2  pb-4 lg:grid-cols-1 xl:grid-cols-2 gap-y-1 lg:pb-0">
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-g"></div>
                        <label className="lg:text-xs">Completed</label>
                      </div>
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-pH"></div>
                        <label className="lg:text-xs">Working</label>
                      </div>
                      <div className="flex gap-x-2 text-gray-700">
                        <div className="w-4 rounded-full h-4 bg-red"></div>
                        <label className="lg:text-xs">Pending</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4  w-full mt-4 bg-white h-[30vh] rounded-xl shadow-xl">
                  <div className="w-full ">
                    <div className="pl-6">
                      <label className="text-sH text-2xl lg:text-xl">
                        Employees On Leave
                      </label>
                    </div>
                    <div className="flex justify-between gap-x-4 pt-2 h-[27vh]w-full overflow-auto no-scrollbar">
                      <div className="w-1/3 flex flex-col justify-center items-center ">
                        <h1 className="text-xl text-black lg:text-xs">Name</h1>
                        <div className="pt-2 gap-y-2 flex flex-col justify-center items-center">
                          {userData.employeeData.employees.map((e) => {
                            if (e.attendance.toLowerCase() == "absent") {
                              return (
                                <label className="text-md text-gray-700 lg:text-xs">
                                  {e.name}
                                </label>
                              );
                            }
                          })}
                        </div>
                      </div>
                      <div className="w-1/3 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-black lg:text-xs">Role</h1>
                        <div className="pt-2 gap-y-2 flex flex-col justify-center items-center">
                          {userData.employeeData.employees.map((e) => {
                            if (e.attendance.toLowerCase() == "absent") {
                              return (
                                <label className="text-md text-gray-700 lg:text-xs">
                                  {e.role}
                                </label>
                              );
                            }
                          })}
                        </div>
                      </div>
                      <div className="w-1/3 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-black lg:text-xs">Days</h1>
                        <div className="pt-2 gap-y-2 flex flex-col justify-center items-center">
                        {userData.employeeData.employees.map((e) => {
                            if (e.attendance.toLowerCase() == "absent") {
                              return (
                                <label className="text-md text-gray-700 lg:text-xs">
                                {e.currentLeaveDays + " Days"}
                              </label>
                              );
                            }
                          })}
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default EmployeeMain;
