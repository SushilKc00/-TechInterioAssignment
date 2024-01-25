import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { CampaignCard } from "../Card/CampaignCard";
import backImg from "../../assets/images/event.jpg";
import backImg2 from "../../assets/images/event2.jpg";
import backImg3 from "../../assets/images/event3.jpg";

const campaignData = [
  {
    title: "knowledge is power",
    location: "Mirpur-1, Dhaka-1216",
    time: "august 5,2021",
    img: backImg,
  },
  {
    title: "knowledge is power",
    location: "Mirpur-1, Dhaka-1216",
    time: "august 5,2021",
    img: backImg2,
  },
  {
    title: "knowledge is power",
    location: "Mirpur-1, Dhaka-1216",
    time: "august 5,2021",
    img: backImg3,
  },
  {
    title: "knowledge is power",
    location: "Mirpur-1, Dhaka-1216",
    time: "august 5,2021",
    img: backImg,
  },
];

export const CampaignSlider = () => {
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
      className="home-swiper"
    >
      {campaignData.map((d) => {
        return (
          <SwiperSlide>
            <CampaignCard data={d} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
