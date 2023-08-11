import React from "react";
import './Milkcollection.css'


const Milkcollectionexceluploadcom = () =>{

    return(
        <>
          <div className="container-fluid">
          <div className="text-center" style={{fontSize:'36px'}}>Excel Upload Purchase Inward</div>
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
                <label> Type </label>
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
            <h1>    </h1>
        <div className="row">
        <div className='col-12 mt-1 col-md-4 col-sm-12'>
            <input type="file"/>
            </div>
        </div>
        <h1>    </h1>
        <div className="row">
        <div className='col-12 mt-1 col-md-4 col-sm-12'>
           <button className="mx-3" style={{backgroundColor:"blue" , fontSize: '0.8rem'}}  type="button" >Upload Excel</button>
            </div> 
        </div>
       
       
        <h1>    </h1>
        <div className="row">
        <div className='col-12 mt-1 col-md-4 col-sm-12  d-flex' >
           <button className="mx-3" style={{backgroundColor:"GREY" , fontSize: '0.8rem'}}  type="button" >Show Last uploaded sheet</button>
          
           <button style={{backgroundColor:"GREY" , fontSize: '0.8rem'}}  type="button" >Delete Last uploaded sheet</button>
           
            </div> 
        </div>
          </div>
          </div>
        </>
    )
}

export default Milkcollectionexceluploadcom;