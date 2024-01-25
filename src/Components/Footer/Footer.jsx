import React from "react";
import { FaFacebookF, FaTwitter, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="upper_footer">
        <div className="grid-container max-width py-28">
          <div className="text-white ">
            <h2 className="text-[2.3rem] uppercase text-white font-semibold">
              Contact us
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-[1.6rem] font-normal">
              <p className="font-bold">
                Phone:{" "}
                <span className="text-[1.4rem] font-normal">
                  +99 858 547 589
                </span>
              </p>
              <p className="font-bold">
                Phone:{" "}
                <span className="text-[1.4rem] font-normal">
                  +99 858 547 589
                </span>
              </p>
              <p className="font-bold">
                Phone:{" "}
                <span className="text-[1.4rem] font-normal">
                  +99 858 547 589
                </span>
              </p>
              <p className="font-bold">
                Phone:{" "}
                <span className="text-[1.4rem] font-normal">
                  +99 858 547 589
                </span>
              </p>
            </div>
          </div>
          <div className="mt-28">
            <p className="text-white text-[1.6rem]">
              There are many variations of passaes of Ipsum avalable, but the
              majority have sueratio inome fornjected humour, or romised s which
            </p>
            <div className="flex justify-center gap-10 text-white mt-16">
              <Link>
                <FaFacebookF size={20} />
              </Link>
              <Link>
                <FaTwitter size={20} />
              </Link>{" "}
              <Link>
                <FaWifi size={20} />
              </Link>
            </div>
          </div>
          <div className="last-grid flex flex-col gap-24">
            <h2 className="text-[2.3rem] uppercase text-white font-semibold">
              instagram photos
            </h2>
            <p className="text-gray-500 text-[1.6rem]">
              Please enter your access token.
            </p>
            <p className="text-gray-500 text-[1.6rem] text-end mt-[-4rem]">
              Instagram Feed Not found Please enter valid Access Token.(Enter
              Access Token)
            </p>
          </div>
        </div>
      </div>
      <div className="lower_footer bg-[#E03927] mt-20 py-10">
        <p className="text-white text-[1.6rem] text-center">
          Copyright Politic. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
