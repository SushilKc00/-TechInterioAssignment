import React from "react";
import Nav_Links from "./Nav_Links";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaAngleDown,
} from "react-icons/fa";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="bg-[#333333]">
      <div className="upper_nav py-7">
        <div className="max-width flex md:flex-row flex-col gap-6 items-center justify-between">
          <div className="flex gap-5">
            <Link className="text-white">
              <FaFacebookF size={15} />
            </Link>
            <Link className="text-white">
              <FaTwitter size={15} />
            </Link>{" "}
            <Link className="text-white">
              <FaInstagram size={15} />
            </Link>{" "}
            <Link className="text-white">
              <FaLinkedin size={15} />
            </Link>{" "}
          </div>
          <div className="flex gap-3 text-white text-[1.4rem]">
            <Link>Call Us +0123456789</Link>
            <span className="text-gray-500">|</span>
            <Link>info@politic.com</Link>
          </div>
        </div>
      </div>
      <div className="lower_nav bg-white lg:py-12 py-2">
        <nav className="max-width">
          <ul className="desktop_ul flex items-center gap-12 justify-end uppercase">
            {Nav_Links.map((lnk) => {
              return (
                <li>
                  <Link className="flex gap-2 items-center text-[1.4rem] font-semibold">
                    {lnk.linkName}{" "}
                    {lnk.linkName?.toLowerCase() == "contact" ? (
                      ""
                    ) : (
                      <FaAngleDown size={12} />
                    )}
                  </Link>

                  <div className="sub_link_ul">
                    {lnk?.subLinks?.map((sl) => {
                      return (
                        <div>
                          <Link className="link text-[1.5rem] font-medium text-black hover:text-red-600">
                            {sl?.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
            <button className="bg-red-500 text-white px-10 py-3 text-[1.6rem] uppercase">
              Donate
            </button>
          </ul>
          <MobileNav />
        </nav>
      </div>
    </header>
  );
};
