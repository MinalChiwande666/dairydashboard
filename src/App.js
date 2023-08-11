import React from 'react'

import './App.css'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Accountmaster from './pages/masterModule/maimaster/Accountmaster'
import PurchaseMilk from './pages/masterModule/Chillingcenter/PurchaseMilk'
import Sansthamster from './pages/masterModule/sansthamilk/sansthamaster/Sansthamster'
import Purchaseratecontractmaster from './pages/masterModule/sansthamilk/sansthamaster/Purchaseratecontractmaster'
import Purchaseratecontract from './pages/masterModule/sansthamilk/sansthamaster/Purchaseratecontract'
import Milkcollectionexcelupload from './pages/masterModule/sansthamilk/Milkcollection/Milkcollectionexcelupload'
import Downloadsanthamilkcollection from './pages/masterModule/sansthamilk/Milkcollection/Downloadsansthamilkcollection'
import Milkcollectionwithqc from './pages/masterModule/sansthamilk/Milkcollection/Milkcollectionwithqc'

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
    <Route path='/purchaseratecontractmaster' element={<><Purchaseratecontractmaster/></>}/>
    <Route path= '/purchaseratecontract' element={<><Purchaseratecontract/></>}/>
    <Route path='/milkcollectionexcelupload' element={<><Milkcollectionexcelupload/></>}/>
    <Route path='/downloadsanthamilkcollection'  element={<><Downloadsanthamilkcollection/></>}/>
    <Route path='/Milkcollectionwithqc' element={<><Milkcollectionwithqc/></>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App