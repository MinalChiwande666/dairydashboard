import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
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


const Suppliercom = () => {
    const [loader, setloader] = useState(false)
    const [opendailogdel, setopendailogdel] = useState(false)
    const [customerdata, setcustomerdata] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [delid, setdelid] = useState()
    const [tableshow, setdshowtable] = useState(false)
    const [togg1, setTogg1] = useState(false)
    const [togg2, setTogg2] = useState(false)
    const [togg3, setTogg3] = useState(false)
    const [togg4, setTogg4] = useState(false)
    const [togg5, setTogg5] = useState(false)
    const [togg6, setTogg6] = useState(false)
    const [togg7, setTogg7] = useState(false)
    const [togg8, setTogg8] = useState(false)
    const [suppno,setSuppno] = useState()


    const [customerform, setcustomerform] = useState({
        "supplierName": "",
        "supplierId":null,
        "grp": "",
        "openingBalance": "",
        "alias": "",
        "salesPerson":"",
        "gstState":"",
        "gstNo": "",
        "category": "",
        "debitCredit": "",
        "status": "",
        "description": "",
        "accountgrp": "",
        "taxType": "",
        "typeOfGst": "",
        "emailID": "",
        "mainLedger": "",
        "address": "",
        "area": "",
        "taluka": "",
        "district": "",
        "city": "",
        "pinCode": "",
        "state": "",
        "phoneNo": "",
        "mobileNo": "",
        "contactPerson": "",
        "mobile": "",
        "designation": "",
        "eMail": "",
        "dateofBirth": "",
        "buyerName": "",
        "creditDays": "",
        "fssaiNo": "",
        "creditLimit": "",
        "panNo": "",
        "interestCalculation": "",
        "accountNo": "",
        "bankName": "",
        "branch": "",
        "ifscNo": "",
        "micrNo": "",
        "address1": "",
        "subLedgerName": " ",
        "group1": ""
    })

    const category = [
        {
            id: 1,
            name: 'Manufacturer/Producers'
        },
        {
            id: 2,
            name: 'Distributors'
        },
        {
            id: 3,
            name: 'Importers'
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

    const save = () => {
        let newobj = {
            "supplierName": String(customerform?.supplierName),
            "supplierId":Number(suppno),
            "grp": String(customerform?.grp),
            "openingBalance": String(customerform?.openingBalance),
            "alias": String(customerform?.alias),
            "salesPerson":String(customerform?.salesPerson),
            "gstState":String(customerform?.gstState),
            "gstNo": String(customerform?.gstNo),
            "category": String(customerform?.category),
            "debitCredit": String(customerform?.debitCredit),
            "status": String(customerform?.status),
            "description": String(customerform?.description),
            "accountgrp": String(customerform?.accountgrp),
            "taxType": String(customerform?.taxType),
            "typeOfGst": String(customerform?.typeOfGst),
            "emailID": String(customerform?.emailID),
            "mainLedger": String(customerform?.mainLedger),
            "address": String(customerform?.address),
            "area": String(customerform?.area),
            "taluka": String(customerform?.taluka),
            "district": String(customerform?.district),
            "city": String(customerform?.city),
            "pinCode": String(customerform?.pinCode),
            "state": String(customerform?.state),
            "phoneNo": String(customerform?.phoneNo),
            "mobileNo": String(customerform?.mobileNo),
            "contactPerson": String(customerform?.contactPerson),
            "mobile": String(customerform?.mobile),
            "designation": String(customerform?.designation),
            "eMail": String(customerform?.eMail),
            "dateofBirth": String(customerform?.dateofBirth),
            "buyerName": String(customerform?.buyerName),
            "creditDays": String(customerform?.creditDays),
            "fssaiNo": String(customerform?.fssaiNo),
            "creditLimit": String(customerform?.creditLimit),
            "panNo": String(customerform?.panNo),
            "interestCalculation": String(customerform?.interestCalculation),
            "accountNo": String(customerform?.accountNo),
            "bankName": String(customerform?.bankName),
            "branch": String(customerform?.branch),
            "ifscNo": String(customerform?.ifscNo),
            "micrNo": String(customerform?.micrNo),
            "address1": String(customerform?.address1),
            "subLedgerName": String(customerform?.subLedgerName),
            "group1": String(customerform?.group1)
        }
        try {
            fetch('http://103.38.50.113:8080/DairyApp/saveSupplierMaster',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newobj)
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
                setTimeout(() => {
                    window.location.reload()
                  }, 2000);
        } catch (e) {
            alert(e, " <= Error")
        }
    }


    const getcustomeralldata = async () => {
        setloader(true)
        let data = await fetch('http://103.38.50.113:8080/DairyApp/getAllSupplierData')
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
            "id": String(delid)
        }
        console.log(delobj)
        try {

            fetch('http://103.38.50.113:8080/DairyApp/deleteSupplierDataById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(delobj)
            }).then((datadel) => {
                return datadel
            }).then((resdel) => {
                console.log(resdel)
                if (resdel) {
                    setopendailogdel(false)
                    getcustomeralldata()
                    getsuppidnext()
                }
            })
        } catch (e) {
            console.log(e, "Error")
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

    const getsuppidnext = ()=>{
        fetch("http://103.38.50.113:8080/DairyApp/getNextSupplierId").then((data)=>{
            return data.json()
        }).then((res)=>{
            console.log(res)
            setSuppno(res)
        })
    }
    useEffect(() => {
        getsuppidnext() 
    },[])

    useEffect(() => {
        getcustomeralldata()
    },[])
    


    return (
        <>
            {loader ? <div className="loader-container">
                <div className="spinner"></div>
            </div> :
                <div className='container-fluid' onClick={()=>{
                    if(togg1 === true){
                        setTogg1(false)
                    }
                    else if(togg2 === true){
                        setTogg2(false)
                    }
                    else if(togg3 === true){
                        setTogg3(false)
                    }
                    else if(togg4 === true){
                        setTogg4(false)
                    }
                    else if(togg5 === true){
                        setTogg5(false)
                    }
                    else if(togg6 === true){
                        setTogg6(false)
                    }
                    else if(togg7 === true){
                        setTogg7(false)
                    }
                    else if(togg8 === true){
                        setTogg8(false)
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

                    <div className='container mt-4 accCont' style={{ height: "65vh" }}>
                        {dailoge()}
                        <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Supplier Master</h3></div>
                        <div className='row mt-4'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={suppno}
                                        style={{ pointerEvents: 'none' }}
                                        contentEditable={false}
                                        label="Supplier No." variant="standard"
                                    />
                                </Box>
                            </div>

                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.supplierName}
                                        label="Supplier Name." variant="standard"
                                        onChange={(e)=>{
                                            setcustomerform({
                                                ...customerform,
                                                supplierName: e.target.value
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
                                        value={customerform.accountgrp === "" ? "Select account type" : customerform.accountgrp}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg1 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        accountgroup.map((item, i) => (
                                                            <>
                                                                <li style={{ listStyle: 'none' }} onClick={() => {
                                                                    setcustomerform({
                                                                        ...customerform,
                                                                        accountgrp: item.acctype
                                                                    })
                                                                    setTogg1(false)
                                                                }}>{item.acctype}</li>
                                                            </>
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
                                        togg2 ?
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
                                                                    setTogg2(false)
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
                                    <IconButton onClick={() => setTogg2(!togg2)}>
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
                                        togg3 ?
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
                                                                    setTogg3(false)
                                                                }}>{item.stat}</li>
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

                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Sales Person"
                                        value={customerform.salesPerson === "" ? "Select sales person" : customerform.salesPerson}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg4 ?
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
                                                                    setTogg4(false)
                                                                }}>{item.name}</li>
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
                                        label="Category"
                                        value={customerform.category === "" ? "Select" : customerform.category}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg5 ?
                                            <div className='milkpurchaseselect'>
                                                <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                    {
                                                        category.map((item, i) => (
                                                            <li style={{ listStyle: 'none' }} onClick={() => {
                                                                setcustomerform({
                                                                    ...customerform,
                                                                    category: item.name
                                                                })
                                                                setTogg5(false)
                                                            }}>{item.name}</li>
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
                                        label="Type Of Gst"
                                        value={customerform.typeOfGst === "" ? "Select" : customerform.typeOfGst}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg6 ?
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
                                                                    setTogg6(false)
                                                                }}>{item.name}</li>
                                                            </>
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
                        </div>

                        <div className='row mt-3'>
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
                                        label="Opening Balance"
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
                        </div>

                        <div className='row mt-3'>
                            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div>
                                    <TextField
                                        variant='standard'
                                        label="Debit/Credit"
                                        value={customerform.debitCredit === "" ? "Select" : customerform.debitCredit}
                                        sx={{ width: "25ch" }}
                                    />
                                    {
                                        togg7 ?
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
                                        togg8 ?
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
                                                                    setTogg8(false)
                                                                }}>{item.name}</li>
                                                            </>
                                                        ))
                                                    }
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
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "40vh" }}>
                        {dailoge()}
                        <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Contact And Address details</h5></div>
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
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "35vh" }}>
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
                                        value={customerform.eMail}
                                        onChange={(e) => setcustomerform({ ...customerform, eMail: e.target.value })}
                                        label="E-Mail" variant="standard"
                                    />
                                </Box>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <div className="d-flex flex-column">
                                    <label style={{ fontSize: "14px" }}>
                                        Date of Birth
                                    </label>
                                    <TextField
                                        style={{ width: '30ch' }}
                                        value={customerform.dateofBirth}
                                        variant="standard" type="date"
                                        onChange={(e) => setcustomerform({ ...customerform, dateofBirth: e.target.value })}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "40vh" }}>
                        {dailoge()}
                        <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Account Details</h5></div>
                        <div className='row mt-3'>
                            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                                <Box component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                    autoComplete="off">
                                    <TextField
                                        value={customerform.buyerName}
                                        onChange={(e) => setcustomerform({ ...customerform, buyerName: e.target.value })}
                                        label="Buyer Name" variant="standard"
                                    />
                                </Box>
                            </div>

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
                        </div>

                        <div className='row mt-3'>
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
                                        value={customerform.fssaiED}
                                        onChange={(e) => setcustomerform({ ...customerform, fssaiED: e.target.value })}
                                        label="FSSAI Id" variant="standard"
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
                        </div>
                    </div>

                    <div className='container mt-4 accCont' style={{ height: "40vh" }}>
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

                    <div className='container mt-4 accCont' style={{ height: "25vh" }}>
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
                        </div>
                    </div>

                    <div className='container mt-4 mb-2 mb-sm-0'>
                        <button onClick={() => setdshowtable(!tableshow)} className='btn btn-primary mb-3'>Supplier data</button>
                        <button onClick={() => save()} className='btn btn-primary mx-3 mb-3'>Save</button>
                    </div>


                    {
                        tableshow ?
                            <div className='container mt-4 accMastTable mb-3 p-0'>
                                <table className="tableAccMaster table table-stripped">
                                    <thead >
                                        <tr >
                                            <th>Id</th>
                                            <th>supplierId</th>
                                            <th>Supplier Name</th>
                                            <th>Gst No</th>
                                            <th>Group</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            customerdata.map((item, i) => (
                                                <tr>
                                                    <th scope="row" className='text-center'>{item.id}</th>
                                                    <td>{item.supplierId}</td>
                                                    <td>{item.supplierName}</td>
                                                    <td>{item.gstNo}</td>
                                                    <td>{item.grp}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.status}</td>
                                                    <td><DeleteIcon onClick={() => dele(item.id)} style={{color:'red'}}/></td>
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

export default Suppliercom