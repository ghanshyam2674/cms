import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const nav = useNavigate()
    return (
        <>
            <nav className="navbar">
                <h1>LOGO</h1>
                <ul>
                    <li><Link to={'/'} >Home</Link></li>
                    <li><Link to={'/about'} >About</Link></li>
                    <li><Link to={'/'} >Courses</Link></li>
                    <li><Link to={'faculty'} >Feculty</Link></li>
                    <li><button type='button' onClick={() => nav('/login')}>Login</button></li>
                    {/* <li><button type='button'>Lgout</button></li> */}
                    <li><button type='button' onClick={() => nav('/signup')}>signup</button></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout