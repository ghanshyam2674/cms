import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Reply = () => {
    const [input, setInput] = useState({
        reply: "",
        status: "resolve",
    })
    const { id } = useParams()

    function HandleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    }

    const HandleComplain = (e) => {
        e.preventDefault();
        const url = `http://localhost:4000/complaints/${id}`;
        axios.patch(url, input).then((res) => {
            setInput({
                reply: "",
                status: "resolve"
            })
        })
    }

    return (
        <>
            <div className="w-full min-h-screen bg-gray-100 p-4 pb-0 grid place-items-center">
                <div className="bg-white p-4 rounded-lg shadow-md w-[45%] flex flex-col">
                    <h2 className="text-xl font-bold mb-2">Register Complaint</h2>
                    <form onSubmit={(e) => HandleComplain(e)}>
                        <textarea className="w-full h-32 p-2 border border-gray-300 rounded-md mb-2" placeholder="Write your complaint here..." value={input.reply} onChange={HandleInput}></textarea>
                        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reply