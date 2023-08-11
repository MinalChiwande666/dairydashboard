import React from "react"
import { useState } from "react";
import './purchaseratecontractmaster.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Purchaseratecontractmastercom = () => {
    const[adddata  , setadddata] = useState([]);
    const[adddata1  , setadddata1] = useState([]);
    const[showTable , setshowtable] = useState(false)
    const deleterow=(i)=>{
      setadddata1(adddata1.slice(0,i))
    };

    return(
      <>
      <div className="container-fluid">
        <h1>{adddata}</h1>
      <div className='text-center' style={{fontSize:'2rem'}}>Purchase Rate Contract Master</div>
      <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
        <div className="row">
            <div className='col-12 mt-1 col-md-4 col-sm-12'>
                        <div className="fontsize">
                            ID
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
            <div className='col-12 mt-3 col-md-4 col-sm-12'>
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
                        <div className="fontsize">
                            Rate Chart Name
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>              

        </div>
        <div className="row">
            <div className='col-12 mt-1 col-md-4 col-sm-12'>
                <div className="fontsize">
                    Standard FAT
                </div>
                <div>
                    <input style={{width: '80%' , fontSize: '0.8rem'}} type= 'text'/>
                </div>
            </div>
            <div className='col-12 mt-1 col-md-4 col-sm-12'>
                <div className="fontsize">
                    Standard SNF
                </div>
                <div>
                    <input style={{width: '80%' , fontSize: '0.8rem'}} type= 'text'/>
                </div>
            </div>
            <div className='col-12 mt-1 col-md-4 col-sm-12'>
                <div className="fontsize">
                    Rate
                </div>
                <div>
                    <input style={{width: '80%' , fontSize: '0.8rem'}} type= 'text'/>
                </div>
            </div>
        </div>
       
      <h5></h5>
       
        <table class ="table table-bordered border-primary" style= {{width: '40%', fontSize: '0.8rem'}}>
        <thead>
         <tr>
           <th scope="col">sr.no</th>
           <th scope="col">FAT(min)</th>
           <th scope="col">FAT(max)</th>
           <th scope="col">Addition</th>
           <th scope="col">Subtraction</th>
           <th scope="col"><AddCircleIcon style={{pointerEvents:  adddata.length>15-1?'none':'auto'}} onClick={()=>{
           setadddata1([...adddata1,"hello"])
           }}/></th>
         </tr>
       </thead>
       <tbody>
     { 
   
     adddata1.map((item,i)=>(
        <tr>
        <th scope="row">{i+1}</th>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text' /></td>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text'/></td>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text' /></td>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text' /></td>
        <td><CancelIcon onClick={()=>{
        deleterow(i)
        }} /></td>
      </tr>
     ))
   }
       </tbody>
       {  }
        </table>

        <h1></h1>
        <table class ="table table-bordered border-primary" style= {{width: '40%', fontSize: '0.8rem'}}>
        <thead>
         <tr>
           <th scope="col">sr.no</th>
           <th scope="col">FAT(min)</th>
           <th scope="col">FAT(max)</th>
           <th scope="col">Addition</th>
           <th scope="col">Subtraction</th>
           <th scope="col"><AddCircleIcon style={{pointerEvents:  adddata.length>15-1?'none':'auto'}} onClick={()=>{
           setadddata([...adddata," "])
           }}/></th>
         </tr>
       </thead>
       <tbody>
     { 
   
     adddata.map((item,i)=>(
        <tr>
        <th scope="row">{i+1}</th>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text' /></td>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text'/></td>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text' /></td>
        <td><input
                             style={{ width: '80%', fontSize: '0.8rem' }}
                             type='text' /></td>
        <td><CancelIcon onClick={()=>{
          deleterow(i)
        }} /></td>
      </tr>
     ))
   }
       </tbody>
       {  }
        </table>
        <div className="mt-5">
          
          <button onClick={() => setshowtable(! showTable)} 
          className='bg-primary border border-none border-radius-rounded text-white'>
            show Table
          </button>
          {
            showTable &&
            <>
            <div style={{ height: '50vh', overflowY: 'scroll' }}>
               <table class ="table table-bordered border-primary" style= {{width: '80%', fontSize: '0.8rem'}}>
                <thead>
                    <tr>
                        <th scope="col">sr.no</th>
                        <th scope="col">Date</th>
                        <th scope="col">Milk Type</th>
                        <th scope="col">Rate Chart</th>
                        <th scope="col">FAT/SNF(min)</th>
                        <th scope="col">FAT/SNF(max)</th>
                        <th scope="col">FAT/SNF Addition</th>
                        <th scope="col">FAT/SNF Subtraction</th>
                        <th scope="col">Rate</th>
                    </tr>
                </thead>
                <thead>
                    
                </thead>
               </table>
            </div>
            </>
          }
        </div>
        
      </div>
      </div>
      </>  
    )
    }

    export default Purchaseratecontractmastercom;