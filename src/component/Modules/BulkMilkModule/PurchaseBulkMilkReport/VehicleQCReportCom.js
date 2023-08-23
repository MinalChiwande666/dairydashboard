import React from 'react'

const VehicleQCReportCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>Purchase QC Report</h3>
            <div className='mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-sm-12'>
                        <button className='btn btn-primary'>Show Report</button>
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

                <div style={{ height: "35vh", overflow: 'scroll', marginTop: "8px" }}>
                    <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                        <thead>
                            <tr>
                                <th scope='col'>sr no</th>
                                <th scope='col'>Vehicle No.</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Milk Type</th>
                                <th scope='col'>FAT</th>
                                <th scope='col'>SNF</th>
                                <th scope='col'>Acidity</th>
                                <th scope='col'>Degree</th>
                                <th scope='col'>Temperature</th>
                                <th scope='col'>MBRT</th>
                                <th scope='col'>COB</th>
                                <th scope='col'>Taste</th>
                                <th scope='col'>Salt</th>
                                <th scope='col'>Alcohol</th>
                                <th scope='col'>Sugar</th>
                                <th scope='col'>Maltose</th>
                                <th scope='col'>Glucose</th>
                                <th scope='col'>Urea</th>
                                <th scope='col'>Soda</th>
                                <th scope='col'>Hypo Chloride</th>
                                <th scope='col'>Sodium PPM</th>
                                <th scope='col'>Protien</th>
                                <th scope='col'>Channa Test</th>
                                <th scope='col'>BR Test</th>
                                <th scope='col'>Sampler Name</th>
                                <th scope='col'>Chemist Name</th>
                                <th scope='col'>States</th>
                                <th scope='col'>Remark</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <button className='btn btn-primary mt-3'>Export to Excel</button>
            </div>
            <div className='mt-3'>
                <div className='row'>
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

export default VehicleQCReportCom