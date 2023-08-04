import React from 'react'
import dayjs from 'dayjs'
import './chilling.css'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
const Chillingcom = () => {
    const outerTheme = useTheme()
    const [collecttype, setcollecttype] = useState('')
    const [selmilktype, setselmilktype] = useState('')
    const [vendor, setvendor] = useState('')
    const [chillingform, setchillingform] = useState({
        inwordId: '',
        date: '',
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
        transportRate: '',
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
    const save = ()=>{
        console.log(chillingform,"chilling form")
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
        <div className='container-fluid'>
            <div className='text-center animationtxt' style={{ fontSize: '2rem' }}>Chilling Center</div>
            <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem' }}>
                <div className='row'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                                onChange={(e)=>{
                                    setchillingform(
                                        {
                                            ...chillingform,
                                            inwordId:e.target.value
                                        }
                                    )
                                }}
                                style={{ width: '95%' }}
                                label="Invoice Id" className='txtsize' variant="standard" />
                        </ThemeProvider>
                       
                    </div>
                    <div className='col-12  col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                             <TextField
                             onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Inward No'}
                             className='txtsize' variant="standard" 
                             />
                        </ThemeProvider>
                        {/* <div>
                            InWard No
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='date' />

                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            InWard Date
                        </div>
                        <div>
                            <input
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
                                    {collecttype === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        collection.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setcollecttype(item.name)}
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
                                    {vendor === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        vendorname.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setvendor(item.name)}
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
                             value={chillingform.address}
                             onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    address:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Address'}
                             className='txtsize' variant="standard" 
                             />
                        </ThemeProvider>
                    </div>
                    <div className='col-12 mt-2 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                             <TextField
                             value={chillingform.mobileNo}
                             onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    mobileNo:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
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
                                    {selmilktype === '' ? 'Select' : selmilktype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        milktype.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setselmilktype(item.name)}
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
                                    {collecttype === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        collection.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setcollecttype(item.name)}
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
                             value={chillingform.unit}
                             onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    unit:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Unit'}
                             className='txtsize' variant="standard" 
                             />
                        </ThemeProvider>
                        {/* <div>
                            Unit
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-2 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                             <TextField
                             value={chillingform.batch}
                             onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    batch:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Batch'}
                             className='txtsize' variant="standard" 
                             />
                        </ThemeProvider>
                        {/* <div>
                            Batch
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text' />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                             <TextField
                             value={chillingform.mbrt}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    mbrt:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'MBRT'}
                             className='txtsize' variant="standard" 
                             />
                        </ThemeProvider>
                        {/* <div>
                            MBRT
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text' />
                        </div> */}
                    </div>
                </div>

                <div className='row  mt-3 p-2'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                             value={chillingform.fat}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    fat:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'FAT'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Fat
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                             value={chillingform.snf}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    snf:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'SNF'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            SNF
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
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
                                    {collecttype === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        collection.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setcollecttype(item.name)}
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
                             value={chillingform.temp}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    temp:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'temp'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Temp
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text' />
                        </div> */}
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.rate}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    rate:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Rate'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Rate
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                           
                             value={chillingform.transportRate}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    transportRate:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Transport Rate'}
                             className='txtsize' variant="standard" 
                            />
                      
                        </ThemeProvider>
                        {/* <div>
                            Transport Rate
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            
                             value={chillingform.overCharge}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    overCharge:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Over Charge'}
                             className='txtsize' variant="standard" 
                            />
                           
                        </ThemeProvider>
                        {/* <div>
                            Over Charge
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.acidity}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    acidity:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Acidity'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Acidity
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div> */}
                    </div>
                </div>

                <div className='row  mt-3 p-2'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.weight}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    weight:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Weight'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Weight
                        </div>
                        <div>
                            <input
                                type='number'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            value={chillingform.inKg}
                            onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    inKg:e.target.value
                                })
                            }}
                            style={{width: '95%'}}
                             label={'In Kg'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            In Kg
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                             value={chillingform.total}
                             onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    total:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'In Kg'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Total
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            value={chillingform.remark}
                            onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    remark:e.target.value
                                })
                            }}
                            style={{width: '95%'}}
                             label={'In Kg'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Remark
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem', marginTop: '3rem' }}>
                <div className='row'>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.supplierWeight}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    supplierWeight:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Supplier Weight'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Supplier Weight
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.vendorInvoiceDate}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    vendorInvoiceDate:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Vendor Invoice Date'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Vendor Invoice Date
                        </div>
                        <div>
                            <input type='date'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.sFat}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    sFat:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'FAT'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            FAT
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.sSnf}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    sSnf:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'SNF'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            SNF
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.sAcidity}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    sAcidity:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'Acidity'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Acidity
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 col-md-3 mt-1 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                             value={chillingform.sTemp}
                             onChange={(e)=>{
                                
                                setchillingform({
                                    ...chillingform,
                                    sTemp:e.target.value
                                })
                             }}
                             style={{width: '95%'}}
                             label={'temp'}
                             className='txtsize' variant="standard" 
                            />
                        </ThemeProvider>
                        {/* <div>
                            Temp
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
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
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            value={chillingform.vehicalName}
                            onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    vehicalName:e.target.value
                                })
                            }}
                            style={{width: '95%'}}
                             label={'Vehicle Name'}
                             className='txtsize' variant="standard"
                            />
                        </ThemeProvider>
                        {/* <div>
                            Vehicle Name
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            value={chillingform.vehicalNo}
                            onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    vehicalNo:e.target.value
                                })
                            }}
                            style={{width: '95%'}}
                             label={'Vehicle No'}
                             className='txtsize' variant="standard"
                            />
                        </ThemeProvider>
                        {/* <div>
                            Vehicle No
                        </div>
                        <div>
                            <input type='date'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            value={chillingform.driverName}
                            onChange={(e)=>{

                                setchillingform({
                                    ...chillingform,
                                    driverName:e.target.value
                                })
                            }}
                            style={{width: '95%'}}
                             label={'Driver Name'}
                             className='txtsize' variant="standard"
                            />
                        </ThemeProvider>
                        {/* <div>
                            Driver Name
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                    <div className='col-12 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            value={chillingform.driverNo}
                            onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    driverNo:e.target.value
                                })
                            }}
                            style={{width: '95%'}}
                             label={'Driver No'}
                             className='txtsize' variant="standard"
                            />
                        </ThemeProvider>
                        {/* <div>
                            Driver No.
                        </div>
                        <div>
                            <input type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(outerTheme)}>
                            <TextField
                            value={chillingform.remark}
                            onChange={(e)=>{
                                setchillingform({
                                    ...chillingform,
                                    remark:e.target.value
                                })
                            }}
                            style={{width: '95%'}}
                             label={'temp'}
                             className='txtsize' variant="standard"
                            />
                        </ThemeProvider>
                        {/* <div>
                            Remarks
                        </div>
                        <div>
                            <textarea type='text'
                                style={{ width: '80%' }}
                            />
                        </div> */}
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
                    <div className='col-12 col-md-3 col-sm-12'>
                        <div>
                            From Date
                        </div>
                        <div>
                            <input type='date'
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
                                style={{ width: '80%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-3' >
                <button 
                onClick={()=>save()}
                className='bg-primary border border-none text-white mx-3'>Save</button>
                <button className='bg-primary border border-none text-white mx-3'>Print</button>
                <button className='bg-primary border border-none text-white mx-3'>Clear</button>
            </div>
        </div>
    )
}

export default Chillingcom