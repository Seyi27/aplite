"use client";

import { useState } from "react";
import { BsChevronDown, BsGeoAlt, BsX } from "react-icons/bs";
import apliteLogo from "../../../public/aplitelogo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { BiSolidHome } from "react-icons/bi";

type MenuNavbarProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const MenuNavbar = ({ isOpen, closeModal }: MenuNavbarProps) => {
  if (!isOpen) return null;
  const pathName = usePathname();

  return (
    <div className="fixed inset-0 bg-white z-50 p-5 overflow-y-auto flex flex-col">
      {/* Header with logo + close button */}
      <div className="flex items-center justify-between mb-6">
        <Image src={apliteLogo} alt="aplite-logo" className="sm:hidden" />

        <BsX size={28} className="cursor-pointer" onClick={closeModal} />
      </div>

      {/* home */}
      <div className="flex flex-1 flex-col gap-4">
        <Link href={`/home`} onClick={closeModal}>
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
        <Link href={`/locations`} onClick={closeModal}>
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
        <Link href={`/settings`} onClick={closeModal}>
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

      <div className="border-t border-t-[#E7E6E9] pt-5">
        {/* user account */}
        <div className="sm:w-60 flex items-center gap-3 cursor-pointer">
          <div className="w-[45px] h-[45px] rounded-[30px] bg-[#111A4A] text-white font-bold flex items-center justify-center">
            JH
          </div>
          <div className="flex flex-col cursor-pointer leading-5">
            <p className="font-bold">Josh Heart</p>
            <p className="text-[#575E67] text-[14px]">Accountant</p>
          </div>
        </div>
        {/* log out */}
        <div className="flex items-center justify-center gap-2 cursor-pointer py-7">
          <FiLogOut size={20} color="#111A4A" />
          <p className="text-[14px] font-bold text-[#2D2D2D]">Log out</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default MenuNavbar;
