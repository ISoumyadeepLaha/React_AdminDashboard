import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiBowieKnife } from 'react-icons/gi'
import { FaHeadSideVirus, FaHeartbeat } from 'react-icons/fa'

const Table = () => {
  return (
    <div className="w-full md:w-[22%] bg-[#d3dfeb] p-2 rounded-md">
       <div className="top border-b-2 p-2">
        <h2 className='font-semibold'>Patients by Division</h2>
      </div>
      <div className="bottom h-full w-full">
        <table className='w-full flex flex-col items-center justify-start gap-y-2'>
          <tr className='w-full flex justify-between items-center gap-2 p-4'>
            <th className='font-medium text-[#758283]'><AiOutlineHome/></th>
            <th className='font-medium text-[#758283]'>Division</th>
            <th className='font-bold text-[#758283]'>PT</th>
          </tr>
          <tr className='w-full flex justify-between items-center gap-2 p-4'>
            <th className='font-medium text-[#758283]'><FaHeartbeat/></th>
            <th className='font-medium text-[#758283]'>Cardiology</th>
            <th className='font-bold text-[#758283]'>247</th>
          </tr>
          <tr className='w-full flex justify-between items-center gap-2 p-4'>
            <th className='font-medium text-[#758283]'><FaHeadSideVirus/></th>
            <th className='font-medium text-[#758283]'>Neurology</th>
            <th className='font-bold text-[#758283]'>164</th>
          </tr>
          <tr className='w-full flex justify-between items-center gap-2 p-4'>
            <th className='font-medium text-[#758283]'><GiBowieKnife/></th>
            <th className='font-medium text-[#758283]'>Surgery</th>
            <th className='font-bold text-[#758283]'>86</th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Table