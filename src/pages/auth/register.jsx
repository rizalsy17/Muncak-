import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layouts/NavbarAuth";
import mounImage from "../../assets/bro.png";
import useRegister from "../../hooks/useRegister";

export default function Register() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    handleSubmit,
  } = useRegister();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:mt-0">
          <div className="w-full md:w-1/2">
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
              <div className="flex flex-col text-left font-light text-darkText">
                <h1 className="text-3xl font-medium">Register</h1>
                <p className="text-sm text-left">
                  Register and Prepare Your Adventure
                </p>
                {error && <p className="text-primary">{error}</p>}
              </div>
              <form onSubmit={handleSubmit} className="form-group">
                <div className="form-field">
                  <label className="form-label text-darkText">Name</label>
                  <div className="form-control">
                    <input
                      placeholder="Type here..."
                      type="text"
                      className="input-rounded input max-w-full text-darkText bg-white"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label text-darkText">Email</label>
                  <div className="form-control">
                    <input
                      placeholder="Type here..."
                      type="email"
                      className="input-rounded input max-w-full text-darkText bg-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label text-darkText">Password</label>
                  <div className="form-control">
                    <input
                      placeholder="Type here..."
                      type="password"
                      className="input-rounded input max-w-full text-darkText bg-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label text-darkText">
                    Confirm Password
                  </label>
                  <div className="form-control">
                    <input
                      placeholder="Type here..."
                      type="password"
                      className="input-rounded input max-w-full text-darkText bg-white"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button
                      type="submit"
                      className="btn btn-rounded bg-primary w-full text-white"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <div className="form-field">
                <div className="form-control justify-center text-darkText font-light">
                  Already have an account?
                  <Link
                    to="/login"
                    className="link link-underline-hover text-primary font-light text-sm"
                  >
                    Login Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/6 md:ml-8 flex justify-center hidden md:flex">
            <img
              className="w-full mt-12 md:mt-0"
              src={mounImage}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
