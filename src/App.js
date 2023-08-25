import React from 'react'

import './App.css'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Accountmaster from './pages/Modules/MasterModule/maimaster/Accountmaster'
import PurchaseMilk from './pages/Modules/Chillingcenter/PurchaseMilk'
import Customermaster from './pages/Modules/MasterModule/maimaster/Customermaster'
import Login from './pages/Login/Login'
import Milkchalan from './pages/Modules/MilkchalanModule/Milkchalan'
import Milkpurchase from './pages/Modules/Chillingcenter/MIlkpurchase/Milkpurchase'
import Milklist from './pages/Modules/Chillingcenter/MIlkpurchase/Milklist'
import Suppliermaster from './pages/Modules/MasterModule/maimaster/Suppliermaster'
import Employeemaster from './pages/Modules/MasterModule/maimaster/Employeemaster'

const App = () => {
  const useractive = JSON.parse(localStorage.getItem('username'))
  
 
  return (
    <>
   {/* <Navbar/>
   <Sidebar/> */}
   <BrowserRouter>
   <Routes>
 <Route path={'/'} element={<Login />} />
 <Route path={'/dashboard'} element={<Dashboard />} />
 <Route path='/accountmaster' element={<><Accountmaster /></>} />
 <Route path='/customermaster' element={<><Customermaster /></>} />
 <Route path='/chilingcenter' element={<><PurchaseMilk /></>} />
 <Route path='/milkchalan' element={<><Milkchalan/></>}/>
 <Route path='/milkpurchase' element={<><Milkpurchase/></>}/>
 <Route path='/milklist' element={<><Milklist/></>}/>
 <Route path='/supplier' element={<><Suppliermaster/></>}/>
 <Route path='/employeemaster' element={<><Employeemaster/></>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App