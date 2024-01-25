import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import backImg from "../../assets/images/asset5.jpeg";
import backImg2 from "../../assets/images/asset4.jpeg";
import man from "../../assets/images/man.png";
import man2 from "../../assets/images/man2.png";

export const HomeSlider = () => {
  const [slideBtn, setSlideBtn] = useState(false);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      //   autoplay={{ delay: 8000 }}
      modules={[Navigation, Autoplay, Pagination]}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      className="home-swiper"
    >
      <SwiperSlide
        className="home-slider-background"
        style={{
          backgroundImage: `url(${backImg})`,
        }}
      >
        <div className="home-content-wrapper max-width">
          <div className="w-[50%] left">
            <h1>Cunninghm jacob</h1>
            <h2>Internation Politician</h2>
            <button>Read More</button>
          </div>
          <div className="w-[50%] right">
            <img src={man} alt={man} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="home-slider-background"
        style={{
          backgroundImage: `url(${backImg2})`,
        }}
      >
        <div className="home-content-wrapper max-width flex items-center">
          <div className="w-[50%] left">
            <h1>Cunninghm jacob</h1>
            <h2>Internation Politician</h2>
            <button>Read More</button>
          </div>
          <div className="w-[50%] right">
            <img src={man2} alt={man2} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="home-slider-background"
        style={{
          backgroundImage: `url(${backImg})`,
        }}
      >
        <div className="home-content-wrapper max-width flex items-center">
          <div className="w-[50%] left">
            <h1>Cunninghm jacob</h1>
            <h2>Internation Politician</h2>
            <button>Read More</button>
          </div>
          <div className="w-[50%] right">
            <img src={man} alt="" />
          </div>
        </div>
      </SwiperSlide>

      <div
        className={`prev absolute top-[50%] left-[-100%] translate-y-[-50%] z-50 cursor-pointer  bg-red-600 w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-black`}
      >
        <IoIosArrowBack
          size={30}
          style={{
            color: "white",
          }}
        />
      </div>

      <div className="next absolute top-[50%] right-[-100%] translate-x-[-50%] translate-y-[-50%] z-20  cursor-pointer bg-red-600 w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-black">
        <IoIosArrowForward
          size={30}
          style={{
            color: "white",
          }}
        />
      </div>
    </Swiper>
  );
};
