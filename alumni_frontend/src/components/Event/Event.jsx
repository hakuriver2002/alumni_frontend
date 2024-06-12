import React from 'react'
import EventCard from './EventCard'
import { Link } from 'react-router-dom';

function Events({ date, month, day, title, time, location }) {
  return (
    <div className="flex flex-col items-center px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <div className="flex gap-2">
        <div className="font-bold text-lg">{month}</div>
        <div className="font-extrabold text-4xl">{date}</div>
        <div className="text-sm">{day}</div>
      </div>
      <h3 className="text-lg text-center font-semibold mt-4">{title}</h3>
      <div className="flex gap-2 mt-2">
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zM13 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1z" />
          </svg>
          {time}
        </span>
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location}
        </span>
      </div>
    </div>
  );
}
const Event = () => {
  const events = [
    {
      date: 8,
      month: 'Jun',
      day: 'Sat',
      title: 'Workshop "Kỹ năng giao tiếp hiệu quả trong Doanh nghiệp"',
      time: '02:00pm',
      location: 'Phòng A0403'
    },
    {
      date: 25,
      month: 'May',
      day: 'Sat',
      title: 'Cuộc thi học thuật RECURSION',
      time: '1:00pm',
      location: 'Phòng A0607'
    },
    {
      date: 5,
      month: 'May',
      day: 'Wed',
      title: 'Cuộc thi Đầu tư chứng khoán Việt Nam',
      time: '5:30pm',
      location: 'Hội trường 6B'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">ALUMNI EVENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <Events key={index} {...event} />
        ))}
      </div>
      <Link to={'events'}>
        <button className="block mt-8 mx-auto px-8 py-3 
        text-white font-bold rounded-md
        bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-sm dark:bg-blue-400 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-300"
        >
          View All Events
        </button>
      </Link>
      
    </div>
  );
    
}

export default Event


// <section className="section-event relative h-screen">
    //   <div className="event-heading">
    //     Alumni Events
    //   </div>
    //   <div className="event-card">
    //     <EventCard/>
    //   </div>
    //   <div className="event-viewAll">

    //   </div>
    // </section>