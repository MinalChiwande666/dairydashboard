import React from 'react'

import './App.css'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Accountmaster from './pages/masterModule/maimaster/Accountmaster'
import PurchaseMilk from './pages/masterModule/Chillingcenter/PurchaseMilk'
import Sansthamster from './pages/masterModule/sansthamilk/sansthamaster/Sansthamster'

const App = () => {
  return (
    <>
   {/* <Navbar/>
   <Sidebar/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<><Home/></>}/>
    <Route path='/dashboard' element={<><Dashboard/></>}/>
    <Route path='/accountmaster' element={<><Accountmaster/></>}/>
    <Route path='/chilingcenter' element={<><PurchaseMilk/></>}/>
    <Route path='/sansthamaster' element={<><Sansthamster/></>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App