import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import logo from "../../assets/logo_tdtu.png";
import { links } from '../../data/dummy';
import { useAuthContext } from "../../context/authContext";
import { Tooltip } from 'react-tooltip';


const Sidebar = () => {
   
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useAuthContext();


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
            {links.map((link) => (
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
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
