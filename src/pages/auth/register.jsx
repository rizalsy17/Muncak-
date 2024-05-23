// eslint-disable-next-line react/no-unescaped-entities
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layouts/navbar';
import mounImage from '../../assets/bro.png';
import useRegister from '../../hooks/useRegister';

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
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center mt-12 md:mt-0">
          <div className="w-full md:w-1/2 md:ml-36 mt-80 md:mt-0">
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
              <div className="flex flex-col text-left">
                <h1 className="text-3xl font-semibold font-poppins">Daftar</h1>
                <p className="text-sm font-poppins">Daftar dan Siapkan Petualanganmu</p>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <form onSubmit={handleSubmit} className="form-group">
                <div className="form-field">
                  <label className="form-label font-poppins">Nama</label>
                  <div className="form-control">
                    <input
                      placeholder="Ketik disini..."
                      type="text"
                      className="input-rounded input w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label font-poppins">Email</label>
                  <input
                    placeholder="Ketik disini..."
                    type="email"
                    className="input-rounded input w-full"
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
                      className="input-rounded input w-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label font-poppins">Konfirmasi Sandi</label>
                  <div className="form-control">
                    <input
                      placeholder="Ketik disini..."
                      type="password"
                      className="input-rounded input w-full"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button type="submit" className="btn btn-rounded bg-[#FF432A] w-full text-white">
                      Daftar
                    </button>
                  </div>
                </div>
              </form>
              <div className="form-field">
                <div className="form-control justify-center">
                  <span>Sudah punya akun? </span>
                  <Link to="/login" className="link link-underline-hover text-red-500 text-sm">
                    Masuk Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/6 md:h-2/4 md:mr-8 flex mx-auto">
            <img className="w-full md:mt-8" src={mounImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
