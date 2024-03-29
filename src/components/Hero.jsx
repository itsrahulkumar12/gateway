import React from "react";
import gatewayImg from "../assets/gatewayImg.png";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-[250px] bg-[#F1D732]">
      <div className=" h-full w-full flex justify-center items-center mt-8">
        <div className="h-[150px] w-full mx-10 sm:mx-20 min-w-[200px] px-10 md:px-20 bg-[#1B1D36] rounded-xl flex gap-5 items-center justify-center flex-col shadow-xl">
          <center className="text-[28px] leading-7 text-[#F1D732] font-normal">
            Find your destination
          </center>
          <div className="relative w-full">
            <input
              type="text"
              className="rounded-2xl p-1 px-2 w-full"
              placeholder="Search"
            />
            <div className="bg-[#F1D732] p-2 rounded-2xl absolute top-0 right-0 px-4">
              <IoIosSearch />
            </div>
          </div>
        </div>
      </div>
      <div
        className="sm:h-full pt-10 w-[500px] hidden sm:block bg-white ps-10"
        style={{ borderTopLeftRadius: "70%", borderBottomLeftRadius: "50%" }}
      >
        <img className="h-full" src={gatewayImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
