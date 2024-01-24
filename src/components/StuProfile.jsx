import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const StuProfile = () => {
  const [data, setData] = useState([])
  const stuid = useSelector((state) => state.stulogin.stuid)
  const [fltr, serFltr] = useState("all")
  const api = (d) => {
    const url = `http://localhost:4000/complaints?stuid=${stuid}`
    axios.get(url).then((res) => {
      if (d === "all") {
        setData(res.data)
      }

      if (d !== "all") {
        setData(res.data.filter((item) => (item.status === d)))
      }

    });

  }

  useEffect(() => {
    api("all")
  }, [])

  // let Students;


  // if (data) {
  //   Students = data.map((data, index) => {
  //     return (
  //       <tr key={index}>
  //         <td>{data.id}</td>
  //         <td>{data.subject}</td>
  //         <td>{data.complaint}</td>
  //         <td>{data.reply}</td>
  //       </tr>
  //     )
  //   })
  // } else {
  //   return (
  //     <p>
  //       data not found
  //     </p>
  //   )
  // }


  return (
    <>
      {/* <div className="">
        <button type='button' onClick={() => api("all")}>all</button>
        <button type='button' onClick={() => api("resolve")}>solve</button>
        <button type='button' onClick={() => api("panding")}>unsolve</button>
      </div>
      <table border="1">
        <tr>
          <th>Sno.</th>
          <th>subject</th>
          <th>complaint</th>
          <th>Reply</th>
        </tr>
        {Students}
      </table> */}

      <div className="w-full bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Your Complaints</h2>
        <select onChange={(e) => api(e.target.value)} className="w-full py-2 px-3 rounded-md border border-gray-300 mb-2">
          <option value="all">all</option>
          <option value="panding">Panding</option>
          <option value="resolve">Resolve</option>
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
            {data.map((data) => (
              <tr key={data.id}>
                <td className="py-2 px-4 border border-gray-300">{data.id}</td>
                <td className="py-2 px-4 border border-gray-300">{data.subject}</td>
                <td className="py-2 px-4 border border-gray-300">{data.complaint}</td>
                <td className="py-2 px-4 border border-gray-300">{data.reply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </>
  )
}

export default StuProfile