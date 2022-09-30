import React, { useState } from 'react'
import {FaHome} from 'react-icons/fa'
import {BsFillPersonLinesFill,BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineMiscellaneousServices, MdCancel} from 'react-icons/md'
import {FaFolderOpen} from 'react-icons/fa'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import './css/FadeBackground.css';

export default function OpenNavBar() {
  const [fade, setFade] = useState(true)
  
  const handleClick = () => {
      setFade(fade => !fade)
      console.log(fade);
  }

  return (
    <React.Fragment>

    <div className='absolute right-0 fixed z-[12] '>
        <nav className={`bg-[#614EE7] ${!fade ? 'right-[-30px]' : ''} w-[${fade ? '80%' : '0%'}] fixed right-0 h-screen p-4 pb-10 px-3  top-0  sm:w-[${fade ? '60%' : '0%'}] md:w-[${fade ? '50%' : '0%'}]ease-in duration-300 `}>
          <div className='flex flex-row justify-between'>
            <h2 className="text-white font-bold text-2xl mt-2 flex sm:4xl lg:text-6xl lg:mt-0"><FaFolderOpen />Portfolio</h2>
            <MdCancel className='text-white font-bold text-4xl mt-2 flex sm:4xl lg:text-6xl lg:mt-0 cursor-pointer' onClick={handleClick}/>
          </div>
          <br /><br />
          <div className="flex flex-col ">
          <NavLink to='/' className='font-bold text-white mt-5 mr-5 text-[1.2rem] sm:text-2xl flex'><FaHome  className='mt-1 mr-1'/>Home</NavLink>
          <NavLink to='/' className='font-bold text-white mt-5 mr-5 text-[1.2rem] sm:text-2xl flex'><BsFillPersonLinesFill  className='mt-1 mr-1'/>About me</NavLink>
          <NavLink to='/' className='font-bold text-white mt-5 mr-5 text-[1.2rem] sm:text-2xl flex'><MdOutlineMiscellaneousServices  className='mt-1 mr-1'/>Services</NavLink>
          <NavLink to='/' className='font-bold text-white mt-5 mr-5 text-[1.2rem] sm:text-2xl flex'><FaFolderOpen  className='mt-1 mr-1'/>Portfolio</NavLink>
          <NavLink to='/' className='font-bold text-white mt-5 mr-5 text-[1.2rem] sm:text-2xl flex'><BsFillTelephoneFill className='mt-1 mr-1'/>Contact</NavLink>
          </div>
      </nav>

    </div>
    {fade && (  <div className={`fixed z-[11] fixed`} onClick={handleClick}>
                        <div className='h-[100vh] w-[100%] block  FadeBackground fixed top-0 left-0'></div>
                    </div>)}
    </React.Fragment>

  )
}
