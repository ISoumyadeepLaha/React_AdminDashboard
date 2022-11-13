import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Navbar = () => {
  return (
    <>
    <div className="small flex justify-between md:hidden w-[100%] h-12 p-4 bg-[#d3dfeb] ">
    <div className=''><img src="https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038_960_720.jpg" alt="" className='w-6 h-6 rounded-full' /></div>
            
            <div className='flex justify-center '>
            <AiOutlineSearch className='text-[#7e8181] '/>
            <GiHamburgerMenu className='w-12'/>
            </div>
            
        </div>
    <nav className='hidden md:block bg-[#d3dfeb]  h-12 shadow-md'>
         
        <div className="wrapper md:flex justify-between items-center">
            <div className="search flex justify-center items-center w-[20%] mt-2 ml-2">
                <AiOutlineSearch className='text-[#7e8181] '/>
                <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none px-2'/>
            </div>
            <div className="user flex justify-center items-center w-[25%] mt-2 ">
                <div className='mx-4'><IoMdNotificationsOutline className='w-6 h-4'/></div>
                <div className='mx-4'><img src="https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038_960_720.jpg" alt="" className='w-6 h-6 rounded-full' /></div>
                <div className='mx-4'>Emma Kwan</div>
                <div>
                    <select name="" id="" className='bg-transparent'>
                        <option value="Profile"></option>
                        <option value="Logout"></option>
                    </select>
                </div>
                
            </div>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar