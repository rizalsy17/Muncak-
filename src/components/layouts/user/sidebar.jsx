// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import useLogout from '../../../hooks/useLogout'; // Sesuaikan path dengan path useLogout Anda
import logo from '../../../assets/muncak.png';

export default function Sidebar() {
    const handleLogout = useLogout();

    return (
        <div className="flex flex-row gap-10">
            <div className="w-full max-w-[18rem]">
                <aside className="sidebar h-full sidebar-fixed-left justify-start bg-white border-r border-white-500">
                    <section className="sidebar-title items-center p-4">
                        <Link to="/">
                            <img src={logo} alt="Ripple UI Logo" className="h-20 w-auto" />
                        </Link>
                    </section>
                    <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
                        <nav className="menu rounded-md">
                            <section className="menu-section px-4">
                                <ul className="menu-items">
                                    <li className="menu-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>General</span>
                                    </li>
                                    <li className="menu-item menu-active">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span>Teams</span>
                                    </li>
                                    <li className="menu-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <span>Billing</span>
                                    </li>
                                </ul>
                            </section>
                        </nav>
                    </section>
                    <section className="sidebar-footer h-full justify-end bg-white-2 pt-2">
                        <div className="divider my-0"></div>
                        <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
                            <label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabIndex="0">
                                <div className="flex flex-row gap-4 p-4">
                                    <div className="avatar avatar-md">
                                        <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Sandra Marx</span>
                                        <span className="text-xs font-normal text-content2">sandra</span>
                                    </div>
                                </div>
                            </label>
                            <div className="dropdown-menu dropdown-menu-right-top ml-2">
                                <a className="dropdown-item text-sm" onClick={handleLogout}>Logout</a>
                                <a className="dropdown-item text-sm">Profile</a>
                                <a tabIndex="-1" className="dropdown-item text-sm">Account settings</a>
                                <a tabIndex="-1" className="dropdown-item text-sm">Change email</a>
                                <a tabIndex="-1" className="dropdown-item text-sm">Subscriptions</a>
                                <a tabIndex="-1" className="dropdown-item text-sm">Change password</a>
                                <a tabIndex="-1" className="dropdown-item text-sm">Refer a friend</a>
                                <a tabIndex="-1" className="dropdown-item text-sm">Settings</a>
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
            <div className="flex flex-col p-4 w-full">
                <div className="w-fit">
                    <label htmlFor="sidebar-mobile-fixed" className="btn btn-primary sm:hidden">Open Sidebar</label>
                </div>
                <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                    <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                </div>
            </div>
        </div>
    );
}
