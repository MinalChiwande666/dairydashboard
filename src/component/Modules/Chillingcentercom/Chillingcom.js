import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import EditIcon from '@mui/icons-material/Edit';
import { Audio } from 'react-loader-spinner'
import './chilling.css'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { CircularProgress } from '@mui/material';
const Chillingcom = () => {
    const outerTheme = useTheme()
    const [updateid, setupadteid] = useState('')
    const [items, setitem] = useState('')
    const [dates, setdates] = useState({
        fdate: '',
        tdate: ''
    })
    const [delid, setdelid] = useState()
    const [fatcla, setfatcal] = useState('')
    const [loader, setloader] = useState(false)
    const [slrcalc, setslrcalc] = useState('')
    const [snfcal, setsnfcal] = useState()
    const [selwarehouse, setwarehouse] = useState('')
    const [collecttype, setcollecttype] = useState('')
    const [selmilktype, setselmilktype] = useState('')
    const [chillingdata, setchillingdata] = useState([])
    const [vendor, setvendor] = useState('')
    const [updatecenterform, setupdatechilling] = useState({})
    const [chillingform, setchillingform] = useState({
        inwordId: '',
        date: '',
        slr: '',
        collectionType: '',
        vendorName: '',
        address: '',
        mobileNo: '',
        milkType: '',
        itemName: '',
        unit: '',
        batch: '',
        mbrt: '',
        fat: '',
        snf: '',
        warehouse: '',
        temp: '',
        rate: '',
        transportRate: '0',
        overCharge: '',
        acidity: '',
        weight: '',
        inKg: '',
        total: '',
        remark: '',
        supplierWeight: '',
        vendorInvoiceDate: '',
        sFat: '',
        sSnf: '',
        sAcidity: '',
        sTemp: '',
        vehicalName: '',
        vehicalNo: '',
        driverName: '',
        driverNo: '',
        dremark: ''
    })
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
    const getalldata = () => {
        try {
            setloader(true)
            axios.get('http://192.168.0.102:8080/findAllPurchesInvoice').then((data) => {
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
        let del = {
            id: id
        }
        axios.post('http://192.168.0.102:8080/deletePurchesInvoiceById', del).then((data) => {
            console.log(data.data)
            if (data.data === "Data Deleted Successfully..!!") {
                getalldata()
            }
        }).catch((e) => {
            console.log("error => ", e)
        })
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

    }, [updatecenterform, fatcla, slrcalc])

    // useEffect(() => {
    //     if (dates.fdate && dates.tdate) {
    //         findbydate()
    //     }

    // }, [dates])
    // alert(snfcal)
    const save = () => {
        try {
            // let newform = {
            //     inwordId: chillingform.inwordId,
            //     date: chillingform.date,
            //     slr:chillingform.slr,
            //     collectionType: chillingform.collectionType,
            //     vendorName: chillingform.vendorName,
            //     address: chillingform.address,
            //     mobileNo: chillingform.mobileNo,
            //     milkType: chillingform.milkType,
            //     itemName: chillingform.itemName,
            //     unit: chillingform.unit,
            //     batch: chillingform.batch,
            //     mbrt: chillingform.mbrt,
            //     fat: chillingform.fat,
            //     snf: "",
            //     warehouse: chillingform.warehouse,
            //     temp: chillingform.temp,
            //     rate: chillingform.rate,
            //     transportRate: chillingform.transportRate,
            //     overCharge: chillingform.overCharge,
            //     acidity: chillingform.acidity,
            //     weight: chillingform.weight,
            //     inKg: chillingform.inKg,
            //     total: chillingform.total,
            //     remark: chillingform.remark,
            //     supplierWeight: chillingform.supplierWeight,
            //     vendorInvoiceDate: chillingform.vendorInvoiceDate,
            //     sFat: chillingform.sFat,
            //     sSnf: chillingform.sSnf,
            //     sAcidity: chillingform.sAcidity,
            //     sTemp: chillingform.sTemp,
            //     vehicalName: chillingform.vehicalName,
            //     vehicalNo: chillingform.vehicalNo,
            //     driverName: chillingform.driverName,
            //     driverNo: chillingform.driverNo,
            //     dremark: chillingform.dremark

            // }
            let newform = {
                "inwordId": chillingform.inwordId,
                "date": chillingform.date,
                "collectionType": chillingform.collectionType,
                "vendorName": chillingform.vendorName,
                "address": chillingform.address,
                "mobileNo": chillingform.mobileNo,
                "milkType": chillingform.milkType,
                "itemName": chillingform.itemName,
                "unit": chillingform.unit,
                "batch": chillingform.batch,
                "mbrt": chillingform.mbrt,
                "fat": chillingform.fat,
                "clr": chillingform.slr,
                "snf": "",
                "warehouse": chillingform.warehouse,
                "temp": chillingform.temp,
                "rate": chillingform.rate,
                "transportRate": chillingform.transportRate,
                "overCharge": chillingform.overCharge,
                "acidity": chillingform.acidity,
                "weight": chillingform.weight,
                "inKg": chillingform.inKg,
                "total": " ",
                "remark": chillingform.remark,
                "supplierWeight": chillingform.supplierWeight,
                "vendorInvoiceDate": chillingform.vendorInvoiceDate,
                "sFat": chillingform.sFat,
                "sSnf": chillingform.sSnf,
                "sAcidity": chillingform.sAcidity,
                "sTemp": chillingform.sTemp,
                "vehicalName": chillingform.vehicalName,
                "vehicalNo": chillingform.vehicalNo,
                "driverName": chillingform.driverName,
                "driverNo": chillingform.driverNo,
                "dremark": chillingform.dremark
            }
            console.log(newform, "save form")
            axios.post('http://192.168.0.102:8080/savePurchesInvoice', newform).then((data) => {
                alert(data.data.message)
                console.log(data.data)
            }).catch((e) => {
                console.log("error => ", e)
            })





        } catch (e) {
            console.log("Error => ", e)
        }
    }
    const saveupdate = () => {
        // let updateform = {
        //     id: String(updatecenterform.id),
        //     inwordId: String(updatecenterform.inwordId),
        //     date: String(updatecenterform.date),
        //     collectionType: String(updatecenterform.collectionType),
        //     vendorName: String(vendor),
        //     address: String(updatecenterform.address),
        //     mobileNo: String(updatecenterform.mobileNo),
        //     milkType: String(selmilktype),
        //     itemName: String(collecttype),
        //     unit: String(updatecenterform.unit),
        //     batch: String(updatecenterform.batch),
        //     mbrt: String(updatecenterform.mbrt),
        //     fat: String(updatecenterform.fat),
        //     snf: String(updatecenterform.snf),
        //     clr:"",
        //     warehouse: String(collecttype),
        //     temp: String(updatecenterform.temp),
        //     rate: String(updatecenterform.rate),
        //     transportRate: String(updatecenterform.transportRate),
        //     overCharge: String(updatecenterform.overCharge),
        //     acidity: String(updatecenterform.acidity),
        //     weight: String(updatecenterform.weight),
        //     inKg: String(updatecenterform.inKg),
        //     total: String(updatecenterform.total),
        //     remark: String(updatecenterform.remark),
        //     supplierWeight: String(updatecenterform.supplierWeight),
        //     vendorInvoiceDate: String(updatecenterform.vendorInvoiceDate),
        //     sFat: String(updatecenterform.sFat),
        //     sSnf: String(updatecenterform.sSnf),
        //     sAcidity: String(updatecenterform.sAcidity),
        //     sTemp: String(updatecenterform.sTemp),
        //     vehicalName: String(updatecenterform.vehicalName),
        //     vehicalNo: String(updatecenterform.vehicalNo),
        //     driverName: String(updatecenterform.driverName),
        //     driverNo: String(updatecenterform.driverNo),
        //     dremark: String(updatecenterform.dremark)
        // }
        let updateform = {

            "id": String(updatecenterform.id),
            "inwordId": String(updatecenterform.inwordId),
            "date": String(updatecenterform.date),
            "collectionType": String(updatecenterform.collectionType),
            "vendorName": String(updatecenterform.vendorName),
            "address": String(updatecenterform.address),
            "mobileNo": String(updatecenterform.mobileNo),
            "milkType": String(updatecenterform.milkType),
            "itemName": String(updatecenterform.itemName),
            "unit": String(updatecenterform.unit),
            "batch": String(updatecenterform.batch),
            "mbrt": String(updatecenterform.mbrt),
            "fat": String(updatecenterform.fat),
            "clr": String(updatecenterform.clr),
            "snf": "",
            "warehouse": String(updatecenterform.warehouse),
            "temp": String(updatecenterform.temp),
            "rate": String(updatecenterform.rate),
            "transportRate": String(updatecenterform.transportRate),
            "overCharge": String(updatecenterform.overCharge),
            "acidity": String(updatecenterform.acidity),
            "weight": String(updatecenterform.weight),
            "inKg": String(updatecenterform.inKg),
            "total": "",
            "remark": String(updatecenterform.remark),
            "supplierWeight": String(updatecenterform.supplierWeight),
            "vendorInvoiceDate": String(updatecenterform.vendorInvoiceDate),
            "sFat": String(updatecenterform.sFat),
            "sSnf": String(updatecenterform.sSnf),
            "sAcidity": String(updatecenterform.sAcidity),
            "sTemp": String(updatecenterform.sTemp),
            "vehicalName": String(updatecenterform.vehicalName),
            "vehicalNo": String(updatecenterform.vehicalNo),
            "driverName": String(updatecenterform.driverName),
            "driverNo": String(updatecenterform.driverNo),
            "dremark": String(updatecenterform.dremark)
        }
        console.log(updateform, " updateform")
        axios.post('http://192.168.0.102:8080/savePurchesInvoice', updateform).then((data) => {
            console.log(data.data)

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
    return (
        <>


            <div className='container-fluid'>
                <div className='text-center animationtxt' style={{ fontSize: '2rem' }}>Chilling Center</div>
                <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem' }}>
                    <div className='row'>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%', pointerEvents: updateid === "2" ? 'none' : 'auto' }}
                                    label="Invoice Id" className='txtsize' variant="standard" />
                            </ThemeProvider>

                        </div>
                        <div className='col-12  col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    onChange={(e) => {
                                        setchillingform({
                                            ...chillingform,

                                        })
                                    }}
                                    style={{ width: '95%' }}
                                    label={'Inward No'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <div>
                                InWard Date
                            </div>
                            <div>
                                <input
                                    value={chillingdata.date}
                                    onChange={(e) => {
                                        setchillingform({
                                            ...chillingform,
                                            date: e.target.value
                                        })
                                    }}
                                    style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                    type='date' />
                            </div>
                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <div>
                                Collection Type
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button
                                        style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                        className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            </div>
                        </div>
                    </div>

                    <div className='row  mt-3 p-1'>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <div>
                                Vendor Name
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button
                                        style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                        className="btn bg-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {updateid === "2" ? updatecenterform.vendorName : (chillingform.vendorName === '' ? 'Select' : chillingform.vendorName)}
                                        <div className='dropdown-toggle'>

                                        </div>
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            vendorname.map((item, i) => (
                                                <>
                                                    <li
                                                        onClick={() => {
                                                            if (updateid !== "2") {
                                                                setchillingform({
                                                                    ...chillingform,
                                                                    vendorName: item.name
                                                                })
                                                            } else {
                                                                setupdatechilling({
                                                                    ...updatecenterform,
                                                                    vendorName: item.name
                                                                })
                                                            }
                                                        }}
                                                        className='dropdown-item'>{item.name}</li>
                                                </>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-2 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    value={updateid === "2" ? updatecenterform.address : chillingform.address}
                                    onChange={(e) => {
                                        if (updateid !== "2") {
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
                                    style={{ width: '95%' }}
                                    label={'Address'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>
                        </div>
                        <div className='col-12 mt-2 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    value={updateid === "2" ? updatecenterform.mobileNo : chillingform.mobileNo}
                                    onChange={(e) => {
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
                                    style={{ width: '95%' }}
                                    label={'Mobile No'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>
                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <div>
                                Milk Type
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button
                                        style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                        className="btn bg-white " type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <div>
                                Item Name
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button
                                        style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                        className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            </div>
                        </div>
                        <div className='col-12 mt-2 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Unit'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-2 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Batch'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'MBRT'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                    </div>

                    <div className='row  mt-3 p-2'>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    type='number'
                                    value={updateid === "2" ? updatecenterform.fat : chillingform.fat}
                                    onChange={(e) => {
                                        setfatcal(e.target.value)
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
                                    style={{ width: '95%' }}
                                    label={'FAT'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    type='number'
                                    value={updateid === "2" ? updatecenterform.clr : chillingform.slr}
                                    onChange={(e) => {
                                        setslrcalc(e.target.value)
                                        if (updateid !== "2") {
                                            setchillingform({
                                                ...chillingform,
                                                slr: e.target.value
                                            })
                                        }
                                        else {
                                            setupdatechilling({
                                                ...updatecenterform,
                                                clr: e.target.value
                                            })
                                        }
                                    }}
                                    style={{ width: '95%' }}
                                    label={'SLR'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    contentEditable={false}
                                    value={updateid === "2" ? (updatecenterform.snf === '' ? parseInt(updatecenterform.clr) / 4 + 0.2 * parseInt(updatecenterform.fat) + 0.66 : updatecenterform.snf) : parseInt(chillingform.slr) / 4 + 0.2 * parseInt(chillingform.fat) + 0.66}
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
                                    style={{ width: '95%' }}
                                    label={'SNF'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-0 col-md-3 col-sm-12'>
                            <div>
                                Warehouse
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button
                                        style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                        className="btn bg-white " type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                            </div>
                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'temp'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Rate'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Transport Rate'}
                                    className='txtsize' variant="standard"
                                />

                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Over Charge'}
                                    className='txtsize' variant="standard"
                                />

                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Acidity'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                    </div>

                    <div className='row  mt-3 p-2'>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Weight'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    value={updateid === "2" ? updatecenterform.inKg : chillingform.inKg}
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
                                    style={{ width: '95%' }}
                                    label={'In Kg'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    value={updateid === "2" ? updatecenterform.total : chillingform.total}
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
                                    style={{ width: '95%' }}
                                    label={'Total'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Remarks'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                    </div>
                </div>


                {/* second section */}
                <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem', marginTop: '3rem' }}>
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
                            {/* <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                                value={chillingform.vendorInvoiceDate}
                                onChange={(e) => {

                                    setchillingform({
                                        ...chillingform,
                                        vendorInvoiceDate: e.target.value
                                    })
                                }}
                                style={{ width: '95%' }}
                                label={'Vendor Invoice Date'}
                                className='txtsize' variant="standard"
                            />
                        </ThemeProvider> */}

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
                </div>

                {/* third section */}
                <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem', marginTop: '3rem' }}>
                    <div className='row'>
                        <div className='col-12 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Vehicle Name'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Vehicle No'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Driver Name'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Driver No'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12 mt-1 col-md-3 col-sm-12'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
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
                                    style={{ width: '95%' }}
                                    label={'Remark'}
                                    className='txtsize' variant="standard"
                                />
                            </ThemeProvider>

                        </div>
                        <div className='col-12 col-md-3 mt-1 col-sm-12'>

                        </div>
                        <div className='col-12 col-md-3 col-sm-12'>

                        </div>
                        <div className='col-12 col-md-3 col-sm-12'>

                        </div>
                    </div>


                </div>

                <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem', marginTop: '3rem' }}>
                    <div className='row'>

                        <div className='col-12 col-md-3 col-sm-12'>
                            <button className='bg-primary border border-none text-white'>Show More</button>
                        </div>
                        {
                            loader &&
                            <CircularProgress />}
                        {
                            <div className='ms-lg-5' style={{ width: '84vw', overflowX: 'scroll', overflowY: 'scroll' }}>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">inwordId</th>
                                            <th scope="col">collectionType</th>
                                            <th scope="col">vendorName</th>

                                            <th scope="col">address</th>
                                            <th scope="col">mobileNo</th>
                                            <th scope='col'>milkType</th>
                                            <th scope='col'>date</th>
                                            <th scope='col'>itemName</th>
                                            <th scope='col'>unit</th>
                                            <th scope='col'>batch</th>
                                            <th scope='col'>mbrt</th>
                                            <th scope='col'>fat</th>
                                            <th scope='col'>snf</th>
                                            <th scope='col'>warehouse</th>
                                            <th scope='col'>temp</th>
                                            <th scope='col'>rate</th>
                                            <th scope='col'>transportRate</th>
                                            <th scope='col'>overCharge</th>
                                            <th scope='col'>acidity</th>
                                            <th scope='col'>weight</th>
                                            <th scope='col'>inKg</th>
                                            <th scope='col'>total</th>
                                            <th scope='col'>remark</th>
                                            <th scope='col'>supplierWeight</th>
                                            <th scope='col'>vendorInvoiceDate</th>
                                            <th scope='col'>sFat</th>
                                            <th scope='col'>sSnf</th>
                                            <th scope='col'>sAcidity</th>
                                            <th scope='col'>sTemp</th>
                                            <th scope='col'>vehicalName</th>
                                            <th scope='col'>vehicalNo</th>
                                            <th scope='col'>driverName</th>
                                            <th scope='col'>driverNo</th>
                                            <th scope='col'>dremark</th>
                                            <th scope='col'>fDate</th>
                                            <th scope='col'>tDate</th>
                                            <th scope='col'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            chillingdata.filter((da)=>{
                                                 if(dates.fdate === '' || dates.tdate === '')
                                                 {
                                                    return da
                                                 }else if(da.date >=dates.fdate &&  da.date  <= dates.tdate)
                                                 {
                                                    return da
                                                 }
                                            }).map((item, i) => (
                                                <tr>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.inwordId}</td>
                                                    <td>{item.collectionType}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.vendorName}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.mobileNo}</td>
                                                    <td>{item.milkType}</td>
                                                    <td>{item.itemName}</td>
                                                    <td>{item.unit}</td>
                                                    <td>{item.batch}</td>
                                                    <td>{item.mbrt}</td>
                                                    <td>{item.fat}</td>
                                                    <td>{item.snf}</td>
                                                    <td>{item.warehouse}</td>
                                                    <td>{item.temp}</td>
                                                    <td>{item.rate}</td>
                                                    <td>{item.transportRate}</td>
                                                    <td>{item.overCharge}</td>
                                                    <td>{item.acidity}</td>
                                                    <td>{item.weight}</td>
                                                    <td>{item.inKg}</td>
                                                    <td>{item.total}</td>
                                                    <td>{item.remark}</td>
                                                    <td>{item.supplierWeight}</td>
                                                    <td>{item.vendorInvoiceDate}</td>
                                                    <td>{item.sFat}</td>
                                                    <td>{item.sSnf}</td>
                                                    <td>{item.sAcidity}</td>
                                                    <td>{item.sTemp}</td>
                                                    <td>{item.vehicalName}</td>
                                                    <td>{item.vehicalNo}</td>
                                                    <td>{item.driverName}</td>
                                                    <td>{item.driverNo}</td>
                                                    <td>{item.dremark}</td>
                                                    <td>{item.fDate}</td>
                                                    <td>{item.tDate}</td>
                                                    <td className='text-center d-flex mt-2'><DeleteIcon
                                                        onClick={() => delet(item.id)}
                                                        style={{ color: 'red', fontSize: '1rem' }} className='' />
                                                        <EditIcon
                                                            onClick={() => editform(item, "2")}
                                                            style={{ color: 'green', fontSize: '1rem' }} className='' />
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                        <div className='col-12 col-md-3 col-sm-12'>
                            <div>
                                From Date
                            </div>
                            <div>
                                <input type='date'
                                    onChange={(e) => {
                                        setdates({
                                            ...dates,
                                            fdate: e.target.value
                                        })
                                    }}
                                    style={{ width: '80%' }}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-3 col-sm-12'>
                            <div>
                                To Date
                            </div>
                            <div>
                                <input type='date'
                                    onChange={(e) => {
                                        setdates({
                                            ...dates,
                                            tdate: e.target.value

                                        })
                                    }}
                                    style={{ width: '80%' }}
                                />
                            </div>
                            {/* <button onClick={()=>findbydate()}>find by date</button> */}
                        </div>
                    </div>
                </div>

                <div className='container mt-3' >
                    {
                        updateid === "2" ? <button
                            onClick={() => saveupdate()}
                            className='bg-primary border border-none text-white mx-3'>Update</button> :
                            <button
                                onClick={() => save()}
                                className='bg-primary border border-none text-white mx-3'>Save</button>}
                    <button className='bg-primary border border-none text-white mx-3'>Print</button>
                    <button className='bg-primary border border-none text-white mx-3'>Clear</button>
                </div>
            </div>
        </>
    )
}

export default Chillingcom