import React from "react";

import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your research
          </h3>
          <p className="text-3xl">
          This is dependent on how much deep and serious your work is, it has a huge impact on work for the future, so choose your plan wisely, think about the price, the time duration you want to use the plan...etc
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative w-[500px]">
            <span className="uppercase px-3 py-1 bg-sky-200 text-sky-900 rounded-2xl text-sm ">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                49$
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
              ligula efficitur, euismod nunc non, finibus arcu. Pellentesque
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>

          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative w-[500px]">
            <span className="uppercase px-3 py-1 bg-sky-200 text-sky-900 rounded-2xl text-sm ">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                99$
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
              ligula efficitur, euismod nunc non, finibus arcu. Pellentesque
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>

          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative w-[500px]">
            <span className="uppercase px-3 py-1 bg-sky-200 text-sky-900 rounded-2xl text-sm ">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                990$
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /ye
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
              ligula efficitur, euismod nunc non, finibus arcu. Pellentesque
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <p className="flex py-4">
                <CheckCircleIcon className="w-8 mr-5 text-green-600" /> lorem,
                ipsum donor
              </p>
              <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
