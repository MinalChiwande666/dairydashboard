import React, { useEffect, useState } from 'react'

import axios from 'axios'

import './Billgeneration.css'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { convertLength } from '@mui/material/styles/cssUtils';

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

  const Billgenerationcom  = () =>{
    const [geneartebill, setgeneartebill] = useState(false)

  const[selectmilktype , setselectmilktype] = useState('')


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

      const [collectiontype , setcollectiontype] = useState(' ')
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
    const outerTheme = useTheme();
    return(
        <>

        
        <div className='container-fluid'>
        <div className='text-center' style={{fontSize:'2rem'}}>Bill Generation</div>
        <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>

        <div className='row'>
        <div className='col-12 mt-4 col-md-3 col-sm-12'>
        <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '30%' }}
                      label="Supplier ID" className='txtsize' variant="standard" />
                  </ThemeProvider>
         </div>
         <div className='col-12 mt-4 col-md-3 col-sm-12'>
        <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '50%' }}
                      label="Supplier Name" className='txtsize' variant="standard" />
                  </ThemeProvider>
         </div>
         </div>
        <div className="row">
             
             
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <div>
                    <label className="fontsize">Bill Date</label>
                  </div>
                  <input type='date' />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <div className="dropdown">
                  <label className="fontsize">Collection Type</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {collectiontype === "" ? "Select group " : collectiontype}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      collectiontypes.map((item, i) => (
                        <li onClick={() => setcollectiontype(item.name)}>{item.name}</li>
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
                    {selectmilktype === "" ? "Select group " : selectmilktype}
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
                
                </div>
            </div>

             <div className="row">
             
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="
                  FAT Rate" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="Rate" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="Qty" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>

              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="FAT" className='txtsize' variant="standard" />
                </ThemeProvider>
                </div>
            </div>


            <div className="row">
             
             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             <ThemeProvider theme={customTheme(outerTheme)}>
                 <TextField
                   style={{ width: '80%' }}
                   label="
                 SNF" className='txtsize' variant="standard" />
               </ThemeProvider>
             </div>
             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             <ThemeProvider theme={customTheme(outerTheme)}>
                 <TextField
                   style={{ width: '80%' }}
                   label="CLR" className='txtsize' variant="standard" />
               </ThemeProvider>
             </div>
             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             <ThemeProvider theme={customTheme(outerTheme)}>
                 <TextField
                   style={{ width: '80%' }}
                   label="SNF Rate" className='txtsize' variant="standard" />
               </ThemeProvider>
             </div>

             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             <ThemeProvider theme={customTheme(outerTheme)}>
                 <TextField
                   style={{ width: '80%' }}
                   label="Amount" className='txtsize' variant="standard" />
               </ThemeProvider>
               </div>
           </div>


           <div className="row">
             
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <div>
                    <label className="fontsize">From Date</label>
                  </div>
                  <input type='date' />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <div>
                    <label className="fontsize">to Date</label>
                  </div>
                  <input type='date' />
                </ThemeProvider>
              </div>

              </div>

              <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="From code" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>

              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    style={{ width: '80%' }}
                    label="To code" className='txtsize' variant="standard" />
                </ThemeProvider>
                </div>
            </div>

            <div className="row justify-content-center">
              <div className='col-12 text-center bg-dark mt-5 col-md-4'>
              <button
                   onClick={() => setgeneartebill(!geneartebill)}
                   className='bg-primary text-center border border-none border-radius-rounded text-white' >
                    Genearte Bill
                  </button>
              </div>

              <div className='col-12 text-center bg-dark mt-5 col-md-4 '>
              <button
                   className='bg-primary border border-none border-radius-rounded text-white' >
                    OK
                  </button>
                </div>

                <div className='col-12 text-center bg-dark mt-5 col-md-4 '>
              <button
                   className='bg-primary border border-none border-radius-rounded text-white' >
                    Close
                  </button>
                </div>
            </div>
         
            
        </div>
        </div>
        </>
    )
  }

  export default Billgenerationcom;