import React from "react";

const UserCard = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white rounded-sm h-[108px] sm:h-[157px] pl-5 sm:pl-10 border-1 border-[#F1F1F1]">
      <div className="w-[48px] h-[48px] sm:w-[77px] sm:h-[77px] rounded-[50px] bg-[#111A4A] text-white font-bold flex items-center justify-center">
        JH
      </div>
      <div className="flex flex-col leading-6 sm:leading-8">
        <p className="text-[20px] sm:text-[32px] font-bold">Josh Heart</p>
        <p className="text-[14px] sm:text-[20px] text-[#5E5E5E]">
          @joshheart3495
        </p>
      </div>
    </div>
  );
};

export default UserCard;
