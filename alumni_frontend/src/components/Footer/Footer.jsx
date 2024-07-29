import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,} from "react-icons/fa"

    
const Footer = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-4 bg-blue-1 max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1485px] max-md:max-w-full">
        <div className="text-3xl font-medium leading-10 text-white max-md:max-w-full">
          Subscribe to our newsletter
        </div>
        <div className="mt-7 text-xl tracking-wide leading-10 text-center text-white w-[794px] max-md:max-w-full">
          Get expert advice for your journey to university delivered to your
          inbox each month. It's short, and worthwhile – we promise!
        </div>
        <form action="" method="get">
            <input 
              className='items-start px-7 pt-7 pb-7 mt-5 max-w-full text-base font-medium text-left bg-white text-zinc-600 w-[560px] max-md:px-5'
              placeholder='Your Email address'
            />
        </form>
        <button 
            className='justify-center px-12 py-4 mt-2 text-base font-semibold text-white bg-stone-400 max-md:px-5 max-md:mt-10'
            type="button">SUBSCRIBE NOW</button>
        <div className="flex flex-col items-center self-stretch px-16 pt-6 pb-3 mt-12 border-t border-white border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[947px]">
            <div className="flex gap-5 justify-between self-center px-px">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b1d8caea01e2ad62ed9dbfad3b4b198f6df45d79cff2cf0c4687ec90ce7fe3c?"
                className="shrink-0 w-12 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1af72bb8834028a2f0e9fcf5623d4d5986ad585b7908783add89f5eae1eec2a6?"
                className="shrink-0 w-12 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9255817910400b1ff2862f046aec194226b005833e63714d8a5323f5db944807?"
                className="shrink-0 w-12 aspect-square"
              />
            </div>
            <div className="flex gap-4 justify-between mt-8 text-base font-medium text-center text-white max-md:flex-wrap max-md:max-w-full">
              <div>About </div>
              <div>Contact us</div>
              <div>FAQS</div>
              <div>Ters and conditions</div>
              <div>Cookie poliy</div>
              <div>Privacy</div>
            </div>
          </div>
        </div>
        <div className="mt-11 text-base font-medium text-center text-white max-md:mt-10">
          Copyright © 2024 - Ton Duc Thang University
        </div>
      </div>
    </div>
  )
}

export default Footer
