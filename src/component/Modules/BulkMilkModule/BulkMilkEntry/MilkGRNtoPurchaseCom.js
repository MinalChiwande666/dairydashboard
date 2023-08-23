import React from 'react'
import TextField from '@mui/material/TextField';

const MilkGRNtoPurchaseCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>GRN to Purchase</h3>
            <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
                <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                    <thead>
                        <tr>
                            <th scope='col'>GRN ID</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Vendor Name</th>
                            <th scope='col'>Vehicle No.</th>
                            <th scope='col'>Item</th>
                            <th scope='col'>Unit</th>
                            <th scope='col'>Batch</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className='vehicleEntryStyle mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="ID" variant="standard" disabled value='PM/2/1' />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Batch No" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-4'>
                        <label>Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Supplier" variant="standard" />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Transport Rate'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-3'>
                        <TextField
                            type='number'
                            style={{ width: '95%' }}
                            label={'Overcharge'}
                            className='txtsize' variant="standard"
                        />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <div>
                            <label>Remark</label>
                        </div>
                        <textarea cols="30" rows="2"></textarea>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Item" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Unit" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Batch" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Warehouse" variant="standard"/>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Vehicle No." variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Net Qty." variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Milk Type" variant="standard"/>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="FAT" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="SNF" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Rate" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Rate Reduction" variant="standard"/>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Final Rate" variant="standard"/>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-1'>
                        <TextField style={{ width: "95%" }}
                            id="standard-basic" label="Total Amount" variant="standard"/>
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
                                <th scope='col'>Supplier</th>
                                <th scope='col'>Vehicle No</th>
                                <th scope='col'>Batch No</th>
                                <th scope='col'>Warehouse</th>
                                <th scope='col'>Item Name</th>
                                <th scope='col'>FAT</th>
                                <th scope='col'>SNF</th>
                                <th scope='col'>Net Quantity</th>
                                <th scope='col'>Final Rate</th>
                                <th scope='col'>Transport Rate</th>
                                <th scope='col'>Overcharge</th>
                                <th scope='col'>Total Amount</th>
                                <th scope='col'>Entry By</th>
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

export default MilkGRNtoPurchaseCom