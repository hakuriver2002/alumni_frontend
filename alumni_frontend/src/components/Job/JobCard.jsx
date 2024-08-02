import React from 'react'
import { CiLocationOn, CiUser, CiCalendar } from "react-icons/ci";
import { AiFillPicture } from "react-icons/ai";
import { FaMoneyBill, FaRegCalendar } from "react-icons/fa";
import { BsExplicitFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import logo from "../../assets/logo_tdtu.png"
import { Link } from 'react-router-dom';
const JobCard = ({jobs}) => {
    
  
    return (
    <>
        
            <div className="group relative overflow-hidden rounded-lg shadow-lg
            hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col md:flex-row">
                <div className="flex-1  md:w-1/2">
                <img
                    src={logo}
                    alt="Job Image"
                    width={350}
                    height={200}
                    className='max-h-full max-w-full object-cover rounded-l-lg'
                />
                </div>
                
                <div className="flex flex-col items-start gap-4 p-4 flex-1 md:w-1/2">
                <div className="content space-y-2 flex-1">
                    <Link to={`/jobs/detail/${jobs._id}`}>
                        <h2 className='text-2xl font-bold'>{jobs.jobTitle} </h2>
                    </Link>
                    <div className="flex items-center gap-3 text-base text-gray-500">
                        <CiCalendar className='h-4 w-4'/>
                        <span>{jobs.expiredAt} </span>
                    {/* <IoMdTime className='h-4 w-4'/>
                    <span>09:00 AM</span> */}
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-500">
                        <CiLocationOn className='h-4 w-4'/>
                        <span> {jobs.location} </span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-500">
                        <CiUser className="w-4 h-4" />
                        <span>{jobs.position} </span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-500">
                        <FaMoneyBill className="w-4 h-4" />
                        <span>{jobs.salary}</span>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-500">
                        <BsExplicitFill className="w-4 h-4" />
                        <span>{jobs.experience}</span>
                    </div>

                    {/* <div className="flex items-center gap-2 text-base text-gray-500">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in arcu bibendum placerat. Morbi
                        ornare leo at ex euismod, vel consequat neque vehicula.
                    </p>
                    </div> */}
                    <div className="flex items-center gap-6 text-base text-gray-500 dark:text-gray-400">
                        <ul className='flex flex-row space-x-16'>
                            <li className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-bg-blue-3'>
                                {jobs.skills[0]}
                            </li>
                            <li className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-bg-blue-3'>
                                {jobs.skills[1]}
                            </li>
                            <li className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-bg-blue-3'>
                                {jobs.skills[2]}
                            </li>
                        </ul>
                    </div>
                    <div > 
                        <button className='flex-none rounded-md bg-blue-2 px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-blue-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-5 mt-4 ml-auto'>
                            Apply
                        </button>  
                        <button className='flex-none rounded-md bg-blue-2 px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-blue-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-5 mt-4 ml-20'>
                            Detail
                        </button>  
                    </div>
                    
                </div>
                </div>
            </div>
        
        
        
        
        {/* <div className="w-full max-w-lg p-6 grid ">
            <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <AiFillPicture className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="grid gap-1">
                <h3 className="text-xl font-semibold">{jobs.jobTitle} </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <AiFillPicture className="w-4 h-4" />
                    <span>Something i don't know</span>
                </div>
                </div>
            </div>
            <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                <CiLocationOn className="w-4 h-4" />
                <span>{jobs.location} </span>
                </div>
                <div className="flex items-center gap-2">
                <CiUser className="w-4 h-4" />
                <span>{jobs.position} </span>
                </div>
                <div className="flex items-center gap-2">
                <FaMoneyBill className="w-4 h-4" />
                <span>{jobs.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                <BsExplicitFill className="w-4 h-4" />
                <span>{jobs.expiredAt}</span>
                </div>
                <div className="flex items-center gap-2">
                <BsExplicitFill className="w-4 h-4" />
                <span>{jobs.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                <GiSkills className="w-4 h-4" />
                {jobs.skill}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button className="flex-1">Apply Now</Button>
                <Button variant="outline" className="flex-1">
                Read Detail
                </Button>
            </div>
        </div> */}
    </>
  )
}

export default JobCard
