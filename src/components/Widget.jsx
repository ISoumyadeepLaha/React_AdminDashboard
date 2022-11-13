import React from 'react'
import { FaBed } from 'react-icons/fa'
import { HiOutlineDotsHorizontal, HiUserGroup } from 'react-icons/hi'
import { FaWallet } from 'react-icons/fa'
import { FaAmbulance } from 'react-icons/fa'

const Wigets = ({ type }) => {

let data;
 if(type === "Patient"){
  data = {
    icon: (
      <FaBed className='text-[#8D3DAF] w-10 bg-slate-300 rounded-full '/>
    ),
    tittle: "Total Patients",
    counter: 3256
  }
 }
 if(type === "Staff"){
  data = {
    icon: (
      <HiUserGroup className='text-[#1B98F5] w-10 bg-slate-300 rounded-full'/>
    ),
    tittle: "Available Staff",
    counter: 394
  }
 }
 if(type === "Treatment"){
  data = {
    icon: (
      <FaWallet className='text-[#E07C24] w-10 bg-slate-300 rounded-full'/>
    ),
    tittle: "Avg Treat. Cost",
    counter: "$2536"
  }
 }
 if(type === "Cars"){
  data = {
    icon: (
      <FaAmbulance className='text-[#FF6666]  w-10 bg-slate-300 rounded-full'/>
    ),
    tittle: "Available Cars",
    counter: 38
  }
 }

    

  return (
    <div className='w-[100%] md:w-[20%] md:flex-1 flex flex-row justify-center bg-[#d3dfeb] shadow-md p-4 h-24 relative rounded-md'>
      <HiOutlineDotsHorizontal className='absolute top-2 right-5 text-[#758283]'/>
      <div className="left flex justify-center items-center">
        {data.icon}
      </div>
      <div className="right ml-6 mt-2">
        <div className="counter text-xl font-bold">{data.counter}</div>
        <div className="patients text-sm text-[#758283]">{data.tittle}</div>
      </div>
    </div>
  )
}

export default Wigets