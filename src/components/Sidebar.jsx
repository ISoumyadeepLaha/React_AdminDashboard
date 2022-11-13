import React from "react";
import { BsPlusLg } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { AiFillPieChart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BiHome } from 'react-icons/bi';
import { BsFillCalendarPlusFill } from 'react-icons/bs';
import { RiFolderHistoryLine } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';

const sidebar = () => {
  return (
    <>

      <div className="hidden md:flex md:flex-initial w-3/12 lg:w-2/12 flex-col h-[55rem] bg-[#d3dfeb] items-center px-2 gap-y-20 lg:gap-y-0 shadow-md">
        <div className="top flex flex-col justify-center items-center mt-6">
          <span className="flex justify-around items-center px-4">
            
            <BsPlusLg className="text-[#8D3DAF]"/>
            <h1 className="text-3xl ml-2 text-[#8D3DAF] font-bold">H-Care</h1>
          </span>
          <button className="flex justify-around items-center mt-10 bg-[#8D3DAF] hover:bg-[#422779]  w-32 lg:w-44 p-2 rounded-xl text-[#CAD5E2] shadow-md text-xl">
            <h1>Register</h1>
            <span>+</span> 
            
          </button>
        </div>
        <div className="center flex items-center justify-center mt-10">
          <ul className="flex flex-col gap-y-8 w-[100%]" >
            <li className="cursor-pointer flex justify-between gap-4 border items-center hover:text-violet-900 px-8">
                <FiUsers/>
              <span className="text-[#7e8181]  hover:text-violet-900 active:text-violet-900 text-md">Patients</span>
            </li>
            <li className="cursor-pointer flex justify-between gap-4 border items-center hover:text-violet-900 px-8">
                <AiFillPieChart />
              <span className="text-[#758283]  hover:text-violet-900 active:text-violet-900 text-md">Overview</span>
            </li>
            <li className="cursor-pointer flex justify-between gap-8 border items-center hover:text-violet-900 px-8">
                <GoLocation/>
              <span className="text-[#758283]  hover:text-violet-900 active:text-violet-900 text-md ml-4">Maps</span>
            </li>
            <li className="cursor-pointer flex justify-between gap-4 border items-center hover:text-violet-900 px-8">
                <BiHome/>
              <span className="text-[#758283]  hover:text-violet-900 active:text-violet-900 text-md ml-4 ">Departments</span>
            </li>
            <li className="cursor-pointer flex justify-between gap-4 border items-center hover:text-violet-900 px-8">
              <BsFillCalendarPlusFill/>
              <span className="text-[#758283]  hover:text-violet-900 active:text-violet-900 text-md">Doctors</span>
            </li>
            <li className="cursor-pointer flex justify-between gap-4 border items-center hover:text-violet-900 px-8">
              <RiFolderHistoryLine/>
              <span className="text-[#758283]  hover:text-violet-900  active:text-violet-900 text-md"> History</span>
            </li>
            <li className="cursor-pointer flex justify-between gap-4 border items-center hover:text-violet-900 px-8">
              <IoIosSettings/>
              <span className="text-[#758283]  hover:text-violet-900 active:text-violet-900 text-md">Settings</span>
            </li>
          </ul>
        </div>
        <div className="bottom mt-10 lg:mt-14 flex justify-center items-center ">
          <div className="card bg-slate-400 rounded-md  p-2 w-36 lg:w-44">
            <h2 className="flex justify-center items-center text-md font-bold lg:text-xl">
              Get Mobile App
            </h2>
            <div className="logo flex justify-around items-center  mt-4 lg:mt-2">
              <div>
                <img
                  src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Icon-Logo.wine.svg"
                  className="w-10 border rounded-full bg-white cursor-pointer hover:scale-110 hover:transition hover:duration-500 hover:ease-in-out"
                  alt="Play Store"
                />
              </div>
              <div>
                <img
                  src="https://svgsilh.com/svg/2962084.svg"
                  className="w-10 border rounded-full bg-white cursor-pointer hover:scale-110 hover:transition hover:duration-500 hover:ease-in-out "
                  alt="App Store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar;
