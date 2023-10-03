import React, { useState } from 'react'
import { TextField } from "@mui/material";

const PlantProfitLossCom = () => {

  return (
    <>
      <div className='p-2 sm-0'>
        <div className='container mt-4 PlantCont' style={{ height: "20vh" }}>
          <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Profit/Loss (From Collection)</h3></div>
          <div className='row mt-4'>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div className="d-flex flex-column">
                <label style={{ fontSize: "14px" }}>
                  From Date
                </label>
                <TextField
                  style={{ width: '95ch' }}
                  className='txtsize' variant="standard" type="date" />
              </div>
            </div>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div className="d-flex flex-column">
                <label style={{ fontSize: "14px" }}>
                  To Date
                </label>
                <TextField
                  style={{ width: '95ch' }}
                  className='txtsize' variant="standard" type="date" />
              </div>
            </div>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <button className='btn btn-primary mt-2 mb-sm-0 mb-2'>Search</button>
            </div>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <button className='btn btn-secondary mt-2 mb-sm-0 mb-2'>Export</button>
            </div>

          </div>
        </div>

        <div className='container mt-4 PlantModTableCont mb-3 p-0'>
          <table className="tablePlantMod table table-stripped">
            <thead>
              <tr>
                <th scope="col">sr.no</th>
                <th scope="col">Description</th>
                <th scope="col">Qty(From Supplier)</th>
                <th scope="col">Qty(From Supplier)</th>
                <th scope="col">Qty(In Plant)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className='text-center'>1</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='container mt-4 plantmodprofitlosstable mb-3 p-0' style={{ height: "27vh" }}>
          <table className="tablePlantMod table table-stripped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Milk</th>
                <th scope="col">Ghee</th>
                <th scope="col">Powder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Total Purchase From Suppliers</th>
                <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>150.000</button></td>
                <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>8.500</button></td>
                <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>8.000</button></td>
              </tr>
              <tr>
                <th scope="row">Total Received in Plants</th>
                <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>150.000</button></td>
                    <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>7.800</button></td>
                    <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>11.310</button></td>
              </tr>
              <tr>
                <th scope="row">Difference (Profit/Loss)</th>
                <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>0.000</button></td>
                    <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>-0.700</button></td>
                    <td><button className='btn btn-info text-white' style={{ width: "90px", fontWeight: "700" }}>3.310</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PlantProfitLossCom