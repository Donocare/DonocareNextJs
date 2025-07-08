"use client";
import Main from "@/components/dashboard/main";
import addField from "@/lib/methods/addField";
import getUser from "@/lib/methods/getUser";
import { useEffect, useLayoutEffect, useState } from "react";


const Dashboard = () => {
  const [data, setData] = useState();
  const [userloaded, setUserLoaded] = useState(false);
  async function getuser() {
    const user = await getUser("afridayan01@gmail.com");
   
    setData(user);
    setUserLoaded(true);
  }
  useLayoutEffect(() => {
    getuser();
  }, []);

  if (!userloaded) {
    return <DashBoardPreview />;
  }
  const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  
  return (
    <>
      {
        width >= 1023
        ?<main className=" w-full h-[90vh] bg-white">
        <section>
          <Main userData={data} />
        </section>
      </main>
      :<main className="w-full h-full flex justify-center items-center">
        <section className="w-full h-full flex justify-center items-center">
        <h1 className="pt-10">This Option Is Only For Desktop View</h1>
        </section>
      </main>
      }
    </>
      );
};

function DashBoardPreview() {
  return (
    <>
      <main className="w-full bg-white h-[100vh] ">
        <section>
          <div className="flex flex-col justify-center items-center w-full pt-[15vh]">
            <div className="w-full flex justify-evenly ">
              <div className="w-1/5 bg-gray-100 rounded-xl  animate-pulse h-[15vh]"></div>
              <div className="w-1/5 bg-gray-100 rounded-xl  animate-pulse h-[15vh]"></div>
              <div className="w-1/5 bg-gray-100 rounded-xl  animate-pulse h-[15vh]"></div>
              <div className="w-1/5 bg-gray-100 rounded-xl  animate-pulse h-[15vh]"></div>
            </div>
            <div className="w-full flex justify-evenly pt-[10vh]">
              <div className="w-2/5 bg-gray-100 rounded-xl  animate-pulse h-[35vh]"></div>
              <div className="w-2/6 bg-gray-100 rounded-xl  animate-pulse h-[35vh]"></div>
            </div>
            <div className="w-[92vw] flex flex-col  justify-start items-start  mt-[10vh] bg-gray-100 rounded-xl  animate-pulse h-[35vh] ">
              <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-4 w-[20vw] rounded-sm"></div>
              <div className="w-full flex justify-evenly">
                <div className="flex flex-col w-[25vh] gap-y-4">
                  <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-4 w-[6vw] rounded-sm"></div>
                  <div className="flex gap-x-4 justify-center items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className=" w-[12vw] h-3 bg-gray-300 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="flex gap-x-4 justify-center items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className=" w-[12vw] h-3 bg-gray-300 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="flex gap-x-4 justify-center items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className=" w-[12vw] h-3 bg-gray-300 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="flex gap-x-4 justify-center items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className=" w-[12vw] h-3 bg-gray-300 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="flex gap-x-4 justify-center items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className=" w-[12vw] h-3 bg-gray-300 rounded-sm animate-pulse"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-start items-start w-[25vh] ">
                  <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-4 w-[7vw] rounded-sm"></div>
                  <div className="flex flex-col gap-y-4">
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                  </div>
                </div>
                <div className="w-[25vh]">
                  <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-4 w-[7vw] rounded-sm"></div>
                  <div className="flex flex-col gap-y-4">
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                  </div>
                </div>
                <div className="w-[25vh]">
                  <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-4 w-[7vw] rounded-sm"></div>
                  <div className="flex flex-col gap-y-4">
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                    <div className=" bg-gray-300 mt-[3vh] ml-[4vh] animate-pulse  h-3 w-[12vw] rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Dashboard;
