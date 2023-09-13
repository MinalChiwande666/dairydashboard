import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


const PlantInCom = () => {

    const [routelist, setroutelist] = useState([])
    const [showTable, setShowTable] = useState(false)
    const [plantdata, setplantdata] = useState([])
    const [plantinform, setplantinform] = useState({
        "date": "",
        "shift": "",
        "route": "",
        "collector": "",
        "quantity": null,
        "fat": null,
        "clr": null,
    })
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


    useEffect(() => {
        fetch('http://103.38.50.113:8080/DairyApp/getRoute').then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setroutelist(data)
        })
    }, [])

    const getalldata = ()=>{
        fetch('http://103.38.50.113:8080/DairyApp/getallPlantIn').then((data) => {
            return data.json()
        }).then((res) => {
            console.log("response =>", res)
            setplantdata(res)
        })
    }
    useEffect(() => {
       getalldata()
    }, [])
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

    const save = () => {
        console.log("plantform=>", plantinform)

        try {
            let neobj = {
                "date": plantinform.date,
                "shift": plantinform.shift,
                "route": plantinform.route,
                "collector": plantinform.collector,
                "quantity": Number(plantinform.quantity),
                "fat": Number(plantinform.fat),
                "clr": Number(plantinform.clr)
            }
            console.log("plant form=>", neobj)
            fetch('http://103.38.50.113:8080/DairyApp/savePlantIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(neobj)
            }).then((data) => {
                return data.json()
            }).then((res) => {
                console.log("respones saved =>", res)
                alert(res.message)
                if (res.message === "Data Saved...!") {
                    setplantinform({
                        "date": "",
                        "shift": "",
                        "route": "",
                        "collector": "",
                        "quantity": "",
                        "fat": "",
                        "clr": "",
                    })
                }
            }).catch((e) => {
                console.log("server error=>", e)
            })
        } catch (e) {
            console.log("Error =>", e)
        }
    }

    const del = (id)=>{
      try{
        fetch('http://103.38.50.113:8080/DairyApp/deletePlantin',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                "id":id
            })
        }).then((res)=>{
            return res
        }).then((data)=>{
           console.log(data)
           getalldata()
        })
      }catch(e){
      console.log("Error=>",e)
      }
    }
    return (
        <div className='container-fluid'>
            <div className='row text-center bg-primary'>
                <h4 className='text-white mt-2'>Plant In</h4>
            </div>
            <div>
                <div style={{ boxShadow: "2px 2px 2px #D3D3D3", overflowY: "scroll" }} >
                    <table className='table' style={{ width: "100%" }}>
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
                                <input
                                    value={plantinform.date}
                                    onChange={(e) => {
                                        setplantinform({
                                            ...plantinform,
                                            date: e.target.value
                                        })
                                    }}
                                    type="date" style={{ fontSize: '1.1rem', padding: "0.2rem", marginTop: "9px", border: "1px solid gray" }} />
                            </th>
                            <td>
                                <div className='dropdown'>
                                    <button className='btn btn-secondary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {plantinform.shift === "" ? "Select" : plantinform.shift}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            plantShift.map((item) => (
                                                <li
                                                    onClick={() => {
                                                        setplantinform({
                                                            ...plantinform,
                                                            shift: item.name
                                                        })
                                                    }}
                                                    className='dropdown-item'>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <div className='dropdown'>
                                    <button className='btn btn-secondary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {plantinform.route === "" ? "Select" : plantinform.route}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            routelist.map((item) => (
                                                <li
                                                    onClick={() => {
                                                        setplantinform({
                                                            ...plantinform,
                                                            route: item
                                                        })
                                                    }}
                                                    className='dropdown-item'>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </td>

                            <td>
                                <div className='dropdown'>
                                    <button className='btn btn-secondary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {plantinform.collector === "" ? "Select" : plantinform.collector}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            plantCollector.map((item) => (
                                                <li
                                                    onClick={() => {
                                                        setplantinform({
                                                            ...plantinform,
                                                            collector: item.name
                                                        })
                                                    }}
                                                    className='dropdown-item'>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </td>

                            <td>
                                <input
                                    onChange={(e) => {
                                        setplantinform({
                                            ...plantinform,
                                            quantity: e.target.value
                                        })
                                    }}

                                    type="text"
                                    value={plantinform.quantity}
                                    style={{ marginTop: "9px", height: "35px", border: "1px solid gray" }} />
                            </td>

                            <td>
                                <input
                                    onChange={(e) => {
                                        setplantinform({
                                            ...plantinform,
                                            fat: e.target.value
                                        })
                                    }}
                                    value={plantinform.fat}
                                    type="text" style={{ marginTop: "9px", height: "35px", border: "1px solid gray" }} />
                            </td>

                            <td>
                                <input
                                    onChange={(e) => {
                                        setplantinform({
                                            ...plantinform,
                                            clr: e.target.value
                                        })
                                    }}
                                    value={plantinform.clr}
                                    type="text" style={{ marginTop: "9px", height: "35px", border: "1px solid gray" }} />
                            </td>
                            <td>
                                <button
                                    onClick={() => save()}
                                    className='btn btn-primary mt-1 bg-primary text-white' style={{ width: "70px", fontSize: "1rem" }}>Save</button>
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
                                    {
                                        plantdata.map((item,i) => (
                                            <tr>
                                               <td>{item.id}</td>
                                                <td>{item.date}</td>
                                                <td>{item.shift}</td>
                                                <td>{item.route}</td>
                                                <td>{item.collector}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.fat}</td>
                                                <td>{item.clr}</td>
                                                <td><IconButton onClick={()=>del(item.id)}><DeleteIcon style={{ color: 'red', cursor: 'pointer' }} /></IconButton></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div> : null
                }
            </div>

        </div>
    )
}

export default PlantInCom