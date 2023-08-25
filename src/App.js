import React from 'react'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
// import Accountmaster from './pages/masterModule/maimaster/Accountmaster'
// import PurchaseMilk from './pages/masterModule/Chillingcenter/PurchaseMilk'
import Sansthamster from './pages/Modules/sansthamilk/sansthamaster/Sansthamster'
import Purchaseratecontractmaster from './pages/Modules/sansthamilk/sansthamaster/Purchaseratecontractmaster'
import Purchaseratecontract from './pages/Modules/sansthamilk/sansthamaster/Purchaseratecontract'
import Milkcollectionexcelupload from './pages/Modules/sansthamilk/Milkcollection/Milkcollectionexcelupload'
import Downloadsanthamilkcollection from './pages/Modules/sansthamilk/Milkcollection/Downloadsansthamilkcollection'
import Milkcollectionwithqc from './pages/Modules/sansthamilk/Milkcollection/Milkcollectionwithqc'
import Milkcollectionmanualkg from './pages/Modules/sansthamilk/Milkcollection/Milkcollectionmanualkg'
import Milkcollectionltr from './pages/Modules/sansthamilk/Milkcollection/Milkcollectionltr'
import Billgeneration from './pages/Modules/Billgeneration'
import Accountmaster from './pages/Modules/MasterModule/maimaster/Accountmaster'
import PurchaseMilk from './pages/Modules/Chillingcenter/PurchaseMilk'
import Customermaster from './pages/Modules/MasterModule/maimaster/Customermaster'
import Login from './pages/Login/Login'
import Milkchalan from './pages/Modules/MilkchalanModule/Milkchalan'
import Milkpurchase from './pages/Modules/Chillingcenter/MIlkpurchase/Milkpurchase'
import Milklist from './pages/Modules/Chillingcenter/MIlkpurchase/Milklist'
import Suppliermaster from './pages/Modules/MasterModule/maimaster/Suppliermaster'
import Employeemaster from './pages/Modules/MasterModule/maimaster/Employeemaster'
import PurRateContractMaster from './pages/Modules/BulkMilkModule/BulkMilkEntry/PurRateContractMaster'
import VehicleEntry from './pages/Modules/BulkMilkModule/BulkMilkEntry/VehicleEntry'
import VehicleQCEntry from './pages/Modules/BulkMilkModule/BulkMilkEntry/VehicleQCEntry'
import VehicleQCApproval from './pages/Modules/BulkMilkModule/BulkMilkEntry/VehicleQCApproval'
import MilkGRN from './pages/Modules/BulkMilkModule/BulkMilkEntry/MilkGRN'
import MilkGRNtoPurchase from './pages/Modules/BulkMilkModule/BulkMilkEntry/MilkGRNtoPurchase'
import PurchaseMilkPurchaseRep from './pages/Modules/BulkMilkModule/PurchaseBulkMilkEntry/PurchaseMilkPurchaseRep'
import PurchaseInwardReport from './pages/Modules/BulkMilkModule/PurchaseBulkMilkEntry/PurchaseInwardReport'
import VehicleQCReport from './pages/Modules/BulkMilkModule/PurchaseBulkMilkEntry/VehicleQCReport'
import RPTBulkMilkReportCom from './component/Modules/BulkMilkModule/BulkCustomized/RPTBulkMilkReportCom'
import RPTBulkMilkReport from './pages/Modules/BulkMilkModule/BulkCustomize/RPTBulkMilkReport'
import Vendorname from './pages/Modules/MasterModule/maimaster/Vendorname'

const App = () => {
  const useractive = JSON.parse(localStorage.getItem('username'))


  return (
    <>
     
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<><Home /></>} /> */}
          {/* <Route path='/dashboard' element={<><Dashboard /></>} /> */}
          {/* <Route path='/accountmaster' element={<><Accountmaster /></>} /> */}
          {/* <Route path='/chilingcenter' element={<><PurchaseMilk /></>} /> */}
          <Route path='/sansthamaster' element={<><Sansthamster /></>} />
          <Route path='/purchaseratecontractmaster' element={<><Purchaseratecontractmaster /></>} />
          <Route path='/purchaseratecontract' element={<><Purchaseratecontract /></>} />
          <Route path='/milkcollectionexcelupload' element={<><Milkcollectionexcelupload /></>} />
          <Route path='/downloadsanthamilkcollection' element={<><Downloadsanthamilkcollection /></>} />
          <Route path='/Milkcollectionwithqc' element={<><Milkcollectionwithqc /></>} />
          <Route path='/Milkcollectionmanualkg' element={<><Milkcollectionmanualkg /></>} />
          <Route path='Milkcollectionltr' element={<>< Milkcollectionltr /></>} />
          <Route path='Billgeneration' element={<><Billgeneration /></>} />
          <Route path={'/'} element={<Login />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
          <Route path='/accountmaster' element={<><Accountmaster /></>} />
          <Route path='/customermaster' element={<><Customermaster /></>} />
          <Route path="/supplier" element={<><Suppliermaster/></>}/>
          <Route path='/employee' element={<><Employeemaster/></>}/>
          <Route path='/chilingcenter' element={<><PurchaseMilk /></>} />
          <Route path='/vendor' element={<><Vendorname/></>}/>
          <Route path='/milkchalan' element={<><Milkchalan /></>} />
          <Route path='/milkpurchase' element={<><Milkpurchase /></>} />
          <Route path='/milklist' element={<><Milklist /></>} />
          <Route path='/purratecontractmaster' element={<><PurRateContractMaster /></>} />
          <Route path='/vehicleentry' element={<><VehicleEntry /></>} />
          <Route path='/vehicleqcentry' element={<><VehicleQCEntry /></>} />
          <Route path='/vehicleqcapproval' element={<><VehicleQCApproval /></>} />
          <Route path='/milkgrn' element={<><MilkGRN /></>} />
          <Route path='/milkgrntopurchase' element={<><MilkGRNtoPurchase /></>} />

          <Route path='/bulkmilkporchaserep' element={<><PurchaseMilkPurchaseRep /></>} />
          <Route path='/purchaseinwardrep' element={<><PurchaseInwardReport /></>} />
          <Route path='/vehicleqcrep' element={<><VehicleQCReport /></>} />

          <Route path='/rptbulkmilkreport' element={<><RPTBulkMilkReport /></>} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App