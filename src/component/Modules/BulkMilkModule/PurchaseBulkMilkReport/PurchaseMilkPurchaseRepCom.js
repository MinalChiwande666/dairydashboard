import React from 'react'
import TextField from '@mui/material/TextField';


const PurchaseMilkPurchaseRepCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>Bulk Milk Purchase Reports</h3>
            <div className='vehicleEntryStyle mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <label>From Date</label>
                        <input type="date" className='mx-3' />
                    </div>

                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <label>To Date</label>
                        <input type="date" className='mx-3' />
                    </div>

                    <div className='col-12 col-md-3 col-sm-12'>
                        <div>Report Type</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Please Choose:
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'><input type="text" /></li>
                                    <li className='dropdown-item'>Summary</li>
                                    <li className='dropdown-item'>Datewise Summary</li>
                                    <li className='dropdown-item'>Vendorwise Summary</li>
                                    <li className='dropdown-item'>Datewise Vendorwise Summary</li>
                                    <li className='dropdown-item'>Milktypewise Summary</li>
                                    <li className='dropdown-item'>Datewise Milktypewise Summary</li>
                                    <li className='dropdown-item'>Milk Purchase Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <button className='btn btn-primary'>Show Data</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseMilkPurchaseRepCom