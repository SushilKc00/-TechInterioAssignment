import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { CampaignCard } from "../Card/CampaignCard";
import backImg from "../../assets/images/news.png";
import backImg2 from "../../assets/images/news2.png";
import backImg3 from "../../assets/images/news3.png";
import backImg4 from "../../assets/images/news4.png";

import { NewsCard } from "../Card/NewsCard";

const newsData = [
  {
    title: " Our president has complex fight against corruption ",
    desc: "Our president has a complex fight against corruption by the readable content of a page",
    time: "august 5,2021",
    chat: 0,
    politic: "politic",
    img: backImg,
  },
  {
    title: "What do we want",
    desc: "Desires to obtain pain of itself because it is a long established fact that a",
    chat: 0,
    politic: "politic",
    time: "January 5,2021",
    img: backImg2,
  },
  {
    title: " Loves pursues or desires to obtain Pain.",
    desc: "It is a long established fact that a reader will be distracted by the readable",
    chat: 0,
    politic: "politic",
    time: "May 5,2021",
    img: backImg3,
  },
  {
    title: "knowledge is power",
    location: "Mirpur-1, Dhaka-1216",
    time: "august 5,2021",
    img: backImg4,
  },
];

export const NewsSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      //   autoplay={{ delay: 8000 }}
      modules={[Navigation, Autoplay, Pagination]}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
      className="mt-12"
    >
      {newsData.map((d) => {
        return (
          <SwiperSlide>
            <NewsCard details={d} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
