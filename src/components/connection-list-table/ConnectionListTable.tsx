"use client";
import React, { useEffect, useState } from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import usersIc from "../../../public/users-ic.svg";
import peopleOutline from "../../../public/people_outline.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import useConnectionsList from "@/hooks/useConnectionsList";
import { useToast } from "@/app/context/ToastContext";

const ConnectionListTable = () => {
  const router = useRouter();
  const { connectionsList, loading, error } = useConnectionsList(); // destructuring the hook

  return (
    <div className="w-[90vw] sm:w-full border-1 border-[#F1F1F1] bg-white mt-10 p-5 rounded-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#F1F1F1]">
        <div className="flex items-center">
          <Image src={usersIc} alt="aplite-logo" />

          <p className="text-[16px] sm:text-[20px] text-[#2D2D2D] font-bold">
            Connections List
          </p>
        </div>

        <button className="w-[104px] h-[32px] border-1 border-[#ADADAD] px-2 rounded-sm text-[14px] font-bold">
          View all
        </button>
      </div>

      {loading ? (
        <div className="flex items-center mt-5">
          <TailSpin
            visible={true}
            height={"40"}
            width={"40"}
            color={"#084C3F"}
            ariaLabel="tail-spin-loading"
            radius="2"
            wrapperStyle={{
              margin: "0 auto",
              paddingLeft: "10px",
            }}
            wrapperClass=""
            strokeWidth={3}
          />
        </div>
      ) : connectionsList.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-fixed w-full text-left border-separate border-spacing-y-2 pt-3">
            <thead>
              <tr className="text-[#767676] text-[14px]">
                <th className="w-[200px] font-normal">Name</th>
                <th className="w-[250px] font-normal">Email</th>
                <th className="w-[200px] font-normal">Location</th>
                <th className="w-[200px] font-normal">Status</th>
                <th className="w-[200px] font-normal">Last login</th>
              </tr>
            </thead>
            <tbody>
              {connectionsList.map((req, idx) => (
                <tr
                  key={idx}
                  className="bg-[#F9FBFC] text-[14px] text-black rounded-sm cursor-pointer"
                  onClick={() => router.push(`/users/${req.id}`)}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-[22px] h-[22px] rounded-[30px] bg-[#111A4A] text-white font-bold flex items-center justify-center">
                        {req.name[0]}
                      </div>
                      {req.name}
                    </div>
                  </td>
                  <td>{req.email}</td>
                  <td>{req.location}</td>
                  <td>
                    <div className="bg-[#F1F1F1] w-fit px-3">{req.status}</div>
                  </td>
                  <td>{req.last_login}</td>
                  <td className=" cursor-pointer">
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // No connections yet
        <div className="flex flex-col items-center justify-center h-100">
          <Image src={peopleOutline} alt="people outline" />
          <p className="text-[16px] text-[#2F2F2F] font-bold">
            No connections yet
          </p>
          <p className="text-[14px] text-[#232323] text-center">
            Start building your network. Search for connections on Aplite.{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConnectionListTable;
