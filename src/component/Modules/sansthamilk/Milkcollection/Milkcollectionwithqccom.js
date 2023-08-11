import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Milkcollection.css'
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
const Milkcollectionwithqccom  = () =>{
    const [status,setstatus] = useState('')
    const opentype = [
        {
          id: 1,
          name: 'Accepted'
        },
        {
          id: 2,
          name: 'Rejected'
        }
      ]

      const [test,settest] = useState('')
      const testtype = [
        {
          id: 1,
          name: 'Negative'
        },
        {
          id: 2,
          name: 'Positive'
        }
      ]
      const outerTheme = useTheme();
    return(
        <>
        <div className="container-fluid">
        <div className='text-center' style={{fontSize:'2rem'}}>Milk Collection with QC</div>
            <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
                
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
            <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="
                  Inward ID" className='txtsize' variant="standard" />
              </ThemeProvider>
                        
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(customTheme(outerTheme))}>
                            <TextField style={{width: '80%'}} label="Sanstha Name"  className='txtsize' variant="standard"/>
                        </ThemeProvider>
                    </div>
                    <div className='col-12 mt-0 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">Select status</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {status===""?"Select status":status}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                opentype.map((item,i)=>(
                                    <li onClick={()=>setstatus(item.name)}>{item.name}</li>
                                ))
                               }
                                
                                 
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-0 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">Alcohol test</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {test===""?"Select Test":test}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                testtype.map((item,i)=>(
                                    <li onClick={()=>settest(item.name)}>{item.name}</li>
                                ))
                               }
                                
                                 
                                </ul>
                            </div>
                    </div>
            </div>
                
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <label style={{ width: '80%' ,fontSize: '0.8rem'}} >Inward Date</label>
                <TextField
                  style={{ width: '80%' ,fontSize: '0.8rem'}}
                  type='date' className='Date' variant="standard" />
               
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="
                  Mobile no." className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Acidity
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        COB Test
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Negative</li>
                                 <li>positive</li>
                                </ul>
                            </div>
                    </div>
            </div>

            <div className="row">
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Collection Type
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Evening</li>
                                 <li>Morning</li>
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Address
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                            Temperature
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Adulteration Test
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Negative</li>
                                 <li>positive</li>
                                </ul>
                            </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-3 col-md-3 col-sm-12'>
            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rate Type
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>cow</li>
                                 <li>Buffelo</li>
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div className="fontsize">
                            Rate
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                    <div className="fontsize">
                           Temperature 
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     	Organoleptic Test
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Good</li>
                                 <li>Bad</li>
                                 <li>Normal</li>
                                </ul>
                            </div>
                    </div>
            </div>
                </div>
            
        </div>
        </>
    )
}

export default Milkcollectionwithqccom;