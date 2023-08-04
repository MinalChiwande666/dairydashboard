import React from "react"
import { useState } from "react";

const Santhsmstercom  = () =>{

    return(
       <>
       <div className="container-fluid">
       <div className='text-center' style={{fontSize:'2rem'}}>Sanstha Master</div>
        <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
            <div className="row">
            <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            ID
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Sanstha Name
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Address
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            </div>
         <div/>   
        </div> 
       </div>
       </>
    )
}
export default Santhsmstercom;