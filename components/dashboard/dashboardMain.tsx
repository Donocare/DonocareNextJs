"use client";
import { GrNotification } from "react-icons/gr";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { VictoryBar, VictoryChart, VictoryPie, VictoryTooltip } from "victory";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const DashboardMain = ({ userData,setindex }) => {
  console.log(userData.jobData.jobStatistics[0].month);
  // const data = []
  const data = [
    {
      x: userData.jobData.jobStatistics[0].month,
      y: userData.jobData.jobStatistics[0].data,
    },
    {
      x: userData.jobData.jobStatistics[1].month,
      y: userData.jobData.jobStatistics[1].data,
    },
    {
      x: userData.jobData.jobStatistics[2].month,
      y: userData.jobData.jobStatistics[2].data,
    },
    {
      x: userData.jobData.jobStatistics[3].month,
      y: userData.jobData.jobStatistics[3].data,
    },
    {
      x: userData.jobData.jobStatistics[4].month,
      y: userData.jobData.jobStatistics[4].data,
    },
  ];
  const [label, setLabel] = useState(false);
  const data1 = [
    { x: " ", y: userData.employeeData.workingFormat[0].employeeCount },
    { x: " ", y: userData.employeeData.workingFormat[1].employeeCount },
    { x: " ", y: userData.employeeData.workingFormat[2].employeeCount },
  ];

  return (
    <>
      <main className="w-full h-[90vh] bg-lightBlue overflow-auto ">
        <section>
          <div>
            <div className="p-6 flex w-full justify-between items-center ">
              {/* <div>
                <label className="text-3xl text-zinc-800 font-bold font-poppins">
                  DashBoard
                </label>
              </div> */}
              <div></div>
              <div className="flex items-center justify-center gap-x-8">
                <div>
                  <div onClick={()=>{setindex(1)}} className="relative cursor-pointer ">
                    <div 
                      className="flex absolute top-[-7px] right-[-3px] justify-center items-center bg-red
                                         w-4 h-4 rounded-full "
                    >
                      <a className="text-white text-[10px] text-center ">3</a>
                    </div>
                    <a className="text-3xl">
                      <GrNotification />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-x-2 justify-start items-end">
                    <h3 className="text-xl font-bold">{userData.name}</h3>
                    <h3 className="text-md ">{userData.roleName}</h3>
                  </div>
                </div>
                <div>
                  <div className="h-14 w-14 rounded-full object-cover">
                    <img src="my.jpeg" className="rounded-full object-cover " />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div>
                <div className="flex space-x-10 justify-evenly items-cente">
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-start bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black lg:text-sm xl:text-lg">
                        Total Employees
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl lg:text-xl xl:text-2xl ">
                        {userData.employeeData.employeeCount}
                      </a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-green-100 w-fit h-fit ">
                        <li className="text-green-600 text-xl">
                          <AiOutlineRise />
                        </li>
                        <a className="text-green-600 text-xl lg:text-lg xl:text-xl">{userData.employeeData.employeesGrowCount+"%"}</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-center bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black lg:text-sm xl:text-lg">
                        Job View{" "}
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl lg:text-lg xl:text-2xl ">
                        {userData.jobData.jobViewCount}
                      </a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-green-100 w-fit h-fit ">
                        <li className="text-green-600 text-xl">
                          <AiOutlineRise />
                        </li>
                        <a className="text-green-600 text-xl lg:text-lg xl:text-xl">{userData.jobData.jobViewGrowCount+"%"}</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-center bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black lg:text-sm xl:text-lg">
                        Job Applied
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl lg:text-xl xl:text-2xl ">
                        {userData.jobData.jobAppliedCount}
                      </a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-green-100 w-fit h-fit ">
                        <li className="text-green-600 text-xl">
                          <AiOutlineRise />
                        </li>
                        <a className="text-green-600 text-xl lg:text-lg xl:text-xl">{userData.jobData.jobAppliedGrowCount+"%"}</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 w-1/5 h-[15vh] rounded-xl shadow-lg justify-center bg-white">
                    <div>
                      <label className="text-bold text-[22px] font-mono text-black lg:text-sm xl:text-lg">
                        Salary
                      </label>
                    </div>
                    <div className="flex justify-between pt-4 ">
                      <a className="font-bold text-sH text-3xl lg:text-xl xl:text-2xl ">
                        {"$" + userData.employeeData.employeeSalary}
                      </a>
                      <div className="flex list-none pl-2 pr-2 pt-1 pb-1 rounded-xl bg-orange-100 w-fit h-fit ">
                        <li className="text-red text-xl">
                          <AiOutlineFall />
                        </li>
                        <a className="text-red text-xl lg:text-lg xl:text-lg">{userData.employeeData.employeesGrowSalary+"%"}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 flex justify-evenly gap-x-6">
              <div className="flex flex-col  w-fit h-[40vh] rounded-xl shadow-xl bg-white ">
                <div>
                  <label className=" flex text-zinc-900 text-2xl pt-10 pl-10  ">
                    Job Statistics
                  </label>
                </div>
                <div className="pl-10 pr-10 flex gap-x-6">
                  <div className="flex  rotate-180 justify-center items-center">
                    <label
                      style={{ writingMode: "vertical-rl" }}
                      className="flex  rotate-180 "
                    >
                      # No of candidates
                    </label>
                  </div>
                  <div className="h-[25vh] lg:h-[22vh]">
                    <VictoryChart
                      minDomain={0}
                      domainPadding={{ x: 20 }}
                      width={600}
                      height={240}
                    >
                      <VictoryBar
                        style={{ data: { fill: "#2de80c" } }}
                        cornerRadius={{
                          bottom: () => 5,
                          top: () => 5,
                        }}
                        y0={(d) => d.y - (d.y - 3)}
                        data={data}
                        animate={{
                          onEnter: {
                            duration: 1500,
                          },
                        }}
                      />
                    </VictoryChart>
                  </div>
                </div>
                <div className="flex justify-center items-center p-6  ">
                  <div className="flex justify-center items-center gap-x-4">
                    <a className="w-4 h-4 rounded-full bg-pureGreen "></a>
                    <label className="text-xl text-center">Job Interview</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  rounded-xl shadow-xl w-fit pl-6 pr-20 h-[40vh]  bg-white">
                <div className=" pr-6 pt-6">
                  <label className="text-2xl  text-zinc-800 lg:text-xl xl:text-2xl">
                    Working Format
                  </label>
                </div>
                <div className="pl-20 h-[24vh]">
                  <VictoryPie
                    padAngle={({ datum }) => 6}
                    animate={{
                      duration: 2000,
                    }}
                    innerRadius={(val) => {
                      return 120;
                    }}
                    width={280}
                    height={280}
                    colorScale={["#8142f5", "#2de80c", "#f5e945"]}
                    data={data1}
                  />
                </div>
                <div className="flex justify-enter items-center pt-4 gap-x-4">
                  <div className="flex gap-x-2 text-gray-700 items-center">
                    <div className="w-4 rounded-full h-4 bg-g"></div>
                    <label>{userData.employeeData.workingFormat[0].name}</label>
                  </div>
                  <div className="flex gap-x-2 text-gray-700 items-center">
                    <div className="w-4 rounded-full h-4 bg-p"></div>
                    <label>{userData.employeeData.workingFormat[1].name}</label>
                  </div>
                  <div className="flex gap-x-2 text-gray-700 items-center">
                    <div className="w-4 rounded-full h-4 bg-y"></div>
                    <label>{userData.employeeData.workingFormat[2].name}</label>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full  p-6 ">
              <div className=" flex flex-col  w-full h-fit p-6 bg-white rounded-lg shadow-xl  ">
                <div>
                  <label className=" text-2xl pt-6 pl-10 text-zinc-800 lg:text-lg xl:text-xl">
                    Employee Status
                  </label>
                </div>
                <div className="flex w-full p-6 justify-evenly items-start">
                  <div className="flex flex-col  w-1/4 ">
                    <div className="flex pl-20 justify-center gap-x-2  items-center h-fit w-fit ">
                      <label className="text-xl font-bold text-sH lg:text-xs xl:text-lg">Name </label>
                      <a className="text-2xl text-sH">
                        <BsChevronDown />
                      </a>
                    </div>
                    {userData.employeeData.employees.map((e) => {
                      return (
                        <div className="flex  items-center  gap-x-4 p-2 pt-6 ">
                          <div className=" w-14 lg:w-10 lg:h-10 xl:w-14 xl:h-14 h-14 rounded-full">
                            <img
                              src={e.image}
                              className="rounded-full xl:w-14 xl:h-14 lg:w-10 lg:h-10 object-cover"
                            />
                          </div>
                          <div>
                            <label className=" text-zinc-700 text-lg lg:text-sm xl:text-lg">
                              {e.name}
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-1/5 flex flex-col justify-center items-center">
                    <div className="flex justify-center gap-x-2  items-center h-fit w-fit ">
                      <label className="text-xl font-bold text-sH lg:text-xs xl:text-lg">
                        Email{" "}
                      </label>
                    </div>
                    <div className="flex flex-col pt-4 gap-y-8 ">
                      {userData.employeeData.employees.map((e) => {
                        return (
                          <div className="flex items-center gap-x-4 p-2 xl:pt-6 lg:pt-8  w-fit xl:h-14 lg:h-10">
                            <div>
                              <label className=" text-zinc-700 text-lg lg:text-xs xl:text-lg">
                                {e.email}
                              </label>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-1/5 flex flex-col justify-center items-center ">
                    <div className="flex justify-center gap-x-2  items-center h-fit w-fit ">
                      <label className="text-xl font-bold text-sH lg:text-xs xl:text-lg">
                        Job Title{" "}
                      </label>
                    </div>
                    <div className="flex flex-col xl:pt-4 lg:pt-6 gap-y-8 justify-center items-center">
                      {userData.employeeData.employees.map((e) => {
                        return (
                          <div className="flex items-center gap-x-4 p-2 xl:h-14 lg:h-10 pt-6 ">
                            <div>
                              <label className=" text-zinc-700 text-lg lg:text-xs xl:text-lg">
                                {e.role}
                              </label>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-1/6 flex flex-col justify-center items-center">
                    <div className="flex justify-center gap-x-2  items-center h-fit w-fit ">
                      <label className="text-xl font-bold text-sH lg:text-xs xl:text-lg">
                        Status{" "}
                      </label>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-4 xl:gap-y-8 lg:gap-y-4">
                      {userData.employeeData.employees.map((e) => {
                        return (
                          <div className="flex items-center gap-x-4 p-2 h-14 pt-6 ">
                            <div>
                              <label className={
                                (e.status).toLowerCase()=="working"? 
                                "text-pureGreen bg-green-50 h-fit w-fit px-6 py-2 text-lg rounded-lg lg:text-xs xl:text-lg "
                              :(e.status).toLowerCase() == "no work"?
                              "text-p bg-purple-100 h-fit w-fit px-6 py-2 text-lg rounded-lg lg:text-xs xl:text-lg"
                            :"text-red bg-orange-100 h-fit w-fit px-6 py-2 text-lg rounded-lg  lg:text-xs xl:text-lg"}>
                                {e.status}
                              </label>
                            </div>
                          </div>
                        );
                      })}
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

export default DashboardMain;
