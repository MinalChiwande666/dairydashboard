import React, { useEffect, useRef } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import './chilling.css'
import { useReactToPrint } from 'react-to-print';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { DialogActions, DialogTitle, Button, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import CancelIcon from '@mui/icons-material/Cancel';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Chillingcom = () => {
    const [vendorcode, setvendorcode] = useState({
        id: null
    })
    const [togg1, setTogg1] = useState(false)
    const [togg2, setTogg2] = useState(false)
    const [togg3, setTogg3] = useState(false)
    const [togg4, setTogg4] = useState(false)
    const [togg5, setTogg5] = useState(false)
    const [togg6, setTogg6] = useState(false)
    const [vendorobj, setvendorobj] = useState()
    const outerTheme = useTheme()
    const componentref = useRef()
    const [opendailogdel, setopendailogdel] = useState(false)
    const [updateid, setupadteid] = useState('')
    const [items, setitem] = useState('')
    const [dates, setdates] = useState({
        fdate: '',
        tdate: ''
    })
    const [delid, setdelid] = useState()
    const [fatcla, setfatcal] = useState('')
    const [loader, setloader] = useState(false)
    const [showtable, setshowtable] = useState(false)
    const [slrcalc, setslrcalc] = useState('')
    const [snfcal, setsnfcal] = useState()

    const [chillingdata, setchillingdata] = useState([])
    const [updatecenterform, setupdatechilling] = useState({})
    const [chillingform, setchillingform] = useState({
        "inwordId": "",
        "date": "",
        "collectionType": "",
        "vendorName": "",
        "address": "",
        "mobileNo": "",
        "milkType": "",
        "itemName": "",
        "unit": "",
        "batch": "",
        "mbrt": "",
        "fat": "",
        "snf": "",
        "warehouse": "",
        "temp": "",
        "rate": "",
        "overCharge": "",
        "acidity": "",
        "weight": "",
        "inKg": "",
        "total": "",
        "remark": "",
        "supplierWeight": "",//set field
        "vendorInvoiceDate": "",//set field
        "vehicalName": "",
        "vehicalNo": "",
        "driverName": "",
        "driverNo": "",
        "dremark": "",
        "clr": "",
        "countingfactor": "",
        "vendorcode": "",
        "route": "",
        "numberOfScan": "",//setfield
        "drivercommission": "",
        "fDate": null,
        "tDate": null,
        "entryBy": ""
    })
    const countingfactor = [
        {
            id: 1,
            name: '0.14'
        },
        {
            id: 2,
            name: '0.29'
        },
        {
            id: 3,
            name: '0.66'
        }
    ]
    const itemname = [
        {
            id: 1,
            name: 'cow milk'
        },
        {
            id: 2,
            name: 'Paneer 2kg'
        },
        {
            id: 3,
            name: 'Vanilla 100gm'
        },
        {
            id: 4,
            name: 'Butter Scotch 50gm'
        }
    ]
    const warehouse = [
        {
            id: 1,
            name: 'warehouse1'
        },
        {
            id: 2,
            name: 'warehouse2'
        }
    ]
    const collection = [
        {
            id: 1,
            name: 'Morning'
        },
        {
            id: 2,
            name: 'Evening'
        }
    ]
    const milktype = [
        {
            id: 1,
            name: 'Cow'
        },
        {
            id: 2,
            name: 'Buffalo'
        }
    ]
    const vendorname = [
        {
            id: 1,
            name: 'Shruti'
        },
        {
            id: 2,
            name: 'Aishwariya'
        },
        {
            id: 3,
            name: 'yashasvi'
        },
        {
            id: 4,
            name: 'minal'
        },
        {
            id: 4,
            name: 'niraj'
        },
        {
            id: 5,
            name: 'ishita'
        }

    ]


    const handledelete = () => {
        let del = {
            id: delid
        }
        axios.post('http://103.38.50.113:8080/DairyApp/deletePurchesInvoiceById', del).then((data) => {
            console.log(data.data)
            if (data.data === "Data Deleted Successfully..!!") {
                setopendailogdel(false)
                getalldata()
            }
        }).catch((e) => {
            console.log("error => ", e)
        })
    }
    const handleClose = () => {
        setopendailogdel(false)
    }
    const dailoge = () => {
        return (
            <>
                <Dialog

                    open={opendailogdel}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogActions style={{ height: '2rem' }}>
                        <IconButton onClick={handleClose}>
                            <CancelIcon style={{ color: 'blue' }} />
                        </IconButton>
                    </DialogActions>
                    <div style={{ background: 'white' }}>

                        <DialogTitle>
                            Are You sure you want to delete?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handledelete}>Yes</Button>
                            <Button onClick={handleClose}>No</Button>
                        </DialogActions>
                    </div>
                </Dialog>
            </>
        )
    }

    const getalldata = () => {
        try {
            setloader(true)
            axios.get('http://103.38.50.113:8080/DairyApp/findAllPurchesInvoice').then((data) => {
                console.log(data.data)
                if (data.data) {
                    setchillingdata(data.data)
                    setloader(false)
                }
                else {
                    setloader(false)
                }
            }).catch((e) => {
                console.log("error => ", e)
            })
        } catch (e) {
            console.log("error => ", e)
        }

    }


    const delet = (id) => {
        setopendailogdel(true)
        setdelid(id)
    }

    const editform = (data, typeId) => {
        setupadteid(typeId)
        setupdatechilling(data)
        localStorage.setItem('warehouse', JSON.stringify(data))
    }

    useEffect(() => {
        getalldata()

        let calci = parseInt(slrcalc) / 4 + 0.2 * parseInt(fatcla) + 0.66

        if (slrcalc && fatcla) {

            setsnfcal(calci)
        }
        console.log(calci)
        console.log("update form values =>", updatecenterform, updateid)

    }, [fatcla, slrcalc])


    const save = () => {
        try {
            let newform = {
                "inwordId": String(chillingform.inwordId),
                "date": String(chillingform.date),
                "collectionType": String(chillingform.collectionType),
                "vendorName": String(chillingform.vendorName),
                "address": String(chillingform.address),
                "mobileNo": String(chillingform.mobileNo),
                "milkType": String(chillingform.milkType),
                "itemName": String(chillingform.itemName),
                "unit": String(chillingform.unit),
                "batch": String(chillingform.batch),
                "mbrt": String(chillingform.mbrt),
                "fat": String(chillingform.fat),
                "snf": String(chillingform.snf),
                "warehouse": String(chillingform.warehouse),
                "temp": String(chillingform.temp),
                "rate": String(chillingform.rate),
                "overCharge": String(chillingform.overCharge),
                "acidity": String(chillingform.acidity),
                "weight": String(chillingform.weight),
                "inKg": "",
                "total": "",
                "remark": String(chillingform.remark),
                "supplierWeight": String(chillingform.supplierWeight),
                "vendorInvoiceDate": String(chillingform.vendorInvoiceDate),
                "vehicalName": String(chillingform.vehicalName),
                "vehicalNo": String(chillingform.vehicalNo),
                "driverName": String(chillingform.driverName),
                "driverNo": String(chillingform.driverNo),
                "dremark": String(chillingform.dremark),
                "clr": String(chillingform.clr),
                "countingfactor": String(chillingform.countingfactor),
                "vendorcode": "",
                "route": "",
                "numberOfScan": "",
                "drivercommission": "",
                "fDate": null,
                "tDate": null,
                "entryBy": ""
            }
            console.log("new form => ", newform)
            axios.post('http://103.38.50.113:8080/DairyApp/savePurchesInvoice', newform).then((data) => {
            alert(data.data.message)
                let toatsuccessmsg = toast.success(`${data.data.message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                console.log(data.data)
                if (toatsuccessmsg) {
                    setTimeout(() => {
                        getalldata()
                    }, 5000)

                }

            }).catch((e) => {
                console.log("error => ", e)
            })
        } catch (e) {
            console.log("Error => ", e)
        }
    }



    const saveupdate = () => {
        let newform2 = {
            "id": String(updatecenterform.id),
            "inwordId": String(updatecenterform.inwordId),
            "date": String(updatecenterform.date),
            "collectionType": String(updatecenterform.collectionType),
            "vendorName": String(updatecenterform.vendorName),
            "address": String(updatecenterform.address),
            "mobileNo": String(updatecenterform.mobileNo),
            "milkType": String(updatecenterform.milktype),
            "itemName": String(updatecenterform.itemName),
            "unit": String(updatecenterform.unit),
            "batch": String(updatecenterform.batch),
            "mbrt": String(updatecenterform.mbrt),
            "fat": String(updatecenterform.fat),
            "snf": "",
            "warehouse": String(updatecenterform.warehouse),
            "temp": String(updatecenterform.temp),
            "rate": String(updatecenterform.rate),
            "overCharge": String(updatecenterform.overCharge),
            "acidity": String(updatecenterform.acidity),
            "weight": String(updatecenterform.weight),
            "inKg": "",
            "total": "",
            "remark": String(updatecenterform.remark),
            "supplierWeight": String(updatecenterform.supplierWeight),
            "vendorInvoiceDate": String(updatecenterform.vendorInvoiceDate),
            "vehicalName": String(updatecenterform.vehicalName),
            "vehicalNo": String(updatecenterform.vehicalNo),
            "driverName": String(updatecenterform.driverName),
            "driverNo": String(updatecenterform.driverNo),
            "dremark": String(updatecenterform.dremark),
            "clr": String(updatecenterform.clr),
            "countingfactor": String(updatecenterform.countingfactor),
            "vendorcode": "ihgiu",
            "route": "gf",
            "numberOfScan": "uih",
            "drivercommission": String(updatecenterform.drivercommission),
            "fDate": null,
            "tDate": null,
            "entryBy": "prny"
        }


        axios.post('http://103.38.50.113:8080/DairyApp/savePurchesInvoice', newform2).then((data) => {
            let toatsuccessmsg = toast.success('Data Updated Succefully!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            console.log(data.data)
            if (toatsuccessmsg) {
                setTimeout(() => {
                    getalldata()
                }, 5000)

            }

        }).catch((e) => {
            console.log("Error => ", e)
        })
    }

    const customTheme = (outerTheme) =>
        createTheme({
            palette: {
                mode: outerTheme.palette.mode,
            },
            components: {
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            '--TextField-brandBorderColor': '#E0E3E7',
                            '--TextField-brandBorderHoverColor': '#B2BAC2',
                            '--TextField-brandBorderFocusedColor': '#6F7E8C',
                            '& label.Mui-focused': {
                                color: 'var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        notchedOutline: {
                            borderColor: 'var(--TextField-brandBorderColor)',
                        },
                        root: {
                            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: 'var(--TextField-brandBorderHoverColor)',
                            },
                            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: 'var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiFilledInput: {
                    styleOverrides: {
                        root: {
                            '&:before, &:after': {
                                borderBottom: '2px solid var(--TextField-brandBorderColor)',
                            },
                            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                            },
                            '&.Mui-focused:after': {
                                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiInput: {
                    styleOverrides: {
                        root: {
                            '&:before': {
                                borderBottom: '2px solid var(--TextField-brandBorderColor)',
                            },
                            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                            },

                            '&.Mui-focused:after': {
                                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
            },
        });

    const print = async () => {
        const resp = await fetch('http://103.38.50.113:8080/DairyApp/printChillingCenter')
        console.log(resp)
        if (resp.redirected === false) {
            window.location.href = resp.url
        } else {
            console.log("request was not redirected")
        }
    }
    const clearfields = () => {
        if (updateid !== "2") {
            setchillingform({
                "inwordId": "",
                "date": "",
                "collectionType": "",
                "vendorName": "",
                "address": "",
                "mobileNo": "",
                "milkType": "",
                "itemName": "",
                "unit": "",
                "batch": "",
                "mbrt": "",
                "fat": "",
                "snf": "",
                "warehouse": "",
                "temp": "",
                "rate": "",
                "overCharge": "",
                "acidity": "",
                "weight": "",
                "inKg": "",
                "total": "",
                "remark": "",
                "supplierWeight": "",//set field
                "vendorInvoiceDate": "",//set field
                "vehicalName": "",
                "vehicalNo": "",
                "driverName": "",
                "driverNo": "",
                "dremark": "",
                "clr": "",
                "countingfactor": "",
                "vendorcode": "",
                "route": "",
                "numberOfScan": "",//setfield
                "drivercommission": "",
                "fDate": null,
                "tDate": null,
                "entryBy": ""
            })
        } else {
            setupdatechilling({
                "inwordId": "",
                "date": "",
                "collectionType": "",
                "vendorName": "",
                "address": "",
                "mobileNo": "",
                "milkType": "",
                "itemName": "",
                "unit": "",
                "batch": "",
                "mbrt": "",
                "fat": "",
                "snf": "",
                "warehouse": "",
                "temp": "",
                "rate": "",
                "overCharge": "",
                "acidity": "",
                "weight": "",
                "inKg": "",
                "total": "",
                "remark": "",
                "supplierWeight": "",//set field
                "vendorInvoiceDate": "",//set field
                "vehicalName": "",
                "vehicalNo": "",
                "driverName": "",
                "driverNo": "",
                "dremark": "",
                "clr": "",
                "countingfactor": "",
                "vendorcode": "",
                "route": "",
                "numberOfScan": "",//setfield
                "drivercommission": "",
                "fDate": null,
                "tDate": null,
                "entryBy": ""
            })
        }
    }
    const obj = () => {
        console.log(vendorcode)
        try {
            fetch('http://103.38.50.113:8080/DairyApp/findVendorMasterById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vendorcode)
            }).then((data) => {
                return data.json()
            }).then((resp) => {
                console.log(resp.data)
                setvendorobj(resp.data)
            })
        } catch (e) {
            console.log(e, 'Error')
        }
    }
    useEffect(() => {
        obj()
        console.log(vendorobj, "hello")

    }, [vendorcode])

    return (
        <>

            {loader ? <div className="loader-container">
                <div className="spinner"></div>
            </div> :
                <div className='container-fluid'>
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

                    <div className='container mt-4 chillingCenterCont' style={{ height: "95vh" }}>
                        {dailoge()}
                        <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Chilling Center</h3></div>
                        <div className='row mt-4'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        contentEditable={false}
                                        value={updateid === "2" ? updatecenterform.inwordId : chillingform.inwordId}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform(
                                                    {
                                                        ...chillingform,
                                                        inwordId: e.target.value
                                                    }
                                                )
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    inwordId: e.target.value
                                                })
                                            }
                                        }}
                                        style={{ pointerEvents: updateid === "2" ? 'none' : 'auto' }}
                                        label="Invoice Id" variant="standard" />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        onChange={(e) => {
                                            setchillingform({
                                                ...chillingform,
                                            })
                                        }}
                                        label='Inward No'
                                        variant="standard"
                                    />
                                </Box>

                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div className='d-flex flex-column'>
                                    <label style={{ fontSize: "14px" }}>Inward Date</label>
                                    <TextField
                                        style={{ width: '95ch', marginBottom: "5px" }}
                                        value={updateid === "2" ? updatecenterform.date : chillingdata.date}
                                        className='txtsize' variant="standard" type="date"
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    date: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    date: e.target.value
                                                })
                                            }
                                        }}
                                    />
                                </div>
                                {/* <div>
                                    <input
                                        value={updateid === "2" ? updatecenterform.date : chillingdata.date}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    date: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    date: e.target.value
                                                })
                                            }

                                        }}
                                        style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                        type='date' />
                                </div> */}
                            </div>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Collection Type"
                                        value={updateid === "2" ? updatecenterform.collectionType :
                                            (chillingform.collectionType === '' ? 'Select' : chillingform.collectionType)}
                                        sx={{ width: "25ch" }}
                                    />

                                    {
                                        togg1 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        collection.map((item) => (
                                                            <li style={{ listStyle: 'none' }}
                                                                onClick={() => {
                                                                    if (updateid !== "2") {
                                                                        setchillingform({
                                                                            ...chillingform,
                                                                            collectionType: item.name
                                                                        })
                                                                        setTogg1(false)
                                                                    } else {
                                                                        setupdatechilling({
                                                                            ...updatecenterform,
                                                                            collectionType: item.name
                                                                        })
                                                                        setTogg1(false)
                                                                    }
                                                                }
                                                                }
                                                            >{item.name}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg1(!togg1)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                                {/* <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                            className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateid === "2" ? updatecenterform.collectionType :
                                                (chillingform.collectionType === '' ? 'Select' : chillingform.collectionType)}
                                            <div className='dropdown-toggle'>
                                            </div>
                                        </button>
                                        <ul className="dropdown-menu">
                                            {
                                                collection.map((item, i) => (
                                                    <>
                                                        <li
                                                            onClick={() => {
                                                                if (updateid !== "2") {
                                                                    setchillingform({
                                                                        ...chillingform,
                                                                        collectionType: item.name
                                                                    })
                                                                } else {
                                                                    setupdatechilling({
                                                                        ...updatecenterform,
                                                                        collectionType: item.name
                                                                    })
                                                                }
                                                            }
                                                            }
                                                            className='dropdown-item'>{item.name}</li>
                                                    </>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            setvendorcode({
                                                id: e.target.value
                                            })
                                        }}
                                        label='Vendor Code' variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div className='d-flex flex-column'>
                                    <label style={{ fontSize: "14px" }}>Vendor Date</label>
                                    <TextField
                                        style={{ width: '30ch', marginBottom: "5px" }}
                                        value={chillingform?.vendorInvoiceDate}
                                        variant="standard" type="date"
                                        onChange={(e) => {
                                            setchillingform({
                                                ...chillingform,
                                                vendorInvoiceDate: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                            </div>


                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Vendor Name"
                                        value={updateid === "2" ? updatecenterform.vendorName : (chillingform.vendorName === '' ? 'Select' : chillingform.vendorName)}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg2 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    <li style={{ listStyle: 'none' }}
                                                        onClick={() => {
                                                            if (!vendorobj.vendorName) {
                                                                setchillingform({
                                                                    ...chillingform,
                                                                    vendorName: ""
                                                                })
                                                                setTogg2(false)
                                                            } else{
                                                                setchillingform({
                                                                    ...chillingform,
                                                                    vendorName: vendorobj.vendorName
                                                                })
                                                                setTogg2(false)
                                                            }
                                                        }}
                                                    >{!vendorobj ? "" : vendorobj.vendorName}</li>
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg2(!togg2)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                                {/* <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '100%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                            className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateid === "2" ? updatecenterform.vendorName : (chillingform.vendorName === '' ? 'Select' : chillingform.vendorName)}
                                            <div className='dropdown-toggle'>

                                            </div>
                                        </button>
                                        <ul className="dropdown-menu">

                                            <li
                                                onClick={() => {
                                                    if (!vendorobj.vendorName) {
                                                        setchillingform({
                                                            ...chillingform,
                                                            vendorName: ""
                                                        })
                                                    } else {
                                                        setchillingform({
                                                            ...chillingform,
                                                            vendorName: vendorobj.vendorName
                                                        })
                                                    }
                                                }}
                                                className='dropdown-item'>{!vendorobj ? "" : vendorobj.vendorName}</li>

                                        </ul>
                                    </div>
                                </div> */}
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.address : chillingform.address}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setloader(false)
                                                setchillingform({
                                                    ...chillingform,
                                                    address: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    address: e.target.value
                                                })
                                            }
                                        }}
                                        label='Address'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.mobileNo : chillingform.mobileNo}
                                        onChange={(e) => {
                                            if (e.target.value) {
                                                setloader(false)
                                            }
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    mobileNo: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    mobileNo: e.target.value
                                                })
                                            }

                                        }}
                                        type='number'
                                        label='Mobile No'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Milk Type"
                                        value={updateid === "2" ? updatecenterform.milkType : (chillingform.milkType === '' ? 'Select' : chillingform.milkType)}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg3 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        milktype.map((item) => (
                                                            <li style={{ listStyle: 'none' }}
                                                                onClick={() => {
                                                                    if (updateid !== "2") {
                                                                        setchillingform({
                                                                            ...chillingform,
                                                                            milkType: item.name
                                                                        })
                                                                        setTogg3(false)
                                                                    } else {
                                                                        setupdatechilling({
                                                                            ...updatecenterform,
                                                                            milkType: item.name
                                                                        })
                                                                        setTogg3(false)
                                                                    }
                                                                }}
                                                            >{item.name}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg3(!togg3)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                                {/* <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '100%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                            className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateid === "2" ? updatecenterform.milkType : (chillingform.milkType === '' ? 'Select' : chillingform.milkType)}
                                            <div className='dropdown-toggle'>

                                            </div>
                                        </button>
                                        <ul className="dropdown-menu">
                                            {
                                                milktype.map((item, i) => (
                                                    <>
                                                        <li
                                                            onClick={() => {
                                                                if (updateid !== "2") {
                                                                    setchillingform({
                                                                        ...chillingform,
                                                                        milkType: item.name
                                                                    })
                                                                } else {
                                                                    setupdatechilling({
                                                                        ...updatecenterform,
                                                                        milkType: item.name
                                                                    })
                                                                }
                                                            }}
                                                            className='dropdown-item'>{item.name}</li>
                                                    </>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Item Name"
                                        value={updateid === "2" ? updatecenterform.itemName : (chillingform.itemName === '' ? 'Select' : chillingform.itemName)}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg4 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        itemname.map((item) => (
                                                            <li style={{ listStyle: 'none' }}
                                                                onClick={() => {
                                                                    if (updateid !== "2") {
                                                                        setchillingform({
                                                                            ...chillingform,
                                                                            itemName: item.name
                                                                        })
                                                                    } else {
                                                                        setupdatechilling({
                                                                            ...updatecenterform,
                                                                            itemName: item.name
                                                                        })
                                                                    }

                                                                }}
                                                            >{item.name}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg4(!togg4)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                                {/* <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '100%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                            className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateid === "2" ? updatecenterform.itemName : (chillingform.itemName === '' ? 'Select' : chillingform.itemName)}
                                            <div className='dropdown-toggle'>

                                            </div>
                                        </button>
                                        <ul className="dropdown-menu">
                                            {
                                                itemname.map((item, i) => (
                                                    <>
                                                        <li
                                                            onClick={() => {
                                                                if (updateid !== "2") {
                                                                    setchillingform({
                                                                        ...chillingform,
                                                                        itemName: item.name
                                                                    })
                                                                } else {
                                                                    setupdatechilling({
                                                                        ...updatecenterform,
                                                                        itemName: item.name
                                                                    })
                                                                }

                                                            }}
                                                            className='dropdown-item'>{item.name}</li>
                                                    </>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div> */}
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">

                                    <TextField
                                        value={updateid === "2" ? updatecenterform.unit : chillingform.unit}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    unit: e.target.value
                                                })

                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    unit: e.target.value
                                                })
                                            }
                                        }}
                                        label='Unit'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.batch : chillingform.batch}
                                        onChange={(e) => {
                                            if (updateid !== "2") {

                                                setchillingform({
                                                    ...chillingform,
                                                    batch: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    batch: e.target.value
                                                })
                                            }
                                        }}

                                        label='Batch'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.mbrt : chillingform.mbrt}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    mbrt: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    mbrt: e.target.value
                                                })
                                            }

                                        }}
                                        label='MBRT'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.fat : chillingform.fat}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    fat: e.target.value
                                                })
                                            }
                                            else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    fat: e.target.value
                                                })
                                            }
                                        }}

                                        label='FAT'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.clr : chillingform.clr}
                                        onChange={(e) => {
                                            if (e.target.value) {
                                                setloader(false)
                                            }
                                            if (updateid !== "2") {

                                                setchillingform({
                                                    ...chillingform,
                                                    clr: e.target.value
                                                })
                                            }
                                            else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    clr: e.target.value
                                                })
                                            }
                                        }}
                                        label='CLR'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Counting Factor"
                                        value={chillingform.countingfactor === '' ? 'Select' : chillingform.countingfactor}
                                        sx={{ width: "25ch" }}
                                    />

                                    {
                                        togg5 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        countingfactor.map((item) => (
                                                            <li style={{ listStyle: 'none' }}
                                                                onClick={() => {
                                                                    setchillingform({
                                                                        ...chillingform,
                                                                        countingfactor: item.name
                                                                    })
                                                                    setTogg5(false)
                                                                }}
                                                            >{item.name}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg5(!togg5)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                                {/* <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '100%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                            className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {chillingform.countingfactor === '' ? 'Select' : chillingform.countingfactor}
                                            <div className='dropdown-toggle'>

                                            </div>
                                        </button>
                                        <ul className="dropdown-menu">
                                            {
                                                countingfactor.map((item, i) => (
                                                    <>
                                                        <li
                                                            onClick={() => {
                                                                setchillingform({
                                                                    ...chillingform,
                                                                    countingfactor: item.name
                                                                })
                                                            }}

                                                            className='dropdown-item'>{item.name}</li>
                                                    </>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        contentEditable={false}
                                        value={updateid === "2" ? (updatecenterform.snf ? parseInt(updatecenterform.clr) / 4 + 0.2 * parseInt(updatecenterform.fat) + 0.66 : updatecenterform.snf) : Math.round(parseInt(chillingform.clr) / 4 + 0.2 * parseInt(chillingform.fat) + parseFloat(chillingform.countingfactor)).toString().slice(0, 4)}
                                        onChange={(e) => {
                                            console.log("SNF =>", e.target.value)
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    snf: e.target.value
                                                })
                                            } else {
                                                setupdatechilling(
                                                    {
                                                        ...updatecenterform,
                                                        snf: e.target.value
                                                    }
                                                )
                                            }

                                        }}
                                        type='number'
                                        label='SNF'
                                        variant="standard"
                                    />
                                </Box>


                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Warehouse"
                                        value={updateid === "2" ? updatecenterform.warehouse : (chillingform.warehouse === '' ? 'Select' : chillingform.warehouse)}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg6 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        warehouse.map((item) => (
                                                            <li style={{ listStyle: 'none' }}
                                                                onClick={() => {
                                                                    if (updateid !== "2") {
                                                                        setchillingform({
                                                                            ...chillingform,
                                                                            warehouse: item.name
                                                                        })
                                                                        setTogg6(false)
                                                                    } else {
                                                                        setupdatechilling({
                                                                            ...updatecenterform,
                                                                            warehouse: item.name
                                                                        })
                                                                        setTogg6(false)
                                                                    }
                                                                }
                                                                }
                                                            >{item.name}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }

                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg6(!togg6)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                                {/* <div>
                                    <div className="dropdown">
                                        <button
                                            style={{ width: '100%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                            className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {updateid === "2" ? updatecenterform.warehouse : (chillingform.warehouse === '' ? 'Select' : chillingform.warehouse)}
                                            <div className='dropdown-toggle'>

                                            </div>
                                        </button>
                                        <ul className="dropdown-menu">
                                            {
                                                warehouse.map((item, i) => (
                                                    <>
                                                        <li
                                                            onClick={() => {
                                                                if (updateid !== "2") {
                                                                    setchillingform({
                                                                        ...chillingform,
                                                                        warehouse: item.name
                                                                    })
                                                                } else {
                                                                    setupdatechilling({
                                                                        ...updatecenterform,
                                                                        warehouse: item.name
                                                                    })
                                                                }
                                                            }
                                                            }
                                                            className='dropdown-item'>{item.name}</li>
                                                    </>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div> */}
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.temp : chillingform.temp}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    temp: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    temp: e.target.value
                                                })
                                            }

                                        }}

                                        label='Temp'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>


                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.rate : chillingform.rate}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    rate: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    rate: e.target.value
                                                })
                                            }

                                        }}
                                        label='Rate'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.transportRate : chillingform.transportRate}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    transportRate: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    transportRate: e.target.value
                                                })
                                            }

                                        }}
                                        label='Commission Rate'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.overCharge : chillingform.overCharge}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    overCharge: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    overCharge: e.target.value
                                                })
                                            }

                                        }}
                                        label='Over Charge'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.acidity : chillingform.acidity}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    acidity: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    acidity: e.target.value
                                                })
                                            }

                                        }}
                                        label='Acidity'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.weight : chillingform.weight}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    weight: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    weight: e.target.value
                                                })
                                            }

                                        }}
                                        label='Weight'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? (updatecenterform.inKg ? parseInt(updatecenterform.weight) * 1.03 : '') : parseFloat(chillingform.weight) * 1.03}
                                        type='number'

                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    inKg: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    inKg: e.target.value
                                                })
                                            }

                                        }}
                                        label='In Kg'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? (updatecenterform.total ? (parseInt(updatecenterform.rate) + parseInt(updatecenterform.transportRate) + parseInt(updatecenterform.overCharge)) * (parseInt(updatecenterform.weight)) : "") : (parseInt(chillingform.rate) + parseInt(chillingform.transportRate) + parseInt(chillingform.overCharge)) * (parseInt(chillingform.weight))}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    total: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    total: e.target.value
                                                })
                                            }

                                        }}
                                        type='number'
                                        label='Total'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.remark : chillingform.remark}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    remark: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    remark: e.target.value
                                                })
                                            }

                                        }}
                                        label='Remarks'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>


                    {/* <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem', marginTop: '3rem' }}>
                        <div className='row'>
                            <div className='col-12 col-md-3 col-sm-12'>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField
                                        type='number'
                                        value={updateid === "2" ? updatecenterform.supplierWeight : chillingform.supplierWeight}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    supplierWeight: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    supplierWeight: e.target.value
                                                })
                                            }

                                        }}
                                        style={{ width: '95%' }}
                                        label={'Supplier Weight'}
                                        className='txtsize' variant="standard"
                                    />
                                </ThemeProvider>

                            </div>
                            <div className='col-12 col-md-3 col-sm-12'>
                                <div style={{ fontSize: '0.9rem' }}>
                                    Vendor Invoice Date
                                </div>
                                <input style={{ width: '95%' }}
                                    value={updateid === "2" ? updatecenterform.vendorInvoiceDate : chillingform.vendorInvoiceDate}
                                    onChange={(e) => {
                                        if (updateid !== "2") {
                                            setchillingform({
                                                ...chillingform,
                                                vendorInvoiceDate: e.target.value
                                            })
                                        } else {
                                            setupdatechilling({
                                                ...updatecenterform,
                                                vendorInvoiceDate: e.target.value
                                            })
                                        }

                                    }}
                                    type='date' />
                              

                            </div>
                            <div className='col-12 col-md-3 col-sm-12'>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.sFat : chillingform.sFat}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    sFat: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    sFat: e.target.value
                                                })
                                            }

                                        }}
                                        style={{ width: '95%' }}
                                        label={'FAT'}
                                        className='txtsize' variant="standard"
                                    />
                                </ThemeProvider>

                            </div>
                            <div className='col-12 col-md-3 col-sm-12'>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.sSnf : chillingform.sSnf}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    sSnf: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    sSnf: e.target.value
                                                })
                                            }

                                        }}
                                        style={{ width: '95%' }}
                                        label={'SNF'}
                                        className='txtsize' variant="standard"
                                    />
                                </ThemeProvider>

                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.sAcidity : chillingform.sAcidity}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    sAcidity: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    sAcidity: e.target.value
                                                })
                                            }

                                        }}
                                        style={{ width: '95%' }}
                                        label={'Acidity'}
                                        className='txtsize' variant="standard"
                                    />
                                </ThemeProvider>

                            </div>
                            <div className='col-12 col-md-3 mt-1 col-sm-12'>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.sTemp : chillingform.sTemp}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    sTemp: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    sTemp: e.target.value
                                                })
                                            }

                                        }}
                                        style={{ width: '95%' }}
                                        label={'temp'}
                                        className='txtsize' variant="standard"
                                    />
                                </ThemeProvider>

                            </div>
                            <div className='col-12 col-md-3 col-sm-12'>

                            </div>
                            <div className='col-12 col-md-3 col-sm-12'>

                            </div>
                        </div>
                    </div> */}

                    {/* third section */}
                    <div className='container mt-4 chillingCenterCont' style={{ height: "30vh" }}>
                        <div className='row mt-4'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.supplierWeight : chillingform.supplierWeight}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    supplierWeight: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    supplierWeight: e.target.value
                                                })
                                            }

                                        }}
                                        label='Supplier Weight'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.route : chillingform.route}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    route: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    route: e.target.value
                                                })
                                            }

                                        }}
                                        label='Route'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.vehicalName : chillingform.vehicalName}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    vehicalName: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    vehicalName: e.target.value
                                                })
                                            }

                                        }}
                                        label='Vehicle Name'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.vehicalNo : chillingform.vehicalNo}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    vehicalNo: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    vehicalNo: e.target.value
                                                })
                                            }

                                        }}
                                        label='Vehicle No'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        label='Head Load'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.driverName : chillingform.driverName}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    driverName: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    driverName: e.target.value
                                                })
                                            }

                                        }}
                                        label='Driver Name'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.driverNo : chillingform.driverNo}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    driverNo: e.target.value
                                                })
                                            }
                                            else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    driverNo: e.target.value
                                                })
                                            }

                                        }}
                                        label='Driver No'
                                        variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={updateid === "2" ? updatecenterform.dremark : chillingform.dremark}
                                        onChange={(e) => {
                                            if (updateid !== "2") {
                                                setchillingform({
                                                    ...chillingform,
                                                    dremark: e.target.value
                                                })
                                            } else {
                                                setupdatechilling({
                                                    ...updatecenterform,
                                                    dremark: e.target.value
                                                })
                                            }

                                        }}
                                        label='Remark'
                                        variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>

                    </div>

                    <div className='container mt-4 chillingCenterCont' style={{ height: "13vh" }}>
                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div className='d-flex flex-column'>
                                    <label style={{ fontSize: "14px" }}>From Date</label>
                                    <TextField
                                        sx={{ width: "30ch" }}
                                        variant="standard" type="date"
                                        onChange={(e) => {
                                            setdates({
                                                ...dates,
                                                fdate: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div className='d-flex flex-column'>
                                    <label style={{ fontSize: "14px" }}>To Date</label>
                                    <TextField
                                        sx={{ width: "30ch" }}
                                        variant="standard" type="date"
                                        onChange={(e) => {
                                            setdates({
                                                ...dates,
                                                tdate: e.target.value

                                            })
                                        }}
                                    />
                                </div>
                                {/* <button onClick={()=>findbydate()}>find by date</button> */}
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <button onClick={() => setshowtable(!showtable)} className='btn btn-primary'>Show More</button>
                            </div>
                        </div>
                    </div>

                    {showtable ?
                        <div className='container mt-4 milklisttable mb-3 p-0'>
                            <table className="table table-stripped tableMilkList">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: "150px" }}>Id</th>
                                        <th scope="col" style={{ width: "150px" }}>inwordId</th>
                                        <th scope="col" style={{ width: "150px" }}>collectionType</th>
                                        <th scope="col" style={{ width: "150px" }}>vendorName</th>
                                        <th scope="col" style={{ width: "150px" }}>address</th>
                                        <th scope="col" style={{ width: "150px" }}>mobileNo</th>
                                        <th scope='col' style={{ width: "150px" }}>milkType</th>
                                        <th scope='col' style={{ width: "150px" }}>date</th>
                                        <th scope='col' style={{ width: "150px" }}>itemName</th>
                                        <th scope='col' style={{ width: "150px" }}>unit</th>
                                        <th scope='col' style={{ width: "150px" }}>batch</th>
                                        <th scope='col' style={{ width: "150px" }}>mbrt</th>
                                        <th scope='col' style={{ width: "150px" }}>fat</th>
                                        <th scope='col' style={{ width: "150px" }}>snf</th>
                                        <th scope='col' style={{ width: "150px" }}>warehouse</th>
                                        <th scope='col' style={{ width: "150px" }}>temp</th>
                                        <th scope='col' style={{ width: "150px" }}>rate</th>
                                        {/* <th scope='col' style={{ width: "150px" }}>transportRate</th> */}
                                        <th scope='col' style={{ width: "150px" }}>overCharge</th>
                                        <th scope='col' style={{ width: "150px" }}>acidity</th>
                                        <th scope='col' style={{ width: "150px" }}>weight</th>
                                        <th scope='col' style={{ width: "150px" }}>inKg</th>
                                        <th scope='col' style={{ width: "150px" }}>total</th>
                                        <th scope='col' style={{ width: "150px" }}>remark</th>
                                        <th scope='col' style={{ width: "150px" }}>supplierWeight</th>
                                        <th scope='col' style={{ width: "150px" }}>vendorInvoiceDate</th>
                                        <th scope='col' style={{ width: "150px" }}>vehicalName</th>
                                        <th scope='col' style={{ width: "150px" }}>vehicalNo</th>
                                        <th scope='col' style={{ width: "150px" }}>driverName</th>
                                        <th scope='col' style={{ width: "150px" }}>driverNo</th>
                                        <th scope='col' style={{ width: "150px" }}>dremark</th>
                                        <th scope='col' style={{ width: "150px" }}>Delete</th>
                                        <th scope='col' style={{ width: "150px" }}>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        chillingdata.filter((da) => {
                                            if (dates.fdate === '' || dates.tdate === '') {
                                                return da
                                            } else if (da.date >= dates.fdate && da.date <= dates.tdate) {
                                                return da
                                            }
                                        }).map((item, i) => (
                                            <tr>
                                                <th scope="row" className='text-center'>{item.id}</th>
                                                <td>{item.inwordId}</td>
                                                <td>{item.collectionType}</td>
                                                <td>{item.vendorName}</td>
                                                <td>{item.address}</td>
                                                <td>{item.mobileNo}</td>
                                                <td>{item.milkType}</td>
                                                <td>{item.date}</td>
                                                <td>{item.itemName}</td>
                                                <td>{item.unit}</td>
                                                <td>{item.batch}</td>
                                                <td>{item.mbrt}</td>
                                                <td>{item.fat}</td>
                                                <td>{item.snf}</td>
                                                <td>{item.warehouse}</td>
                                                <td>{item.temp}</td>
                                                <td>{item.rate}</td>
                                                {/* <td>{item.transportRate}</td> */}
                                                <td>{item.overCharge}</td>
                                                <td>{item.acidity}</td>
                                                <td>{item.weight}</td>
                                                <td>{item.inKg}</td>
                                                <td>{item.total}</td>
                                                <td>{item.remark}</td>
                                                <td>{item.supplierWeight}</td>
                                                <td>{item.vendorInvoiceDate}</td>
                                                <td>{item.vehicalName}</td>
                                                <td>{item.vehicalNo}</td>
                                                <td>{item.driverName}</td>
                                                <td>{item.driverNo}</td>
                                                <td>{item.dremark}</td>
                                                <td className='text-center mt-2'><DeleteIcon onClick={() => delet(item.id)} style={{ color: 'red'}}/></td>
                                                <td className='text-center mt-2'><EditIcon onClick={() => editform(item, "2")} style={{ color: 'green'}}/></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div> : null
                    }



                    <div className='container mt-3 mb-3' >
                        {
                            updateid === "2" ? <button
                                onClick={() => saveupdate()}
                                className='btn btn-primary mx-3'>Update</button> :
                                <button
                                    onClick={() => save()}
                                    className='btn btn-primary mx-3'>Save</button>
                        }
                        <button
                            onClick={() => print()}
                            className='btn btn-primary mx-3'>Print</button>
                        <button
                            onClick={() => clearfields()}
                            className='btn btn-primary mx-3'>Clear</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Chillingcom