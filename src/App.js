import React from 'react'
import Header from './component/Header'
import './App.css'
import Sidebarcom from './component/Sidebarcom'
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/sidebar/Sidebar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
   {/* <Navbar/>
   <Sidebar/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<><Home/></>}/>
    <Route path='/dashboard' element={<><Dashboard/></>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App