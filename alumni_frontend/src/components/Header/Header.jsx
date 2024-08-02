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
      <header class="bg-blue-5 border-gray-200 py-2.5 ">
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
            <span class="self-center text-xl font-semibold whitespace-nowrap text-blue-2">
              Alumni
            </span>
          </Link>

          {/* Button Login */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a 
                href="/alumni/login"
                className="text-blue-1 bg-blue-2 hover:bg-blue-3 focus:ring-4 focus:ring-blue-3 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 ">
                Login
              </a>
          </div>

          {/* Menu NavBar */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <div class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-5">
              {nav__links.map((link, index) => (
                <NavLink 
                  key={index} 
                  to={link.path}
                  className={"block py-2 pl-3 pr-4 text-white bg-blue-2 rounded lg:bg-transparent lg:text-blue-1 lg:p-0"}
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
