import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../app/authSlice";
import { useDispatch } from "react-redux";

import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaArrowCircleLeft,
  FaPlusCircle,
  FaKey,
} from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    // Make POST request to the /login API endpoint

    // if successful => JWT token is returned
    dispatch(login(form.username));
    navigate("/", { replace: true });
    // if rejected =>  error telling u what's going on (username doesn't exist)
  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));

    console.log(form);
  }


  function handleClickToHome() {
    navigate("/");
  }


  return (
    <div className="flex justify-center gap-3 align-middle items-center h-screen w-full bg-zinc-400">
      <button className="p-2 rounded-full">
        <FaArrowCircleLeft onClick={handleClickToHome} />
      </button>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col justify-center gap-4 w-96 bg-zinc-100 p-8 rounded border-2 drop-shadow-md border-sky-600">
          <h1 className="text-4xl text-center my-6  text-sky-600">
            Welcome Back!
          </h1>

          <input
            required
            className="border-slate-400 bg-zinc-100 rounded  p-4 border border-zinc-200 drop-shadow-md"
            placeholder="Enter Your Name or Email"
            type="username"
            name="username"
            id="username"
            value={form.username || ""}
            onChange={onChangeHandler}
          ></input>
          <input
            required
            className="border-slate-400 bg-zinc-100 rounded p-4 border border-zinc-200 drop-shadow-md"
            placeholder="Enter Your Password"
            type="password"
            name="password"
            id="password"
            value={form.password || ""}
            onChange={onChangeHandler}
          ></input>
          <div className="divide-y-2 divide-slate-700">
            <p className="my-1">Or continue with your Social Media Account </p>
            <div className="flex  justify-around sm:w-[300px] pt-4 text-2xl">
              <FaFacebook className="border border-slate-600 rounded-full p-1 w-12 h-10" />
              <FaInstagram className="border border-slate-600 rounded-full p-1 w-12 h-10" />
              <FaGithub className="border border-slate-600 rounded-full p-1 w-12 h-10" />
              <FaTwitter className="border border-slate-600 rounded-full p-1 w-12 h-10" />
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <button
              className="px-6 py-3 flex align-middle bg-sky-600 justify-center gap-4"
              type="submit"
            >
              <span>
                <FaPlusCircle className="text-2xl" />
              </span>
              <span>Sign in</span>
            </button>
            <button className="px-6 py-3 border-none bg-transparent text-black flex justify-center gap-4 align-middle">
              <span>
                <FaKey className="text-2xl" />
              </span>
              <span>Create New Account</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
