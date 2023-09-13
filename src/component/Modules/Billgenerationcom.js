import React, { useEffect, useRef, useState } from 'react'

// import axios from 'axios'
import { useReactToPrint } from 'react-to-print';
import './Billgeneration.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
// import { convertLength } from '@mui/material/styles/cssUtils';
import Billtablecom from './sansthamilk/Billtablecom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconButton } from '@mui/material';

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

const Billgenerationcom = () => {
  // const [geneartebill, setgeneartebill] = useState(false)
  const [suppid, setsuppid] = useState(JSON.parse(localStorage.getItem('suppid')))
  // const [selectmilktype, setselectmilktype] = useState('')
  const [drop, setdrop] = useState(false)
  const [code, setcode] = useState('')
  const [fcode, setfcode] = useState()
  const [tcode, settcode] = useState()
  const [showTable, setshowtable] = useState(false)
  const [data, setdata] = useState([])
  const [listno, setlistno] = useState(["Select"])
  const [listid, setlistid] = useState('')
  const [form, setform] = useState({
    from: '',
    to: ''
  })


  function getbillgenerationdata() {
    fetch("http://103.38.50.113:8080/DairyApp/getAllMilkPurchase").then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      setdata(data)
    })
    console.log("daya")
  }
  const componentRef = useRef()

  const handleprint = useReactToPrint({
    content: () => componentRef.current,
  })


  useEffect(() => {
    fetch('http://103.38.50.113:8080/DairyApp/getSupplierId').then((data) => {
      return data.json()
    }).then((res) => {
      console.log("list nos =>", res)
      setlistno([...listno, ...res])

    })
  }, [])

  useEffect(() => {
    getbillgenerationdata()
    console.log(suppid)
  }, [])



  const outerTheme = useTheme();


  return (
    <>
      <div className='p-2 p-sm-0'>
        <div className='container mt-4 billCont'>
          <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Bill Generation</h3></div>
          <div className='row mt-4'>
            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <div >
                <TextField
                  variant='standard'
                  label="Select Id"
                  value={listid === ""?"":listid}
                />

                {
                  drop ?
                    <div style={{ position: 'absolute', background: 'white', zIndex: '999', left: '50px', width: '200px', boxShadow: '5px 5px 5px 0px gray' }}>
                      <ul>
                        {
                          listno.map((item) => (
                            <li
                              style={{listStyle:'none'}}
                              onClick={() => {
                                setlistid(item)
                              }}
                            >{item}</li>
                          ))
                        }
                      </ul>
                    </div> : null}
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => setdrop(!drop)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>
            {/* <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <div style={{ fontSize: '0.7rem' }}>
                Supplier ID
              </div>
              <div class="dropdown">
                <button class="btn btn-light dropdown-toggle d-flex align-items-center justify-content-between" style={{ width: '16vw' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {listid === '' ? 'Select' : listid}
                </button>
                <ul class="dropdown-menu">
                  {
                    listno.map((item) => (
                      <li
                        className='dropdown-item'
                        onClick={() => {
                          setlistid(item)
                        }}
                      >{item}</li>
                    ))
                  }
                </ul>
              </div>
            
            </div> */}
            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={fcode} onChange={(e) => { setfcode(e.target.value) }} label="From Code" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={tcode} onChange={(e) => { settcode(e.target.value) }} label="To Code" variant="standard" />
              </Box>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              {/* <ThemeProvider theme={customTheme(outerTheme)}>
                <div>
                  <label className="fontsize">From Date</label>
                </div>
                <input
                  value={form.fDate}
                  onChange={(e) => {
                    setform({
                      ...form,
                      from: e.target.value
                    })
                  }}
                  type='date' style={{ width: '100%' }} />
              </ThemeProvider> */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label={'"From Date"'} />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <div>
                  <label className="fontsize">to Date</label>
                </div>
                <input
                  value={form.tDate}
                  onChange={(e) => {
                    setform({
                      ...form,
                      to: e.target.value
                    })
                  }}
                  type='date' style={{ width: '100%' }} />
              </ThemeProvider>
            </div>
          </div>
          <div className='container mt-4 mx-5 mb-2 mb-sm-0'>
            <button className='btn btn-primary' onClick={() => setshowtable(!showTable)}>Show Table</button>
            <button className='btn btn-primary mx-3' onClick={handleprint}>Generate Bill</button>
          </div>
        </div>

        <div>
          {
            showTable &&
            <Billtablecom code={code} fcode={fcode} tcode={tcode} ref={componentRef} suppid={suppid} form={form} listid={listid} data={data} setdata={setdata} />
          }
        </div>
      </div>



      {/* <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem' }}>
          <hr></hr>
          <div className='row mt-4'>
            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <div style={{ fontSize: '0.7rem' }}>
                Supplier ID
              </div>
              <div class="dropdown">
                <button class="btn btn-light dropdown-toggle d-flex align-items-center justify-content-between" style={{ width: '16vw' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {listid === '' ? 'Select' : listid}
                </button>
                <ul class="dropdown-menu">
                  {
                    listno.map((item) => (
                      <li
                        onClick={() => {
                          setlistid(item)
                        }}
                      ><a class="dropdown-item" href="#">{item}</a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={fcode} onChange={(e) => { setfcode(e.target.value) }} label="From Code" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={tcode} onChange={(e) => { settcode(e.target.value) }} label="To Code" variant="standard" />
              </Box>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <div>
                  <label className="fontsize">From Date</label>
                </div>
                <input
                  value={form.fDate}
                  onChange={(e) => {
                    setform({
                      ...form,
                      from: e.target.value
                    })
                  }}
                  type='date' style={{ width: '100%' }} />
              </ThemeProvider>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <div>
                  <label className="fontsize">to Date</label>
                </div>
                <input
                  value={form.tDate}
                  onChange={(e) => {
                    setform({
                      ...form,
                      to: e.target.value
                    })
                  }}
                  type='date' style={{ width: '100%' }} />
              </ThemeProvider>
            </div>
          </div>


          <div className="row">
            <div className='col-12 my-3 col-md-2'>
              <button
                className='btn btn-primary text-white'
                onClick={() => setshowtable(!showTable)}>
                Show Table
              </button>
            </div>

            <div className='col-12 my-3 col-md-2'>
              <button
                onClick={handleprint}
                className='btn btn-primary text-white' >
                Genearte Bill
              </button>
            </div>
            {
              showTable &&
              <Billtablecom code={code} fcode={fcode} tcode={tcode} ref={componentRef} suppid={suppid} form={form} listid={listid} data={data} setdata={setdata} />
            }
          </div>
        </div> */}
    </>
  )
}

export default Billgenerationcom;
