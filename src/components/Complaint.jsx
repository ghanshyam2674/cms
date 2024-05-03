import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Complaint = () => {
    const [input, setInput] = useState({
        subject: "",
        complaint: "",
        date: "",
        stuid: "",
        status: "panding"
    })

    // const Distpatch = useDispatch()
    const Nav = useNavigate()
    const user = useSelector((state) => state.stulogin)

    console.log(user);

    function HandleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    }

    let date = new Date()
    let newDate = date.getDate() + " " + date.getMonth() + 1 + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

    const HandleComplain = (e) => {
        e.preventDefault();
        const url = `http://localhost:4000/complaints`;
        axios.post(url, { ...input, stuid: user.stuid, date: newDate }).then((res) => {
            setInput({
                subject: "",
                complaint: "",
                date: "",
                stuid: "",
                status: "panding"
            })
        })
    }

    return (
        <div className='w-full h-screen bg-gray-100 flex items-center justify-center'>
            <div className="bg-white p-4 rounded-lg shadow-md ">
                <h2 className="text-xl font-bold mb-2">Register Complaint</h2>
                <form onSubmit={HandleComplain}>
                    <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-4" type="text" placeholder="Subject" name='subject' value={input.subject} onChange={HandleInput} />
                    <textarea className="w-full h-32 p-2 border border-gray-300 rounded-md mb-2" placeholder="Write your complaint here..." onChange={HandleInput} name='complaint' value={input.complaint}></textarea>
                    <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Complaint