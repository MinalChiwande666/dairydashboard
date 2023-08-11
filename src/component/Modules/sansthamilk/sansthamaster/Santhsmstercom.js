import React from "react"
import { useState } from "react";
import './sanstha.css'
const Santhsmstercom  = () =>{
    const [selecttype, setcollecttype] = useState('')
    const[showTable , setshowtable] = useState(false)
    const exporttoexcel = async () => {
        await fetch('http://192.168.0.123:8080/accountMasterExportToExcel')
      }
    return(
       <>
       <div className="container-fluid">
       <div className='text-center' style={{fontSize:'2rem'}}>Sanstha Master</div>
        <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            ID
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Contact person
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            email
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Type
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Active</li>
                                 <li> inactive</li>
                                </ul>
                            </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Sanths Name
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Contact no
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            GST NO
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            FSSAI No.
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Address
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Area
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Taluka
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            District
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            City
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Pin Code
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            CIN no.
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            SSL no.
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    State
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Maharashtra</li>
                                 <li>Andra Pradesh</li>
                                 <li>Arunachal Pradesh</li>
                                 <li>Asam</li>
                                 <li>Bihar</li>
                                 <li>Chhattisgarh</li>
                                 <li>Goa</li>
                                 
                                 <li>Haryana</li>
                                 <li>Himachal Pradesh</li>
                                 <li>Jammu & Kashmir</li>
                                 <li>Jharkhand</li>
                                 <li>Karnataka</li>
                                 <li>Kerala</li>
                                 <li>Madhya pradesh</li>
                                 <li>Manipur</li>
                                </ul>
                            </div>
                    </div>
                    
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Group
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Employee
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                
                                </ul>
                            </div>
                    </div>

                    <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Other NO.
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Website
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chilling Center/Cold store
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Secondary name
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Registration NO.
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Registration Date.
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='Date' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Chairman Name
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account Group
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                
                                </ul>
                            </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sanstha Group
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                <li>Member</li>
                                <li>Director</li>
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Milk Type
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                <li>Chil Milk</li>
                                <li>Raw Milk</li>
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Factor
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Opening Balance
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sanstha Group
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                <li>Member</li>
                                <li>Director</li>
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CM Chart
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                <li>Cow Rate</li>
                                                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BM Chart
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu" placeholder="please select">
                               
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tax Type
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu" placeholder="please select">
                               
                                </ul>
                            </div>
                    </div>
            </div>
            <div className='text-center' style={{fontSize:'2rem'}}>Bank Details</div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Bank Name
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Account no.
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Branch
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            IFSC code
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Bank Account Name
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                    FSSAI Registration Date
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='Date' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                    FSSAI Expiry Date
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='Date' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Transport BM
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Transport CM
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                      Management/Commission BM
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="fontsize">
                      Management/Commission CM
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Deposit BM
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                          Deposit CM
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    
                    </div>
            </div>
            <div className='text-center' style={{fontSize:'2rem'}}>Route Details</div>
            <div className="row">
            
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Route
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu" placeholder="please select">
                               <li>Baner</li>
                               <li>Rahatni</li>
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    
                    </div>
            </div>
            <div className='text-center' style={{fontSize:'2rem'}}>Create Ledger</div>
          
            <table class="table table-bordered border-primary" >
       
       <thead>
         <tr>
           <th scope="col">sr.no</th>
           <th scope="col">Sub Ledger Name</th>
           <th scope="col">Group</th>
           <th scope="col">Legder Account type</th>
           <th scope="col">Company Name</th>
           <th scope="col">AMID</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row">1</th>
           <td>Commission </td>
           <td>Direct Expenses</td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="Liabilities"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="commission"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="0"/></td>
         </tr>
         <tr>
           <th scope="row">2</th>
           <td>Advance</td>
           <td>Current Liabilities</td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="Liabilities"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="commission"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="0"/></td>
         </tr>
         <tr>
           <th scope="row">3</th>
           <td>Deposit</td>
           <td>Sundry Deposit</td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="Liabilities"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="commission"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="0"/></td>
         </tr>
         <tr>
           <th scope="row">4</th>
           <td>Cattle Feed</td>
           <td>Direct incomes</td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="Liabilities"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="commission"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="0"/></td>
         </tr>
         <tr>
           <th scope="row">5</th>
           <td>Store</td>
           <td>Direct incomes</td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="Liabilities"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="commission"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="0"/></td>
         </tr>
         <tr>
           <th scope="row">6</th>
           <td>By Product</td>
           <td>Direct incomes</td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="Liabilities"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="commission"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="0"/></td>
         </tr>
         <tr>
           <th scope="row">7</th>
           <td>Transport</td>
           <td>Direct Expenses</td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="Liabilities"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="commission"/></td>
           <td><input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' placeholder="0"/></td>
         </tr>
       </tbody>
     
                </table>
                <div className='mt-5 '>
          <button
            onClick={() => setshowtable(!showTable)}
            className='bg-primary border border-none border-radius-rounded text-white'>
            Show Data
          </button>
          {
            showTable &&
            <><div style={{ height: '50vh', overflowY: 'scroll' }}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"> Id</th>
                    <th scope="col">Chilling center Name</th>
                    <th scope="col">Opening balance</th>
                    <th scope="col">Debit/Credit</th>
                    <th scope="col">Address</th>
                    <th scope="col">Area</th>
                    <th scope="col">Contact Person</th>
                    <th scope="col">Contact no</th>
                    <th scope="col">Chilling Center</th>
                    <th scope="col">Sanstha group</th>
                    <th scope="col">Route</th>
                    <th scope="col">GST no</th>
                    <th scope="col">Entry By </th>
                    <th scope="col">State</th>
                   
                  </tr>
                </thead>
               
              </table>
            </div><div>
                <button
                  onClick={() => exporttoexcel()}
                  className='bg-primary border border-none border-radius-rounded text-white'>
                  Export to Excel
                </button>
              </div></>}
          <div className='text-center d-flex'>
            <button
            //   onClick={
            //     () => saveform()
            //   }
              className='bg-primary border border-none border-radius-rounded text-white'>
              Save
            </button>
            <button className='bg-primary border border-none border-radius-rounded text-white'>
              Print
            </button>
            <button className='bg-primary border border-none border-radius-rounded text-white'>
              Clear
            </button>
          </div>
        </div>
                    </div>
            </div>
         <div/>   
       
       </div>
       </>
    )
}
export default Santhsmstercom;


