import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './BulkMilkEntry.css'

const PurRateContractMasterCom = () => {

  const [data, setData] = useState([])

  const deleteData = (i) =>{
    setData(data.slice(0,i))
  }


  return (
    <div className='container'>
      <h3 className='text-center' style={{ fontSize: '2rem' }}>Purchase Rate Contract Master</h3>
      <div className='row'>

        <div className='col-12 col-md-4 col-sm-12 mt-1'>
          <TextField style={{ width: "95%" }}
            id="standard-basic" label="Standard" variant="standard" />
        </div>

        <div className='col-12 col-md-4 col-sm-12 mt-1'>
          <div>Milk Type</div>
          <div>
            <div className="dropdown">
              <button
                style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                <div className='dropdown-toggle'>
                </div>
              </button>
              <ul className="dropdown-menu">
                <li className='dropdown-item'>Cow</li>
                <li className='dropdown-item'>Buffalo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-4 col-sm-12 mt-1'>
          <div>Select Type</div>
          <div>
            <div className="dropdown">
              <button
                style={{ width: '95%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">Select
                <div className='dropdown-toggle'>
                </div>
              </button>
              <ul className="dropdown-menu">
                <li className='dropdown-item'>Common</li>
                <li className='dropdown-item'>Supplier</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className='row'>

        <div className='col-12 col-md-4 col-sm-12 mt-4'>
          <TextField
            type='number'
            style={{ width: '95%' }}
            label={'Standard FAT'}
            className='txtsize' variant="standard"
          />
        </div>

        <div className='col-12 col-md-4 col-sm-12 mt-4'>
          <TextField
            type='number'
            style={{ width: '95%' }}
            label={'Standard SNF'}
            className='txtsize' variant="standard"
          />
        </div>

        <div className='col-12 col-md-4 col-sm-12 mt-4'>
          <TextField
            type='number'
            style={{ width: '95%' }}
            label={'Rate'}
            className='txtsize' variant="standard"
          />
        </div>
      </div>

      <div className='mt-3'>
        <table class="table table-bordered border-primary" style={{ width: "40%", fontSize: "0.8rem" }}>
          <thead>
            <tr>
              <th scope="col">sr.no</th>
              <th scope="col">FAT&nbsp;(min)</th>
              <th scope="col">FAT&nbsp;(max)</th>
              <th scope="col">Addition</th>
              <th scope="col">Subraction</th>
              <th scope="col"><AddCircleIcon onClick={() => (setData([...data, "hello"]))} /></th>
            </tr>
          </thead>
          <tbody>

            {
              data.map((item, i) => {
                return(
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <input type="text" style={{ width: "80%", fontSize: "0.8rem" }} />
                  </td>
                  <td>
                    <input type="text" style={{ width: "80%", fontSize: "0.8rem" }} />
                  </td>
                  <td>
                    <input type="text" style={{ width: "80%", fontSize: "0.8rem" }} />
                  </td>
                  <td>
                    <input type="text" style={{ width: "80%", fontSize: "0.8rem" }} />
                  </td>
                  <td><CancelIcon onClick={()=>{deleteData(i)}}/></td>
                </tr>
              )})
            }
          </tbody>
        </table>
      </div>

      <div className='mt-5'>
        <div className='row'>
          <div className='col-12 col-md-4 col-sm-12'>
            <button className='bg-primary border border-none border-radius-rounded text-white'>show Table</button>
          </div>

          <div className='col-12 col-md-4 col-sm-12'>
            <label>From Date</label>
            <input type="date" className='mx-3' />
          </div>

          <div className='col-12 col-md-4 col-sm-12'>
            <label>To Date</label>
            <input type="date" className='mx-3' />
          </div>
        </div>

        <div style={{ height: "35vh", overflow: 'scroll', marginTop: "10px" }}>
          <table className='table table-bordered border-primary' style={{ width: "100%", fontSize: "0.8rem" }}>
            <thead>
              <tr>
                <th scope='col'>sr.no</th>
                <th scope='col'>ID</th>
                <th scope='col'>Date</th>
                <th scope='col'>Milk Type</th>
                <th scope='col'>Type</th>
                <th scope='col'>Supplier</th>
                <th scope='col'>Std. FAT</th>
                <th scope='col'>Std. SNF</th>
                <th scope='col'>FAT / SNF</th>
                <th scope='col'>FAT / SNF Min</th>
                <th scope='col'>FAT / SNF Max</th>
                <th scope='col'>Addition</th>
                <th scope='col'>Subraction</th>
                <th scope='col'>Rate</th>
                <th scope='col'>Entry by</th>
                <th scope='col'>Date of Entry</th>
              </tr>
            </thead>
          </table>

        </div>
      </div>

      <div className='mt-3'>
        <div className='row'>
          <div className='col-2'>
            <button className='btn btn-primary'>Save</button>
          </div>
          <div className='col-2'>
            <button className='btn btn-primary'>View Rate Chart</button>
          </div>
          <div className='col-2'>
            <button className='btn btn-primary'>Clear</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PurRateContractMasterCom