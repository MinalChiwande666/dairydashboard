import React from 'react'
import TextField from '@mui/material/TextField';


const MilkGRNComp = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>Milk GRN</h3>
            <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
                <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                    <thead>
                        <tr>
                            <th scope='col'>QC ID</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Vendor</th>
                            <th scope='col'>Vehicle No.</th>
                            <th scope='col'>Final Rate</th>
                            <th scope='col'>QCA ID</th>
                            <th scope='col'>Net Weight</th>
                            <th scope='col'>Gross Weight</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className='vehicleEntryStyle mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="ID" variant="standard" disabled value='RQ/2/1' />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Manual No" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-4'>
                        <label>Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <div>Employee</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Employee1</li>
                                    <li className='dropdown-item'>Pravin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vendor Name" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vehicle No" variant="standard" />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Our Gross Weight'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Vendor Net Weight'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vehicle Empty Weight" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vendor Gross Weight" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <div>
                            <label>Remark</label>
                        </div>
                        <textarea cols="40" rows="2"></textarea>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Our Net Weight" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Final Weight(LTR)" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Rate" variant="standard" />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Rate Reduction" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Final Rate" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Total Amount" variant="standard" />
                    </div>
                </div>
            </div>

            <div className='vehicleEntryStyle mt-4'>
                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Warehouse</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Please Choose:
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'><input type="text" placeholder='Looking for' /></li>
                                    <li className='dropdown-item'>Warehouse1</li>
                                    <li className='dropdown-item'>Warehouse2</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Item</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Please Choose:
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'><input type="text" placeholder='Looking for' /></li>
                                    <li className='dropdown-item'>Curd 100 ml bag</li>
                                    <li className='dropdown-item'>Curd 100 ml cap</li>
                                    <li className='dropdown-item'>Curd 250 ml bag</li>
                                    <li className='dropdown-item'>Curd 250 ml cap</li>
                                    <li className='dropdown-item'>Curd FG</li>
                                    <li className='dropdown-item'>Paneer 250 gm</li>
                                    <li className='dropdown-item'>Vanilla 100 gm</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-sm-12 mt-2'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Unit" variant="standard" />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Batch" variant="standard" />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-sm-12'>
                        <button className='bg-primary border border-none border-radius-rounded text-white'>show Table</button>
                    </div>

                    <div className='col-12 col-md-4 col-sm-12'>
                        <label>From Date</label>
                        <input type="date" className='mx-3' />
                    </div>

                    <div className='col-12 col-md-4 col-sm-12'>
                        <label>To Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                </div>

                <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
                    <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Vendor Name</th>
                                <th scope='col'>Item</th>
                                <th scope='col'>Unit</th>
                                <th scope='col'>Vendor Gross Weight</th>
                                <th scope='col'>Vender Net Weight</th>
                                <th scope='col'>Vehicle Empty Weight</th>
                                <th scope='col'>Warehouse</th>
                                <th scope='col'>Rate</th>
                                <th scope='col'>Rate Reduction</th>
                                <th scope='col'>Final Rate</th>
                                <th scope='col'>Total Amount</th>
                                <th scope='col'>PI ID</th>
                                <th scope='col'>Entry</th>
                                <th scope='col'>Date of Entry</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <button className='btn btn-primary mt-3'>Export to Excel</button>
            </div>

            <div className='mt-3'>
                <div className='row'>
                    <div className='col-2'>
                        <button className='btn btn-primary'>Save</button>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-primary'>Print</button>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-primary'>Clear</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MilkGRNComp