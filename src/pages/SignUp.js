import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaArrowCircleLeft,
  FaPlus,
  FaPlusCircle,
  FaKey
} from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function handleClickToLogin(){
    navigate("/Login");
  }

  return (
    <div className="flex flex justify-center gap-3 align-middle items-center h-screen w-full bg-zinc-400">
      <button className="p-2 rounded-full" onClick={handleClick}><FaArrowCircleLeft/></button>
      <div className="flex flex-col justify-center gap-4 w-96 bg-zinc-100 p-10 rounded-lg border-2 border-sky-600">
        <h1 className="text-4xl text-center my-6  text-sky-600">Create Account</h1>
        <input required className="border-slate-400 bg-zinc-100 rounded  p-4 border border-zinc-200 drop-shadow-md" placeholder="Enter Your Name" type="name"></input>
        <input required className="border-slate-400 bg-zinc-100 rounded p-4 border border-zinc-200 drop-shadow-md" placeholder="Enter Your Email" type="email"></input>
        <input required className="border-slate-400 bg-zinc-100 rounded p-4 border border-zinc-200 drop-shadow-md" placeholder="Enter Your Password" type="password"></input>
        <p>or use your Social Media Account for registration</p>
        <div className="flex  justify-around sm:w-[300px] pt-4 text-2xl">
          <FaFacebook    className="border border-slate-600 rounded-full p-1 w-12 h-10"/>
          <FaInstagram    className="border border-slate-600 rounded-full p-1 w-12 h-10"/>
          <FaGithub   className="border border-slate-600 rounded-full p-1 w-12 h-10" />
          <FaTwitter    className="border border-slate-600 rounded-full p-1 w-12 h-10"/>
        </div>
        <div className="flex justify-around">
          <button className="px-6 py-3 flex align-middle justify-center gap-4 content-center" onClick={handleClick}><span><FaPlusCircle className="text-2xl"/></span> <span>Sign Up</span></button>
          <button className="px-6 py-3 border-none bg-transparent text-black flex justify-between content-center gap-4 align-middle" onClick={handleClickToLogin}><span ><FaKey className="text-2xl"/></span><span>Sign In</span></button>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
