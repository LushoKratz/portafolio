import React, { useEffect, useState } from 'react'
import { useParams , useNavigate, NavLink} from 'react-router-dom';
import { useProjectsContext } from '../context/GlobalContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImFolderOpen } from 'react-icons/im';
import { BsFillCheckCircleFill, BsPencilSquare } from 'react-icons/bs';
import {AiOutlineCodeSandbox} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';
import {RiPagesFill} from 'react-icons/ri';
import Loading from '../helpers/Loading';

export default function Project() {
    const [project, setProject] = useState('');
    const [loading, setLoading] = useState(true);
    const { projects} = useProjectsContext();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.id){
            const idParamToString = (params.id).toString();
            const foundProject = projects.filter(project => project.id === idParamToString);
            //console.log(foundProject[0])
            setProject(foundProject[0]);
            setTimeout(() => {
                setLoading(false);
            }, 400);
        }
    }, [])
    
  return (
    <div>
        {loading ? ( <Loading /> ) :project && (
        <div className='px-0 lg:px-18'>
            <div className="text-5xl font-extrabold ... mt-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-2xl md:text-3xl flex ml-4 md:ml-16">
                <ImFolderOpen className='text-[#656ef6] mr-4 text-4xl'/>
                    {project.title}
                </span><br />
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={project.images.length > 1 ? true : false}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{delay: 6000}}
                className="mySwiper"
            >
                {project.images.map(image => (
                    <SwiperSlide key={image} className="px-6 sm:px-16 pb-10 md:pb-24 w-[100%]">
                        <div>
                            <img src={process.env.PUBLIC_URL + `/images/${image}`} className='w-[100%]'/>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
            <br />
            <div className='p-1 sm:p-5 flex justify-end flex-col md:flex-row mr-2 lg:mr-32'>
                {project.websiteUrl.length > 0 && ( 
                 <button onClick={() => window.open(`${project.websiteUrl}`, '_blank')} className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1 sm:px-10 sm:py-2 font-bold text-white rounded mr-0 md:mr-6 flex mt-5 text-[0.8rem] sm:text-[1.1rem]">
                  <RiPagesFill className='mr-2 text-2xl'/>Visit website
                  </button>
                )}
                {project.githubUrl.length > 0 && (
                 <button onClick={() => window.open(`${project.githubUrl}`, '_blank')} className="bg-slate-600 hover:bg-slate-500 px-4 py-1 sm:px-10 sm:py-2 font-bold text-white rounded flex mt-5 text-[0.8rem] sm:text-[1.1rem]">
                      <FaGithub className='mr-2 text-2xl'/>View on GitHub
                 </button>
                )}
            </div>
            <h2 className='text-2xl px-2 lg:px-32 my-10 font-bold text-indigo-500 flex'><BsPencilSquare className='text-4xl mr-2' />Description:</h2>
            <p className='text-1xl xl:text-2xl px-2 lg:px-56 my-10 text-slate-600'>
                {project.description}
            </p>
            <h2 className='text-2xl px-2 lg:px-32 my-10 font-bold text-indigo-500 flex'><AiOutlineCodeSandbox className='text-4xl mr-2' />Languages used in this project:</h2>
            <div className='px-2 lg:px-32 mb-16'>
                {project.languages.map(language => (
                    <h2 key={language} className="flex"><BsFillCheckCircleFill className='text-indigo-500 mr-2'/>{language}</h2>
                ))}
            </div>
        </div>
        )}
    </div>
  )
}
