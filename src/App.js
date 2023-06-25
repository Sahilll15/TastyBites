import React from 'react'


import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useFirebase } from './Context/Firebase'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PrivateRoutes from './utils/PrivateRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register'


const App = () => {
  const firebase = useFirebase();
  console.log(firebase)


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />

        <div style={{ marginTop: '64px' }}>
          <Routes>

            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />


            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>

  )
}

export default App