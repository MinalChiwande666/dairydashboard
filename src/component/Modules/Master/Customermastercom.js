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
import Box from '@mui/material/Box';

import './accountmaster.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Customermastercom = () => {
    const [loader, setloader] = useState(false)
    const [togg2, setTogg2] = useState(false)
    const [togg3, setTogg3] = useState(false)
    const [togg4, setTogg4] = useState(false)
    const [togg5, setTogg5] = useState(false)
    const [togg6, setTogg6] = useState(false)
    const [togg7, setTogg7] = useState(false)
    const [togg8, setTogg8] = useState(false)
    const [togg9, setTogg9] = useState(false)
    const [togg10, setTogg10] = useState(false)
    const [togg11, setTogg11] = useState(false)
    const [togg12, setTogg12] = useState(false)
    const [togg13, setTogg13] = useState(false)
    const [togg14, setTogg14] = useState(false)
    const [togg15, setTogg15] = useState(false)
    const [togg16, setTogg16] = useState(false)

    const [opendailogdel, setopendailogdel] = useState(false)
    const [customerdata, setcustomerdata] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [showtable, setshowtable] = useState(false)
    const [delid, setdelid] = useState()
    const [customerform, setcustomerform] = useState({
        "inwardId": "" || JSON.parse(localStorage.getItem("inwardId")) + 1,
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
        "milkrate": "",
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
        // alert(customerform)
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
                    console.log(res)
                    localStorage.setItem('inwardid', JSON.stringify(res.data.inwardId))
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
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                })
        } catch (e) {
            alert(e, " <= Error")
        }
    }

    const getcustomeralldata = async () => {
        setloader(true)
        let data = await fetch('http://103.38.50.113:8080/DairyApp/getAllCustomerMasterData')
        let alldata = await data.json()
        if (alldata) {
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
    const dele = (id) => {
        setdelid(id)
        setopendailogdel(true)
    }
    const handledel = () => {
        let delobj = {
            "id": delid
        }
        try {

            fetch('http://103.38.50.113:8080/DairyApp/deleteCustomerDataById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(delobj)
            }).then((datadel) => {
                return datadel.json()
            }).then((resdel) => {
                console.log(resdel)
            })
        } catch (e) {
            console.log(e, "Error")
        }
    }
    const categories = [
        {
            id: 1,
            name: 'New Customer'
        },
        {
            id: 2,
            name: 'Potential Customer'
        },
        {
            id: 3,
            name: 'Impulse customers'
        },
        {
            id: 4,
            name: 'Discount customers'
        },
        {
            id: 5,
            name: 'Angry customers'
        },
        {
            id: 6,
            name: 'Loyal customers'
        }
    ]
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
                <div className='container-fluid' onClick={() => {
                    if (togg2 === true) {
                        setTogg2(false)
                    } else if (togg3 === true) {
                        setTogg3(false)
                    } else if (togg4 === true) {
                        setTogg4(false)
                    } else if (togg5 === true) {
                        setTogg5(false)
                    } else if (togg6 === true) {
                        setTogg6(false)
                    } else if (togg7 === true) {
                        setTogg7(false)
                    } else if (togg8 === true) {
                        setTogg8(false)
                    } else if (togg9 === true) {
                        setTogg9(false)
                    } else if (togg10 === true) {
                        setTogg10(false)
                    } else if (togg11 === true) {
                        setTogg11(false)
                    } else if (togg12 === true) {
                        setTogg12(false)
                    } else if (togg13 === true) {
                        setTogg13(false)
                    } else if (togg14 === true) {
                        setTogg14(false)
                    } else if (togg15 === true) {
                        setTogg15(false)
                    } else if (togg16 === true) {
                        setTogg16(false)
                    }
                }}>
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

                    <div className='container mt-4 accCont' style={{ height: "84vh" }}>
                        {dailoge()}
                        <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Customer Master</h3></div>
                        <div className='row mt-4'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={JSON.parse(localStorage.getItem('inwardid')) + 1 || ""}
                                        style={{ pointerEvents: 'none' }}
                                        contentEditable={false}
                                        type='number'
                                        label="Customer No." variant="standard"
                                    />
                                </Box>
                            </div>


                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.customerName}
                                        contentEditable={false}
                                        label="Customer Name" variant="standard"
                                        onChange={(e) => {
                                            setcustomerform({
                                                ...customerform,
                                                customerName: e.target.value
                                            })
                                        }}
                                    />
                                </Box>
                            </div>


                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Account Group"
                                        value={customerform.accountGroup === "" ? "Select account type" : customerform.accountGroup}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg2 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        accountgroup.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        accountGroup: item.acctype
                                                                    })
                                                                    setTogg2(false)
                                                                }}>{item.acctype}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg2(!togg2)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="GST State"
                                        value={customerform.gstState === "" ? "Select state" : customerform.gstState}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg3 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        gststate.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        gstState: item.name
                                                                    })
                                                                    setTogg3(false)
                                                                }}>{item.name}
                                                                </li>
                                                            </>
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
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Status"
                                        value={customerform.status === "" ? "Select status" : customerform.status}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg4 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        cstatus.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        status: item.stat
                                                                    })
                                                                    setTogg4(false)
                                                                }}>{item.stat}</li>
                                                            </>
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
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Sales Person"
                                        value={customerform.salesPerson === "" ? "Select sales person" : customerform.salesPerson}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg5 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        salesemployee.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        salesPerson: item.name
                                                                    })
                                                                    setTogg5(false)
                                                                }}>{item.name}</li>
                                                            </>
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
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Category"
                                        value={customerform.category === "" ? "Select" : customerform.category}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg6 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        categories.map((item, i) => (
                                                            <li style={{ listStyle: 'none' }} onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    category: item.name
                                                                })
                                                                setTogg6(false)
                                                            }}>{item.name}</li>
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
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Type Of Gst"
                                        value={customerform.typeOfGst === "" ? "Select" : customerform.typeOfGst}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg7 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        typegst.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        typeOfGst: item.name
                                                                    })
                                                                    setTogg7(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg7(!togg7)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Alias"
                                        value={customerform.alias === "" ? "Select" : customerform.alias}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg8 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    <li style={{ listStyle: 'none' }} onClick={() => {
                                                        setcustomerform({
                                                            ...customerform,
                                                            alias: "Hello"
                                                        })
                                                        setTogg8(false)
                                                    }}>Hello</li>
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg8(!togg8)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.emailID}
                                        label="Email ID"
                                        variant='standard'
                                        onChange={(e) => {
                                            setcustomerform({
                                                ...customerform,
                                                emailID: e.target.value
                                            })
                                        }}
                                    />
                                </Box>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Group"
                                        value={customerform.group1 === "" ? 'Select' : customerform.group1}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg9 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    <li className="dropdown-item" onClick={() => {
                                                        setcustomerform({
                                                            ...customerform,
                                                            group1: "hello"
                                                        })
                                                        setTogg9(false)
                                                    }}>Hello</li>
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg9(!togg9)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        label="GST No"
                                        value={customerform.gstNo}
                                        variant='standard'
                                        onChange={(e) => {
                                            setcustomerform({
                                                ...customerform,
                                                gstNo: e.target.value
                                            })
                                        }}
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div className="d-flex flex-column">
                                    <label style={{ fontSize: "14px" }}>
                                        Anniversary Date
                                    </label>
                                    <TextField
                                        style={{ width: '30ch' }}
                                        value={customerform.anniveryDate}
                                        variant="standard" type="date"
                                        onChange={(e) => {
                                            setcustomerform({
                                                ...customerform,
                                                anniveryDate: e.target.value
                                            })
                                        }} />
                                </div>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        label="Opening balance"
                                        variant='standard'
                                        value={customerform.openingBalance}
                                        onChange={(e) => {
                                            setcustomerform({
                                                ...customerform,
                                                openingBalance: e.target.value
                                            })
                                        }}
                                    />
                                </Box>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Debit/Credit"
                                        value={customerform.debitCredit === "" ? "Select" : customerform.debitCredit}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg10 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        creditdebit.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        debitCredit: item.name
                                                                    })
                                                                    setTogg10(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg10(!togg10)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Select Route Name"
                                        value={customerform.selectRouteName === "" ? "Select" : customerform.selectRouteName}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg11 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        routename.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        selectRouteName: item.name
                                                                    })
                                                                    setTogg11(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg11(!togg11)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.mainLedger}
                                        label="Main Ledger"
                                        variant='standard'
                                        onChange={(e) => {
                                            setcustomerform({
                                                ...customerform,
                                                mainLedger: e.target.value
                                            })
                                        }}
                                    />
                                </Box>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="TAX Type"
                                        value={customerform.taxType === "" ? "Select" : customerform.taxType}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg12 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        taxtype.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        taxType: item.name
                                                                    })
                                                                    setTogg12(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg12(!togg12)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Milk Rate Contract"
                                        value={customerform.milkrate === "" ? "Select" : customerform.milkrate}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg13 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        milkrate.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        milkrate: item.name
                                                                    })
                                                                    setTogg13(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg13(!togg13)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="By-Product Rate"
                                        value={customerform.byProductRate === "" ? "Select" : customerform.byProductRate}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg14 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        product.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        byProductRate: item.name
                                                                    })
                                                                    setTogg14(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg14(!togg14)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>



                        <div className='row mt-3'>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label=" Ice-Cream Rate"
                                        value={customerform.iceCreamRate === "" ? "Select" : customerform.iceCreamRate}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg15 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        icecream.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        iceCreamRate: item.name
                                                                    })
                                                                    setTogg15(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg15(!togg15)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Other Rate"
                                        value={customerform.otherRate === "" ? "Select" : customerform.otherRate}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg16 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        otherate.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        otherRate: item.name
                                                                    })
                                                                    setTogg16(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                </div>
                                <div className='mt-4'>
                                    <IconButton onClick={() => setTogg16(!togg16)}>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "50vh" }}>
                        {dailoge()}
                        <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Contact and Address Details</h5></div>
                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.address}
                                        onChange={(e) => setcustomerform({ ...customerform, address: e.target.value })}
                                        label="Address" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.area}
                                        onChange={(e) => setcustomerform({ ...customerform, area: e.target.value })}
                                        label="Area" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.taluka}
                                        onChange={(e) => setcustomerform({ ...customerform, taluka: e.target.value })}
                                        label="Taluka" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.district}
                                        onChange={(e) => setcustomerform({ ...customerform, district: e.target.value })}
                                        label="District" variant="standard"
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
                                        value={customerform.city}
                                        onChange={(e) => setcustomerform({ ...customerform, city: e.target.value })}
                                        label="City" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.pinCode}
                                        onChange={(e) => setcustomerform({ ...customerform, pinCode: e.target.value })}
                                        label="PinCode" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.state}
                                        onChange={(e) => setcustomerform({ ...customerform, state: e.target.value })}
                                        label="State" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.phoneNo}
                                        onChange={(e) => setcustomerform({ ...customerform, phoneNo: e.target.value })}
                                        label="Phone No" variant="standard"
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
                                        value={customerform.mobileNo}
                                        onChange={(e) => setcustomerform({ ...customerform, mobileNo: e.target.value })}
                                        label="Mobile No" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.transitDays}
                                        onChange={(e) => setcustomerform({ ...customerform, transitDays: e.target.value })}
                                        label="Transit Days" variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "30vh" }}>
                        {dailoge()}
                        <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Contact Details</h5></div>
                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.contactPerson}
                                        onChange={(e) => setcustomerform({ ...customerform, contactPerson: e.target.value })}
                                        label="Contact Person" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.mobile}
                                        onChange={(e) => setcustomerform({ ...customerform, mobile: e.target.value })}
                                        label="Mobile" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.designation}
                                        onChange={(e) => setcustomerform({ ...customerform, designation: e.target.value })}
                                        label="Designation" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.district}
                                        onChange={(e) => setcustomerform({ ...customerform, district: e.target.value })}
                                        label="District" variant="standard"
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
                                        value={customerform.eMail}
                                        onChange={(e) => setcustomerform({ ...customerform, eMail: e.target.value })}
                                        label="E-Mail" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div className="d-flex flex-column">
                                    <label style={{ fontSize: "14px" }}>
                                        Date of Birth
                                    </label>
                                    <TextField
                                        style={{ width: '30ch' }}
                                        value={customerform.dateofBirth}
                                        variant="standard" type="date"
                                        onChange={(e) =>
                                            setcustomerform({ ...customerform, dateofBirth: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "30vh" }}>
                        {dailoge()}
                        <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Account Details</h5></div>
                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.panNo}
                                        onChange={(e) => setcustomerform({ ...customerform, panNo: e.target.value })}
                                        label="PAN No" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.creditDays}
                                        onChange={(e) => setcustomerform({ ...customerform, creditDays: e.target.value })}
                                        label="Credit Days" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.interestCalculation}
                                        onChange={(e) => setcustomerform({ ...customerform, interestCalculation: e.target.value })}
                                        label="Intrest Calculation" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.customerType}
                                        onChange={(e) => setcustomerform({ ...customerform, customerType: e.target.value })}
                                        label="Customer Type" variant="standard"
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
                                        value={customerform.fssaiNo}
                                        onChange={(e) => setcustomerform({ ...customerform, fssaiNo: e.target.value })}
                                        label="FSSAI No" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.creditLimit}
                                        onChange={(e) => setcustomerform({ ...customerform, creditLimit: e.target.value })}
                                        label="Credit Limit" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.securityCheck}
                                        onChange={(e) => setcustomerform({ ...customerform, securityCheck: e.target.value })}
                                        label="Security Check" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.fssaiED}
                                        onChange={(e) => setcustomerform({ ...customerform, fssaiED: e.target.value })}
                                        label="FSSAI ED" variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "30vh" }}>
                        {dailoge()}
                        <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Bank Details</h5></div>
                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.accountNo}
                                        onChange={(e) => setcustomerform({ ...customerform, accountNo: e.target.value })}
                                        label="Account No" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.bankName}
                                        onChange={(e) => setcustomerform({ ...customerform, bankName: e.target.value })}
                                        label="Bank Name" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.branch}
                                        onChange={(e) => setcustomerform({ ...customerform, branch: e.target.value })}
                                        label="Branch" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.ifscNo}
                                        onChange={(e) => setcustomerform({ ...customerform, ifscNo: e.target.value })}
                                        label="IFSC No" variant="standard"
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
                                        value={customerform.micrNo}
                                        onChange={(e) => setcustomerform({ ...customerform, micrNo: e.target.value })}
                                        label="MICR No" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.address1}
                                        onChange={(e) => setcustomerform({ ...customerform, address1: e.target.value })}
                                        label="Address" variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "30vh" }}>
                        {dailoge()}
                        <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Create Ledger</h5></div>
                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.subLedgerName}
                                        onChange={(e) => setcustomerform({ ...customerform, subLedgerName: e.target.value })}
                                        label="Sub Ledger Name" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.grp}
                                        onChange={(e) => setcustomerform({ ...customerform, grp: e.target.value })}
                                        label="Group" variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.amid}
                                        onChange={(e) => setcustomerform({ ...customerform, amid: e.target.value })}
                                        label="AMID" variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-4 mb-2 mb-sm-0'>
                        <button onClick={() => setshowtable(!showtable)} className='btn btn-primary mb-3'>Customer data</button>
                        <button onClick={() => save()} className='btn btn-primary mx-3 mb-3'>Save</button>
                    </div>

                    {showtable ?
                        <div className='container mt-4 accMastTable mb-3 p-0'>
                            <table className="tableAccMaster table table-stripped">
                                <thead >
                                    <tr >
                                        <th style={{ width: "150px" }}>Id</th>
                                        <th style={{ width: "150px" }}>Customer Name</th>
                                        <th style={{ width: "150px" }}>Opening Balance</th>
                                        <th style={{ width: "150px" }}>Debit/Credit</th>
                                        <th style={{ width: "150px" }}>Gst No</th>
                                        <th style={{ width: "150px" }}>Category</th>
                                        <th style={{ width: "150px" }}>Gst State</th>
                                        <th style={{ width: "150px" }}>Status</th>
                                        <th style={{ width: "150px" }}>Acount Group</th>
                                        <th style={{ width: "150px" }}>Area</th>
                                        <th style={{ width: "150px" }}>Mobile No</th>
                                        <th style={{ width: "150px" }}>Sales Person</th>
                                        <th style={{ width: "150px" }}>Contact Person</th>
                                        <th style={{ width: "150px" }}>Email Id</th>
                                        <th style={{ width: "150px" }}>Date of birth</th>
                                        <th style={{ width: "150px" }}>Route</th>
                                        <th style={{ width: "150px" }}>Delete</th>
                                    </tr>
                                </thead>
                                <tbody className='border'>

                                    {
                                        customerdata.map((item, i) => (
                                            <tr>
                                                <th scope="row" className='text-center'>{item.id}</th>
                                                <td>{item.customerName}</td>
                                                <td>{item.openingBalance}</td>
                                                <td>{item.debitCredit}</td>
                                                <td>{item.gstNo}</td>
                                                <td>{item.category}</td>
                                                <td>{item.gstState}</td>
                                                <td>{item.status}</td>
                                                <td>{item.accountGroup}</td>
                                                <td>{item.area}</td>
                                                <td>{item.mobileNo}</td>
                                                <td>{item.salesPerson}</td>
                                                <td>{item.contactPerson}</td>
                                                <td>{item.emailID}</td>
                                                <td>{item.dateofBirth}</td>
                                                <td>{item.selectRouteName}</td>
                                                <td><DeleteIcon onClick={() => dele(item.id)} style={{ color: "red" }} /></td>
                                            </tr>
                                        ))

                                    }
                                </tbody>
                            </table>
                        </div> : null
                    }
                </div>
            }
        </>

    )
}

export default Customermastercom