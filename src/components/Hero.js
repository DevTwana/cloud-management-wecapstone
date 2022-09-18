import React from "react";
import {
  CloudArrowUpIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import bgImg from "../assets/cloud2.png";
const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-100 flex flex-col justify-between bg-blue-100"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
        <div className="flex flex-col justify-center md:items-start items-center w-full px-2 py-8 ">
          <p className="text-2xl">Unique Sequencing and Production</p>
          <h1 className="py-3 text-3xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech Brand. </p>
          <button className="py-3 px-6 sm:w-[60%] my-4 transition ease-in-out duration-200">
            {" "}
            Get Started{" "}
          </button>
        </div>
        <div>
          <img className="w-full " src={bgImg} alt="/" />
        </div>
        <div className="absolute flex flex-col py-4 md:min-w-[760px] md:bottom-[-11%] bottom-[-35%]  mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p className="text-2xl my-1">Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudArrowUpIcon className="h-6 text-sky-600 px-2" /> App
              Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <CircleStackIcon className="h-6 text-sky-600 px-2" /> Dashboard
              Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-sky-600 px-2" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-sky-600 px-2" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
