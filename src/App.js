import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contect from './components/Contect'
import Layout from './components/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import ShowStuData from './components/ShowStuData'
import AdminDashboard from './components/AdminDashboard'
import Reply from './components/Reply'
import StuProfile from './components/StuProfile'
import Complaint from './components/Complaint'
import StuProfileData from './components/StuProfileData'
import AdminProfile from './components/AdminProfile'
import ForgotPassword from './components/ForgotPassword'
import ErrorPage from './components/ErrorPage'
import ResetPassword from './components/ResetPassword'
import OneTimePassword from './components/OneTimePassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/about' element={<About />} />
          <Route path='/contect' element={<Contect />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/otprequired' element={<OneTimePassword />} />
        </Route>
        <Route path='/home' element={<Home />} >
          <Route index element={<Complaint />} />
          <Route path='studata' element={<StuProfile />} />
          <Route path='stuprofile' element={<StuProfileData />} />
        </Route>
        <Route path='/admin' element={<AdminDashboard />}>
          <Route index element={<ShowStuData />} />
          <Route path='adminprofile' element={<AdminProfile />} />
          <Route path='reply/:id' element={<Reply />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App