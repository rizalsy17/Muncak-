// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/authContext'; // Import AuthProvider
import Home from '../pages/home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import HomeUser from '../pages/user/home';

const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider> {/* Letakkan AuthProvider di sini */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<HomeUser />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
