
import React, { useEffect, useState ,useRef} from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import axios, { all } from "axios";
import { convertLength } from "@mui/material/styles/cssUtils";
import Farmertable from "./Farmertable";
import ReactToPrint, { useReactToPrint } from "react-to-print";

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
  const [showtable, setshowtable] = useState(false)
  const [allusers, setallusers] = useState([])
  const [total, settotal] = useState(0)
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

      for(let i=0;i<=data.length;i++)
      {
        console.log(Number(data[i]?.netAmount))
      }
    })
   
  }


  useEffect(() => {
    farmerpassbook()
    for(let i=0;i<=allusers.length;i++)
    {
      console.log(allusers[0]?.netAmount)
     

    }
   
  }, [])



  const handleprint = useReactToPrint({
    content:()=> componentref.current
  })
  return (
    <div class="container-fluid">
      <div style={{ fontSize: '2rem', }} className='text-center'> Farmer PassBook </div>

      <div className='container farmerPassbook '>
        <hr></hr>
        <div className='row justify-content-center'>
          <div className='col-12 mt-1 col-md-4 col-sm-12'>
            <div>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '90%' }}
                  label="Supplier Id" className='txtsize' variant="standard" onChange={(e) => {
                    setid({
                      ...id,
                      sid: parseInt(e.target.value)
                    }) ||
                      setsupplier({
                        ...supplier,
                        supname: (e.target.value)
                      })
                  }} />
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

            <div class="col-12 mt-5 col-md-3 col-sm-12">
              <button
                onClick={() => setshowtable(!showtable)}
                className='bg-primary border border-none border-radius-rounded text-white'>
                Show All
              </button>
            </div>



          </div>


          {
            showtable &&
           <Farmertable ref={componentref} allusers={allusers} sid={id} dates={dates}/>}

          <hr></hr>

          <div className='text-center d-flex'>

            <button
            onClick={handleprint}
            className='bg-info border border-none border-radius-rounded text-white'>
              Print
            </button>

            <button className='bg-info border border-none border-radius-rounded text-white'>
              Clear
            </button>
          </div>
        </div>
        <hr></hr>

      </div>

    </div>
  )
}

export default FarmerPassbookcom