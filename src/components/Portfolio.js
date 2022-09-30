import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useProjectsContext } from '../context/GlobalContext';
import { useState } from 'react';
import Loading from '../helpers/Loading';
import { FaGithub } from 'react-icons/fa';
import { RiPagesFill } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

export default function Portfolio() {
    const {projects} = useProjectsContext();
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 600)
    }, [])
    

  return (
    <div className='flex flex-col justify-around mt-10 px-2 sm:px-5 md:px-10 lg:px-28 flex-wrap md:flex-row'>

        {loading ? (<Loading />) : projects.map(project => (
            <div className='flex flex-col w-[98%] md:w-[47%] xl:w-[30%] rounded-lg shadow-lg shadow-indigo-200 bg-[#fff] mb-10' key={project.id}>
                <div>
                    <img src={process.env.PUBLIC_URL + `/images/${project.portada}`} alt="" />
                </div>
                <div className='p-5'>
                    <h2 className='font-bold'> {project.title} </h2>
                    <p>{project.description.slice(0,130)}{project.description.length > 130 && '...'}</p>
                    <div className='flex justify-end mt-8'>
                        <NavLink to={`/project/${project.id}`} className='bg-indigo-500 hover:bg-indigo-600 px-6 py-1 rounded text-white font-bold flex'><RiPagesFill className='text-2xl mr-2'/>Details</NavLink>
                        {project.githubUrl.length > 0 && (
                            <button onClick={() => window.open(`${project.githubUrl}`, '_blank')} className='bg-slate-700 hover:bg-slate-600 font-bold text-white px-6 py-1 rounded ml-5 flex '><FaGithub className='text-2xl mr-2'/>Github</button>
                        )}
                        {project.githubUrl.length === 0 && project.websiteUrl.length > 0 && (
                            <button onClick={() => window.open(`${project.websiteUrl}`, '_blank')} className='bg-slate-700 hover:bg-slate-600 font-bold text-white px-6 py-1 rounded ml-5 flex '><CgWebsite className='text-2xl mr-2'/>Visit</button>
                        )}
                    </div>
                </div>
            </div>
        ))}


    </div>
  )
}
