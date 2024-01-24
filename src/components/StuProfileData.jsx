import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const StuProfileData = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
    })
    const [readOnly, setReadOnly] = useState(true)
    const stuid = useSelector((state) => state.stulogin.stuid)

    const api = () => {
        const geturl = `http://localhost:4000/students?stuid=${stuid}`;
        axios.get(geturl).then((res) => {
            setInput(res.data[0])
        })
    }

    useEffect(() => {
        api()
    }, [])

    const HandleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (input.image.length > 200) {
            alert("Image URL is too long (maximum 200 characters allowed).");
            return;
        } else {
            const url = `http://localhost:4000/students/${stuid}`;
            axios.patch(url, input).then(alert("data save!!!"), setInput({
                name: "",
                email: "",
                password: "",
                image: "",
            })).then(api(), setReadOnly(true))
        }
    }
    return (
        <>
            {/* <form action="" method='post' onSubmit={(e) => HandleSubmit(e)} className='w-[300px] h-auto flex flex-col items-center justify-center'>
                <div className="w-full flex justify-between items-center">
                    <button type='button' onClick={() => setReadOnly(false)}>edit</button>
                </div>
                <h1>signup</h1>
                <img src={input.image} alt="" className='w-[150px] border-[2px] border-black h-[150px] rounded-full object-contain' />
                <div className="">
                    <label htmlFor="image">Image :</label>
                    <input type="text" placeholder='only web url' name="image" id="image" value={input.image} readOnly={readOnly} onChange={HandleInput} />
                </div>
                <div className="">
                    <label htmlFor="name">Name :</label>
                    <input type="text" placeholder='Name' name="name" id="name" value={input.name} readOnly={readOnly} onChange={HandleInput} />
                </div>
                <div className="">
                    <label htmlFor="email">Email :</label>
                    <input type="email" placeholder='email' name="email" value={input.email} readOnly={readOnly} id="email" onChange={HandleInput} className='' />
                </div>
                <div className="">
                    <label htmlFor="password">Password :</label>
                    <input type="password" placeholder='password' value={input.password} readOnly={readOnly} name="password" id="password" onChange={HandleInput} />
                </div>
                {!readOnly && <button type='submit'>Save</button>}
            </form> */}

            <div className="w-full min-h-screen bg-gray-100 p-4 pb-0">
                <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
                <div className="h-[90vh] flex justify-center items-center">
                    <form className="bg-white p-4 rounded-lg shadow-md w-1/2" onSubmit={(e) => HandleSubmit(e)}>
                        <div className="flex justify-center items-center mb-4">
                            <div className="bg-gray-200 p-2 rounded-full">
                                {/* Replace this with the actual image */}
                                {/* <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg> */}
                                <img src={input.image} alt="" className="w-[180px] h-[180px] text-gray-500 object-cover" />
                            </div>
                        </div>
                        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="text" placeholder="Update image URL" name='image' value={input.image} onChange={HandleInput} />
                        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="text" placeholder="Name" name='name' value={input.name} onChange={HandleInput} />
                        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="email" placeholder="Email" name='email' value={input.email} onChange={HandleInput} />
                        <input className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2" type="password" placeholder="Password" name='password' value={input.password} onChange={HandleInput} />
                        <button type='submit' className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Save Data</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StuProfileData