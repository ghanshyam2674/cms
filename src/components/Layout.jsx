import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const Nav = useNavigate()
    const user = useSelector((state) => state.stulogin)

    useEffect(() => {
        if (user.stuuser === "") {
            Nav('/login')
        }
    }, [])

    return (
        <>
            <nav className="bg-gradient-to-br from-purple-700 to-purple-300 p-4 flex justify-between items-center">
                <div className="text-white font-bold text-xl">Logo</div>
                <div className="space-x-4">
                    <Link to={'/'} className="text-white">NavLink1</Link>
                    <Link to={'/about'} className="text-white">NavLink2</Link>
                    <Link to={'/signup'} className="text-white">NavLink3</Link>
                </div>
                <div className="space-x-4">
                    <button className="bg-white text-purple-700 py-2 px-4 rounded-md" onClick={() => Nav('/login')}>Login</button>
                    <button className="bg-white text-purple-700 py-2 px-4 rounded-md" onClick={() => Nav('/signup')}>Signup</button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout