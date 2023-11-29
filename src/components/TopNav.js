import React, { useState } from "react";
import {
  
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from 'react-icons/tb'
import { FaGoogleWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className={`max-w-[1520px] mx-auto flex justify-between items-center p-4 ${sideNav ? 'bg-red-700' : 'bg-orange-700'} sticky top-0 z-50`}>
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          {sideNav ? (
            <AiOutlineClose size={25} />
          ) : (
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/166/174/small/amd-letter-logo-design-with-polygon-shape-amd-polygon-and-cube-shape-logo-design-amd-hexagon-logo-template-white-and-black-colors-amd-monogram-business-and-real-estate-logo-vector.jpg"
              alt="Menu"
              className="h-12 w-12"
            />
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Tasty
          <span className="font-bold">Hub</span>
        </h1>
      </div>

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} /> Cart
      </button>
      {sideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
        style={{ marginTop: sideNav ? '0' : '64px' }}
      >
        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>Yum <span className='text-red-700 font-bold'>Eats</span></h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson size={25}
                className='mr-4 text-white bg-black rounded-full'
              />
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckReturn size={25}
                className='mr-4 text-white bg-black rounded-full'
              />
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineFavorite size={25}
                className='mr-4 text-white bg-black rounded-full'
              />
              My Favorite
            </li>
            <li className="text-xl py-4 flex">
              <FaGoogleWallet size={25}
                className='mr-4 text-white bg-black rounded-full'
              />
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25}
                className='mr-4 text-white bg-black rounded-full'
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
