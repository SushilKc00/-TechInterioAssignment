import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav_Links from "./Nav_Links";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";

export const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="mobile_nav">
      <div className="flex justify-end items-center gap-8">
        <button className="bg-red-500 rounded-md text-white md:px-10 px-5 md:py-3 py-1 text-[1.6rem] uppercase">
          Donate
        </button>
        <div onClick={() => setMenu(!menu)}>
          {menu ? (
            <ImCross size={26} className="text-red-600" />
          ) : (
            <MdOutlineMenu size={40} />
          )}
        </div>
      </div>
      <ul
        className="mobile_ul"
        style={{
          maxHeight: menu ? "250px" : "0",
          transition: "all 0.4s ease-out",
        }}
      >
        {Nav_Links.map((lnk) => (
          <LI link={lnk} />
        ))}
      </ul>
    </div>
  );
};

const LI = ({ link }) => {
  const [selectedBtn, setSelectedBtn] = useState("");

  return (
    <li className="flex justify-center flex-col pt-4">
      <p className="flex justify-between items-center">
        {link.linkName}{" "}
        {selectedBtn ? (
          <span
            className="text-[1.5rem] font-extrabold"
            onClick={() => setSelectedBtn(!selectedBtn)}
          >
            -
          </span>
        ) : (
          <span
            className="text-[1.5rem] font-extrabold"
            onClick={() => setSelectedBtn(!selectedBtn)}
          >
            +
          </span>
        )}
      </p>
      <div
        className="sub_link_ul"
        style={{
          maxHeight: selectedBtn ? "1200px" : "0",
          overflow: "hidden",
          transition: "all 0.8s linear",
        }}
      >
        {link.subLinks.map((sl) => {
          return (
            <div>
              <Link>{sl.name}</Link>
            </div>
          );
        })}
      </div>
    </li>
  );
};
