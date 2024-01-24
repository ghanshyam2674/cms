import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { stuLogout } from '../slices/Loginslice';

const SideNavbar = () => {
  const Nav = useNavigate()
  const Dispatch = useDispatch()

  const Logout = () => {
    Dispatch(stuLogout())
    Nav('/login')
  }



  return (
    <div className="h-screen w-64 bg-gradient-to-br from-purple-700 to-purple-300 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <nav>
        <Link to={'/home'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Home</Link>
        <Link to={'/home/studata'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Complaints</Link>
        <Link to={'/home/stuprofile'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Profile</Link>
        <Link to={'/'} className="block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Settings</Link>
        <button type='button' onClick={() => Logout()} className="w-full border-none text-start block py-2 px-4 rounded-md bg-white text-purple-700 mb-2">Logout</button>
      </nav>
    </div>
  );
};

export default SideNavbar;
