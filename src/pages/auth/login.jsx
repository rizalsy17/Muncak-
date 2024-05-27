import React from "react";
import { Link } from "react-router-dom";
import mounImage from "../../assets/bro.png";
import Navbar from "../../components/layouts/navbar";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const { email, setEmail, password, setPassword, error, handleSubmit } =
    useLogin();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center">
          {/* Gambar */}
          <div className="w-full md:w-2/6 md:mr-8 flex mx-auto">
            {" "}
            {/* Tambahkan kelas flex justify-center */}
            <img
              className="w-full mt-52 md:mt-0"
              src={mounImage}
              alt="Hero Image"
            />
          </div>
          {/* Formulir */}
          <div className="w-full md:w-1/2">
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
              <div className="flex flex-col text-left">
                <h1 className="text-3xl font-semibold font-poppins">Masuk</h1>
                <p className="text-sm text-left font-poppins">
                  Masuk dan Siapkan Petualanganmu
                </p>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <form onSubmit={handleSubmit} className="form-group">
                <div className="form-field">
                  <label className="form-label font-poppins">Email</label>
                  <input
                    placeholder="Ketik disini..."
                    type="email"
                    className="input-rounded input max-w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label font-poppins">Kata Sandi</label>
                  <div className="form-control">
                    <input
                      placeholder="Ketik disini..."
                      type="password"
                      className="input-rounded input max-w-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button
                      type="submit"
                      className="btn btn-rounded bg-[#FF432A] w-full text-white"
                    >
                      Masuk
                    </button>
                  </div>
                </div>
              </form>
              <div className="form-field">
                <div className="form-control justify-center">
                  Belum punya akun?
                  <Link
                    to="/register"
                    className="link link-underline-hover text-red-500 text-sm"
                  >
                    Daftar Sekarang
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
