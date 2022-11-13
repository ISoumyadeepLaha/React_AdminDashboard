import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TbGenderEpicene } from "react-icons/tb";


const Feature = () => {
  return (
    <div className="w-full md:w-[23%]  bg-[#d3dfeb] p-2 rounded-md">
      <div className="top border-b-2 p-2">
        <h2 className='font-semibold'>Patients by Gender</h2>
      </div>
      <div className="bottom">
      <div className="bar w-44 p-4 flex flex-col justify-center items-center gap-4 mt-6 ml-6 relative">
          <TbGenderEpicene className="absolute w-44 top-16  text-[#758283]" />
          <CircularProgressbar
            value={60}
            styles={buildStyles({
              // Colors
              pathColor: "#8D3DAF",
              textColor: "#f88",
              trailColor: "#E07C24",
              // backgroundColor: "#3e98c7",
            })}
          />
          <div className="tittles flex justify-center gap-2 items-center mt-2">
            
            <div className="w-2 h-2 rounded-full bg-[#E07C24]"></div>
            <div>Female</div>
            <div className="w-2 h-2 rounded-full bg-[#8D3DAF]"></div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature