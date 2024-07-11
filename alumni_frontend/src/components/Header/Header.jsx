import React, { useState } from "react";
import logo from "../../assets/logo_tdtu.png";
import { Link, NavLink } from "react-router-dom";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const nav__links = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Event",
      path: "/events",
    },
    {
      display: "News",
      path: "/news",
    },
    {
      display: "Jobs",
      path: "/jobs"
    },
    {
      display: "Alumni",
      path: "/alumnies",
    },
    {
      display: "Gallary",
      path: "/gallary",
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // Navbar reponsive error !! fix
    <>
      <header class="bg-white border-gray-200 py-2.5 dark:bg-gray-900 ">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link
            to={'/'}
            class="flex items-center"
          >
            <img
              src={logo}
              class="h-6 mr-3 sm:h-9"
              alt={"Alumni TDTU"}
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Alumni
            </span>
          </Link>

          {/* Button Login */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a 
                href="/login"
                className="text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 
                dark:bg-blue-400 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-300">
                Login
              </a>
          </div>

          {/* Menu NavBar */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <div class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {nav__links.map((link, index) => (
                <NavLink 
                  key={index} 
                  to={link.path}
                  className={"block py-2 pl-3 pr-4 text-white bg-blue-300 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"}
                >
                  {link.display}
                </NavLink>
              ))}
              </div>
          </div>
        </div>
      </header>
    </>
    
  );
};

export default Navbar;
