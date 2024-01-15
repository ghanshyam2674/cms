import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { stuLogin } from '../slices/Loginslice'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const Nav = useNavigate()
    const dispatch = useDispatch()

    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
    }

    console.log(input)
    var email = input.email;
    var password = input.password;
    const HandleForm = (e) => {
        e.preventDefault();
        const url = `http://localhost:4000/students?email=${email}&&password=${password}`;
        axios.get(url).then((res) => {
            const data = res.data;
            console.log(data);
          
            if (res.data === 1) {
                dispatch(stuLogin(data[0]))
                setInput({
                    email: "",
                    password: ""
                })
            } else {
                //admin data
            }
            Nav("/home")
        })
    }

    return (
        <>
            <div className="login-div">
                <form action="" method='post' onSubmit={(e) => HandleForm(e)} className='login-form'>
                    <h1>Login</h1>
                    <div className="">
                        <label htmlFor="email">Email :</label>
                        <input type="email" placeholder='email' name="email" id="email" onChange={HandleInput} value={input.email} />
                    </div>
                    <div className="">
                        <label htmlFor="password">Password :</label>
                        <input type="password" placeholder='password' name="password" id="password" onChange={HandleInput} value={input.password} />
                    </div>
                    <div className="">
                        <label htmlFor="password">Password :</label>
                        <select name="user" id="">
                            <option value="student">student</option>
                            <option value="admin">admin</option>
                        </select>
                    </div>
                    <button type='submit'>Login</button>
                    <p>Not a memeber ? <Link href="#">Sign In</Link></p>
                </form>
            </div>
        </>
    )
}

export default Login