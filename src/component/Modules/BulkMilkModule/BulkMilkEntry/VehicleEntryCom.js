import React, { useState, useEffect } from 'react'
import "./BulkMilkEntry.css"
import TextField from '@mui/material/TextField';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog'
import { DialogActions, DialogTitle, Button, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Slide from '@mui/material/Slide';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const VehicleEntryCom = () => {

    const [loader, setLoader] = useState(false)
    const [updateId, setUpdateId] = useState('')
    const [showTableData, setShowTableData] = useState(false)
    const [vehicleEntryData, setVehicleEntryData] = useState([])
    const [openDailogDel, setOpenDailogDel] = useState(false)
    const [delId, setDelId] = useState()
    const [dates, setDates] = useState({
        Fromdate: '',
        Todate: ''
    })
    const [updateForm, setUpdateForm] = useState({})


    const vendorname = [
        {
            id: '1',
            name: 'Yash'
        },
        {
            id: '2',
            name: 'Kunal'
        },
        {
            id: '3',
            name: 'Atul'
        },
        {
            id: '4',
            name: 'Minal'
        }
    ]

    const milktype = [
        {
            id: '1',
            name: 'Cow'
        },
        {
            id: '2',
            name: 'Buffalo'
        },
        {
            id: '3',
            name: 'Gir Cow'
        }
    ]

    const collection = [
        {
            id: '1',
            name: 'Morning'
        },
        {
            id: '2',
            name: 'Evening'
        }
    ]

    const [vehicleEntryForm, setVehicleEntryForm] = useState({
        milkType: '',
        vendorFAT: '',
        vehicleNumber: '',
        remark: '',
        date: '',
        collection: '',
        vendorSNF: '',
        driverName: '',
        vendorName: '',
        netWeight: '',
        vendorAcidity: '',
        driverMobNo: '',
        vendorDate: '',
        grossWeight: '',
        challanNo: ''
    })

    const handleDelete = () => {
        let del = {
            id: delId
        }
        console.log(del)
        axios.post('http://103.38.50.113:8080/DairyApp/deleteVehicleEntryById', del).then((delData) => {
            console.log(delData.data)
            // console.log(delData)
            if (delData.data) {
                setOpenDailogDel(false)
                getTableData()
            }
        }).catch((e) => {
            console.log("Something went wrong in delete", e)
        })
    }

    const handleClose = () => {
        setOpenDailogDel(false)
    }

    const dailoge = () => {
        return (
            <>
                <Dialog

                    open={openDailogDel}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogActions style={{ height: '2rem' }}>
                        <IconButton>
                            <CancelIcon style={{ color: 'blue' }} />
                        </IconButton>
                    </DialogActions>
                    <div style={{ background: 'white' }}>

                        <DialogTitle>
                            Are You sure you want to delete?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleDelete}>Yes</Button>
                            <Button onClick={handleClose}>No</Button>
                        </DialogActions>
                    </div>
                </Dialog>
            </>
        )
    }


    const getTableData = async () => {
        try {
            setLoader(true)
            await axios.get('http://103.38.50.113:8080/DairyApp/getallVehicleEntry').then((data) => {
                console.log(data.data)
                if (data.data) {
                    setVehicleEntryData(data.data)
                    setLoader(false)
                } else {
                    setLoader(false)
                }
            }).catch((e) => {
                console.log("Something went wrong", e)
            })
        } catch (error) {
            console.log("Error! Something went wrong while fetching data from axios", error)
        }
    }

    const delet = (id) => {
        setOpenDailogDel(true)
        setDelId(id)
    }

    const editForm = (data, typeId) =>{
        setUpdateId(typeId)
        setUpdateForm(data)
    }

    useEffect(() => {
        getTableData()
    }, [])


    const saveData = () => {
        try {
            let newForm = {
                "milkType": vehicleEntryForm.milkType,
                "vendorFAT": vehicleEntryForm.vendorFAT,
                "vehicleNumber": vehicleEntryForm.vehicleNumber,
                "remark": vehicleEntryForm.remark,
                "date": vehicleEntryForm.date,
                "collection": vehicleEntryForm.collection,
                "vendorSNF": vehicleEntryForm.vendorSNF,
                "driverName": vehicleEntryForm.driverName,
                "vendorName": vehicleEntryForm.vendorName,
                "netWeight": vehicleEntryForm.netWeight,
                "vendorAcidity": vehicleEntryForm.vendorAcidity,
                "driverMobNo": vehicleEntryForm.driverMobNo,
                "vendorDate": vehicleEntryForm.vendorDate,
                "grossWeight": vehicleEntryForm.grossWeight,
                "challanNo": vehicleEntryForm.challanNo
            }
            console.log(newForm, "save Form Data")
            axios.post('http://103.38.50.113:8080/DairyApp/saveVehicleEntry', newForm).then((newFormData) => {
                alert(newFormData.data.message)
                toast.success(`${newFormData.data.message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                getTableData()
            }).catch((e) => {
                console.log("something went wrong when saving data", e)
            })
        } catch (error) {
            console.log("Data not saved properly", error)
        }
    }


    const saveUpdate = () => {
        let updateform = {
            "id": String(updateForm.id),
            "milkType": String(updateForm.milkType),
            "vendorFAT": String(updateForm.vendorFAT),
            "vehicleNumber": String(updateForm.vehicleNumber),
            "remark": String(updateForm.remark),
            "date": String(updateForm.date),
            "collection": String(updateForm.collection),
            "vendorSNF": String(updateForm.vendorSNF),
            "driverName": String(updateForm.driverName),
            "vendorName": String(updateForm.vendorName),
            "netWeight": String(updateForm.netWeight),
            "vendorAcidity": String(updateForm.vendorAcidity),
            "driverMobNo": String(updateForm.driverMobNo),
            "vendorDate": String(updateForm.vendorDate),
            "grossWeight": String(updateForm.grossWeight),
            "challanNo": String(updateForm.challanNo)
        }

        axios.post('http://103.38.50.113:8080/DairyApp/saveVehicleEntry', updateform).then((data)=>{
            console.log(data.data)
            getTableData()
        }).catch((e)=>{
            console.log("Data not updated properly", e)
        })
    }


    return (
        <>
            {loader ?
                <div className="loader-container">
                    <div className='spinner'></div>
                </div> :
                <div className='container'>
                    <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light">
                    </ToastContainer>

                    <h3 className='text-center' style={{ fontSize: '2rem' }}>Vehicle Entry</h3>
                    <div className='vehicleEntryStyle'>
                        {dailoge()}
                        <div className='row'>
                            <div className='col-12 col-md-3 col-sm-12 mt-1'>
                                <TextField style={{ width: "95%" }}
                                    id="standard-basic" label="ID" variant="standard" disabled value='VE/2/1' />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <label>Date</label>
                                <input type="date" className='mx-3' value={updateId === "2" ? updateForm.date : vehicleEntryForm.date}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                date:e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                date: e.target.value
                                            })
                                        } 
                                    }}
                                />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-1'>
                                <div>Vendor Name</div>
                                <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                            className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateId === '2' ? updateForm.vendorName : (vehicleEntryForm.vendorName === '' ? 'Select' : vehicleEntryForm.vendorName)}
                                            <div className='dropdown-toggle'>
                                            </div>
                                        </button>
                                        <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                            {
                                                vendorname.map((ele, i) => {
                                                    return (
                                                        <>
                                                            <li
                                                                onClick={() => {
                                                                    if(updateId !== '2'){
                                                                        setVehicleEntryForm({
                                                                            ...vehicleEntryForm,
                                                                            vendorName: ele.name
                                                                        })
                                                                    }else{
                                                                        setUpdateForm({
                                                                            ...updateForm,
                                                                            vendorName : ele.name
                                                                        })
                                                                    }
                                                                    
                                                                }}
                                                                className='dropdown-item'>{ele.name}
                                                            </li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <label>Vendor Date</label>
                                <input type="date" className='mx-3' value={updateId === '2' ? updateForm.vendorDate : vehicleEntryForm.vendorDate}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                vendorDate: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                vendorDate: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-md-3 col-sm-12 mt-1'>
                                <div>Milk Type</div>
                                <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                            className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateId === '2' ? updateForm.milkType : (vehicleEntryForm.milkType === '' ? 'Select' : vehicleEntryForm.milkType)}
                                            <div className='dropdown-toggle'>
                                            </div>
                                        </button>
                                        <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                            {
                                                milktype.map((ele, i) => {
                                                    return (
                                                        <>
                                                            <li
                                                                onClick={() => {
                                                                    if(updateId !== '2'){
                                                                        setVehicleEntryForm({
                                                                            ...vehicleEntryForm,
                                                                            milkType: ele.name
                                                                        })
                                                                    }else{
                                                                        setUpdateForm({
                                                                            ...updateForm,
                                                                            milkType: ele.name
                                                                        })
                                                                    }
                                                                    
                                                                }}
                                                                className='dropdown-item'>{ele.name}</li>
                                                        </>)
                                                })
                                            }
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
                                            className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateId === '2' ? updateForm.collection : (vehicleEntryForm.collection === '' ? 'Select' : vehicleEntryForm.collection)}
                                            <div className='dropdown-toggle'>
                                            </div>
                                        </button>
                                        <ul className="dropdown-menu" style={{ cursor: "pointer", width: "95%" }}>
                                            {
                                                collection.map((ele, i) => {
                                                    return (
                                                        <>
                                                            <li
                                                                onClick={() => {
                                                                    if(updateId !== '2'){
                                                                        setVehicleEntryForm({
                                                                            ...vehicleEntryForm,
                                                                            collection: ele.name
                                                                        })
                                                                    }else{
                                                                        setUpdateForm({
                                                                            ...updateForm,
                                                                            collection: ele.name
                                                                        })
                                                                    }
                                                                    
                                                                }}
                                                                className='dropdown-item'>{ele.name}</li>
                                                        </>)
                                                })
                                            }
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
                                    value={updateId === "2" ? updateForm.netWeight : vehicleEntryForm.netWeight}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                netWeight: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                netWeight: e.target.value
                                            })
                                        }

                                        
                                    }}
                                />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <TextField
                                    type='number'
                                    style={{ width: '95%' }}
                                    label={'Gross Weight'}
                                    className='txtsize' variant="standard"
                                    value={updateId === "2" ? updateForm.grossWeight : vehicleEntryForm.grossWeight}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                grossWeight: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                grossWeight: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <TextField
                                    type='number'
                                    style={{ width: '95%' }}
                                    label={'Vendor FAT'}
                                    className='txtsize' variant="standard"
                                    value={updateId === "2" ? updateForm.vendorFAT : vehicleEntryForm.vendorFAT}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                vendorFAT: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                vendorFAT: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <TextField
                                    type='number'
                                    style={{ width: '95%' }}
                                    label={'Vendor SNF'}
                                    className='txtsize' variant="standard"
                                    value={updateId === "2" ? updateForm.vendorSNF : vehicleEntryForm.vendorSNF}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                vendorSNF: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                vendorSNF: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <TextField
                                    type='number'
                                    style={{ width: '95%' }}
                                    label={'Vendor Acidity'}
                                    className='txtsize' variant="standard"
                                    value={updateId === "2" ? updateForm.vendorAcidity : vehicleEntryForm.vendorAcidity}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                vendorAcidity: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                vendorAcidity: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <TextField
                                    type='number'
                                    style={{ width: '95%' }}
                                    label={'Challan No'}
                                    className='txtsize' variant="standard"
                                    value={updateId === "2" ? updateForm.challanNo : vehicleEntryForm.challanNo}
                                    onChange={(e) => {
                                        if(updateId !== "2"){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                challanNo: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                challanNo: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-12 col-md-3 col-sm-12 mt-1'>
                                <TextField style={{ width: "95%" }}
                                    id="standard-basic" label="Vehicle Number" variant="standard"
                                    value={updateId === '2' ? updateForm.vehicleNumber : vehicleEntryForm.vehicleNumber}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                vehicleNumber: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                vehicleNumber: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-1'>
                                <TextField style={{ width: "95%" }}
                                    id="standard-basic" label="Driver Name" variant="standard"
                                    value={updateId === "2" ? updateForm.driverName : vehicleEntryForm.driverName}
                                    onChange={(e) => {
                                        if(updateId !== '2'){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                driverName: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                driverName: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                            <div className='col-12 col-md-3 col-sm-12 mt-1'>
                                <TextField style={{ width: "95%" }}
                                    id="standard-basic" label="Driver Mobile No." variant="standard"
                                    value={updateId === "2" ? updateForm.driverMobNo : vehicleEntryForm.driverMobNo}
                                    onChange={(e) => {
                                        if(updateId !== "2"){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                driverMobNo: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                driverMobNo: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-md-3 col-sm-12 mt-3'>
                                <label>Remark</label>
                                <textarea cols="40" rows="4"
                                    value={updateId === "2" ? updateForm.remark : vehicleEntryForm.remark}
                                    onChange={(e) => {
                                        if(updateId !== "2"){
                                            setVehicleEntryForm({
                                                ...vehicleEntryForm,
                                                remark: e.target.value
                                            })
                                        }else{
                                            setUpdateForm({
                                                ...updateForm,
                                                remark: e.target.value
                                            })
                                        }
                                        
                                    }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className='mt-5'>
                        <div className='row'>
                            <div className='col-12 col-md-4 col-sm-12'>
                                <button onClick={() => setShowTableData(!showTableData)} className='btn btn-primary'>Show Table</button>
                            </div>

                            <div className='col-12 col-md-4 col-sm-12'>
                                <label>From Date</label>
                                <input type="date" className='mx-3' onChange={(e) => { setDates({ ...dates, Fromdate: e.target.value }) }} />
                            </div>

                            <div className='col-12 col-md-4 col-sm-12'>
                                <label>To Date</label>
                                <input type="date" className='mx-3' onChange={(e) => { setDates({ ...dates, Todate: e.target.value }) }} />
                            </div>
                        </div>

                        {
                            showTableData ?
                                <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
                                    <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.08rem" }}>
                                        <thead>
                                            <tr>
                                                <th scope='col'>ID</th>
                                                <th scope='col'>Date</th>
                                                <th scope='col'>Vendor Name</th>
                                                <th scope='col'>Vendor Date</th>
                                                <th scope='col'>Milk Type</th>
                                                <th scope='col'>Collection</th>
                                                <th scope='col'>Net Weight</th>
                                                <th scope='col'>Gross Weight</th>
                                                <th scope='col'>Vendor FAT</th>
                                                <th scope='col'>Vendor SNF</th>
                                                <th scope='col'>Vendor Acidity</th>
                                                <th scope='col'>Challan No</th>
                                                <th scope='col'>Vehicle No</th>
                                                <th scope='col'>Driver Name</th>
                                                <th scope='col'>Driver No</th>
                                                <th scope='col'>Remark</th>
                                                <th scope='col'>Delete Entry</th>
                                                <th scope='col'>Update Entry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                vehicleEntryData.filter((ele) => {
                                                    if (dates.Fromdate === '' || dates.Todate === '') {
                                                        return ele
                                                    } else if (ele.date >= dates.Fromdate && ele.date <= dates.Todate) {
                                                        return ele
                                                    }
                                                }).map((item, i) => {
                                                    return (<tr>
                                                        <th scope='row'>{item.id}</th>
                                                        <td>{item.date}</td>
                                                        <td>{item.vendorName}</td>
                                                        <td>{item.vendorDate}</td>
                                                        <td>{item.milkType}</td>
                                                        <td>{item.collection}</td>
                                                        <td>{item.netWeight}</td>
                                                        <td>{item.grossWeight}</td>
                                                        <td>{item.vendorFAT}</td>
                                                        <td>{item.vendorSNF}</td>
                                                        <td>{item.vendorAcidity}</td>
                                                        <td>{item.challanNo}</td>
                                                        <td>{item.vehicleNumber}</td>
                                                        <td>{item.driverName}</td>
                                                        <td>{item.driverMobNo}</td>
                                                        <td>{item.remark}</td>
                                                        <td className='text-center mt-2'><DeleteIcon onClick={() => delet(item.id)} style={{ color: 'red', fontSize: '1rem', cursor: 'pointer' }} /></td>
                                                        <td className='text-center mt-2'><EditIcon onClick={()=>editForm(item, "2")} style={{ color: 'green', fontSize: '1rem', cursor: 'pointer' }} /></td>
                                                    </tr>

                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div> : null
                        }

                    </div>

                    <div className='mt-3'>
                        <div className='row'>
                            { 
                                updateId === "2" ? 
                                <div className='col-2'>
                                    <button onClick={() => saveUpdate()} className='btn btn-primary'>Update</button>
                                </div>:
                                <div className='col-2'>
                                    <button onClick={() => saveData()} className='btn btn-primary'>Save</button>
                                </div>
                            }
                           
                            
                            <div className='col-2'>
                                <button className='btn btn-primary'>Print</button>
                            </div>
                            <div className='col-2'>
                                <button className='btn btn-primary'>Clear</button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default VehicleEntryCom