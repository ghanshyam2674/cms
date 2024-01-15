import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
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
        const geturl = `http://localhost:4000/students?email=${email}&&password=${password}`;
        axios.get(geturl).then((res) => {
            const data = res.data;
            console.log(data[0]);
            if (data.length > 0) {
                alert("user abeleble")
                setInput({
                    name:"",
                    email: "",
                    password: ""
                })
            } else {
                const url = "http://localhost:4000/students";
                axios.post(url, input).then(alert("data save!!!"), Nav("/login"), setInput({
                    name: "",
                    email: "",
                    password: ""
                }))
            }
        })
    }

    return (
        <div className="login-div">
            <form action="" method='post' onSubmit={(e) => HandleSubmit(e)} className='login-form'>
                <h1>Login</h1>
                <div className="">
                    <label htmlFor="name">Name :</label>
                    <input type="text" placeholder='Name' name="name" id="name" value={input.name} onChange={HandleInput} />
                </div>
                <div className="">
                    <label htmlFor="email">Email :</label>
                    <input type="email" placeholder='email' name="email" value={input.email} id="email" onChange={HandleInput} />
                </div>
                <div className="">
                    <label htmlFor="password">Password :</label>
                    <input type="password" placeholder='password' value={input.password} name="password" id="password" onChange={HandleInput} />
                </div>
               
                <button type='submit'>Signup</button>
                <p>Not a memeber ? <Link href="#">Sign In</Link></p>
            </form>
        </div>
    )
}

export default Signup