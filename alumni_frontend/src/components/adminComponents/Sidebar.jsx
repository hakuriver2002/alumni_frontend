import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdEmojiEvents, MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import logo from "../../assets/logo_tdtu.png";
import { links } from '../../data/dummy';
import { useAuthContext } from "../../context/authContext";
import { Tooltip } from 'react-tooltip';
import { RiDashboardFill } from 'react-icons/ri';
import { FaSuitcase, FaUserGroup } from 'react-icons/fa6';
import { IoNewspaperOutline } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";



const Sidebar = () => {
   
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useAuthContext();

  const [expandItem, setExpandItem ] = useState(null);

  

  const handleToggle = (item) => {
    setExpandItem(expandItem === item ? null : item);
  }


  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-gray-600  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link 
                to="/admin" 
                className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-black ">
                <img
              src={logo}
              class="h-6 mr-3 sm:h-9"
              alt={"Alumni TDTU"}/> 
              <span>Alumni</span>
            </Link>
          </div>
          <div className="mt-10 ">
            <ul className='sidebar menu' id='sidebar'>
              <li className='' id='Dashboard'>
                <a href="" className='text-gray-800 m-3 mt-4 uppercase'>
                  <RiDashboardFill/>
                  <span>Dashboard</span>
                  <span className='fa arrow'></span>
                </a>
                
              </li>
              <li className='' id='Alumni'>
                <a className='text-gray-800 m-3 mt-4 uppercase' 
                onClick={() => handleToggle('Alumni')}>
                  <FaUserGroup/>
                  <span>Alumni</span>
                  {expandItem === 'Alumni' ? <IoIosArrowDown/> : <IoIosArrowBack/>}
                </a>
                {expandItem === 'Alumni' && (
                  <ul className='nav nav-second-level collapse in'>
                    <li>
                      <Link to={`/admin/alumni?major=KTPM`} id='KTPM'>
                        <i></i>
                        <span>Kỹ thuật phần mềm</span>
                      </Link>
                    </li>
                    <li>
                      <a href="/admin/alumni#KHMT" id='KHMT'>
                        <i></i>
                        <span>Khoa học máy tính</span>
                      </a>
                    </li>
                    <li>
                      <a href="/admin/alumni#MMT" id='MMT'>
                        <i></i>
                        <span>Mạng máy tính</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className='' id='Events'>
                <a href="" className='text-gray-800 m-3 mt-4 uppercase'>
                  <MdEmojiEvents/>
                  <span>Event</span>
                  <span className='fa arrow'></span>
                </a>
                
              </li>
              <li className='' id='News'>
                <a href="" className='text-gray-800 m-3 mt-4 uppercase'>
                  <IoNewspaperOutline/>
                  <span>News</span>
                  <span className='fa arrow'></span>
                </a>  
              </li>
              <li className='' id='Jobs'>
                <a href="" className='text-gray-800 m-3 mt-4 uppercase'>
                  <FaSuitcase/>
                  <span>Jobs</span>
                  <span className='fa arrow'></span>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

{/* {links.map((link) => (
              <div key={link.title}>
                <p className="text-gray-800 m-3 mt-4 uppercase">
                  {link.title}
                </p>
                {link.items.map((item) => (
                  <NavLink
                    to={`/admin/${item.name}`}
                    key={item.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {item.icon}
                    <span className="capitalize ">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            ))} */}