import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { stuLogout } from '../slices/Loginslice';


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

    // const logoutuser = () => {
    //     Distpatch(stuLogout())
    //     Nav('/login')
    // }
    return (
        <>
            {/* <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-300 p-4"> */}
            {/* <h1 className="text-2xl font-bold mb-4 text-white">Register and View Complaints</h1> */}
            {/* <div className="min-h-screen grid grid-cols-1 gap-4 place-content-center place-items-center"> */}
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                    <h2 className="text-xl font-bold mb-2">Register Complaint</h2>
                    <form onSubmit={HandleComplain}>
                        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-4" type="text" placeholder="Subject" name='subject' value={input.subject} onChange={HandleInput} />
                        <textarea className="w-full h-32 p-2 border border-gray-300 rounded-md mb-2" placeholder="Write your complaint here..." onChange={HandleInput} name='complaint' value={input.complaint}></textarea>
                        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md" type='submit'>Submit</button>
                    </form>
                </div>
                {/* <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Your Complaints</h2>
                        <select className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2">
                            <option value="">Sort by...</option>
                            <option value="date">Date</option>
                            <option value="status">Status</option>
                        </select>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border border-gray-300">S.No</th>
                                    <th className="py-2 px-4 border border-gray-300">Complaint Subject</th>
                                    <th className="py-2 px-4 border border-gray-300">Complaint</th>
                                    <th className="py-2 px-4 border border-gray-300">Reply</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complaints.map((complaint) => (
                                    <tr key={complaint.sno}>
                                        <td className="py-2 px-4 border border-gray-300">{complaint.sno}</td>
                                        <td className="py-2 px-4 border border-gray-300">{complaint.subject}</td>
                                        <td className="py-2 px-4 border border-gray-300">{complaint.complaint}</td>
                                        <td className="py-2 px-4 border border-gray-300">{complaint.reply}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default Complaint