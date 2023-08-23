import React from 'react'

const PurchaseInwardReportCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>Tanker Report</h3>
            <div className='vehicleEntryStyle mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-sm-12'>
                        <div>Select Vendor</div>
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
                                    <li className='dropdown-item'>All</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-3'>
                        <label>From Date</label>
                        <input type="date" className='mx-3' />
                    </div>

                    <div className='col-12 col-md-4 col-sm-12 mt-3'>
                        <label>To Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-sm-12'>
                        <button className='btn btn-primary'>Show Report</button>
                    </div>
                </div>

                <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
                    <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                        <thead>
                            <tr>
                                <th scope='col'>sr no</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Vendor Name</th>
                                <th scope='col'>Challan No</th>
                                <th scope='col'>Vehicle No</th>
                                <th scope='col'>Milk Type</th>
                                <th scope='col'>FAT</th>
                                <th scope='col'>Degree</th>
                                <th scope='col'>SNF</th>
                                <th scope='col'>Rate</th>
                                <th scope='col'>Weight (In Kg)</th>
                                <th scope='col'>Weight (In Ltr)</th>
                                <th scope='col'>Total</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <button className='btn btn-primary mt-3'>Export to Excel</button>
            </div>
        </div>
    )
}

export default PurchaseInwardReportCom