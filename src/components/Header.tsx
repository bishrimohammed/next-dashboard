"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="p-[12px]   flex justify-between border-b-[1px] relative bg-white">
      <IoMdMenu size={30} className="cursor-pointer" />

      <div
        className="right cursor-pointer pe-1 sm:pe-3  "
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <Image src="/user-male.png" alt="" width={35} height={35} />
          <FaCaretDown />
        </div>
        {isOpen && (
          <div className="absolute top-[40px] right-[10px] border-2 bg-white rounded-lg shadow-md w-[140px] ">
            <div onClick={() => alert("pro")} className="p-2 text-sm">
              Profile
            </div>
            <div onClick={() => alert("setting")} className="p-2 text-sm">
              Settings
            </div>
            <div onClick={() => alert("logout")} className="p-2 text-sm">
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
