import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-52 md:my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted By Developers across the world
          </h2>
          <p className="text-2xl  my-10 text-gray-500">
            KurdCloudManager. is a web application and program made for
            Developers and all the programmers that Need Cloud and it's
            features, it is fully functional and easy to use with lots of
            Pricing plans, enjoy
          </p>
        </div>
        <div className="flex gap-10 px-2 text-center place-content-center flex-wrap">
          <div className="w-72 h-72 border py-8 rounded-xl shadow-xl flex items-center  justify-center flex-col">
            <p className="text-6xl font-bold text-sky-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className=" w-72 h-72 border py-8 rounded-xl shadow-xl flex items-center  justify-center flex-col">
            <p className="text-6xl font-bold text-sky-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="w-72 h-72 border py-8 rounded-xl shadow-xl flex items-center  justify-center flex-col">
            <p className="text-6xl font-bold text-sky-600">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
