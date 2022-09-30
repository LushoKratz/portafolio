import React from 'react'
import BackgroundSVG from '../resources/backgroundSVG.svg';
import img from '../resources/photo.png';
import {BsArrowDownCircleFill, BsFillPersonLinesFill, BsFillCheckCircleFill} from 'react-icons/bs';
import {BiCodeAlt} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {CgIfDesign} from 'react-icons/cg';
import {FaLaptopCode} from 'react-icons/fa'
import {ImDatabase, ImFolderOpen} from 'react-icons/im'
import DeveloperSVG from '../resources/developer.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Typewriter from 'typewriter-effect';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useProjectsContext } from '../context/GlobalContext';
import { NavLink } from 'react-router-dom';


export default function Home() {
  const {projects} = useProjectsContext();

  return (
    <div>
      <div style={{backgroundImage: `url(${BackgroundSVG})`, backgroundRepeat: `no-repeat`}} className=" flex flex-col md:flex-row justify-around bg-[length:200%] md:bg-[length:100%] h-auto lg:h-[70vh] xl:h-[65vh]">
        <h1 className='text-white text-3xl md:text-5xl 2xl:text-7xl font-bold text-center mt-2 md:mt-10 lg:mt-28'>
          Junior <Typewriter
                    options={{
                      strings: ['MERN', 'Frontend', 'Backend'],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      pauseFor: 1000
                    }}
            />Developer

        </h1>

        <div className='mt-14 rounded-md'>
          <div className='relative flex px-2'>
            <div className='bg-[#596ceb] w-[200px] md:w-5/6 h-44 md:h-80 ml-3 rounded-xl bottom-10 absolute top-5 md:top-6 right-auto left-7 md:right-6 md:left-auto shadow-xl shadow-indigo-500/50'></div>
            <div className='bg-[#48a7f4] w-[200px] md:w-5/6 h-44 md:h-80 ml-6 rounded-xl absolute top-1 md:top-1 right-auto left-0 md:right-12 md:left-auto shadow-xl shadow-blue-500/50'></div>
              <img src={img} alt="" className='rounded-xl drop-shadow-2xl w-[200px] md:w-5/6 '/>
          </div> <br /><br />
          <div className="text-5xl font-extrabold ... px-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-2xl md:text-3xl">
                Luis David Muniz Osorio
            </span> <br />
          </div>
          <a href={process.env.PUBLIC_URL + '/JuniorDeveloperCV.pdf'} download className='decoration-0'>
            <button className='bg-[#596ceb] px-4 sm:px-10 md:px-24 ml-5 md:ml-0 py-2 sm:py-3 rounded font-bold text-white text-[1.1rem] sm:text-[1.2rem]  md:text-2xl hover:bg-indigo-600 ease-in duration-300 mt-3 flex'>Download CV <BsArrowDownCircleFill className='ml-2 text-3xl'/></button>
          </a>
        </div>
      </div>

      <div className='px-2 md:px-24 xl:px-72 m-auto text-center mt-24 md:mt-10'>
        <div className="text-5xl font-extrabold ...">
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-3xl flex justify-center">
            <BsFillPersonLinesFill className='text-[#656ef6] mr-4 text-4xl'/>
              About me
          </span><br />
        </div>
        



        <div className='flex flex-row'>
          <div className='flex justify-center flex-row md:flex-col hidden lg:flex'>
            <img src={DeveloperSVG} className="w-[10%] md:w-[100%] text-center margin-auto " alt='img.png'/>
          </div>
         

        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{delay: 8000}}
          className="mySwiper flex flex-row"
        >
          <div className='p-0 md:p-10 w-[100%]'>
            <SwiperSlide className='pb-10 pl-10'>
            <p className='text-slate-600 pl-0 md:pl-10 text-left w-[100%] break-words'>I am a self-taught student of web programming, I finished my degree in engineering at systems at ISIMA, but I still have to do my social service and professional internships, and with this portfolio where I show the             languages ​​that are in my knowledge, I hope to be able to get a job as an intern to be able to release my social service and also being able to grow professionally in this world of technology. </p>
            </SwiperSlide>
            <SwiperSlide className='pb-10 pl-0 md:pl-10'>
              <div className='text-left ml-10 md:ml-24'>
                <h2 className='font-bold text-indigo-500 mb-4 text-2xl'>Education:</h2>
                <h3 className='font-bold text-slate-500'>Computer systems engineer</h3>
                <p>Grupo ISIMA "Instituto Superior de Ingenieria Mecanica Automotriz"</p>
                <br />
                <h3 className='font-bold text-slate-500'>Technician in computer systems</h3>
                <p>Instituto de Compuingles de oriente.</p>
                <p></p>
              </div>
            </SwiperSlide>
            </div>
          </Swiper>
        </div>

      </div><br />

     <div className="text-5xl font-extrabold ... mt-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-3xl flex ml-4 md:ml-32">
          <MdOutlineMiscellaneousServices className='text-[#656ef6] mr-4 text-4xl'/>
            Services
        </span>
      </div>

    <div className='flex px-2 2xl:px-72 justify-center mt-2 flex-col md:flex-row'>

      <div className='group w-[90%] sm:w-[40%] p-0 md:p-10 m-auto mt-5'>
        <div className='p-10 bg-[#fff] shadow-xl rounded-xl h-40 flex relative group-hover:bg-[#656ef6] shadow-indigo-100 '>
          <div className='absolute top-[20%] left-[40%] sm:left-[40%]'>
            <CgIfDesign className='text-[#656ef6] text-6xl group-hover:text-[#fff]' />
            <h2 className='font-bold text-slate-500 group-hover:text-[#fff]'>Frontend</h2>
          </div>
        </div>
      </div>

      <div className='group w-[90%] sm:w-[40%] p-0 md:p-10 m-auto mt-5'>
        <div className='p-10 bg-[#fff] shadow-xl rounded-xl h-40 flex relative group-hover:bg-[#656ef6] shadow-indigo-100 '>
          <div className='absolute top-[20%] left-[40%] sm:left-[40%]'>
            <FaLaptopCode className='text-[#656ef6] text-6xl group-hover:text-[#fff]' />
            <h2 className='font-bold text-slate-500 group-hover:text-[#fff]'>Backend</h2>
          </div>
        </div>
      </div>

      <div className='group w-[90%] sm:w-[40%] p-0 md:p-10 m-auto mt-5'>
        <div className='p-10 bg-[#fff] shadow-xl rounded-xl h-40 flex relative group-hover:bg-[#656ef6] shadow-indigo-100 '>
          <div className='absolute top-[20%] left-[40%] sm:left-[40%]'>
            <ImDatabase className='text-[#656ef6] text-6xl group-hover:text-[#fff]' />
            <h2 className='font-bold text-slate-500 group-hover:text-[#fff]'>Database</h2>
          </div>
        </div>
      </div>


    </div>

    <div className="text-5xl font-extrabold ... mt-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-3xl flex ml-4 md:ml-32">
          <ImFolderOpen className='text-[#656ef6] mr-4 text-4xl'/>
            Portfolio
        </span><br />
    </div>

    <div className='mt-10 pr-2 flex justify-around flex-wrap flex-col lg:flex-row'>

      {projects && projects.slice(0,6).map(project => (
        <div className='w-[95%] lg:w-[40%] xl:w-[28%]  m-2 md:m-4 mt-6	shadow-xl shadow-indigo-200 relative overflow-hidden group' key={project.id}>
              <NavLink to={`/project/${project.id}`}>
              <img src={process.env.PUBLIC_URL + `/images/${project.portada}`} alt="" className='rounded-xl '/>
              <div className='ease-in duration-200 h-full w-full block absolute z-[1] bg-gradient-to-r from-transparent to-[#614EE7] m-auto text-center rounded-xl top-full group-hover:top-0 '>
                <h2 className='m-auto font-bold text-white text-2xl sm:text-3xl md:text-3xl left-[20%] top-[40%] md:left-[30%] absolute'> {project.title.slice(0,13)}{project.title.length > 13 ? '...' : ''} </h2>
              </div>
              </NavLink>
            </div>
      ))}
    </div>
    <div className='mt-24 flex flex-end m-auto w-[100%]'>
      <NavLink to='/projects' className='px-4 md:px-24 py-2 bg-indigo-500 hover:bg-indigo-600 font-bold text-[1.1rem] md:text-2xl text-white rounded m-auto shadow-lg shadow-indigo-300'>View all projects...</NavLink>
    </div>

    <div className="text-5xl font-extrabold ... mt-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-3xl flex ml-1 sm:ml-4 md:ml-32">
          <BiCodeAlt className='text-[#656ef6] mr-4 text-4xl'/>
            Development Skills
        </span><br />
    </div>
    <div className='w-[96%] m-auto flex justify-around flex-col md:flex-row mb-16'>
      <div className='w-[95%] md:w-[30%] bg-[#fff] shadow-lg text-left pl-10 py-4 rounded-md mt-10 shadow-indigo-100'>
        <h2 className='font-bold text-indigo-500 text-2xl text-center'>Frontend</h2><br />
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>HTML</p>
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>CSS</p>
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>Bootstrap CSS</p>
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>Materialize CSS</p>
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>Tailwind CSS</p>
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>ReactJS</p>

        </div>

        <div className='w-[95%] md:w-[30%] bg-[#fff] shadow-lg text-left pl-10 py-4 rounded-md mt-10 shadow-indigo-100'>
        <h2 className='font-bold text-indigo-500 text-2xl text-center'>Backend</h2><br />
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>Node JS</p>
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>MySQL</p>
          <p className='flex'><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>Mongo DB</p>
        </div>
    </div>

    </div>
  )
}
