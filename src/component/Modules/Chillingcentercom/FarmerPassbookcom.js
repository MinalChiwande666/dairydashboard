import React, { useEffect, useState, useRef } from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import axios, { all } from "axios";
import { convertLength } from "@mui/material/styles/cssUtils";
import Farmertable from "./Farmertable";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


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



const FarmerPassbookcom = () => {
  const [togg, settogg] = useState(false)
  const [showtable, setshowtable] = useState(false)
  const [allusers, setallusers] = useState([])
  const [total, settotal] = useState(0)
  const [suppId, setSuppId] = useState([])
  const [supplierId, setSupplierId] = useState('')
  const outerTheme = useTheme()
  const [dates, setdates] = useState({
    fdate: '',
    tdate: ''
  })
  const [id, setid] = useState({
    sid: ''
  })

  const [supplier, setsupplier] = useState({
    supname: ''
  })

  const componentref = useRef()
  function farmerpassbook() {
    fetch("http://103.38.50.113:8080/DairyApp/getAllMilkPurchase").then((res) => {
      return res.json()
    }).then((data) => {

      setallusers(data)

      for (let i = 0; i <= data.length; i++) {
        console.log(Number(data[i]?.netAmount))
      }
    })

  }

  useEffect(() => {
    fetch('http://103.38.50.113:8080/DairyApp/getSupplierId').then((data) => {
      return data.json()
    }).then((res) => {
      console.log(res)
      setSuppId(res)
    })
  }, [])


  useEffect(() => {
    farmerpassbook()
    for (let i = 0; i <= allusers.length; i++) {
      console.log(allusers[0]?.netAmount)
    }

  }, [])



  const handleprint = useReactToPrint({
    content: () => componentref.current
  })




  return (
    <>

      <div className="p-2 sm-0">
        <div className="container mt-4 farmerpassbookCont">
          <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Farmer Passbook</h3></div>
          <div className="row mt-3">

            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <div>
                <TextField
                  variant='standard'
                  label="Supplier Id"
                  value={supplierId === '' ? '' : supplierId}
                  sx={{ width: "25ch" }}
                />
                {
                  togg ?
                    <div className='chillingselect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          suppId.map((item) => (
                            <li style={{ listStyle: 'none' }}
                              onClick={() => {
                                setSupplierId(item)
                                settogg(false)
                              }}
                            >{item}</li>
                          ))
                        }
                      </ul>
                    </div> : null}
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => settogg(!togg)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>

            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <div className="d-flex flex-column">
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <label style={{ fontSize: "14px" }}>
                    From Date
                  </label>
                  <TextField
                    style={{ width: '95ch' }}
                    className='txtsize' variant="standard" type="date" onChange={(e) => {
                      setdates({
                        ...dates,
                        fdate: e.target.value
                      })
                    }} />

                </ThemeProvider>
              </div>
            </div>

            <div className='col-12 col-lg-6 col-xl-4 col-md-6 d-flex justify-content-center align-items-center'>
              <div className="d-flex flex-column">
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <label style={{ fontSize: "14px" }}>
                    To Date
                  </label>
                  <TextField
                    style={{ width: '95ch' }}
                    className='txtsize' variant="standard" type="date" onChange={(e) => {
                      setdates({
                        ...dates,
                        tdate: e.target.value
                      })
                    }} />
                </ThemeProvider>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4" style={{ width: "100%" }}>
            <button className="btn btn-primary" onClick={() => setshowtable(!showtable)}>Show Table</button>
          </div>
        </div>

        {
          showtable &&
          <Farmertable ref={componentref} supplierId={supplierId} allusers={allusers} sid={id} dates={dates} />

        }

        <div className="container mt-3 d-flex text-center">
          <button onClick={handleprint} className='btn btn-info text-white'>Print</button>
          <button className='btn btn-info text-white mx-3'>Clear</button>
        </div>

      </div>


      {/* <div class="container-fluid">
        <div style={{ fontSize: '2rem', }} className='text-center'> Farmer PassBook </div>

        <div className='container farmerPassbook '>
          <hr></hr>
          <div className='row justify-content-center'>
            <div className='col-12 mt-2 col-md-4 col-sm-12'>
              <div>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  
                  <div>SupplierId</div>
                  <div>
                    <div className="dropdown">
                      <button
                        style={{ width: '100%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                        className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {supplierId === "" ? "Select" : supplierId}
                        <div className='dropdown-toggle'>
                        </div>
                      </button>
                      <ul className="dropdown-menu" style={{ cursor: "pointer", width: "100%" }}>
                        {
                          suppId.map((item) => (
                            <li
                              onClick={() => setSupplierId(item)
                              }
                              className='dropdown-item'>{item}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </ThemeProvider>
              </div>
            </div>

            <div className='col-12 mt-1 col-md-4 col-sm-12 '>
              <div>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <label style={{ fontSize: "13px" }}>
                    From Date
                  </label>
                  <TextField
                    style={{ width: '90%' }}
                    className='txtsize' variant="standard" type="date" onChange={(e) => {
                      setdates({
                        ...dates,
                        fdate: e.target.value
                      })
                    }} />

                </ThemeProvider>
              </div>
            </div>

            <div className='col-12 mt-1 col-md-4 col-sm-12 '>
              <div>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <label style={{ fontSize: "13px" }}>
                    To Date
                  </label>
                  <TextField
                    style={{ width: '90%' }}
                    className='txtsize' variant="standard" type="date" onChange={(e) => {
                      setdates({
                        ...dates,
                        tdate: e.target.value
                      })
                    }} />

                </ThemeProvider>
              </div>
            </div>


          </div>



          <div className='container'>



            <div class="row">
              <div class="col-12 mt-3 col-md-3 col-sm-12">
                <button
                  onClick={() => setshowtable(!showtable)}
                  className='btn btn-primary text-white'>
                  Show All
                </button>
              </div>
            </div>

            {
              showtable &&
              <Farmertable ref={componentref} supplierId={supplierId} allusers={allusers} sid={id} dates={dates} />
            }

            <hr></hr>

            <div className='text-center d-flex'>

              <button
                onClick={handleprint}
                className='btn btn-info text-white'>
                Print
              </button>

              <button className='btn btn-info text-white mx-3'>
                Clear
              </button>
            </div>
          </div>
          <hr></hr>

        </div>

      </div> */}
    </>

  )
}

export default FarmerPassbookcom