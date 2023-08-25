import React, { useEffect, useState } from 'react'
import './sanstha.css'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'


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


const Santhsmstercom = () => {
  const [selecttype, setselecttype] = useState('')
  const [showTable, setshowtable] = useState(false)
  const [selectstate, setselectstate] = useState('')
  const [selectemployee, setselectemployee] = useState('')
  const [selectwarehouse, setselectwarehouse] = useState('')
  const [selectaccount, setselectaccount] = useState('')
  const [selectsansthagrp, setselectsansthagrp] = useState('')
  const [selectmilktype, setselectmilktype] = useState('')
  const [selectdc, setselectdc] = useState('')
  const [selectcm, setselectcm] = useState('')
  const [selectbm, setselectbm] = useState('')
  const [selecttaxtype, setselecttaxtype] = useState('')
  const [selectroute, setselectroute] = useState('')
  const [data, setdata] = useState([])
  const [form, setform] = useState({
    "address": "",
    "amountgroup": "",
    "area": "",
    "bmchart": "",
    "category": "",
    "chairmanname": "",
    "chillingcentre": "",
    "cinno": "",
    "city": "",
    "cmchart": "",
    "contactno": "",
    "contactperson": "",
    "debitorcredit": "",
    "district": "",
    "email": "",
    "employee": "",
    "factor": "",
    "gstno": "",
    "milktype": "",
    "openingbalance": "",
    "otherno": "",
    "paasaino": "",
    "pincode": "",
    "registrationdate": "",
    "registrationno": "",
    "sansthagroup": "",
    "santhaname": "",
    "secretaryname": "",
    "sslno": "",
    "state": "",
    "taluka": "",
    "taxtype": "",
    "type": "",
    "website": "",
    "grp": "",
    "accountno": "",
    "bankaccountname": "",
    "bankname": "",
    "branch": "",
    "depositebm": "",
    "depositecm": "",
    "fssaiexpirydate": "",
    "fssairegistrationdate": "",
    "ifsccode": "",
    "managementorcommisionbm": "",
    "managementorcommisioncm": "",
    "selectroute": "",
    "transportbm": "",
    "transportcm": ""
  })



  const selectaccounts = [
    {
      id: 1,
      name: 'sundry creditors'
    },
    {
      id: 2,
      name: 'xyz'
    }
  ]


  const selectwarehouses = [
    {
      id: 1,
      name: 'Warehouse1'
    },
    {
      id: 2,
      name: 'Warehouse2'
    }
  ]

  const selectemployees = [
    {
      id: 1,
      name: 'Employee1'
    },
    {
      id: 2,
      name: 'Employee2'
    }
  ]

  const selecttypes = [
    {
      id: 1,
      name: 'Active '
    },
    {
      id: 2,
      name: 'Inacive'
    }
  ]

  const selectstatss = [
    {
      id: 1,
      name: 'Maharashtra '
    },
    {
      id: 2,
      name: 'Andra Pradesh'
    },

    {
      id: 3,
      name: 'Arunachal Pradesh'
    }
    ,
    {
      id: 4,
      name: 'Asam'
    }
    ,
    {
      id: 4,
      name: 'Bihar'
    }
    ,
    {
      id: 4,
      name: 'Manipur'
    }

  ]

  const selectsansthagrps = [
    {
      id: 1,
      name: 'Member '
    },
    {
      id: 2,
      name: 'Director'
    }
  ]

  const selectmilktypes = [
    {
      id: 1,
      name: 'chill Milk'
    },
    {
      id: 2,
      name: 'Raw Milk'
    }
  ]

  const selectdecr = [
    {
      id: 1,
      name: 'credit'
    },
    {
      id: 2,
      name: 'Debit'
    }
  ]

  const selectcms = [
    {
      id: 1,
      name: 'cow rate'
    },
    {
      id: 2,
      name: 'Buffelo rate'
    }
  ]

  const selectcbs = [
    {
      id: 1,
      name: 'BM Rate CHART'
    },
    {
      id: 2,
      name: 'XYZ'
    }
  ]

  const selecttaxtypes = [
    {
      id: 1,
      name: 'TDS'
    },
    {
      id: 2,
      name: 'TCS'
    }
  ]

  const selectroutes = [
    {
      id: 1,
      name: 'Rahatni'
    },
    {
      id: 2,
      name: 'Baner'
    }
  ]

  function findallmasterdata() {
    fetch("http://localhost:8080/findallmasterdata").then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      setdata(data)
    })
  } const savedata = () => {
    console.log(form, "form =>")
    fetch('http://localhost:8080/saveSanstha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
      
    }).then((fdata) => {
      return fdata.json()
    }).then((getfdata) => {
      console.log(getfdata, "response from server....")
      if (getfdata.message === 'Data Saved...!!!') {
        findallmasterdata()
      }
    })
  }
  useEffect(() => {
    findallmasterdata()
  }, [])

  const exporttoexcel = async () => {
    await fetch('http://192.168.0.123:8080/accountMasterExportToExcel')
  }

  const outerTheme = useTheme();
  return (
    <>
      <div className="container-fluid">
        <div className='text-center' style={{ fontSize: '2rem' }}>Sanstha Master</div>
        <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem' }}>
          <div className="row">
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField value={form.id}
                  
                  onChange={(e)=>{
                    
                  setform({
                    ...form,
                    id:e.target.value
                  })
                  }}
                  style={{ width: '80%' }}
                  label="
                   ID" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.contactperson}

                onChange={(e)=>{
                  setform({
                    ...form,
                    contactperson:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   Contact Person" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.email}
                onChange={(e)=>{
                  setform({
                    ...form,
                    email:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   email ID" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <div className="dropdown">
                <label className="fontsize">Select status</label>
                <button
                  style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                  className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {form.type === "" ? "Select status" : form.type}
                  <div className='dropdown-toggle'>

                  </div>
                </button>
                <ul className="dropdown-menu">
                  {
                    selecttypes.map((item, i) => (
                     
                      <li onClick={()=>setform({
                        ...form,
                        type:item.name
                      })}>{item.name}</li>
                    ))
                  }


                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.santhaname}
                onChange={(e)=>{
                  setform({
                    ...form,
                    santhaname:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   Sanstha Name" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.contactno}
                onChange={(e)=>{
                  setform({
                    ...form,
                    contactno:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   Contact No" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.gstno}
                onChange={(e)=>{
                  setform({
                    ...form,
                    gstno:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   GST No" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.paasaino}
                onChange={(e)=>{
                  setform({
                    ...form,
                    paasaino:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   FSSAI No." className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
          </div>
          <div className="row">
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.address}
                onChange={(e)=>{
                  setform({
                    ...form,
                    address:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   Address" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.area}
                onChange={(e)=>{
                  setform({
                    ...form,
                    area:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   Area" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.taluka}
                onChange={(e)=>{
                  setform({
                    ...form,
                    taluka:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   Taluka" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.district}
                onChange={(e)=>{
                  setform({
                    ...form,
                    district:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   District" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
          </div>
          <div className="row">
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.city}
                onChange={(e)=>{
                  setform({
                    ...form,
                    city:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   City" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.pincode}
                onChange={(e)=>{
                  setform({
                    ...form,
                    pincode:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   Pincode No." className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.cinno}
                onChange={(e)=>{
                  setform({
                    ...form,
                    cinno:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   CIN No." className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.sslno}
                onChange={(e)=>{
                  setform({
                    ...form,
                    sslno:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                   SSL No." className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
          </div>
          <div className="row">
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <div className="dropdown">
                <label className="fontsize">Select state</label>
                <button
                  style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                  className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {form.state === "" ? "Select state" : form.state}
                  <div className='dropdown-toggle'>

                  </div>
                </button>
                <ul className="dropdown-menu">
                  {
                    selectstatss.map((item, i) => (
                      <li onClick={() =>setform({
                        ...form,
                        state:item.name
                      }) }>{item.name}</li>
                    ))
                  }


                </ul>
              </div>
            </div>

            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="
                  Category" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="
                  Group" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <div className="dropdown">
                <label className="fontsize">Employee</label>
                <button
                  style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                  className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {selectemployee === "" ? "Select employee " : selectemployee}
                  <div className='dropdown-toggle'>

                  </div>
                </button>
                <ul className="dropdown-menu">
                  {
                    selectemployees.map((item, i) => (
                      <li onClick={() => setselectemployee(item.name)}>{item.name}</li>
                    ))
                  }


                </ul>
              </div>
            </div>

            <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   Other No." className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   Website" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">	Chilling Centre/Cold Store</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectwarehouse === "" ? "Select employee " : selectwarehouse}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectwarehouses.map((item, i) => (
                        <li onClick={() => setselectwarehouse(item.name)}>{item.name}</li>
                      ))
                    }


                  </ul>
                </div>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                  Secretory Name" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
            </div>
            <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                  Registration No." className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-5 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <input type='date' />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                  Chairman Name" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">		Account Group</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectaccount === "" ? "Select group " : selectaccount}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectaccounts.map((item, i) => (
                        <li onClick={() => setselectaccount(item.name)}>{item.name}</li>
                      ))
                    }


                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">	Sanstha Group</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectsansthagrp === "" ? "select group" : selectsansthagrp}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectsansthagrps.map((item, i) => (
                        <li onClick={() => setselectsansthagrp(item.name)}>{item.name}</li>
                      ))
                    }

                  </ul>
                </div>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">Milk Type</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectmilktype === "" ? "select milk" : selectmilktype}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectmilktypes.map((item, i) => (
                        <li onClick={() => setselectmilktype(item.name)}>{item.name}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                  Factor" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                  Opening Balance." className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
            </div>
            <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">Debit/Credit</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectdc === "" ? "select card" : selectdc}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectdecr.map((item, i) => (
                        <li onClick={() => setselectdc(item.name)}>{item.name}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">CM chart</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectcm === "" ? "select cm" : selectcm}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectcms.map((item, i) => (
                        <li onClick={() => setselectcm(item.name)}>{item.name}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">BM chart</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectbm === "" ? "select bm" : selectbm}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectcbs.map((item, i) => (
                        <li onClick={() => setselectbm(item.name)}>{item.name}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                  <label className="fontsize">Tax Type</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selecttaxtype === "" ? "select Type" : selecttaxtype}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selecttaxtypes.map((item, i) => (
                        <li onClick={() => setselecttaxtype(item.name)}>{item.name}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className='text-center' style={{ fontSize: '2rem' }}>Bank Details</div>
            <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   Bank Name" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-1 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   Account no." className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   Branch Name" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   IFSC Code" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
            </div>
            <div className="row">
              <div className='col-12 mt-1 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   Bank Account Name" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-1 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   FASSAI Registration Date" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                   FASSAI EXPIRY DATE" className='txtsize' variant="standard" />
                </ThemeProvider>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>

                </div>
              </div>
              <div className="row">
                <div className='col-12 mt-1 col-md-3 col-sm-12'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                   Transport BM" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-1 col-md-3 col-sm-12'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                   Transport CM" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                  Management/commision BM" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                  Management/commision CM" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
              </div>
              <div className="row">
                <div className='col-12 mt-1 col-md-3 col-sm-12'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                  Deposit BM" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-1 col-md-3 col-sm-12'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                  Deposit CM" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>

                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>

                </div>
              </div>
              <div className='text-center' style={{ fontSize: '2rem' }}>Route Details</div>
              <div className="row">

                <div className='col-12 mt-4 col-md-3 col-sm-12'>

                </div>
                <div className='col-12 mt-6 col-md-6 col-sm-12'>
                  <div className="dropdown">
                    <label className="fontsize">Select Route</label>
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {selectroute === "" ? "select route" : selectroute}
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      {
                        selectroutes.map((item, i) => (
                          <li onClick={() => setselectroute(item.name)}>{item.name}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>

                <div className='col-12 mt-4 col-md-3 col-sm-12'>

                </div>
              </div>
              <div className='text-center' style={{ fontSize: '2rem' }}>Create Ledger</div>

              <table style={{ overflowX: 'scroll', width: '50vw', background: 'red' }} class="table table-bordered border-primary" >

                <thead>
                  <tr>
                    <th scope="col">sr.no</th>
                    <th scope="col">Sub Ledger Name</th>
                    <th scope="col">Group</th>
                    <th scope="col">Legder Account type</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">AMID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Commission </td>
                    <td>Direct Expenses</td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="Liabilities" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="commission" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="0" /></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Advance</td>
                    <td>Current Liabilities</td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="Liabilities" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="commission" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="0" /></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Deposit</td>
                    <td>Sundry Deposit</td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="Liabilities" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="commission" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="0" /></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Cattle Feed</td>
                    <td>Direct incomes</td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="Liabilities" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="commission" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="0" /></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Store</td>
                    <td>Direct incomes</td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="Liabilities" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="commission" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="0" /></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>By Product</td>
                    <td>Direct incomes</td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="Liabilities" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="commission" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="0" /></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Transport</td>
                    <td>Direct Expenses</td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="Liabilities" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="commission" /></td>
                    <td><input
                      style={{ width: '80%', fontSize: '0.8rem' }}
                      type='text' placeholder="0" /></td>
                  </tr>
                </tbody>

              </table>
              <div className='mt-5 '>
                <button
                  onClick={() => setshowtable(!showTable)}
                  className='bg-primary border border-none border-radius-rounded text-white'>
                  Show Data
                </button>
                {
                  showTable &&
                  <><div style={{ height: '50vh', overflowY: 'scroll' }}>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col"> Id</th>
                          <th scope="col">Chilling center Name</th>
                          <th scope="col">Opening balance</th>
                          <th scope="col">Debit/Credit</th>
                          <th scope="col">Address</th>
                          <th scope="col">Area</th>
                          <th scope="col">Contact Person</th>
                          <th scope="col">Contact no</th>
                          <th scope="col">Chilling Center</th>
                          <th scope="col">Sanstha group</th>
                          <th scope="col">Route</th>
                          <th scope="col">GST no</th>
                          <th scope="col">Entry By </th>
                          <th scope="col">State</th>

                        </tr>
                      </thead>
                      {
                        data.map((item, i) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.chillingcentre}</td>
                            <td>{item.openingbalance}</td>
                            <td>{item.debitorcredit}</td>
                            <td>{item.address}</td>
                            <td>{item.area}</td>
                            <td>{item.contactperson}</td>
                            <td>{item.contactno}</td>
                            <td>{item.chillingcentre}</td>
                            <td>{item.sansthagroup}</td>
                            <td>{item.selectroute}</td>
                            <td>{item.gstno}</td>
                            <td></td>
                            <td>{item.state}</td>
                          </tr>
                        ))
                      }
                    </table>
                  </div><div>
                      <button
                        onClick={() => exporttoexcel()}
                        className='bg-primary border border-none border-radius-rounded text-white'>
                        Export to Excel
                      </button>
                    </div></>}
                <div className='text-center d-flex'>
                  <button
                    //   onClick={
                    //     () => saveform()
                    //   }
                    className='bg-primary border border-none border-radius-rounded text-white' onClick={() =>savedata()}>
                    Save
                  </button>
                  <button className='bg-primary border border-none border-radius-rounded text-white'>
                    Print
                  </button>
                  <button className='bg-primary border border-none border-radius-rounded text-white'>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div />

        </div>
      </div>
    </>
  )
}
export default Santhsmstercom;


