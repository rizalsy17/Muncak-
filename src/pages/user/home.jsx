// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../../components/layouts/user/sidebar';
import Navbar from '../../components/layouts/user/navbar';

export default function HomeUser() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Navbar />
                {/* Konten lain bisa dimasukkan di sini */}
                <div className="p-4">
                    {/* <h1 className="text-2xl font-bold">Selamat Datang di Home User</h1> */}
                    {/* Konten lain */}
                </div>
            </div>
        </div>
    );
}
