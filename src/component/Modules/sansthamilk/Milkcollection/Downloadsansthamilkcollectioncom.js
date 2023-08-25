import React from "react";
import './Milkcollection.css'
import { useState } from "react";


const Downloadsansthamilkcollectioncom = () =>{
    const[showTable , setshowtable] = useState(false)
    const exporttoexcel = async () => {
        await fetch()
      }
    return(
        <>
       <div className="container-fluid">
       <div className="text-center" style={{fontSize:'36px'}}>Download Sanstha Milk Collection</div>
       <div className="container" style={{boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem'}}>
       <div className="row" >
            <div className='col-12 mt-3 col-md-4 col-sm-12'>  
            <div className="dropdown  d-flex">
                <label> Select Warehouse/Dock </label>
                                <button
                                    style={{ width: '40%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Warehouse1</li>
                                 <li>WareHouse2</li>
                                </ul>
                            </div>
                            
            </div>
            <div className='col-12 mt-3 col-md-4 col-sm-12'>  
            <lable>Date </lable>
            <input type="Date"/>
                            
            </div>
            <div className='col-12 mt-3 col-md-4 col-sm-12'>  
            <div className="dropdown  d-flex">
                <label>Collection Type </label>
                                <button
                                    style={{ width: '40%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Morning</li>
                                 <li>Evening</li>
                                 <li>Day</li>
                                 <li>Night</li>
                                </ul>
                            </div>
                            
            </div>
            </div>
            <div className="row">
            <div className='col-12 mt-3 col-md-4 col-sm-12'>
           <button style={{backgroundColor:"grey", fontSize: '1rem'}}  type="button" >show</button>
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
            <><div style={{ overflowY: 'scroll' }}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"> Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Milk Type</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Rate</th>
                    <th scope="col">FAT</th>
                    <th scope="col">SNF</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Can qty</th>
                    <th scope="col">Sour qty</th>
                    <th scope="col">Sour Weight</th>
                   
                   
                  </tr>
                </thead>
               
              </table>
            </div><div>
                <button
                  onClick={() => exporttoexcel()}
                  className='bg-primary border border-none border-radius-rounded text-white'>
                  Export to Excel
                </button>
              </div></>}
          <div className='text-center d-flex'>
            <button
            //   onClick={
            //     () => saveform()
            //   }
              className='bg-primary border border-none border-radius-rounded text-white'>
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

export default Downloadsansthamilkcollectioncom;