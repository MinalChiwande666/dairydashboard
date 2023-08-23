import React from 'react'
import TextField from '@mui/material/TextField';


const VehicleQCApprovalCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>QC Approval</h3>
            <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
                <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                    <thead>
                        <tr>
                            <th scope='col'>QC ID</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Vender</th>
                            <th scope='col'>Milk Type</th>
                            <th scope='col'>Vehicle No.</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className='vehicleEntryStyle mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="ID" variant="standard" disabled value='QCA/2/1' />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-4'>
                        <label>Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vender Name" variant="standard" />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vehicle No." variant="standard" />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Milk Type" variant="standard" />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-4 col-sm-12 mt-4'>
                        <label>Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                    <div className='col-12 col-md-4 col-sm-12 mt-1'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Rate Reduction'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                </div>

                <div className='row mt-4'>
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
                                <th scope='col'>Milk Type</th>
                                <th scope='col'>Vehicle Date</th>
                                <th scope='col'>Reduce Date</th>
                                <th scope='col'>GRN ID</th>
                                <th scope='col'>Remark</th>
                                <th scope='col'>Entry</th>
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

export default VehicleQCApprovalCom