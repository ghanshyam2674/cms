import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const ForgotPassword = () => {
  const [input, setInput] = useState({
    email: "",
    user: "student"
  })
  const Nav = useNavigate()

  const HandleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }))
  }

  const HandleSubmit = () => {
    const email = input.email;
    if (input.user === "student") {
      const geturl = `http://localhost:4000/students?email=${email}`;
      axios.get(geturl).then((res) => {
        let data = res.data;
        console.log(data[0]);
        if (data.length > 0) {
          alert("user abeleble")
          setInput({
            email: "",
            user: "student"
          })
        } else {
         
        }
      })
    } else {
      const geturl = `http://localhost:4000/admin?email=${email}`;
      axios.get(geturl).then((res) => {
        let data = res.data;
        console.log(data[0]);
        if (data.length > 0) {
          alert("user abeleble")
          setInput({
            email: "",
            user: "student"
          })
        } else {
          
        }
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-300 flex items-center justify-center">
      <form className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-gray-200 p-2 rounded-full">
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-4">Forgot Password</h2>
        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-4" type="email" placeholder="Email" name='email' onChange={input.email} />
        <select className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" name='user' onChange={HandleInput}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full py-2 px-4 bg-green-500 text-white rounded-md mb-4" onClick={HandleSubmit}>RESET PASSWORD</button>
        <p className="text-center text-sm text-gray-500">Remembered? <a href="#" className="text-green-500 underline">Sign In</a></p>
      </form>
    </div>
  );
};

export default ForgotPassword;
