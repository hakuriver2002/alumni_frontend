import React, { useState } from 'react';
import Navbar from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import logo from '../../../assets/logo_tdtu.png';
import { Link } from 'react-router-dom';
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";



const EventPage = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('Any');
  const [school, setSchool] = useState('Any');
  const [topic, setTopic] = useState('Any');

  // const filteredEvents = upcomingEvents.filter(event =>
  //   event.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  
  const handleSearch = () => {
    // Implement your search logic here, using eventName, location, school, and topic
    // console.log('Search triggered with:', { eventName, location, time, topic });
  };
  
  return (
    <>
      <Navbar/>
      {/* Searching bar */}
      <section className="container py-12 max-w-full bg-blue-2 border-gray-3">
        <div className="mx-32">
          <h2 className="text-6xl font-bold mb-6 ml-3 uppercase text-black">Event</h2>
          {/* Search Event */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-gray-800 mb-2 ml-3">Search by Event Name</p>
              <div className="relative rounded-md shadow-md p-2">
                <input
                  type="text"
                  placeholder="Search All Events..."
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
                <button
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={handleSearch}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
            <form class="max-w-auto mx-auto my-3">
              <label for="countries" class="block mb-2 text-base font-medium text-gray-900">Filter by location</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Choose a place</option>
                <option value="A">A building</option>
                <option value="B">B building</option>
                <option value="C">C building</option>
                <option value="F">F building</option>
              </select>
            </form>
            </div>

            <div>
            <form class="max-w-auto mx-auto my-3">
              <label for="time" class="block mb-2 text-base font-medium text-gray-900">Filter by time</label>
              <select id="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Choose a time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">B Afternoon</option>
                <option value="night">B Night</option>
              </select>
            </form>
            </div>
            <div>
            <form class="max-w-auto mx-auto my-3">
              <label for="topics" class="block mb-2 text-base font-medium text-gray-900">Filter by topic</label>
              <select id="topics" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Choose a topic</option>
                <option value="funny">funny</option>
                <option value="work_experience">Work experience</option>
                <option value="soft_skils">Soft skils</option>
                <option value="solve_problem">Solve Problem</option>
              </select>
            </form>
            </div>
          </div>
        </div>
        
      </section>
      {/* Event Lists */}
      <section className="container max-w-full py-12 sm:p-6 md:px-40">
        <div className="grid grid-rows-3 md:grid-rows-2 gap-8 mx-auto px-2">
          <div className="group relative overflow-hidden rounded-lg shadow-lg
          hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col md:flex-row">
            <div className="flex-1  md:w-1/2">
              <img
                src={logo}
                alt="Event Image"
                width={350}
                height={200}
                className='max-h-full max-w-full object-cover rounded-l-lg'
              />
            </div>
            
            <div className="flex flex-col items-start gap-4 p-4 flex-1 md:w-1/2">
              <div className="content space-y-2 flex-1">
                <h2 className='text-2xl font-bold'>Su kien Ton Duc Thang University</h2>
                <div className="flex items-center gap-3 text-base text-gray-500">
                  <CiCalendar className='h-4 w-4'/>
                  <span>Jun 15, 2024</span>
                  <IoMdTime className='h-4 w-4'/>
                  <span>09:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-500">
                  <CiLocationOn className='h-4 w-4'/>
                  <span>Room A0403</span>
                </div>
                <div className="flex items-center gap-2 text-base text-gray-500">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in arcu bibendum placerat. Morbi
                    ornare leo at ex euismod, vel consequat neque vehicula.
                  </p>
                </div>
                <div className="flex items-center gap-6 text-base text-gray-500 dark:text-gray-400">
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-bg-blue-3'>
                    Funny
                  </span>
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-bg-blue-3'>
                    Work experience
                  </span>
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-bg-blue-3'>
                    Soft skills
                  </span>
                </div>
              </div>
              <button className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 mt-4 ml-auto">
                Read more
              </button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg
          hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col md:flex-row">
            {/* <Link
              to={'#'}
              className="absolute inset-0 z-10"
            >
            <span className='sr-only'>View Event</span>
            </Link> */}
            <div className="flex-1 md:w-1/2">
              <img
                src={logo}
                alt="Event Image"
                width={350}
                height={100}
                className='max-h-full max-w-full object-cover rounded-l-lg'
              />
            </div>
            <div className="flex flex-col items-start gap-4 p-4 flex-1 md:w-1/2">
              <div className="content space-y-2 flex-1">
                <h2 className='text-2xl font-bold'>Su kien Ton Duc Thang University</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CiCalendar className='h-4 w-4'/>
                  <span>Jun 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CiLocationOn className='h-4 w-4'/>
                  <span>Room A0403</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in arcu bibendum placerat. Morbi
                    ornare leo at ex euismod, vel consequat neque vehicula.
                  </p>
                </div>
                <div className="flex items-center gap-6 text-base text-gray-500 dark:text-gray-400">
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'>
                    Funny
                  </span>
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'>
                    Work experience
                  </span>
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'>
                    Soft skills
                  </span>
                </div>
              </div>
              <button className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 mt-4 ml-auto">
                Read more
              </button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg
          hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col md:flex-row">
            {/* <Link
              to={'#'}
              className="absolute inset-0 z-10"
            >
            <span className='sr-only'>View Event</span>
            </Link> */}
            <div className="flex-1 md:w-1/2">
              <img
                src={logo}
                alt="Event Image"
                width={350}
                height={100}
                className='max-h-full max-w-full object-cover rounded-l-lg'
              />
            </div>
            <div className="flex flex-col items-start gap-4 p-4 flex-1 md:w-1/2">
              <div className="content space-y-2 flex-1">
                <h2 className='text-2xl font-bold'>Su kien Ton Duc Thang University</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CiCalendar className='h-4 w-4'/>
                  <span>Jun 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CiLocationOn className='h-4 w-4'/>
                  <span>Room A0403</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in arcu bibendum placerat. Morbi
                    ornare leo at ex euismod, vel consequat neque vehicula.
                  </p>
                </div>
                <div className="flex items-center gap-6 text-base text-gray-500 dark:text-gray-400">
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'>
                    Funny
                  </span>
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'>
                    Work experience
                  </span>
                  <span className='flex-none rounded-md bg-blue-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'>
                    Soft skills
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className=" block mx-auto px-8 py-3 text-white font-bold rounded-md
          bg-blue-3 hover:bg-blue-4 focus:ring-4 focus:ring-blue-4 text-sm ">
            Read more
          </button>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default EventPage
