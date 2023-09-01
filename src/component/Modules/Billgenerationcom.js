import React, { useEffect, useRef, useState } from 'react'

import axios from 'axios'
import { useReactToPrint } from 'react-to-print';
import './Billgeneration.css'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { convertLength } from '@mui/material/styles/cssUtils';
import Billtablecom from './sansthamilk/Billtablecom';



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
  const [geneartebill, setgeneartebill] = useState(false)
  const [suppid, setsuppid] = useState(JSON.parse(localStorage.getItem('suppid')))
  const [selectmilktype, setselectmilktype] = useState('')
  const [code,setcode] = useState('')
  const [fcode,setfcode] = useState()
  const [tcode,settcode] = useState()
  const [showTable, setshowtable] = useState(false)
  const [data, setdata] = useState([])

  const [form, setform] = useState({
    from:'',
    to:''
  })
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
  const billgenerate = React.forwardRef((ref, props) => {
    return (
      <h1>Hello</h1>
    )
  })
  const [collectiontype, setcollectiontype] = useState(' ')
  const collectiontypes = [
    {
      id: 1,
      name: 'Evening'
    },
    {
      id: 2,
      name: 'Morning'
    }
  ]

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
    getbillgenerationdata()
    console.log(suppid)
  }, [])
  const outerTheme = useTheme();
  return (
    <>


      <div className='container-fluid'>

        <div className='text-center' style={{ fontSize: '2rem' }}>Bill Generation</div>

        <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray', padding: '0.5rem 0.9rem' }}>
          <hr></hr>
          <div className='row'>
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  value={code}
                  onChange={(e) => {
                   setcode(e.target.value)
                  }}
                  style={{ width: '100%' }}
                  label="Supplier ID" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  value={fcode}
                  onChange={(e) => {
                   setfcode(e.target.value)
                  }}
                  style={{ width: '100%' }}
                  label="from code" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>

            <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  value={tcode}
                  onChange={(e) => {
                    settcode(e.target.value)
                  }}
                  style={{ width: '100%' }}
                  label="to code" className='txtsize' variant="standard" />
              </ThemeProvider>
            </div>
           
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
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
                  type='date' style={{width:'100%'}} />
              </ThemeProvider>
            </div>
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
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
                  type='date' style={{width:'100%'}} />
              </ThemeProvider>
            </div>

          </div>





          <div className="row">
            <div className='col-12 bg-light my-3 col-md-1'>
              <button
                className='bg-primary border border-none border-radius-rounded text-white'
                onClick={() => setshowtable(!showTable)}
              >
                OK
              </button>
            </div>

            <div className='col-12 bg-light my-3 col-md-2 '>

              <button
                onClick={handleprint}
                className='bg-primary text-center border border-none border-radius-rounded text-white' >
                Genearte Bill
              </button>
            </div>


            <Billtablecom code={code} fcode={fcode} tcode={tcode} ref={componentRef} suppid={suppid} form={form} data={data} setdata={setdata} />

          </div>


        </div>
      </div>
    </>
  )
}

export default Billgenerationcom;