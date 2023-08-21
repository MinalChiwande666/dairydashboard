import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { toast, ToastContainer } from 'react-toastify'
import { DialogActions, DialogTitle, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import './accountmaster.css'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Customermastercom = () => {
    const [loader, setloader] = useState(false)
    const [opendailogdel, setopendailogdel] = useState(false)
    const [customerdata, setcustomerdata] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [hide1, sethide1] = useState(false)
    const [delid,setdelid] = useState()
    const [hide2, sethide2] = useState(false)
    const [hide3, sethide3] = useState(false)
    const [hide4, sethide4] = useState(false)
    const [hide5, sethide5] = useState(false)
    const [customerform, setcustomerform] = useState({
        "customerName": "",
        "salesPerson": "",
        "emailID": "",
        "openingBalance": "",
        "selectRouteName": "",
        "taxType": "",
        "accountGroup": "",
        "category": "",
        "grp": "",
        "debitCredit": "",
        "mainLedger": "",
        "gstState": "",
        "typeOfGst": "",
        "gstNo": "",
        "status": "",
        "alias": "",
        "anniveryDate": "",
        "milkRateContract": "",
        "byProductRate": "",
        "iceCreamRate": "",
        "otherRate": "",
        "address": "",
        "area": "",
        "taluka": "",
        "district": "",
        "city": "",
        "pinCode": "",
        "state": "",
        "phoneNo": "",
        "mobileNo": "",
        "transitDays": "",
        "contactPerson": "",
        "mobile": "",
        "designation": "",
        "eMail": "",
        "dateofBirth": "",
        "panNo": "",
        "creditDays": "",
        "interestCalculation": "",
        "customerType": "",
        "fssaiNo": "",
        "creditLimit": "",
        "securityCheck": "",
        "fssaiED": "",
        "accountNo": "",
        "bankName": "",
        "branch": "",
        "ifscNo": "",
        "micrNo": "",
        "address1": "",
        "subLedgerName": "",
        "group1": "",
        "amid": ""



    })

    const customername = [
        {
            id: 1,
            name: 'Neeraj'
        },
        {
            id: 2,
            name: 'pranay'
        }
    ]
    const accountgroup = [
        {
            id: 1,
            acctype: 'Sundry Debtors'
        }
    ]
    const gststate = [
        {
            id: 1,
            name: 'Maharashtra'
        },
        {
            id: 2,
            name: 'Chatisgarh'
        },
        {
            id: 3,
            name: 'Madhyapradesh'
        }
    ]
    const cstatus = [
        {
            id: 1,
            stat: 'active'
        },
        {
            id: 2,
            stat: 'In-Active'
        }
    ]
    const salesemployee = [
        {
            id: 1,
            name: 'Employee1'
        },
        {
            id: 2,
            name: 'Pravin'
        }
    ]
    const typegst = [
        {
            id: 1,
            name: 'B2B'
        },
        {
            id: 2,
            name: 'Composite'
        },
        {
            id: 3,
            name: 'Non Taxable'
        }
    ]

    const creditdebit = [
        {
            id: 1,
            name: 'Debit'
        },
        {
            id: 2,
            name: 'Credit'
        }
    ]
    const routename = [
        {
            id: 1,
            name: 'A'
        },
        {
            id: 2,
            name: 'B'
        }
    ]
    const taxtype = [
        {
            id: 1,
            name: 'NA'
        },
        {
            id: 2,
            name: 'TDS'
        },
        {
            id: 3,
            name: 'TCS'
        }
    ]
    const milkrate = [
        {
            id: 1,
            name: 'milkrate'
        }
    ]
    const product = [
        {
            id: 1,
            name: 'By Product'
        }
    ]
    const icecream = [
        {
            id: 1,
            name: 'ice cream'
        }
    ]
    const otherate = [
        {
            id: 1,
            name: 'Other Rate'
        }
    ]

    const save = () => {
        alert(customerform)
        console.log(customerform)
        try {
            fetch('http://103.38.50.113:8080/DairyApp/saveCustomerMaster',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(customerform)
                }).then((data) => {
                    return data.json()
                }).then((res) => {
                    toast.success(`${res.message}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                })
        } catch (e) {
            alert(e, " <= Error")
        }
    }
    const outerTheme = useTheme()
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

    const getcustomeralldata = async () => {
        setloader(true)
        let data = await fetch('http://103.38.50.113:8080/DairyApp/getAllCustomerMasterData')
        let alldata = await data.json()
        if(alldata)
        {
           setloader(false)
            setcustomerdata(alldata)
        }
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setopendailogdel(false)
    };
  const dele = (id)=>{
    setdelid(id)
    setopendailogdel(true)
  }
  const handledel = ()=>{
    let delobj = {
        "id":delid
    }
    try{

        fetch('http://103.38.50.113:8080/DairyApp/deleteCustomerDataById',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(delobj)
        }).then((datadel)=>{
            return datadel.json()
        }).then((resdel)=>{
            console.log(resdel)
        })
    }catch(e)
    {
        console.log(e,"Error")
    }
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
                        <Button onClick={handledel}>Yes</Button>
                        <Button onClick={handleClose}>No</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </>
    )
}
    useEffect(() => {
        getcustomeralldata()
    }, [])
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
                        theme="light"></ToastContainer>
                    <div className='container'>
                        <h1 className='text-center'>Customer Master</h1>
                        {dailoge()}
                        <div style={{ boxShadow: '10px 10px 10px 0px gray' }}>
                            <div className='row'>
                                <div className='col-12 col-md-3'>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField
                                            value={1}
                                            style={{ pointerEvents: 'none' }}
                                            contentEditable={false}

                                            label="Customer No." variant="standard"
                                        />
                                    </ThemeProvider>
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-12 col-md-3'>

                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField
                                            value={customerform.customerName}
                                            label="Customer name"
                                            variant='standard'
                                            onChange={(e) => {
                                                setcustomerform({
                                                    ...customerform,
                                                    customerName: e.target.value
                                                })
                                            }}
                                        />
                                        <IconButton onClick={handleClick} >
                                            <KeyboardArrowDownIcon className='dropicon' />

                                        </IconButton>

                                    </ThemeProvider>
                                    <Menu
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        id="basic-menu">
                                        <MenuItem>
                                            Neeraj
                                        </MenuItem>
                                        <MenuItem>
                                            Neeraj
                                        </MenuItem>
                                        <MenuItem>
                                            Neeraj
                                        </MenuItem>
                                    </Menu>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Account Group
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.accountGroup === "" ? "Select account type" : customerform.accountGroup}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    accountgroup.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    accountGroup: item.acctype
                                                                })
                                                            }}>{item.acctype}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        GST State
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.gstState === "" ? "Select state" : customerform.gstState}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    gststate.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    gstState: item.name
                                                                })
                                                            }}>{item.name}
                                                            </li></>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Status
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.status === "" ? "Select status" : customerform.status}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    cstatus.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    status: item.stat
                                                                })
                                                            }}>{item.stat}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Sales Person
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.salesPerson === "" ? "Select sales person" : customerform.salesPerson}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    salesemployee.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    salesPerson: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Category
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.category === "" ? "Select" : customerform.category}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li onClick={() => {
                                                    setcustomerform({
                                                        ...customerform,
                                                        category: "Hello"
                                                    })
                                                }}>hello</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Type Of Gst
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.typeOfGst === "" ? "Select" : customerform.typeOfGst}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    typegst.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    typeOfGst: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Alias
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.alias === "" ? "Select" : customerform.alias}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li onClick={() => {
                                                    setcustomerform({
                                                        ...customerform,
                                                        alias: "Hlleo"
                                                    })
                                                }}>Hello</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-12 col-md-3'>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField
                                            value={customerform.emailID}
                                            label="Email ID"
                                            className='txtSize'
                                            variant='standard'
                                            onChange={(e) => {
                                                setcustomerform({
                                                    ...customerform,
                                                    emailID: e.target.value
                                                })
                                            }}
                                        />
                                    </ThemeProvider>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Group
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {
                                                    customerform.group1 === "" ? 'Select' : customerform.group1
                                                }
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li onClick={() => {
                                                    setcustomerform({
                                                        ...customerform,

                                                        group1: "hello"
                                                    })
                                                }}>Hello</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField
                                            label="GST No"
                                            value={customerform.gstNo}
                                            className='txtSize'
                                            variant='standard'
                                            onChange={(e) => {
                                                setcustomerform({
                                                    ...customerform,
                                                    gstNo: e.target.value
                                                })
                                            }}
                                        />
                                    </ThemeProvider>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Aniivery Date
                                    </div>
                                    <div>
                                        <input type='date'
                                            value={customerform.anniveryDate}
                                            onChange={(e) => {
                                                setcustomerform({
                                                    ...customerform,
                                                    anniveryDate: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className='col-12 col-md-3'>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField
                                            label="OPening balance"
                                            variant='standard'
                                            value={customerform.openingBalance}
                                            onChange={(e) => {
                                                setcustomerform({
                                                    ...customerform,
                                                    openingBalance: e.target.value
                                                })
                                            }}
                                        />
                                    </ThemeProvider>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Debit/Credit
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.debitCredit === "" ? "Select" : customerform.debitCredit}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    creditdebit.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    debitCredit: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='row mt-4'>
                                <div className='col-12 col-md-3'>
                                    <div>
                                        Select Route Name
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.selectRouteName === "" ? "Select" : customerform.selectRouteName}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    routename.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    selectRouteName: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-3'>
                                    <ThemeProvider theme={customTheme(outerTheme)}>
                                        <TextField
                                            value={customerform.mainLedger}
                                            label="Main Ledger"
                                            className='txtSize'
                                            variant='standard'
                                            onChange={(e) => {
                                                setcustomerform({
                                                    ...customerform,
                                                    mainLedger: e.target.value
                                                })
                                            }}
                                        />
                                    </ThemeProvider>
                                </div>

                            </div>

                            <div className='row my-4'>
                                <div className='col-12 col-md-3 my-4'>
                                    <div>
                                        TAX Type
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.taxType === "" ? "Select" : customerform.taxType}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    taxtype.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    taxType: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>


                        <div style={{ boxShadow: '10px 10px 10px 0px gray' }}>
                            <div className='row my-4'>
                                <div className='col-12 my-2 col-md-3'>
                                    <div>

                                        Milk Rate Contract
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.milkrate === "" ? "Select" : customerform.milkrate}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    milkrate.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    milkrate: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 my-2 col-md-3'>
                                    <div>
                                        By-Product Rate
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.byProductRate === "" ? "Select" : customerform.byProductRate}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    product.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    byProductRate: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 my-2 col-md-3'>
                                    <div>
                                        Ice-Cream Rate
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.iceCreamRate === "" ? "Select" : customerform.iceCreamRate}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    icecream.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    iceCreamRate: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 my-2 col-md-3'>
                                    <div>
                                        Other Rate
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {customerform.otherRate === "" ? "Select" : customerform.otherRate}
                                                <div className='dropdown-toggle'>

                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                                {
                                                    otherate.map((item, i) => (
                                                        <>
                                                            <li onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    otherRate: item.name
                                                                })
                                                            }}>{item.name}</li>
                                                        </>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='row mt-4'>
                                <div className='col-1 col-md-1'>
                                    <IconButton
                                        onClick={() => sethide1(!hide1)}
                                    >
                                        {hide1 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                                    </IconButton>
                                </div>
                                <div className='col-11 col-md-11'>
                                    <h6 className='text-center'>Contact And Address details</h6>
                                    {
                                        hide1 &&
                                        <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                            <table class="table ">
                                                <caption>List of users</caption>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Sr No</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Area</th>
                                                        <th scope="col">Taluka</th>
                                                        <th scope='col'>District</th>
                                                        <th scope='col'>City</th>
                                                        <th scope='col'>PinCode</th>
                                                        <th scope='col'>State</th>
                                                        <th scope='col'>Phone No</th>
                                                        <th scope='col'>Mobile No</th>
                                                        <th scope='col'>Transit Days</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td><input value={customerform.address} onChange={(e) => setcustomerform({ ...customerform, address: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.area} onChange={(e) => setcustomerform({ ...customerform, area: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.taluka} onChange={(e) => setcustomerform({ ...customerform, taluka: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.district} onChange={(e) => setcustomerform({ ...customerform, district: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.city} onChange={(e) => setcustomerform({ ...customerform, city: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.pinCode} onChange={(e) => setcustomerform({
                                                            ...customerform,
                                                            pinCode: e.target.value
                                                        })} type='text' /></td>
                                                        <td><input value={customerform.state} onChange={(e) => setcustomerform({ ...customerform, state: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.phoneNo} onChange={(e) => setcustomerform({ ...customerform, phoneNo: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.mobileNo} onChange={(e) => setcustomerform({ ...customerform, mobileNo: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.transitDays} onChange={(e) => setcustomerform({ ...customerform, transitDays: e.target.value })} type='text' /></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div>
                            <div className='row mt-4'>
                                <div className='col-1 col-md-1'>
                                    <IconButton
                                        onClick={() => sethide2(!hide2)}
                                    >
                                        {hide2 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                                    </IconButton>
                                </div>
                                <div className='col-11 col-md-11'>
                                    <h6 className='text-center'>Contact details</h6>
                                    {
                                        hide2 &&
                                        <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                            <table class="table ">
                                                <caption>List of users</caption>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Sr No</th>
                                                        <th scope="col">Contact Person</th>
                                                        <th scope="col">Mobile</th>
                                                        <th scope="col">Designation</th>
                                                        <th scope='col'>District</th>
                                                        <th scope='col'>E-Mail</th>
                                                        <th scope='col'>Date of Birth</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td><input value={customerform.contactPerson} onChange={(e) => setcustomerform({ ...customerform, contactPerson: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.mobile} onChange={(e) => setcustomerform({ ...customerform, mobile: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.designation} onChange={(e) => setcustomerform({ ...customerform, designation: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.district} onChange={(e) => setcustomerform({ ...customerform, district: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.eMail} onChange={(e) => setcustomerform({ ...customerform, eMail: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.dateofBirth} onChange={(e) => setcustomerform({ ...customerform, dateofBirth: e.target.value })} type='date' /></td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div>
                            <div className='row mt-4'>
                                <div className='col-1 col-md-1'>
                                    <IconButton
                                        onClick={() => sethide3(!hide3)}
                                    >
                                        {hide3 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                                    </IconButton>
                                </div>
                                <div className='col-11 col-md-11'>
                                    <h6 className='text-center'>Account details</h6>
                                    {
                                        hide3 &&
                                        <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                            <table class="table ">
                                                <caption>List of users</caption>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Pass No</th>
                                                        <th scope="col">Credit Days</th>
                                                        <th scope="col">Intrest Calculation</th>
                                                        <th scope="col">Customer Type</th>
                                                        <th scope='col'>Intrest Calculation</th>
                                                        <th scope='col'>Customer Type</th>
                                                        <th scope='col'>FSSAI No</th>
                                                        <th scope='col'>Credit Limit</th>
                                                        <th scope='col'>Security Check</th>
                                                        <th scope='col'>FSSAI Ed</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td><input value={customerform.panNo} onChange={(e) => setcustomerform({ ...customerform, panNo: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.creditDays} onChange={(e) => setcustomerform({ ...customerform, creditDays: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.interestCalculation} onChange={(e) => setcustomerform({ ...customerform, interestCalculation: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.customerType} onChange={(e) => setcustomerform({ ...customerform, customerType: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.fssaiNo} onChange={(e) => setcustomerform({ ...customerform, fssaiNo: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.creditLimit} onChange={(e) => setcustomerform({ ...customerform, creditLimit: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.securityCheck} onChange={(e) => setcustomerform({ ...customerform, securityCheck: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.fssaiED} onChange={(e) => setcustomerform({ ...customerform, fssaiED: e.target.value })} type='text' /></td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div>
                            <div className='row mt-4'>
                                <div className='col-1 col-md-1'>
                                    <IconButton
                                        onClick={() => sethide4(!hide4)}
                                    >
                                        {hide4 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                                    </IconButton>
                                </div>
                                <div className='col-11 col-md-11'>
                                    <h6 className='text-center'>Bank details</h6>
                                    {
                                        hide4 &&
                                        <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                            <table class="table ">

                                                <thead>
                                                    <tr>
                                                        <th scope="col">Sr No</th>
                                                        <th scope="col">Account No</th>
                                                        <th scope="col">Bank Name</th>
                                                        <th scope="col">Branch</th>
                                                        <th scope='col'>IFSC No</th>
                                                        <th scope='col'>MICR No</th>
                                                        <th scope='col'>Address</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td><input value={customerform.accountNo} onChange={(e) => setcustomerform({ ...customerform, accountNo: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.bankName} onChange={(e) => setcustomerform({ ...customerform, bankName: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.branch} onChange={(e) => setcustomerform({ ...customerform, branch: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.ifscNo} onChange={(e) => setcustomerform({ ...customerform, ifscNo: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.micrNo} onChange={(e) => setcustomerform({ ...customerform, micrNo: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.address1} onChange={(e) => setcustomerform({ ...customerform, address1: e.target.value })} type='text' /></td>


                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div>
                            <div className='row mt-4'>
                                <div className='col-1 col-md-1'>
                                    <IconButton
                                        onClick={() => sethide5(!hide5)}
                                    >
                                        {hide5 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                                    </IconButton>
                                </div>
                                <div className='col-11 col-md-11'>
                                    <h6 className='text-center'>Create Ledger</h6>
                                    {
                                        hide5 &&
                                        <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                            <table class="table ">

                                                <thead>
                                                    <tr>
                                                        <th scope="col">Sr No</th>
                                                        <th scope="col">Sub Ledger Name</th>
                                                        <th scope="col">Group</th>
                                                        <th scope="col">AMID</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td><input value={customerform.subLedgerName} type='text' onChange={(e) => setcustomerform({ ...customerform, subLedgerName: e.target.value })} /></td>
                                                        <td><input value={customerform.grp} onChange={(e) => setcustomerform({ ...customerform, grp: e.target.value })} type='text' /></td>
                                                        <td><input value={customerform.amid} onChange={(e) => setcustomerform({ ...customerform, amid: e.target.value })} type='text' /></td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div className='mt-3'>
                            <button className='bg-primary border border-none border-rounded text-white'>Customer data</button>
                        </div>

                        <div className='col-12 mt-3 col-md-10' style={{ width: '100%', overflowX: 'scroll', height: '50vh', overflowY: 'scroll' }}>
                            <table class="table border">
                                <thead >
                                    <tr >
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Id</th>
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Customer Name</th>
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Opening Balance</th>
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Debit/Credit</th>
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Gst No</th>
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Category</th>
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Gst State</th>
                                        <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Status</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Acount Group</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Area</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Mobile No</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Sales Person</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Contact Person</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Email Id</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Date of birth</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Route</th>
                                        <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Delete</th>
                                    </tr>
                                </thead>
                                <tbody className='border'>
                                    {
                                        customerdata.map((item, i) => (
                                            <tr>
                                                <th scope="row">{item.id}</th>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.customerName}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.openingBalance}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.debitCredit}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.gstNo}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.category}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.gstState}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.status}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.accountGroup}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.area}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.mobileNo}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.salesPerson}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.contactPerson}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.emailID}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.dateofBirth}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.selectRouteName}</td>
                                                <td className='border border-left' style={{ fontSize: '0.7rem' }}><DeleteIcon onClick={()=>dele(item.id)}/></td>
                                            </tr>
                                        ))

                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='row'>
                            <div className='col-3 my-3'>
                                <button
                                    onClick={() => save()}
                                    className='bg-primary text-white border border-none rounded'>Save</button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>

    )
}

export default Customermastercom