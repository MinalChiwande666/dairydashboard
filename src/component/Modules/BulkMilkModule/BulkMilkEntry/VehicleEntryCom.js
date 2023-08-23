import React from 'react'
import TextField from '@mui/material/TextField';



const VehicleEntryCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>Vehicle Entry</h3>
            <div className='vehicleEntryStyle'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="ID" variant="standard" disabled value='VE/2/1'/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <label>Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <div>Vehicle Name</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'><input type="text" placeholder='looking for' /></li>
                                    <li className='dropdown-item'>anna</li>
                                    <li className='dropdown-item'>S1</li>
                                    <li className='dropdown-item'>S2</li>
                                    <li className='dropdown-item'>Test</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <label>Vender Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <div>Milk Type</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Cow</li>
                                    <li className='dropdown-item'>Buffalo</li>
                                    <li className='dropdown-item'>Gir Cow</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <div>Collection</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Morning</li>
                                    <li className='dropdown-item'>Evening</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Net Weight'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Gross Weight'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Vender FAT'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Vender SNF'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Vender Acidity'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Challan No'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <div>Vehicle Number</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Cow</li>
                                    <li className='dropdown-item'>Buffalo</li>
                                    <li className='dropdown-item'>Gir Cow</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <div>Driver Name</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Morning</li>
                                    <li className='dropdown-item'>Evening</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <div>Driver Mobile No</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Morning</li>
                                    <li className='dropdown-item'>Evening</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <label>Remark</label>
                        <textarea cols="40" rows="4"></textarea>
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
                                <th scope='col'>Vender Name</th>
                                <th scope='col'>Vender Date</th>
                                <th scope='col'>Milk Type</th>
                                <th scope='col'>Collection</th>
                                <th scope='col'>Net Weight</th>
                                <th scope='col'>Gross Weight</th>
                                <th scope='col'>Acidity</th>
                                <th scope='col'>Challan No</th>
                                <th scope='col'>Vehicle No</th>
                                <th scope='col'>Driver Name</th>
                                <th scope='col'>Driver No</th>
                                <th scope='col'>Vehicle QC ID</th>
                                <th scope='col'>Entry By</th>
                                <th scope='col'>Date of Entry</th>
                            </tr>
                        </thead>
                    </table>
                </div>
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

export default VehicleEntryCom