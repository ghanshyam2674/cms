import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import SideNavbar from './SideNavbar';


const Home = () => {
  const Nav = useNavigate()
  const user = useSelector((state) => state.stulogin)

  useEffect(() => {
    if (!user.stuauth) {
      Nav('/login')
    }
  }, [user.stuauth])


  return (
    <>

      <div className="min-h-screen flex w-full">
        <SideNavbar />
        <Outlet />
      </div>

    </>
  )
}

export default Home