import Link from "next/link";
import React from "react";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full h-screen  flex items-center justify-center ">
      <div className="md:w-[60%] w-[97%]  flex md:flex-row flex-col md:gap-0 gap-2 rounded-md ">
        <div className="right p-10 md:w-1/2 sm:w-[100%]  border-[1px] border-gray-400 md:border-e-0 rounded-s-lg md:rounded-e-none rounded-e-lg">
          <h4 className="text-4xl font-semibold mb-1">Login</h4>
          <p className="text-sm mt-3 text-gray-600">Sign In to your account</p>
          <form className="my-3">
            <div className="flex  border-[1px] border-gray-300 rounded-s-md overflow-hidden mb-3">
              <div className="flex  items-center  px-3 border-e-[1px] border-gray-300 bg-gray-100">
                <CiUser />
              </div>
              <input
                type="text"
                className="flex-1 px-3 py-[7px] outline-none"
                placeholder="username"
              />
            </div>
            <div className="flex  border-[1px] border-gray-300 rounded-s-md overflow-hidden ">
              <div className="flex  items-center  px-3 border-e-[1px] border-gray-300 bg-gray-100">
                <IoLockClosedOutline />
              </div>
              <input
                type="password"
                className="flex-1 px-3 py-[7px] outline-none"
                placeholder="password"
              />
            </div>
            {/* <input type="password" /> */}
            <Link
              href="/"
              type="submit"
              className="border-0 mt-4 bg-purple-700 text-white rounded-md px-5 py-[5px]"
            >
              Login
            </Link>
          </form>
        </div>
        <div className="left px-2 md:w-1/2 sm:w-[100%] bg-purple-700 "></div>
      </div>
    </div>
  );
};

export default page;
