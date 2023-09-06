import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


const PlantInCom = () => {

    const [showTable, setShowTable] = useState(false)

    const plantShift = [
        {
            id: 1,
            name: "Morning"
        },
        {
            id: 2,
            name: "Evening"
        }
    ]

    const plantRoute = [
        {
            id: 1,
            name: "Barnala"
        },
        {
            id: 2,
            name: "Dummy"
        }
    ]

    const plantCollector = [
        {
            id: 1,
            name: "Lucky"
        },
        {
            id: 2,
            name: "Mucky"
        }
    ]

    return (
        <div className='container-fluid '>
            <div className='row text-center bg-primary'>
                <h4 className='text-white mt-2'>Plant In</h4>
            </div>
            <div>
                <div style={{ boxShadow: "2px 2px 2px #D3D3D3", overflowY:"scroll"}} >
                    <table className='table' style={{ width: "100%"}}>
                        <thead>
                            <tr>
                                <th scope='col'>Date</th>
                                <th scope='col'>Shift</th>
                                <th scope='col'>Route</th>
                                <th scope='col'>Collector</th>
                                <th scope='col'>Qty[in Kg]</th>
                                <th scope='col'>FAT[%]</th>
                                <th scope='col'>CLR[%]</th>
                                <th scope='col'>Save</th>
                            </tr>
                        </thead>
                        <tbody>
                            <th scope='row'>
                                <input type="date" style={{ fontSize: '1.1rem', padding: "0.2rem", marginTop: "9px", border: "1px solid gray" }} />
                            </th>
                            <td>
                                <div className='dropdown'>
                                    <button className='btn btn-secondary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            plantShift.map((item) => (
                                                <li className='dropdown-item'>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <div className='dropdown'>
                                    <button className='btn btn-secondary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            plantRoute.map((item) => (
                                                <li className='dropdown-item'>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </td>

                            <td>
                                <div className='dropdown'>
                                    <button className='btn btn-secondary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Select
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            plantCollector.map((item) => (
                                                <li className='dropdown-item'>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </td>

                            <td>
                                <input type="text" style={{ marginTop: "9px", height: "35px", border: "1px solid gray" }} />
                            </td>

                            <td>
                                <input type="text" style={{ marginTop: "9px", height: "35px", border: "1px solid gray" }} />
                            </td>

                            <td>
                                <input type="text" style={{ marginTop: "9px", height: "35px", border: "1px solid gray" }} />
                            </td>
                            <td>
                                <button className='btn btn-primary mt-1 bg-primary text-white' style={{ width: "70px", fontSize: "1rem" }}>Save</button>
                            </td>
                        </tbody>
                    </table>
                </div>

                <div className='row'>
                    <div><button className='btn btn-primary mt-2' onClick={() => setShowTable(!showTable)}>Show Table</button></div>
                </div>

                {
                    showTable ?
                        <div className='mt-4' style={{ height: "60vh", overflow: 'scroll' }}>

                            <table className="table mt-3 table-bordered border-primary" style={{ width: "100%", fontSize: "0.9rem" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">sr.no</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Shift</th>
                                        <th scope="col">Route</th>
                                        <th scope="col">Collector</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">FAT</th>
                                        <th scope="col">CLR</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1.2</td>
                                        <td>2.6</td>
                                        <td>6.5</td>
                                        <td>95.5</td>
                                        <td>548</td>
                                        <td>452</td>
                                        <td>987</td>
                                        <td><IconButton><DeleteIcon style={{ color: 'red', cursor: 'pointer' }} /></IconButton></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> : null
                }
            </div>

        </div>
    )
}

export default PlantInCom