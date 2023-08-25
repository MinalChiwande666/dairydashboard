import React from 'react'

const RPTBulkMilkReportCom = () => {
    return (
        <div className='container'>
            <h3 className='text-center' style={{ fontSize: '2rem' }}>RPT Bulk Milk Report</h3>

            <div className='vehicleEntryStyle mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12 mt-4'>
                        <label>From Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-4'>
                        <label>To Date</label>
                        <input type="date" className='mx-3' />
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-2'>
                        <div>Item</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%", height:"200px", overflow:"scroll"}}>
                                    <li className='dropdown-item'><input type="text" placeholder='Looking for'/></li>
                                    <li className='dropdown-item'>All</li>
                                    <li className='dropdown-item'>Cow Milk</li>
                                    <li className='dropdown-item'>Paneer 250 gm</li>
                                    <li className='dropdown-item'>Vanilla 100 gm</li>
                                    <li className='dropdown-item'>Butter Scotch 50 gm</li>
                                    <li className='dropdown-item'>Condenced Milk</li>
                                    <li className='dropdown-item'>milk1</li>
                                    <li className='dropdown-item'>Cream</li>
                                    <li className='dropdown-item'>Curd FG</li>
                                    <li className='dropdown-item'>Buffalo Milk</li>
                                    <li className='dropdown-item'>Curd</li>
                                    <li className='dropdown-item'>Curd 100 ml bag</li>
                                    <li className='dropdown-item'>Curd 250 ml bag</li>
                                    <li className='dropdown-item'>Curd 100 ml cap</li>
                                    <li className='dropdown-item'>100Curd</li>
                                    <li className='dropdown-item'>250Curd</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-2'>
                        <div>Supplier</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%"}}>
                                    <li className='dropdown-item'><input type="text" placeholder='Looking for'/></li>
                                    <li className='dropdown-item'>All</li>
                                    <li className='dropdown-item'>S1</li>
                                    <li className='dropdown-item'>S2</li>
                                    <li className='dropdown-item'>Test</li>
                                    <li className='dropdown-item'>anna</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12 mt-2'>
                        <div>Vehicle Name</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%"}}>
                                    <li className='dropdown-item'><input type="text" placeholder='Looking for'/></li>
                                    <li className='dropdown-item'>All</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-sm-12 mt-2'>
                        <div>Vehicle No</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%"}}>
                                    <li className='dropdown-item'><input type="text" placeholder='Looking for'/></li>
                                    <li className='dropdown-item'>All</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3 col-sm-12 mt-2'>
                        <div>Warehouse</div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                    className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                                    <div className='dropdown-toggle'>
                                    </div>
                                </button>
                                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%"}}>
                                    <li className='dropdown-item'><input type="text" placeholder='Looking for'/></li>
                                    <li className='dropdown-item'>Warehouse1</li>
                                    <li className='dropdown-item'>Warehouse2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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

export default RPTBulkMilkReportCom