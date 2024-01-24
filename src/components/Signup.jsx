import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
        user: "student"
    })
    const Nav = useNavigate()

    const HandleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        const email = input.email;
        const password = input.password;

        if (input.user === "student") {
            const geturl = `http://localhost:4000/students?email=${email}&&password=${password}`;
            axios.get(geturl).then((res) => {
                let data = res.data;
                console.log(data[0]);
                if (data.length > 0) {
                    alert("user abeleble")
                    setInput({
                        name: "",
                        email: "",
                        password: "",
                        image: "",
                        user: "student"
                    })
                } else {
                    if (input.image.length > 10) {
                        alert("Image URL is too long (maximum 80 characters allowed).");
                        return;
                    } else {
                        const url = "http://localhost:4000/students";
                        axios.post(url, input).then(alert("data save!!!"), Nav("/login"), setInput({
                            name: "",
                            email: "",
                            password: "",
                            image: "",
                            user: "student"
                        }))
                    }
                }
            })
        } else {
            const geturl = `http://localhost:4000/admin?email=${email}&&password=${password}`;
            axios.get(geturl).then((res) => {
                let data = res.data;
                console.log(data[0]);
                if (data.length > 0) {
                    alert("user abeleble")
                    setInput({
                        name: "",
                        email: "",
                        password: "",
                        image: "",
                        user: "student"
                    })
                } else {
                    if (input.image.length > 200) {
                        alert("Image URL is too long (maximum 80 characters allowed).");
                        return;
                    } else {
                        const url = "http://localhost:4000/admin";
                        axios.post(url, input).then(alert("data save!!!"), Nav("/login"), setInput({
                            name: "",
                            email: "",
                            password: "",
                            image: "",
                            user: "student"
                        }))
                    }
                }
            })
        }

    }


    


    // if (input.image === "") {
    //     <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    //     </svg>
    // } else {
    //     <img src={input.image} alt="" />
    // }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-300 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-[60%] flex">
                <div className="w-1/2 flex justify-center items-center border-r border-gray-300 pr-4">
                    {/* Replace this with the actual image */}


                    {/* <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg> */}
                    <img src={input.image} alt="" />

                </div>
                <form className="w-1/2 pl-4" onSubmit={(e) => HandleSubmit(e)}>
                    <h2 className="text-xl font-bold mb-2">Sign Up</h2>
                    <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="text" placeholder="Only Web URLS" name='image' value={input.image} onChange={HandleInput} />
                    <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="text" placeholder="name" name='name' value={input.name} onChange={HandleInput} />
                    <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="email" placeholder="Email" name='email' value={input.email} onChange={HandleInput} />
                    <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="password" placeholder="Password" name='password' value={input.password} onChange={HandleInput} />
                    <select className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" name='user' onChange={HandleInput}>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button className="w-full py-2 px-4 bg-green-500 text-white rounded-md" type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup