import React from "react";

import { PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, LifebuoyIcon } from "@heroicons/react/24/solid";
import supportImg from "../assets/supportTeam2.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24 ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding The right team
          </h3>
          <p className="py-4 text-3xl text-slate-300 ">
            Building an effective support team in your small business involves
            ensuring that all team members have the skills and knowledge to
            perform effectively. By establishing clear policies and procedures
            and documenting common troubleshooting techniques, you can maximize
            productivity and consistency that ultimately leads to increased
            customer satisfaction. with that being said trusting our Company is pretty much important to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-sky-600 text-white rounded-lg mt-[-4rem] " />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
              tracking sales leads, coordinating quotes with sales packs, providing customer service, and managing customer accounts
              </p>
            </div>
            <div className="bg-slate-100  pl-8 py-4 ">
              <p className="flex items-center text-sky-600 ">
                Contact Us <ArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <LifebuoyIcon className="w-16 p-4 bg-sky-600 text-white rounded-lg mt-[-4rem] " />
              <h3 className="font-bold text-2xl my-6">Technical Support </h3>
              <p className="text-gray-600 text-xl">
              As a Technical Support (Tech Support) Worker, we will be tasked with monitoring and maintaining an organisation's computer systems and networks. You will be responsible for diagnosing any hardware or software faults with these systems and will solve the issues either in person or over the phone.
              </p>
            </div>
            <div className="bg-slate-100  pl-8 py-4 ">
              <p className="flex items-center text-sky-600">
                Contact Us <ArrowRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CpuChipIcon className="w-16 p-4 bg-sky-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                posuere tellus magna. Sed a efficitur nunc. Suspendisse non
                sollicitudin lorem, vestibulum ullamcorper magna. Sed at dapibus
                odio.
              </p>
            </div>
            <div className="bg-slate-100  pl-8 py-4 ">
              <p className="flex items-center text-sky-600 ">
                Contact Us <ArrowRightIcon className="w-5 ml-2 " />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
