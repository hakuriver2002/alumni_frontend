import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useLogin from "../../../hooks/useLogin";

const LoginAlumni = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

  return (
    <div className="bg-bg flex min-h-[100dvh] items-center justify-center p-4 h-screen">
      <div className="w-3/12 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login
          <span className="text-blue-1"> Alumni</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full input input-bordered h-10"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <a
            href={"/"}
            className="text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Trở lại trang chủ
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 " disabled={loading}>
              {loading ? <span className='loading loading-spinner '></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAlumni;
