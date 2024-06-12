import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
	e.preventDefault();
	await login(email, password);
};

  return (
    <div className="bg-bg flex min-h-[100dvh] items-center justify-center p-4 h-screen">
      <div className="w-3/12 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-500">
          Login
          <span className="text-red-500"> Alumni</span>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a
            href={"/signup"}
            className="text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button
              className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (<span className="loading loading-spinner "></span>) : ("Login")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
