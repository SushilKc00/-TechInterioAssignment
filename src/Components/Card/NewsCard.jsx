import React from "react";
import { FaRegCalendarDays, FaU } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export const NewsCard = ({ details }) => {
  return (
    <div className="news-card">
      <div className="img-container">
        <img src={details.img} alt="" />
      </div>

      <div>
        <h2 className="sm:text-[2.2rem] text-[2rem] mt-8 font-medium">
          {details.title}
        </h2>
        <div className="flex gap-6 mt-4 sm:text-[1.4rem] text-[1.2rem]">
          <p className="flex gap-3 items-center">
            <FaRegCalendarDays size={14} /> {details.time}
          </p>
          <p className="flex gap-3 items-center">
            <BsChatFill size={14} /> {details.chat}
          </p>
          <p className="flex gap-3 items-center capitalize">
            <FaUser size={14} /> {details.politic}
          </p>
        </div>
        <p className="text-[1.6rem] mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos
        </p>
        <div className="mt-8">
          <button className="bg-[#E03927] px-3 py-4 rounded-lg text-white text-[1.4rem] hover:bg-black hover:text-white transition-all">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
