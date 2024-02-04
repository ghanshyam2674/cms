import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { stuLogin } from '../slices/Loginslice'
import { adminLogin } from '../slices/adminLogin'

const Login = () => {

    const user = useSelector((state) => state.stulogin)
    const Nav = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (user.stuauth) {
            Nav('/home')
        }
    }, [user.stuauth])

    useEffect(() => {
        if (user.adminauth) {
            Nav('/admin')
        }
    }, [user.adminauth])

    console.log(user.adminauth);


    const [input, setInput] = useState({
        email: "",
        password: "",
        user: "student"
    })

    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
    }

    // console.log(input)
    var email = input.email;
    var password = input.password;
    const HandleForm = (e) => {
        e.preventDefault();
        if (input.user === "student") {
            const url = `http://localhost:4000/students?email=${email}&&password=${password}`;
            axios.get(url).then((res) => {
                const data = res.data;
                console.log(data);
                if (data.length === 1) {
                    if (res.data[0].password === password) {
                        console.log(data);
                        dispatch(stuLogin(data[0]))
                        setInput({
                            email: "",
                            password: "",
                            user: "student"
                        })
                        Nav("/home")
                    } else {
                        alert("password not matched")
                    }
                } else {
                    //email
                    alert("data")
                }
            })
        }
        else {
            const url = `http://localhost:4000/admin?email=${email}&&password=${password}`;
            axios.get(url).then((res) => {
                const data = res.data;
                if (data.length === 1) {
                    if (res.data[0].email === email) {
                        if (res.data[0].password === password) {
                            console.log(data[0]);
                            dispatch(adminLogin(data[0]))
                            setInput({
                                email: "",
                                password: "",
                                user: "admin"
                            })
                            Nav("/admin")
                        } else {
                            alert("password wrong")
                        }
                    } else {
                        alert("email wrong")
                    }
                } else {
                    //email
                    alert("data")
                }
            })

        }
    }

    return (
        <>
            <div className="h-screen w-full flex justify-center items-center">
                <div className="min-h-screen w-full bg-gradient-to-br from-purple-700 to-purple-300 flex items-center justify-center">
                    <form className="bg-white p-8  w-[90%]  rounded-lg shadow-md sm:w-96" onSubmit={(e) => HandleForm(e)}>
                        <div className="flex justify-center items-center mb-4">
                            <div className="bg-gray-200 p-2 rounded-full">
                                <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-4">Member Login</h2>
                        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-4" type="email" placeholder="Email" name='email' value={input.email} onChange={HandleInput} />
                        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-4" type="password" placeholder="Password" name='password' value={input.password} onChange={HandleInput} />
                        <select className="w-full py-2 px-3 rounded-md border border-gray-300 mb-4" name='user' value={input.user} onChange={HandleInput}>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button className="w-full py-2 px-4 bg-green-500 text-white rounded-md mb-4" type='submit'>LOGIN</button>
                        <Link to={'/forgotpassword'} className="text-center text-sm text-gray-500">Forgot Username / Password?</Link>
                        <Link to={'/signup'} className="text-center text-sm text-gray-500 mt-4">Create your account →</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login