import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import SideNavbar from './SideNavbar';


const Home = () => {

  const Nav = useNavigate()
  const user = useSelector((state) => state.stulogin)

  useEffect(() => {
    if (user.stuuser === "") {
      Nav('/login')
    }
  }, [])


  return (
    <>

      <div className="min-h-screen flex w-full">
        <SideNavbar />
        {/* <div className="w-full bg-gray-100 p-4 grid grid-cols-1 gap-4 place-content-center place-items-center"> */}
        {/* <h1 className="text-2xl font-bold mb-4">Welcome to the Student Dashboard</h1> */}
        <Outlet />
        {/* </div> */}
      </div>

    </>
  )
}

export default Home