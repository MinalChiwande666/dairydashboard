import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Milkcollection.css'
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
  const Milkcollectionwithqccom  = () =>{
    const [data , setdata] = useState([])
    const [form,setform] = useState({})
    const [selectmilktype , setselectmilktype] = useState([])
    const [selectratetype ,setselectratetype] = useState([])
    const [selectwarehouse, setselectwarehouse] = useState('')
    const [showTable, setshowtable] = useState('')
    const ratetypes = [
      {
        id: 1,
        name: 'cow'
      },
      {
        id: 2,
        name: 'Buffelo'
      }
    ]

    const milktypes = [
      {
        id: 1,
        name: 'raw'
      },
      {
        id: 2,
        name: 'Fresh'
      }
    ]

    const [selectcollection , setselectcollection] = useState(' ')
    const collectiontype = [
      {
        id: 1,
        name: 'Evening'
      },
      {
        id: 2,
        name: 'Morning'
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
    const outerTheme = useTheme();
    return(
        <>
        <div className='container-fluid'>
        <div className='text-center' style={{fontSize:'2rem'}}>Milk Collection Ltr</div>
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
                <div className="dropdown">
                    <label className="fontsize">Milk Type</label>
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {selectmilktype === "" ? "select route" : selectmilktype}
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      {
                        milktypes.map((item, i) => (
                          <li onClick={() => setselectmilktype(item.name)}>{item.name}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                  
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                  
                </div>
              </div>
              <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
              <label style={{ width: '80%' ,fontSize: '0.8rem'}} >Collection Type</label>
                        <input type='date'/>
                
              </ThemeProvider>
              </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <div className="dropdown">
                    <label className="fontsize">Collection Type</label>
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {selectcollection === "" ? "select route" : selectcollection}
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      {
                        collectiontype.map((item, i) => (
                          <li onClick={() => setselectcollection(item.name)}>{item.name}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                  
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                  
                </div>
              </div>
              <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <div className="dropdown">
                    <label className="fontsize">Rate Type</label>
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {selectratetype === "" ? "select route" : selectratetype}
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      {
                        ratetypes.map((item, i) => (
                          <li onClick={() => setselectratetype(item.name)}>{item.name}</li>
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
                   Sanstha Name" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                   Address" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                  Mobile No." className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
              </div>
              <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <div className="dropdown">
                    <label className="fontsize">select Warehouse</label>
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {selectwarehouse === "" ? "select Warehouse" : selectwarehouse}
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
                   Sample No." className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                   Route Name" className='txtsize' variant="standard" />
                  </ThemeProvider>
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
                   Sanstha Code" className='txtsize' variant="standard" />
                  </ThemeProvider>
              </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                
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
                   CAN qty" className='txtsize' variant="standard" />
                  </ThemeProvider>
              </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                  Sour Can qty" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      Sour Weight" className='txtsize' variant="standard" />
                  </ThemeProvider>
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
                   Weight" className='txtsize' variant="standard" />
                  </ThemeProvider>
              </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
               
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
               
                </div>
              </div>

              <div className='text-center' style={{ fontSize: '2rem' }}>Summary Details</div>
              
              <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                   Number of Sanstha" className='txtsize' variant="standard" />
                  </ThemeProvider>
              </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
               
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                
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
                      Total Ltr." className='txtsize' variant="standard" />
                  </ThemeProvider>
              </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      Total kg" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      Total CAN" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      Sour Weight" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
              </div>

              <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      CM Ltr." className='txtsize' variant="standard" />
                  </ThemeProvider>
              </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      CM kg" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      BM Ltr" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      BM kg" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
              </div>
              <div className="row">
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              
              </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      From Date" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                      style={{ width: '80%' }}
                      label="
                      To Date" className='txtsize' variant="standard" />
                  </ThemeProvider>
                </div>
                <div className='col-12 mt-3 col-md-3 col-sm-12'>
                
                </div>
              </div>
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
                          <th scope="col">Inward Id</th>
                          <th scope="col">Sanstha Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Rate Type</th>
                          <th scope="col">Collection Type</th>
                          <th scope="col">Sample No.</th>
                          <th scope="col">CAN qty</th>
                          <th scope="col">Item</th>
                          <th scope="col">Soar CAN qty</th>
                          <th scope="col">Soar Weight</th>
                          <th scope="col">Batch Id</th>
                          <th scope="col">Entry By</th>
                          <th scope="col">Date of Entry</th>
                          

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
                    
                    </div></>}
                <div className='text-center d-flex'>
                  <button
                    //   onClick={
                    //     () => saveform()
                    //   }
                    className='bg-primary border border-none border-radius-rounded text-white' >
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
        </>
    )
  }

  export default Milkcollectionwithqccom;