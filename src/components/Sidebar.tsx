import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-full shadow-lg">
      <h4 className="bg-purple-700 p-4 text-white font-semibold text-lg text-center">
        Softnet Clinic System
      </h4>
      <div
        className="p-2  hide-scrollbar overflow-y-auto bg-white"
        style={{ height: `calc(100% - 60px)` }}
      >
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>
        <Link
          href="/Product"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100 "
        >
          <MdDashboard size={20} />{" "}
          <span className="text-gray-600">Product</span>
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>{" "}
        <Link
          href="/"
          className="flex items-center gap-3 p-3  rounded-md mb-2 hover:bg-gray-100"
        >
          <MdDashboard size={20} /> Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
