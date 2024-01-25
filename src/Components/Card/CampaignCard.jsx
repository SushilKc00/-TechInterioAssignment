import React from "react";
import { Link } from "react-router-dom";

export const CampaignCard = ({ data }) => {
  return (
    <div className="campaign-card relative">
      <div className="img-container">
        <img src={data.img} alt="" />
      </div>
      <div className="absolute bottom-12 left-12">
        <Link
          to="https://thethemedemo.com/politic/campaign/human-rights-conference-2/"
          className="text-[2.2rem] font-semibold text-white"
        >
          {data.title}
        </Link>
        <p className="text-[1.4rem] text-white mt-1">{data.location}</p>
        <p className="text-[1.4rem] text-white mt-1">{data.time}</p>
      </div>
    </div>
  );
};
