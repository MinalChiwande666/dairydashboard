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

  const [showTable, setshowtable] = useState(false)
  const [data , setdata] = useState([])

  const [form,setform] = useState({
   "id": "",
	 "supplier": "",
   "code": "",
	  "qty": "",
     "fatRate": "",
     "snfRate": "",
	  "fat": "",
	  "snf" : "",
	 "milk" : "",
	 "milkRate": "",
	 "netAmount": "",
	  "date" : "",
	 "shift" : "",
	"Route" : "",
	"collector" : "",
	 "fDate" : "",
	 "tDate" : "",
   "fromCode": "",
   "toCode": "",
   "clr": ""
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

      function getbillgenerationdata(){
        fetch("http://localhost:8080/getAllMilkPurchase").then((res)=>{
             return res.json()
        }).then((data)=>{
          console.log(data)
          setdata(data)
        })
      }

      const savedata = ()=>{
        console.log(form , "form =>")
        fetch("http://localhost:8080/saveMilkPurchase",{
          method:"POST",
          headers:{
            'content-Type':'application/json'
          },
          body:JSON.stringify(form)
        }).then((fdata)=>{
          return fdata.json()
        }).then((getfdata)=>{
          console.log(getfdata, "response from server...")
          if(getfdata.message === 'data saved......|||')
          {
            getbillgenerationdata()
          }
        })
      }

      
    useEffect(()=>{
getbillgenerationdata()
    },[])
    const outerTheme = useTheme();
    return(
        <>

        
        <div className='container-fluid'>
        <div className='text-center' style={{fontSize:'2rem'}}>Bill Generation</div>
        
        <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
        <hr></hr>
        <div className='row'>
        <div className='col-12 mt-3 col-md-3 col-sm-12'>
        <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField 
                    value={form.code}
                    onChange={(e)=>{
                      setform({
                        ...form,
                        code:e.target.value
                      })
                    }}
                      style={{ width: '30%' }}
                      label="Supplier ID" className='txtsize' variant="standard" />
                  </ThemeProvider>
         </div>
         <div className='col-12 mt-4 col-md-3 col-sm-12'>
        
         </div>
         </div>
         <hr></hr>
        <div className="row">
             
             
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <div>
                    <label className="fontsize">Bill Date</label>
                  </div>
                  <input 
                  value={form.date}
                  onChange={(e)=>{
                    setform({
                      ...form,
                      date:e.target.value
                    })
                  }}
                  type='date' />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <div className="dropdown">
                  <label className="fontsize">Milk Type</label>
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {form.milk === "" ? "Select MilkType " : form.milk}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      selectmilktypes.map((item, i) => (
                        <li onClick={() => setform({
                          ...form,
                          milk:item.name
                        })}>{item.name}</li>
                      ))
                    }


                  </ul>
                </div>
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                
              </div>

              <div className='col-12 mt-4 col-md-3 col-sm-12'>
                
                </div>
            </div>
            
            <hr></hr>
             <div className="row">
             
              
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              
              </div>
              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              
              </div>

              <div className='col-12 mt-4 col-md-3 col-sm-12'>
              
                </div>
            </div>


            <div className="row">

             
             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             
             </div>
             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             
             </div>
             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             
             </div>

             <div className='col-12 mt-4 col-md-3 col-sm-12'>
             
               </div>
           </div>


           <div className="row">
             
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <div>
                    <label className="fontsize">From Date</label>
                  </div>
                  <input 
                  value={form.fDate}
                  onChange={(e)=>{
                    setform({
                      ...form,
                      fDate:e.target.value
                    })
                  }}
                  type='date' />
                </ThemeProvider>
              </div>
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <div>
                    <label className="fontsize">to Date</label>
                  </div>
                  <input 
                  value={form.tDate}
                  onChange={(e)=>{
                    setform({
                      ...form,
                      tDate:e.target.value
                    })
                  }}
                  type='date' />
                </ThemeProvider>
              </div>

              </div>

              <hr></hr>
              <div className="row">
              <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                  value={form.fromCode}
                  onChange={(e)=>{
                    setform({
                      ...form,
                      fromCode:e.target.value
                    })
                  }}
                    style={{ width: '80%' }}
                    label="From code" className='txtsize' variant="standard" />
                </ThemeProvider>
              </div>

              <div className='col-12 mt-3 col-md-3 col-sm-12'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                  value={form.toCode}
                  onChange={(e)=>{
                    setform({
                      ...form,
                      toCode:e.target.value
                    })
                  }}
                    style={{ width: '80%' }}
                    label="To code" className='txtsize' variant="standard" />
                </ThemeProvider>
                </div>
            </div>


            
            <div className="row justify-content-center">
              <div className='col-12 text-center bg-light mt-5 col-md-4'>
              <button
                   className='bg-primary border border-none border-radius-rounded text-white'
                   onClick={() => setshowtable(!showTable)}
                    >
                    OK
                  </button>
              </div>

              <div className='col-12 text-center bg-light mt-5 col-md-4 '>
              
                  <button
                   onClick={() => setgeneartebill(!geneartebill)}
                   className='bg-primary text-center border border-none border-radius-rounded text-white' >
                    Genearte Bill
                  </button>
                </div>
                
                {
                  showTable &&
                  <><div style={{width: '100vw', height: '50vh', overflowY: 'scroll' }}>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">code (Id)</th>
                          <th scope="col">supplier</th>
                          <th scope="col">date</th>
                          <th scope="col">shift</th>
                          <th scope="col">MilkType</th>
                          <th scope="col">qty</th>
                          <th scope="col">fat(%)</th>
                          <th scope="col">clr(%)</th>
                          <th scope="col">snf(%)</th>
                          <th scope="col">Milkrate</th>
                          <th scope="col">fatRate</th>
                          <th scope="col">snfRate</th>
                          <th scope="col">netAmount</th>

                        

                         

                        </tr>
                      </thead>
                      {
                  data.map((item,i)=>(
                   <tr>
                    <td>{item.code}</td>
                    <td>{item.supplier}</td>
                    <td>{item.date}</td>
                    <td>{item.shift}</td>
                    <td>{item.milk}</td>
                    <td>{item.qty}</td>
                    <td>{item.fat}</td>
                    <td>{item.clr}</td>
                    <td>{item.snf}</td>
                    <td>{item.milkRate}</td>
                    <td>{item.fatRate}</td>
                    <td>{item.snfRate}</td>
                    <td>{item.netAmount}</td>
                  
                   </tr>
                  ))
                }
                    </table>
                  </div><div>
                     
                    </div></>}
                <div className='col-12 text-center bg-light mt-5 col-md-4 '>
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