"use client";

import useConnectionsList from "@/hooks/useConnectionsList";
import { ConnectionListType } from "@/types/connectionList";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsPersonPlus } from "react-icons/bs";
import { TailSpin } from "react-loader-spinner";

type UserDetailsProps = {
  params: Promise<{ id: string }>;
};

const UserDetails = ({ params }: UserDetailsProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  const { connectionsList, loading, error } = useConnectionsList(); // destructuring the hook

  const connectionUser = connectionsList.find((item) => item.id === id);

  return (
    <div>
      {/* Back to Home */}
      <button
        onClick={() => router.push(`/home`)}
        className="flex items-center gap-2 h-[32px] border-1 border-[#ADADAD] px-2 rounded-sm text-[14px] font-bold text-[#2D2D2D] cursor-pointer px-5"
      >
        <BsChevronLeft /> Back to Home
      </button>

      {/* User details */}
      <div className="w-full flex flex-col items-center bg-white rounded-sm border-1 border-[#F1F1F1] py-10 px-5 mt-5">
        {loading ? (
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
        ) : (
          <>
            <div className="flex flex-col items-center gap-2">
              <div className="w-[48px] h-[48px] sm:w-[77px] sm:h-[77px] rounded-[50px] bg-[#111A4A] text-white font-bold flex items-center justify-center">
                JH
              </div>
              <p className="text-[20px] sm:text-[24px] font-bold">
                {connectionUser?.name}
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#767676]">
                {connectionUser?.location}
              </p>
            </div>

            <div>
              <p className="text-[#5E5E5E] text-[16px] py-5 text-center">
                I'm a data scientist residing in {connectionUser?.location},
                passionate about leveraging machine learning to solve complex
                problems.
              </p>
            </div>

            <div>
              <button className="flex items-center justify-center gap-2 w-[150px] h-[32px] px-2 rounded-sm text-[14px] font-bold bg-[#111A4A] text-white cursor-pointer">
                <BsPersonPlus size={15} />
                Connect
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
