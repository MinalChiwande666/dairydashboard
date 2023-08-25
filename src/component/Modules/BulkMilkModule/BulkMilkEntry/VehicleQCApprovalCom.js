import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import "./BulkMilkEntry.css"
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

const VehicleQCApprovalCom = () => {
    const [showTableData, setShowTableData] = useState(false)
    const [loader, setLoader] = useState(false)
    const [delId, setDelId] = useState()
    const [openDailogDel, setOpenDailogDel] = useState(false)
    const [updateId, setUpdateId] = useState('')
    const [updateForm, setUpdateForm] = useState({})

    const [dates, setDates] = useState({
        Fromdate: '',
        Todate: ''
    })
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

    const [vehicleQCApproval, setVehicleQCApproval] = useState({
        venderName: '',
        vehicleDate: '',
        remark: '',
        date: '',
        vehicleNo: '',
        rateReduction: '',
        milkType: '',
    })

    const handleDelete = () => {
        let del = {
            id: delId
        }

        axios.post('http://103.38.50.113:8080/DairyApp/deleteVehicleQCApprovalById', del).then((delData) => {
            console.log(delData.data)
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
            await axios.get('http://103.38.50.113:8080/DairyApp/getAllVehicleQCApprovalData').then((data) => {
                console.log(data.data)
                if (data.data) {
                    setVehicleQCApproval(data.data)
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

    const delData = (id) => {
        setOpenDailogDel(true)
        setDelId(id)
    }

    const editForm = (data, typeId) => {
        setUpdateId(typeId)
        setUpdateForm(data)
    }

    useEffect(() => {
        getTableData()
        alert(updateId)
    }, [updateId])

    const saveData = () => {
        try {
            let newForm = {
                "venderName": vehicleQCApproval.venderName,
                "vehicleDate": vehicleQCApproval.vehicleDate,
                "remark": vehicleQCApproval.remark,
                "date": vehicleQCApproval.date,
                "vehicleNo": vehicleQCApproval.vehicleNo,
                "rateReduction": vehicleQCApproval.rateReduction,
                "milkType": vehicleQCApproval.milkType
            }

            axios.post('http://103.38.50.113:8080/DairyApp/saveVehicleQCApproval', newForm).then((newdata) => {
                alert(newdata.data.message)
                toast.success(`${newdata.data.message}`, {
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
            "venderName": String(updateForm.venderName),
            "vehicleDate": String(updateForm.vehicleDate),
            "remark": String(updateForm.remark),
            "date": String(updateForm.date),
            "vehicleNo": String(updateForm.vehicleNo),
            "rateReduction": String(updateForm.rateReduction),
            "milkType": String(updateForm.milkType)
        }
        axios.post('http://103.38.50.113:8080/DairyApp/saveVehicleQCApproval', updateform).then((data) => {
            console.log(data.data)
            getTableData()
        }).catch((e) => {
            console.log("Data not updated properly", e)
        })
    }

    

    

    

    





    return (
        <>{loader ?
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
                    {dailoge()}
                    <div className='row'>
                        <div className='col-12 col-md-4 col-sm-12 mt-1'>
                            <TextField style={{ width: "95%" }}
                                id="standard-basic" label="ID" variant="standard" disabled value='QCA/2/1' />
                        </div>
                        <div className='col-12 col-md-4 col-sm-12 mt-4'>
                            <label>Date</label>
                            <input type="date" className='mx-3' value={updateId === "2" ? updateForm.date : vehicleQCApproval.date}
                                onChange={(e) => {
                                    if (updateId !== "2") {
                                        setVehicleQCApproval({
                                            ...vehicleQCApproval,
                                            date: e.target.value
                                        })
                                    } else {
                                        setUpdateForm({
                                            ...updateForm,
                                            date: e.target.value
                                        })
                                    }
                                }} />

                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-12 col-md-4 col-sm-12 mt-1'>
                            <TextField style={{ width: "95%" }}
                                id="standard-basic" label="Vendor Name" variant="standard" value={updateId === "2" ? updateForm.venderName : vehicleQCApproval.venderName}
                                onChange={(e) => {
                                    if (updateId !== "2") {
                                        setVehicleQCApproval({
                                            ...vehicleQCApproval,
                                            venderName: e.target.value
                                        })
                                    } else {
                                        setUpdateForm({
                                            ...updateForm,
                                            venderName: e.target.value
                                        })
                                    }
                                }} />
                        </div>
                        <div className='col-12 col-md-4 col-sm-12 mt-1'>
                            <TextField style={{ width: "95%" }}
                                id="standard-basic" label="Vehicle No." variant="standard" value={updateId === "2" ? updateForm.vehicleNo : vehicleQCApproval.vehicleNo}
                                onChange={(e) => {
                                    if (updateId !== "2") {
                                        setVehicleQCApproval({
                                            ...vehicleQCApproval,
                                            vehicleNo: e.target.value
                                        })
                                    } else {
                                        setUpdateForm({
                                            ...updateForm,
                                            vehicleNo: e.target.value
                                        })
                                    }
                                }} />
                        </div>
                        <div className='col-12 col-md-4 col-sm-12 mt-1'>
                            <div>Milk Type</div>
                            <div>
                                <div className='dropdown'>
                                    <button
                                        style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                                        className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {updateId === "2" ? updateForm.milkType : (vehicleQCApproval.milkType === '' ? 'Select' : vehicleQCApproval.milkType)}
                                        <div className='dropdown-toggle'>
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu" style={{ cursor: "pointer", width: "80%" }}>
                                        {
                                            milktype.map((ele, i) => {
                                                return (
                                                    <>
                                                        <li
                                                            onClick={() => {
                                                                if (updateId !== "2") {
                                                                    setVehicleQCApproval({
                                                                        ...vehicleQCApproval,
                                                                        milkType: ele.name
                                                                    })
                                                                } else {
                                                                    console.log(ele.name)
                                                                    setUpdateForm({
                                                                        ...updateForm,
                                                                        milkType: ele.name
                                                                    })
                                                                }
                                                            }}
                                                            className='dropdown-item'>{ele.name}</li>
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-12 col-md-4 col-sm-12 mt-4'>
                            <label>Vehicle Date</label>
                            <input type="date" className='mx-3' value={updateId === "2" ? updateForm.vehicleDate : vehicleQCApproval.vehicleDate}
                                onChange={(e) => {
                                    if (updateId !== "2") {
                                        setVehicleQCApproval({
                                            ...vehicleQCApproval,
                                            vehicleDate: e.target.value
                                        })
                                    } else {
                                        setUpdateForm({
                                            ...updateForm,
                                            vehicleDate: e.target.value
                                        })
                                    }
                                }} />
                        </div>
                        <div className='col-12 col-md-4 col-sm-12 mt-1'>
                            <TextField
                                type='number'
                                style={{ width: '95%' }}
                                label={'Rate Reduction'}
                                className='txtsize' variant="standard"
                                value={updateId === "2" ? updateForm.rateReduction : vehicleQCApproval.rateReduction}
                                onChange={(e) => {
                                    if (updateId !== "2") {
                                        setVehicleQCApproval({
                                            ...vehicleQCApproval,
                                            rateReduction: e.target.value
                                        })
                                    } else {
                                        setUpdateForm({
                                            ...updateForm,
                                            rateReduction: e.target.value
                                        })
                                    }
                                }} />
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 col-md-4 col-sm-12'>
                            <div>
                                <label>Remark</label>
                            </div>
                            <textarea cols="50" rows="3"
                                value={updateId === "2" ? updateForm.remark : vehicleQCApproval.remark}
                                onChange={(e) => {
                                    if (updateId !== "2") {
                                        setVehicleQCApproval({
                                            ...vehicleQCApproval,
                                            remark: e.target.value
                                        })
                                    } else {
                                        setUpdateForm({
                                            ...updateForm,
                                            remark: e.target.value
                                        })
                                    }
                                }}></textarea>
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
                                <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
                                    <thead>
                                        <tr>
                                            <th scope='col'>ID</th>
                                            <th scope='col'>Date</th>
                                            <th scope='col'>Vender Name</th>
                                            <th scope='col'>Vehicle No.</th>
                                            <th scope='col'>Milk Type</th>
                                            <th scope='col'>Vehicle Date</th>
                                            <th scope='col'>Rate Reduction</th>
                                            <th scope='col'>Remark</th>
                                            <th scope='col'>Delete Entry</th>
                                            <th scope='col'>Update Entry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            vehicleQCApproval.filter((ele) => {
                                                if (dates.Fromdate === '' || dates.Todate === '') {
                                                    return ele
                                                } else if (ele.date >= dates.Fromdate && ele.date <= dates.Todate) {
                                                    return ele
                                                }
                                            }).map((item, i) => {
                                                return (
                                                    <tr>
                                                        <th scope='row'>{item.id}</th>
                                                        <td>{item.date}</td>
                                                        <td>{item.venderName}</td>
                                                        <td>{item.vehicleNo}</td>
                                                        <td>{item.milkType}</td>
                                                        <td>{item.vehicleDate}</td>
                                                        <td>{item.rateReduction}</td>
                                                        <td>{item.remark}</td>
                                                        <td className='text-center mt-2'><DeleteIcon onClick={() => delData(item.id)} style={{ color: 'red', fontSize: '1rem', cursor: 'pointer' }} /></td>
                                                        <td className='text-center mt-2'><EditIcon onClick={() => editForm(item, "2")} style={{ color: 'green', fontSize: '1rem', cursor: 'pointer' }} /></td>
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
                        <div className='col-2'>
                            {
                                updateId === "2" ?
                                    <div className='col-2'>
                                        <button onClick={() => saveUpdate()} className='btn btn-primary'>Update</button>
                                    </div> :
                                    <div className='col-2'>
                                        <button onClick={() => saveData()} className='btn btn-primary'>Save</button>
                                    </div>
                            }
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
        }
        </>
    )
}

export default VehicleQCApprovalCom