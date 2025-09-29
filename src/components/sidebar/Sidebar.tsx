"use client";

import React from "react";
import { BsChevronExpand, BsGeo, BsGeoAlt, BsGrid } from "react-icons/bs";
import aplite from "../../../public/aplite.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BiSolidHome } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="hidden md:flex fixed w-[247px] flex-col h-screen p-5 border-r border-r-[#E7E6E9] bg-white">
      <div className="flex items-center justify-center border-b border-b-[#E7E6E9] pb-5">
        <Image src={aplite} alt="aplite-logo" />
      </div>

      <div className="flex-1 flex flex-col items-center gap-3 mt-5">
        {/* Home */}
        <Link href={`/home`} className="w-[190px]">
          <div
            className={`flex items-center gap-3 px-3 py-3 ${
              pathName === "/home" ? "bg-[#111A4A] rounded-sm" : ""
            }`}
          >
            <BiSolidHome
              size={20}
              color={pathName === "/home" ? "white" : "#2D2D2D"}
            />
            <p
              className={`${
                pathName === "/home" ? "text-white font-bold" : "text-[#2D2D2D]"
              }`}
            >
              Home
            </p>
          </div>
        </Link>

        {/* locations */}
        <Link href={`/locations`} className="w-[190px]">
          <div
            className={`flex items-center gap-3 px-3 py-3 ${
              pathName === "/locations" ? "bg-[#111A4A] rounded-sm" : ""
            }`}
          >
            <BsGeoAlt
              size={20}
              color={pathName === "/locations" ? "white" : "#2D2D2D"}
            />
            <p
              className={`${
                pathName === "/locations"
                  ? "text-white font-bold"
                  : "text-[#2D2D2D]"
              }`}
            >
              Locations
            </p>
          </div>
        </Link>

        {/* settings */}
        <Link href={`/settings`} className="w-[190px]">
          <div
            className={`flex items-center gap-3 px-3 py-3 ${
              pathName === "/settings" ? "bg-[#111A4A] rounded-sm" : ""
            }`}
          >
            <FiSettings
              size={20}
              color={pathName === "/settings" ? "white" : "#2D2D2D"}
            />
            <p
              className={`${
                pathName === "/settings"
                  ? "text-white font-bold"
                  : "text-[#2D2D2D]"
              }`}
            >
              Settings
            </p>
          </div>
        </Link>
      </div>

      {/* 2025 Aplite */}
      <div className="text-center border-t border-t-[#E7E6E9] pt-5">
        <p className="text-[#767676] text-[14px]">@ 2025 Aplite</p>
      </div>
    </div>
  );
};

export default Sidebar;
