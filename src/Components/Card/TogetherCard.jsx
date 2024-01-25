import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export const TogetherCard = () => {
  return (
    <div className="together-card">
      <div className="relative w-[80px] h-[80px] rounded-full bg-[#FF1111] text-white flex items-center justify-center">
        <HiOutlineSpeakerphone size={40} />
        {/* <div className="flex flex-col gap-3 rotate-[-35deg] absolute top-[35%] left-[-35%] z-[-1]">
          <div className="w-[100px] h-[1px] bg-green-500"></div>
          <div className="w-[100px] h-[1px] bg-green-500"></div>
          <div className="w-[100px] h-[1px] bg-green-500"></div>
        </div> */}
      </div>
      <h2 className="text-[1.8rem] font-semibold">Campaigns</h2>
      <p className="sm:text-[1.4rem] text-[1.2rem] text-center w-[90%]">
        There are many variations of passag Lorem Ipsum available, but the
        majority have sfered alteration in some form.
      </p>
    </div>
  );
};
