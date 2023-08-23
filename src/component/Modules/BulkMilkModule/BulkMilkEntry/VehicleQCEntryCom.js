import React from 'react'
import TextField from '@mui/material/TextField';


const VehicleQCEntryCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>Vehicle Entry QC</h3>
            <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
                <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                    <thead>
                        <tr>
                            <th scope='col'>VE ID</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Vender</th>
                            <th scope='col'>Vehicle No.</th>
                            <th scope='col'>FAT</th>
                            <th scope='col'>SNF</th>
                            <th scope='col'>Acidity</th>
                            <th scope='col'>Milk Type</th>
                            <th scope='col'>Challan No</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className='vehicleEntryStyle mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="ID" variant="standard" disabled value='QC/2/1' />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-4'>
                        <label>Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vehicle No." variant="standard" />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-4'>
                        <label>Vender Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="MType" variant="standard" />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vender FAT" variant="standard" />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vender SNF" variant="standard" />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vender Acidity" variant="standard" />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Our FAT %'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Our SNF %'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Our Acidity %'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Degree'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Temperature'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="MBRT" variant="standard" />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>COB</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Taste</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Yes</li>
                                    <li className='dropdown-item'>NO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Salt</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Alcohol 68%</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Sugar</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Maltose</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Glucose</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Urea</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Soda</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Hypo Chloride</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'>Negative</li>
                                    <li className='dropdown-item'>Positive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Sodium PPM'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Protien In'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Channa Test'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'BR Test'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <div>Select</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                    <li className='dropdown-item'><input type="text" /></li>
                                    <li className='dropdown-item'>Accept</li>
                                    <li className='dropdown-item'>Reject</li>
                                    <li className='dropdown-item'>Accept with deviation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Sampler Name" variant="standard" />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Chemist Name" variant="standard" />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12'>
                        <div>
                            <label>Remark</label>
                        </div>
                        <textarea cols="40" rows="2"></textarea>
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
                                <th scope='col'>Vender No.</th>
                                <th scope='col'>Vehicle Date</th>
                                <th scope='col'>Milk Type</th>
                                <th scope='col'>FAT</th>
                                <th scope='col'>SNF</th>
                                <th scope='col'>Acidity</th>
                                <th scope='col'>Our FAT</th>
                                <th scope='col'>Our SNF</th>
                                <th scope='col'>Our Acidity</th>
                                <th scope='col'>Degree</th>
                                <th scope='col'>Temperature</th>
                                <th scope='col'>MBRT</th>
                                <th scope='col'>Sampler Name</th>
                                <th scope='col'>Chemist Name</th>
                                <th scope='col'>Status</th>
                                <th scope='col'>QC Approved Id</th>
                                <th scope='col'>Milk GRN</th>
                                <th scope='col'>Remark</th>
                                <th scope='col'>Entry</th>
                                <th scope='col'>Date of Entry</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <button className='btn btn-primary'>Export to Excel</button>
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

export default VehicleQCEntryCom