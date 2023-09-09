import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Routecom = () => {
    const [routeform, setrouteform] = useState({
        km: '',
        routeName: '',
        areaName: ''
    })
    const [showtable, setshowtable] = useState(false)
    const [routedata, setroutedata] = useState([])

    const save = () => {
        try {
            fetch('http://103.38.50.113:8080/DairyApp/saveRouteMaster', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(routeform)
            }).then((data) => {
                return data.json()
            }).then((res) => {
                console.log(res)
                alert(res.message)
                window.location.reload()
            })
        } catch (e) {
            console.log("Error =>", e)
        }
    }

    useEffect(() => {
        fetch('http://103.38.50.113:8080/DairyApp/getAllRouteMasterData').then((data) => {
            return data.json()
        }).then((res) => {
            setroutedata(res)
        })
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center my-3'>Route Master</h3>
            <div style={{ boxShadow: '10px 10px 10px 0px lightgray' }} className='row py-4'>
                <div className='col-md-3 col-12'>
                    <TextField
                        value={3}
                        label="ID"
                        variant='standard'
                        style={{ width: '100%' }}
                    />
                </div>
                <div className='col-md-3 col-12'>
                    <TextField
                        value={routeform.km}
                        onChange={(e) => {
                            setrouteform({
                                ...routeform,
                                km: e.target.value
                            })
                        }}
                        label="Km"
                        variant='standard'
                        style={{ width: '100%' }}
                    />
                </div>
                <div className='col-md-3 col-12'>
                    <TextField
                        value={routeform.routeName}
                        onChange={(e) => {
                            setrouteform({
                                ...routeform,
                                routeName: e.target.value
                            })
                        }}
                        label="Route Name"
                        variant='standard'
                        style={{ width: '100%' }}
                    />
                </div>
                <div className='col-md-3 col-12'>
                    <TextField
                        value={routeform.areaName}
                        onChange={(e) => {
                            setrouteform({
                                ...routeform,
                                areaName: e.target.value
                            })
                        }}
                        label="Area Name"
                        variant='standard'
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
            <button onClick={() => setshowtable(!showtable)} className='btn btn-primary my-3'>Show List</button>

            {
                showtable &&
                <><table className="table table-bordered my-5">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Route Name</th>
                            <th scope="col">KM</th>

                        </tr>
                    </thead>
                    <tbody>
                        {routedata.map((item, i) => (

                            <tr>
                                <td>{item.id}</td>
                                <td>{item.routeName}</td>
                                <td>{item.km}</td>

                            </tr>
                        ))}

                    </tbody>
                </table>

                    <button className='btn-primary btn'>Export To Excel</button>
                </>

            }
            <div className='row my-3'>
                <div className='col-md-1 col-12 my-2'>
                    <button
                        onClick={() => save()}
                        className='btn-primary btn'>Save</button>
                </div>
                <div className='col-md-1 col-12 my-2'>
                    <button
                        onClick={() => setrouteform({
                            km: '',
                            routeName: '',
                            areaName: ''
                        })}
                        className='btn-primary btn'>clear</button>
                </div>
                <div className='col-md-1 col-12 my-2'>
                    <button className='btn-primary btn'>print</button>
                </div>
            </div>
        </div>
    )
}

export default Routecom