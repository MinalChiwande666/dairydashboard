import React, { useState } from 'react'

const PlantProfitLossCom = () => {

  return (
    <div className='container-fluid'>
      <div className='row bg-primary'>
        <div className='col-md-6 col-12'>
          <h4 className='text-white mt-3'>Profit/Loss (From Collection)</h4>
        </div>
        <div className='col-md-3 mb-2 col-12'>
          <div className='text-white' style={{ fontSize: "1.2rem" }}>From Date</div>
          <div>
            <input style={{ fontSize: '1.1rem', padding: "0.2rem" }} type='date' />
          </div>
        </div>
        <div className='col-md-3 mb-2 col-12'>
          <div className='text-white' style={{ fontSize: "1.2rem" }}>To Date</div>
          <div>
            <input style={{ fontSize: '1.1rem', padding: "0.2rem" }} type='date' />
          </div>
        </div>
      </div>


      <div className='mt-4' style={{ height: "40vh", overflow: 'scroll' }}>
        <table className="table mt-3 table-bordered border-primary" style={{ width: "100%", fontSize: "0.9rem" }}>
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
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className='row' style={{height:"35vh"}}>
          <div className="col-md-5 d-flex justify-content-center align-items-end">
            <button className='btn btn-secondary mb-2'>Export</button>
          </div>
          <div className='col-md-7'>
          <table className="table mt-4" style={{ width: "100%", fontSize: "0.9rem" }}>
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
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>150.000</button></td>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>8.500</button></td>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>8.000</button></td>
            </tr>
            <tr>
              <th scope="row">Total Received in Plants</th>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>150.000</button></td>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>7.800</button></td>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>11.310</button></td>
            </tr>
            <tr>
              <th scope="row">Difference (Profit/Loss)</th>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>0.000</button></td>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>-0.700</button></td>
              <td><button className='btn btn-info text-white' style={{width:"90px", fontWeight:"700"}}>3.310</button></td>
            </tr>
            
          </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantProfitLossCom