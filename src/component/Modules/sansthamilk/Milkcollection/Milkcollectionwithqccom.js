import React, { useEffect, useState } from 'react'

import axios from 'axios'

// import './Milkcollection.css'
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
  const [form,setform] = useState({
    "inwardId": "",
    "inwardDate": "",
    "collectionType": "",
    "rateType": "",
    "dock": "",
    "sampleNo": "",
    "santhaCode": "",
    "weignt": "",
    "fat": "",
    "santhaName": "",
    "mobileno": "",
    "address": "",
    "rate": "",
    "snf": "",
    "rateChart": "",
    "degree": "",
    "type": "",
    "acidity": "",
    "temperature": "",
    "sourCanQty": "",
    "sourWeight": "",
    "reduceRate": "",
    "alcoholTest": "",
    "cobTest": "",
    "adulteration": "",
    "organolepticTest": "",
    "total": "",
    "milkType": ""
  })
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
      
      const [cobtests , setcobtests] = useState(' ')
      const cobtest = [
        {
          id: 1,
          name: 'Negative'
        },
        {
          id: 2,
          name: 'Positive'
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

      const [adulteration , setadulteration] = useState(' ')
      const adulterationt = [
        {
          id: 1,
          name: 'Negative'
        },
        {
          id: 2,
          name: 'Positive'
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

      const [organoleptictest , setorganoleptictest] = useState(' ')
      const organoleptictests = [
        {
          id: 1,
          name: 'Negative'
        },
        {
          id: 2,
          name: 'Positive'
        }
      ]

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


      function getmilkcollectionqcdata(){
        fetch("http://localhost:8080/getalldataCombCollectionQC").then((res)=>{
          return res.json()
        }).then((data)=>{
          console.log(data)
          setdata(data)
        })
      }
      const savedata = ()=>{
       console.log(form , "form =>")
         fetch('http://localhost:8080/saveCombinationCollectionWithQC',{
          method:'POST',
           headers:{
             'Content-Type':'application/json'
           },
           body:JSON.stringify(form)
         }).then((fdata)=>{
           return fdata.json()
         }).then((getfdata)=>{
           console.log(getfdata,"response from server....")
           if(getfdata.message === 'Data Saved...!!!')
           {
            getmilkcollectionqcdata()
           }
         })
      }
useEffect(()=>{
getmilkcollectionqcdata()
},[])
      const [showtable, setshowtable] = useState(false)
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
                value={form.inwardId}
                onChange={(e)=>{
                 
                  setform({
                    ...form,
                    inwardId:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Inward ID" className='txtsize' variant="standard" />
              </ThemeProvider>
                        
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <ThemeProvider theme={customTheme(customTheme(outerTheme))}>
                            <TextField value={form.santhaName} 
                            onChange={(e)=>{
                              
                              setform({
                                ...form,
                                santhaName:e.target.value
                              })
                            }}
                            style={{width: '80%'}} label="Sanstha Name"  className='txtsize' variant="standard"/>
                        </ThemeProvider>
                    </div>
                    <div className='col-12 mt-0 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">Select Type</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.type===""?"Select status":form.type}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                opentype.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                     type: item.name})}>{item.name}</li>
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
                                    {form.alcoholTest===""?"Select Test":form.alcoholTest}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                testtype.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      alcoholTest:item.name
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
              <label style={{ width: '80%' ,fontSize: '0.8rem'}} >Inward Date</label>
                <input 
                value={form.inwardDate}
                onChange={(e) =>{
                  
                  setform({
                    ...form,
                    inwardDate:e.target.value
                  })
                }}
                type='date'/>
               
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.mobileno}
                onChange={(e)=>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    mobileno:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Mobile no." className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                   <TextField
                   value={form.acidity}
                   onChange={(e)=>{
                    console.log(e.target.value)
                    setform({
                      ...form,
                      acidity:e.target.value
                    })
                   }}
                  style={{ width: '80%' }}
                  label="
                  Acidity" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">COB test</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.cobTest===""?"Select Test":form.cobTest}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                cobtest.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      cobTest:item.name
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
                  value={form.address}
                  onChange={(e)=>{
                    console.log(e.target.value)
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
                value={form.temperature}
                onChange={(e)=>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    temperature:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Tempreature" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">	Adulteration</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.adulteration===""?"Select Test":form.adulteration}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                adulterationt.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      adulteration:item.name
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
                  value={form.rate}
                  onChange={(e) =>{
                    console.log(e.target.value)
                    setform({
                      ...form,
                      rate:e.target.value
                    })
                  }}
                  style={{ width: '80%' }}
                  label="
                  Rate" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.sourCanQty}
                onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    sourCanQty:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Sour can qty" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <div className="dropdown">
                        <label className="fontsize">	Organoleptic Test</label>
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {form.organolepticTest===""?"Select Test":form.organolepticTest}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                { 
                                  organoleptictests.map((item,i)=>(
                                    <li onClick={()=>setform({
                                      ...form,
                                      organolepticTest:item.name
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
                    
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.snf}
                onChange={(e)=>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    snf:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  SNF" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.sourWeight}
                onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    sourWeight:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  SourWeight" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.total}
                onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    total:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Total" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
            </div>
            <div className="row">
            
                    
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.sampleNo}
                onChange={(e) => {
                  console.log(e.target.value)
                  setform({
                    ...form,
                    sampleNo:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Sample No" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                 value={form.rateChart}
                 onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    rateChart:e.target.value
                  })
                 }}
                  style={{ width: '80%' }}
                  label="
                  Rate Chart" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.reduceRate}
                onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    reduceRate:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Reduce Rate" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
           
                    </div>
            </div>

            <div className='row'>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.santhaCode}
                onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    santhaCode:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Sanstha Code" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
            </div>

            <div className='row'>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  value={form.weignt}
                  onChange={(e) =>{
                    console.log(e.target.value)
                    setform({
                      ...form,
                      weignt:e.target.value
                    })
                  }}
                  style={{ width: '80%' }}
                  label="
                  Weight" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>
            </div>

            <div className='row'>
            <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.fat}
                onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    fat:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  FAT" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                value={form.degree}
                onChange={(e) =>{
                  console.log(e.target.value)
                  setform({
                    ...form,
                    degree:e.target.value
                  })
                }}
                  style={{ width: '80%' }}
                  label="
                  Degree" className='txtsize' variant="standard" />
              </ThemeProvider>
                    </div>

                    <div className='col-12 mt-4 col-md-3 col-sm-12'>
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
            <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
              <div className='row'>
                <div className='col-12 col-md-3'>
                 
                </div>
              </div>
              <div className='row'>

              </div>


            </div>
         
            <div className='mt-5 '>
          <button
            onClick={() => setshowtable(!showtable)}
            className='bg-primary border border-none border-radius-rounded text-white'>
            Show Data
          </button>
          <input className='mx-5' type='date'/>
          <input className='mx-5' type='date'/>
          {
            showtable &&
            <><div style={{ height: '50vh', overflowY: 'scroll' }}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Inward Id</th>
                    <th scope="col">Code</th>
                    <th scope="col">Date</th>
                    <th scope="col">Rate Type</th>
                    <th scope="col">Sanstha Name</th>
                    <th scope="col">Collection Type</th>
                    <th scope="col">Sample No.</th>
                    <th scope="col">CAN Qty</th>
                    <th scope="col">FAT</th>
                    <th scope="col">Degree</th>
                    <th scope="col">SNF </th>
                    <th scope="col">Weight</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Total </th>
                    <th scope="col">Batch ID</th>
                    <th scope="col">Entry By</th>
                    <th scope="col">Date of Entry</th>
                    
                  </tr>
                </thead>
                {
                  data.map((item,i)=>(
                   <tr>
                    <td>{item.inwardId}</td>
                    <td></td>
                    <td>{item.inwardDate}</td>
                    <td>{item.rateType}</td>
                    <td>{item.santhaName}</td>
                    <td>{item.collectionType}</td>
                    <td>{item.sampleNo}</td>
                    <td>{item.sourCanQty}</td>
                    <td>{item.fat}</td>
                    <td>{item.degree}</td>
                    <td>{item.snf}</td>
                    <td>{item.weignt}</td>
                    <td>{item.rate}</td>
                    <td>{item.total}</td>
                    <td>{item.id}</td>
                    <td></td>
                    <td>{item.inwardDate}</td>
                   </tr>
                  ))
                }
              </table>
            </div><div>
                
              </div></>}
          <div className='text-center d-flex'>
            
          <button className='bg-primary border border-none border-radius-rounded text-white' onClick={() =>savedata()}>
            Save
            </button>
            <button className='bg-primary border border-none border-radius-rounded text-white'>
              Print
            </button>
            <button className='bg-primary border border-none border-radius-rounded text-white' onClick={() =>setform({
               "inwardId": "",
               "inwardDate": "",
               "collectionType": "",
               "rateType": "",
               "dock": "",
               "sampleNo": "",
               "santhaCode": "",
               "weignt": "",
               "fat": "",
               "santhaName": "",
               "mobileno": "",
               "address": "",
               "rate": "",
               "snf": "",
               "rateChart": "",
               "degree": "",
               "type": "",
               "acidity": "",
               "temperature": "",
               "sourCanQty": "",
               "sourWeight": "",
               "reduceRate": "",
               "alcoholTest": "",
               "cobTest": "",
               "adulteration": "",
               "organolepticTest": "",
               "total": "",
               "milkType": ""
            })}>
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