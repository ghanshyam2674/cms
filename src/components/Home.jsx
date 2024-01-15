import React, { useState } from 'react'
import axios from 'axios';

const Home = () => {
  const [input, setInput] = useState({
    email: "",
    complaint: ""
  })

  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }))
  }

  const HandleComplain = (e) => {
    e.preventDefault();
    const url = `http://localhost:4000/complaints`;
    axios.post(url, input).then((res) => { 
      setInput({
        email: "",
        complaint: ""
      })
    })
  }

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="bg-black w-[18%] h-[100%]">khj</div>
        <div className="w-[82%] h-[100%] flex justify-center items-center">
          <form action="" method='post' className='login-form text-black' onSubmit={(e) => HandleComplain()}>
            {/* <h1>Login</h1> */}
            <div className="">
              <label htmlFor="email">Email :</label>
              <input type="email" placeholder='email' name="email" id="email" onChange={HandleInput} value={input.email} className='text-black' />
            </div>
            <div className="">
              <label htmlFor="complaint">complaint :</label>
              <textarea type="text" placeholder='complaint' name="complaint" id="complaint" onChange={HandleInput} value={input.complaint} className='text-black' ></textarea>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home