import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navigate, useHistory, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/authSlice";

// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../app/authSlice";

const MyFunction = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClickSignIn() {
    navigate("./Login");
  }
  function handleClickSignUp() {
    navigate("./SignUp");
  }

  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState();
  // getting stored value

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg sticky top-0">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
            KurdCloudManager.
          </h1>
          <ul className="hidden md:flex ">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                {" "}
                Support{" "}
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                {" "}
                Platforms{" "}
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                {" "}
                Pricing{" "}
              </Link>
            </li>
          </ul>
          {/* 
    text-3xl is font-size: 1.875rem;
    line-height: 2.25rem 
    
    4xl is font-size: 2.25rem;
    line-height: 2.5rem; 
    */}
        </div>

        <div className="hidden md:flex pr-4">
          {auth.isAuthenticated ? (
            <button
              className="border-none bg-transparent text-black mr-4"
              onClick={handleClickSignIn}
            >
              LogOut
            </button>
          ) : (
            <button
              className="border-none bg-transparent text-black mr-4"
              onClick={handleClickSignIn}
            >
              Sign In
            </button>
          )}
          <button className="px-8 py-3" onClick={handleClickSignUp}>
            Sign Up
          </button>
        </div>
        <div className="md:hidden mr-4  opacity-50" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-8" /> : <XMarkIcon className="w-8" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        {/* we say if nav is false, then hidden it, if not then appear and show it */}
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            {" "}
            About{" "}
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support{" "}
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            {" "}
            Platforms{" "}
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            {" "}
            Pricing{" "}
          </Link>
        </li>

        <div className="flex  flex-col my-4">
          {auth.isAuthenticated ? (
            <Link
              to={"/"}
              className="bg-indigo-600 p-1 rounded-full text-white px-4 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => dispatch(logout())}
            >
              Logout
            </Link>
          ) : (
            <button
              className="bg-transparent text-sky-600 px-8 py-3 mb-4"
              onClick={handleClickSignIn}
            >
              Sing In
            </button>
          )}

          <button className="px-8 py-3" onClick={handleClickSignUp}>
            Sing Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default MyFunction;
