import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { adminLogout } from '../slices/adminLogin';

const AdminNavbar = () => {
    const Nav = useNavigate()
    const Dispatch = useDispatch()
    const user = useSelector((state) => state.stulogin)

    const Logout = () => {
        Dispatch(adminLogout())
        Nav('/login')
    }

    return (
        <div className="h-screen w-64 bg-gradient-to-br from-purple-700 to-purple-300 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <nav>
                <Link to={'/admin'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Dashborad</Link>
                <Link to={'/admin/'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Complaints</Link>
                <Link to={'/admin/adminprofile'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Profile</Link>
                <Link to={'adminprofile'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Settings</Link>
                <button type='button' onClick={() => Logout()} className="w-full border-none text-start block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Logout</button>
            </nav>
        </div>
    )
}

export default AdminNavbar