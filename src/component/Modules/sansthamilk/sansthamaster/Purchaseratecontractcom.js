import React from "react";
import './sanstha.css';
import { blue, blueGrey, green } from "@mui/material/colors";

const Purchaseratecontractcom = () =>{
    return (
        <>
        <div className="container-fluid">
            <div className="text-center" style={{fontSize:'36px'}}>Purchase rate contract</div>
            <div className="container" style={{boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem'}}>
                <div className="row">
                 <div className='col-12 mt-1 col-md-4 col-sm-12'>   
                 <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Milk Type
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>cow</li>
                                 <li> Buffelo</li>
                                </ul>
                            </div>
                            </div>
                    <div className='col-12 mt-1 col-md-4 col-sm-12'>
                    <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Rate Chart Name
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                 <li>Cow Rate</li>
                                 
                                </ul>
                            </div>
                    </div>
                </div>
<h1> </h1>
        <div className="row">
            <div className='col-12 mt-1 col-md-4 col-sm-12'>
                        <div className="fontsize">
                            Standard FAT
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            <div className='col-12 mt-1 col-md-4 col-sm-12'>
            <div className="fontsize">
                            Standard SNF
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>  
            <div className='col-12 mt-1 col-md-4 col-sm-12'>
                        <div className="fontsize">
                            Rate
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
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
           <button style={{backgroundColor:"blue" , fontSize: '0.8rem'}}  type="button" >Upload Excel</button>
            </div> 
        </div>
       
       
        <h1>    </h1>
        <div className="row">
        <div className='col-12 mt-1 col-md-4 col-sm-12'>
           <button style={{backgroundColor:"GREY" , fontSize: '0.8rem'}}  type="button" >Show Last uploaded sheet</button>
           
            </div> 
        </div>
            </div>
        </div>
        </>
    )
}

export default Purchaseratecontractcom;