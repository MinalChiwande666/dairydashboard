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
const Milkcollectionmanaul  = () =>{
    const [data , setdata] = useState([])
    const [form,setform] = useState({})

    const [selectdock , setselectdock] = useState(' ')
      const selectdocks = [
        {
          id: 1,
          name: 'Good'
        },
        {
          id: 2,
          name: 'Normal'
        },
        {
          id:3,
          name: 'Bad'
        }
      ]

      const [milktype , setmilktype] = useState(' ')
      const milktypes = [
        {
          id: 1,
          name: 'Cow'
        },
        {
          id: 2,
          name: 'Buffelo'
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

      const [ratetype , setratetype] = useState(' ')
      const ratetypes = [
        {
          id: 1,
          name: 'Cow'
        },
        {
          id: 2,
          name: 'Buffelo'
        }
      ]
    const outerTheme = useTheme();
    const [showtable, setshowtable] = useState(false)
    return(
        <>
        <div className='container'>
            <div className='text-center'  style={{fontSize:'2rem'}}>Milk Collection</div>
            <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
            <div className="row">
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
            <ThemeProvider theme={customTheme(outerTheme)}>
            <label style={{ width: '80%' ,fontSize: '0.8rem'}} >Collection Date</label>
                        <input type='date'/>
                
              </ThemeProvider>
                </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Inward Date." className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">	Select Dock</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.selectdock===""?"Select Test":form.selectdock}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                selectdocks.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      selectdock:item.name
                                    })}>{item.name}</li>
                                ))
                               }
                                
                                 
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-3 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">	Milk Type</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.milkType===""?"Select Type":form.milkType}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                milktypes.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      milkType:item.name
                                    })}>{item.name}</li>
                                ))
                               }
                                
                                 
                                </ul>
                            </div>
                    </div>
            </div>
            <div className="row">
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
            <div className="dropdown">
                        <label className="fontsize">Collection Type</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.collectionType===""?"Select Test":form.collectionType}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                collectiontypes.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      collectionType:item.name
                                    })}>{item.name}</li>
                                ))
                               }
                                
                                 
                                </ul>
                            </div>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Sanstha Name." className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Route Name." className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">	Rate Type</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.rateType===""?"Select Test":form.rateType}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                  ratetypes.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      rateType:item.name
                                    })}>{item.name}</li>
                                ))
                               }
                                
                                 
                                </ul>
                            </div>
                            </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Address" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField
                    style={{ width: '80%' }}
                    label="Sample No" className='txtsize' variant="standard" />
                   </ThemeProvider>
                            </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Weight (LTR)" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Mobile No" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Sanstha Code" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>

                    </div>
                    <div className='row'>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="CAN Qty." className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Sour Can Qty." className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>   
                    </div>
                    <div className='row'>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Weight (KG)" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '80%' }}
                  label="Sour Weight" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>   
                    </div>
                    <div className='row'>
                    <div className='col-12 mt-5 col-md-3 col-sm-12'>
                    <button
                    onClick={() => setshowtable(!showtable)}
                    className='bg-primary border border-none border-radius-rounded text-white'>
                    Show Data
                   </button>
                    </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                    <label style={{ width: '80%' ,fontSize: '0.8rem'}} >From Date</label>
                        <input type='date'/>
               
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                    <label style={{ width: '80%' ,fontSize: '0.8rem'}} >To Date</label>
                    <input type='date'/>
                
              </ThemeProvider>
                    </div>   
                    </div>
                    {
                        showtable &&
                        <>
                        <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Inward Id</th>
                    <th scope="col">Sanstha Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Rate Type</th>
                    <th scope="col">Collection Type</th>
                    <th scope="col">Sample No.</th>
                    <th scope="col">CAN Qty</th>
                    <th scope="col">Item</th>
                    <th scope="col">Sour can qty</th>
                    <th scope="col">Sour weight</th>
                    <th scope ="col">Weight</th>
                    <th scope="col">Batch ID</th>
                    <th scope="col">Entry By</th>
                    <th scope="col">Date of Entry</th>
                    
                  </tr>
                </thead>
                {
                  data.map((item,i)=>(
                   <tr>
                    <td>{item.id}</td>
                    <td></td>
                    <td>{item.sansthaName}</td>
                    <td>{item.collectionDate}</td>
                    <td>{item.rateType}</td>
                    <td>{item.collectionType}</td>
                    <td>{item.sampleNo}</td>
                    <td>{item.sourCanQty}</td>
                    <td>{item.sourWeight}</td>
                    <td>{item.weightKg}</td>
                    <td>{item.snf}</td>
                    <td>{item.weignt}</td>
                    <td>{item.id}</td>
                    <td></td>
                    <td>{item.fdate}</td>
                    
                    
                   </tr>
                  ))
                }
              </table>
                        </>
                    }
            </div>
        </div>
        </>
    )
}

export default Milkcollectionmanaul;