import React, { useRef, useState } from 'react'
import {FaHome} from 'react-icons/fa'
import {BsFillArrowUpCircleFill, BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {FaFolderOpen} from 'react-icons/fa'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import './css/FadeBackground.css';

export default function NavBar() {
  const [fade, setFade] = useState(false)
  
  const handleClick = () => {
      setFade(fade => !fade)
      //console.log(fade);
  }

  const ref = useRef(null);

  const handleRef = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <React.Fragment>

    <nav className="bg-[#614EE7] w-100 h-16 md:h-24 p-4 pb-10 px-3 flex justify-between sticky top-0 z-10">
        <NavLink to='/portfolio'><h2 className="text-white font-bold text-2xl mt-2 flex sm:4xl lg:text-6xl lg:mt-0"><FaFolderOpen />Portfolio</h2></NavLink>
        <div>
        <HiOutlineMenuAlt3 className='text-4xl text-white flex xl:hidden md:text-6xl hover:text-indigo-300 cursor-pointer' onClick={handleClick}/>
        </div>
        <div className="flex justify-around hidden xl:flex">
        <NavLink to='/portfolio' className='font-bold text-white mt-5 mr-5 text-2xl flex'><FaHome  className='mt-1 mr-1'/>Home</NavLink>
        <NavLink to='/projects' className='font-bold text-white mt-5 mr-5 text-2xl flex'><FaFolderOpen  className='mt-1 mr-1'/>Portfolio</NavLink>
        </div>
    </nav>

    <div className='absolute right-0 fixed z-[12] '>
        <nav className={`bg-[#614EE7] ${!fade ? 'right-[-200px]' : ''} w-[${fade ? '80%' : '0%'}] fixed right-0 h-screen p-4 pb-10 px-3  top-0  sm:w-[${fade ? '60%' : '0%'}] md:w-[${fade ? '50%' : '0%'}]ease-in duration-500 `}>
          <div className='flex flex-row justify-end'>
            <MdCancel className='text-white font-bold text-4xl mt-2 flex sm:4xl lg:text-6xl lg:mt-0 cursor-pointer' onClick={handleClick}/>
          </div>
          <br /><br />
          <div className="flex flex-col ">
          <NavLink to='/portfolio' className='font-bold text-white mt-5 mr-5 text-[1.2rem] sm:text-2xl flex' onClick={handleClick}><FaHome  className='mt-1 mr-1'/>Home</NavLink>
          <NavLink to='/projects' className='font-bold text-white mt-5 mr-5 text-[1.2rem] sm:text-2xl flex' onClick={handleClick}><FaFolderOpen  className='mt-1 mr-1'/>Portfolio</NavLink>
          </div>
      </nav>

    </div>
    <div className='fixed bottom-5 right-5 flex flex-col z-[15]'>
      <button className='mt-5 bg-[#596CEB] p-2 rounded-lg' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
        <BsFillArrowUpCircleFill className='text-[#fff] text-4xl'/>
      </button>
      <button className='mt-5 bg-[#0A66C2] p-2 rounded-lg' onClick={() => window.open('https://www.linkedin.com/in/luis-david-mu%C3%B1iz-osorio-54131b169/?locale=en_US', '_blank')}>
        <BsLinkedin className='text-[#fff] text-4xl'/>
      </button>
      <button className='mt-5 bg-[#128c7e] p-2 rounded-lg' onClick={() => window.open('https://api.whatsapp.com/send/?phone=527222402582&text=Hi+there!+i+saw+your+web+portfolio.', '_blank')}>
        <BsWhatsapp className='text-[#fff] text-4xl'/>
      </button>
      <button className='mt-5 bg-slate-600 p-2 rounded-lg' onClick={() => window.open('https://github.com/LushoKratz', '_blank')}>
        <BsGithub className='text-[#fff] text-4xl' />
      </button>
    </div>
    {fade && (  <div className={`fixed z-[11] fixed`} onClick={handleClick}>
                        <div className='h-[100vh] w-[100%] block  FadeBackground fixed top-0 left-0'></div>
                    </div>)}
    </React.Fragment>

  )
}
