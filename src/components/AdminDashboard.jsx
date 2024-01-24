import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { adminLogout } from '../slices/adminLogin'
import AdminNavbar from './AdminNavbar'

const AdminDashboard = () => {

    const user = useSelector((state) => state.adminlogin.adminuser)

    console.log(user);

    return (
        <>

            <div className="min-h-screen flex w-full">
                <AdminNavbar />
                {/* <div className="w-full bg-gray-100 p-4 grid grid-cols-1 gap-4 place-content-center place-items-center"> */}
                {/* <h1 className="text-2xl font-bold mb-4">Welcome to the Student Dashboard</h1> */}
                <Outlet />
                {/* </div> */}
            </div>
        </>
    )
}

export default AdminDashboard