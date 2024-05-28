import React from "react";
import { Link } from "react-router-dom";
import mounImage from "../../assets/bro.png";
import Navbar from "../../components/layouts/NavbarAuth";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const { email, setEmail, password, setPassword, error, handleSubmit } =
    useLogin();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-2/6 md:mr-8 flex mx-auto">
            <img
              className="w-full mt-52 md:mt-0"
              src={mounImage}
              alt="Hero Image"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
              <div className="flex flex-col text-left font-light text-darkText">
                <h1 className="text-3xl font-medium">Login</h1>
                <p className="text-sm text-left">
                  Login and Prepare Your Adventure
                </p>
                {error && <p className="text-primary">{error}</p>}
              </div>
              <form onSubmit={handleSubmit} className="form-group">
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

                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button
                      type="submit"
                      className="btn btn-rounded bg-primary w-full text-white"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <div className="form-field">
                <div className="form-control justify-center text-darkText font-light">
                  Dont have an account?
                  <Link
                    to="/register"
                    className="link link-underline-hover text-primary font-light text-sm"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
