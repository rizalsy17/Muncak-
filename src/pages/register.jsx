/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layouts/navbar';
import mounImage from '../assets/bro.png';

export default function Register() {
    return (
        <div className="flex mx-auto h-screen">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <Navbar />
                {/* Formulir */}
                <div className="w-full md:w-1/1 md:ml-4"> {/* Menambahkan kelas md:ml-auto */}
                    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                        <div className="flex flex-col text-left">
                            <h1 className="text-3xl font-semibold font-poppins">Daftar</h1>
                            <p className="text-sm text-left font-poppins">Daftar dan Siapkan Petualanganmu</p>
                        </div>
                        <div className="form-group">
                            <div className="form-field">
                                <label className="form-label font-poppins">Nama</label>
                                <div className="form-control">
                                    <input placeholder="Ketik disini..." type="text" className="input-rounded input max-w-full" />
                                </div>
                            </div>
                            <div className="form-field">
                                <label className="form-label font-poppins">Email</label>
                                <input placeholder="Ketik disini..." type="email" className="input-rounded input max-w-full" />
                            </div>
                            <div className="form-field">
                                <label className="form-label font-poppins">Kata Sandi</label>
                                <div className="form-control">
                                    <input placeholder="Ketik disini..." type="password" className="input-rounded input max-w-full" />
                                </div>
                            </div>
                            <div className="form-field">
                                <label className="form-label font-poppins">Konfirmasi Sandi</label>
                                <div className="form-control">
                                    <input placeholder="Ketik disini..." type="password" className="input-rounded input max-w-full" />
                                </div>
                            </div>
                            <div className="form-field pt-5">
                                <div className="form-control justify-between">
                                    <button type="button" className="btn btn-rounded bg-[#FF432A] w-full text-white">Sign in</button>
                                </div>
                            </div>
                            <div className="form-field">
                            <div className="form-control justify-center">Sudah punya akun? 
                                <Link to="/login" className="link link-underline-hover link text-red-500 text-sm">Masuk Sekarang</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mx-auto mt-8 md:mt-3">
                    <img className="w-full mx-auto" src={mounImage} alt="Hero Image"/>
                </div>
            </div>
        </div>
    );
}
