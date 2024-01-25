import React, { useState } from "react";
import { HomeSlider } from "../../Components/Swiper/HomeSlider";
import { TogetherCard } from "../../Components/Card/TogetherCard";
import donateBackImg from "../../assets/images/asset6.jpeg";
import { CampaignSlider } from "../../Components/Swiper/CampaignSlider";
import imgMission from "../../assets/images/asset 9.svg";
import { NewsSlider } from "../../Components/Swiper/NewsSlider";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const donatePrice = [
  "1,000.0",
  "2,000.0",
  "3,000.0",
  "4,000.0",
  "custom amount",
];

export const Home = () => {
  const [dontateVal, setDonateVal] = useState("1,000.00");
  const [counterOn, setCounterOn] = useState(false);

  const changeDonateValue = (p) => {
    if (p.toLowerCase() === "custom amount") {
      setDonateVal("");
    } else {
      setDonateVal(p);
    }
  };

  return (
    <>
      <section className="home-slider-section">
        <HomeSlider />;
      </section>

      <section className="common-section">
        <div className="together-wrapper">
          <h2 className="text-center sm:text-[3.6rem] text-[2.5rem] text-[#5E5E5E] font-bold">
            Together We Are Stronger
          </h2>
          <p className="sm:text-[1.6rem] text-[1.2rem] font-normal text-[#555555] sm:text-center text-justify md:w-[45%] mx-auto mt-5 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <div className="together-card-container flex md:flex-row flex-col gap-10 mt-16">
            <TogetherCard />
            <TogetherCard />
            <TogetherCard />
          </div>
        </div>
      </section>

      <section className="common-section">
        <div
          className="donation-container flex items-center justify-center"
          style={{
            backgroundImage: `url(${donateBackImg})`,
          }}
        >
          <div className="donation-wrapper text-white">
            <h2 className="text-[3.6rem] font-bold text-center">
              Make A Donation
            </h2>
            <p className="sm:text-[1.6rem] text-[1.2rem] font-normal text-center mt-4 md:w-[60%] mx-auto capitalize">
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
            <div className="mt-24">
              <div className="flex justify-center">
                <span className="border border-white px-6 py-2 text-[1.6rem]">
                  $
                </span>
                <input
                  type="text"
                  onChange={(e) => setDonateVal(e.target.value)}
                  value={dontateVal}
                  className="outline-none px-4 w-[140px] bg-transparent border border-white text-[1.6rem]"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-12">
                {donatePrice.map((p, index) => {
                  return (
                    <div
                      className="w-fit border border-white px-16 rounded-md py-3 cursor-pointer hover:bg-white hover:text-black capitalize"
                      onClick={() => changeDonateValue(p)}
                      // style={{
                      //   background: index === p ? "black" : "",
                      // }}
                    >
                      <p className="text-[1.6rem] font-normal">${p}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-12 flex justify-center">
                <button className="border border-white text-[1.6rem] px-16 py-3 hover:bg-white hover:text-black ">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className="campaign-container">
          <h2 className="sm:text-[3.6rem] text-[2.5rem] text-[#5E5E5E] text-center capitalize font-bold">
            Upcoming Campaign
          </h2>
          <p className="sm:text-[1.6rem] text-[1.2rem] text-center md:w-[60%] m-auto mt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <div className="campaign-slider mt-16">
            <CampaignSlider />
          </div>
        </div>
      </section>

      <section className="common-section">
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <div className="volunteer-conatiner">
            <div className="max-width flex flex-col gap-8 text-white">
              <div>
                <h2 className=" text-center sm:text-[2rem] text-[1.8rem] font-semibold md:w-[50%] mx-auto">
                  OUR CAMPAIGN IS POWERED BY CONTRIBUTIONS FROM SUPPORTERS LIKE
                  YOU
                </h2>
                <p className="w-[80px] h-[2px] bg-white mx-auto mt-5"></p>
              </div>
              <div>
                <h4 className="text-center md:text-[6vw] text-[3rem]">
                  {counterOn && <CountUp start={0} end={45455} duration={5} />}
                </h4>
                <p className="text-center text-[1.8rem] md:mt-[-1rem]">
                  Dolars In Campaign Contiributions So Far
                </p>
              </div>
              <div className="flex justify-center">
                <button className="uppercase sm:text-[1.6rem] text-[1.2rem] bg-black text-white py-4 px-6 mt-8 font-medium rounded-md hover:bg-red-600 transition-all">
                  BECOME A VOLUNTEER
                </button>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>

      <section>
        <div className="mission-vision-container">
          <div className="max-width flex md:flex-row flex-col gap-6">
            <div className="left">
              <h1 className="text-[1.6rem] font-semibold text-[#EA000D]">
                MISSION & VISION
              </h1>
              <h2 className="sm:text-[3rem] text-[2.5rem] font-extrabold tracking-[-0.2rem]">
                Changes We Need
              </h2>
              <p className="sm:text-[1.8rem] text-[1.4rem] mt-5">
                If you use this site regularly and would like to help keep the
                site on the Internet, please consider donating a small sum to
                help pay for the hosting and bandwidth bill.
              </p>
              <h3 className="text-[2.6rem] font-extrabold mt-5 text-[#EA000D] w-[20%] tracking-[-0.2rem]">
                Jacob Cunninghm
              </h3>
            </div>
            <div className="right">
              <img src={imgMission} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className="newsletter-conatiner">
          <div className="max-width flex flex-col gap-8 text-white">
            <h2 className="sm:text-[3.6rem] text-[2.5rem] text-center font-bold">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-center sm:text-[1.6rem] text-[1.2rem] md:w-[55%] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <div className="flex md:flex-row flex-col justify-center gap-5 mt-10">
              <input
                type="text"
                placeholder="Your Email address"
                className="md:w-[40%] px-4 py-5 bg-[#27363abc] backdrop-blur-0 text-[1.6rem] outline-none rounded-md"
              />
              <button className="bg-[#E03927] rounded-md py-6 text-[1.4rem] font-semibold md:w-[20%] w-[60%] m-auto hover:bg-red-700 transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className="news-container max-width">
          <h2 className="sm:text-[3.6rem] text-[2.5rem] text-[#5E5E5E] text-center capitalize font-bold">
            Latest News
          </h2>
          <p className="sm:text-[1.6rem] text-[1.2rem] text-center md:w-[60%] m-auto mt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <div>
            <NewsSlider />
          </div>
        </div>
      </section>
    </>
  );
};
