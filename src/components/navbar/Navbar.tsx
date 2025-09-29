"use client";

import React, { useEffect, useState } from "react";
import { BsBell, BsList, BsSearch, BsX, BsXCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import apliteLogo from "../../../public/aplitelogo.svg";
import Image from "next/image";
import MenuNavbar from "../menu-navbar/MenuNavbar";
import { ConnectionListType } from "@/types/connectionList";
import useConnectionsList from "@/hooks/useConnectionsList";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openMenuNav, setOpenMenuNav] = useState(false);
  const [openSearchSuggestion, setOpenSearchSuggestion] = useState(false);

  const [displaySearchForMobileView, setDisplaySearchForMobileView] =
    useState(false);

  const { connectionsList, loading, error } = useConnectionsList();

  const [filteredConnectionsList, setFilteredConnectionsList] = useState<
    ConnectionListType[]
  >([]);

  // filter for search input
  useEffect(() => {
    if (!searchValue.trim()) {
      setFilteredConnectionsList(connectionsList);
    } else {
      setFilteredConnectionsList(
        connectionsList.filter(
          (prev) =>
            prev.name.includes(searchValue.toLowerCase()) ||
            prev.email.includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, connectionsList]);

  return (
    <>
      {!displaySearchForMobileView ? (
        <div className="fixed top-0 left-0 sm:left-[247px] right-0 flex items-center justify-between px-5 py-3.5 border-b-1 border-b-[#E7E6E9] z-30 bg-white">
          <div className="relative hidden sm:flex sm:w-[451px] h-[44px] rounded-sm  items-center border-1 border-[#E7E7E7] gap-2 px-3">
            <BsSearch size={15} color="black" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setOpenSearchSuggestion(e.target.value ? true : false);
              }}
              className="flex-1 outline-0 border-0 border-l border-[#E7E7E7] pl-2"
              placeholder="Search customer"
            />
          </div>

          {openSearchSuggestion && (
            <div className="absolute top-17 bg-white sm:w-[451px] max-h-[200px] p-3 border-1 border-[#E4E4E4] rounded-sm overflow-scroll">
              {filteredConnectionsList.length > 0 ? (
                filteredConnectionsList.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSearchValue(item.name);
                      setOpenSearchSuggestion(false);
                    }}
                  >
                    <div
                      className={`hover:bg-[#F1F1F1] cursor-pointer rounded-sm px-3 py-2 leading-4 ${
                        index < filteredConnectionsList.length - 1 ? "mb-3" : ""
                      }`}
                    >
                      <p className="text-[16px] font-bold ">{item.name}</p>
                      <p className="text-[14px] text-[#767676]">{item.email}</p>
                    </div>

                    {index < filteredConnectionsList.length - 1 && (
                      <hr className="border-[#E4E4E4] mb-3" />
                    )}
                  </div>
                ))
              ) : (
                // no results found
                <div className="flex flex-col items-center justify-center mt-5">
                  <BsSearch size={64} color="#ADADAD" />
                  <p className="text-[20px] text-[#2F2F2F] font-bold mt-2">
                    No results found
                  </p>
                  <p className="text-[16px] text-[#232323] text-center">
                    Check spelling or try searching by connection name{" "}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* for mobile view */}
          <Image src={apliteLogo} alt="aplite-logo" className="sm:hidden" />

          <div className="hidden sm:flex items-center gap-5">
            {/* notification */}
            <BsBell size={20} color="#111A4A" className="font-bold" />

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
            <div className="flex items-center gap-2 cursor-pointer">
              <FiLogOut size={20} color="#111A4A" />
              <p className="text-[14px] font-bold text-[#2D2D2D]">Log out</p>
            </div>
          </div>

          {/* for mobile view */}
          <div className="flex sm:hidden items-center gap-5">
            {/* search */}
            <BsSearch
              size={20}
              className="cursor-pointer"
              onClick={() => setDisplaySearchForMobileView(true)}
            />

            <BsList
              size={20}
              className="cursor-pointer"
              onClick={() => setOpenMenuNav(true)}
            />
          </div>

          <MenuNavbar
            isOpen={openMenuNav}
            closeModal={() => setOpenMenuNav(false)}
          />
        </div>
      ) : (
        // for mobile view
        <div className="fixed top-0 left-0 gap-2 right-0 flex items-center justify-between px-5 py-3.5 border-b-1 border-b-[#E7E6E9] z-30 bg-white">
          <div className="relative flex flex-1 sm:w-[451px] h-[44px] rounded-sm  items-center border-1 border-[#E7E7E7] gap-2 px-3">
            <BsSearch size={15} color="black" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setOpenSearchSuggestion(e.target.value ? true : false);
              }}
              className="flex-1 outline-0 border-0 border-l border-[#E7E7E7] pl-2"
              placeholder="Search customer"
            />
          </div>

          {openSearchSuggestion && (
            <div className="absolute top-17 bg-white w-[90vw] max-h-[200px] p-3 border-1 border-[#E4E4E4] rounded-sm overflow-scroll">
              {filteredConnectionsList.length > 0 ? (
                filteredConnectionsList.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSearchValue(item.name);
                      setOpenSearchSuggestion(false);
                    }}
                  >
                    <div
                      className={`hover:bg-[#F1F1F1] cursor-pointer rounded-sm px-3 py-2 leading-4 ${
                        index < filteredConnectionsList.length - 1 ? "mb-3" : ""
                      }`}
                    >
                      <p className="text-[16px] font-bold ">{item.name}</p>
                      <p className="text-[14px] text-[#767676]">{item.email}</p>
                    </div>

                    {index < filteredConnectionsList.length - 1 && (
                      <hr className="border-[#E4E4E4] mb-3" />
                    )}
                  </div>
                ))
              ) : (
                // no results found
                <div className="flex flex-col items-center justify-center mt-5">
                  <BsSearch size={64} color="#ADADAD" />
                  <p className="text-[16px] text-[#2F2F2F] font-bold mt-2">
                    No results found
                  </p>
                  <p className="text-[14px] text-[#232323] text-center">
                    Check spelling or try searching by connection name{" "}
                  </p>
                </div>
              )}
            </div>
          )}

          <div
            className="w-10 h-10 bg-[#F1F1F1] rounded-[30px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              setSearchValue("")
              setOpenSearchSuggestion(false);
              setDisplaySearchForMobileView(false);
            }}
          >
            <BsX size={30} color="#232323" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
