import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const MilkPurchasecom = () => {
  return (
    <div className='container-fluid'>
      <div className='row bg-primary'>
        <div className='col-12 col-md-2'>
          <div>
            Date
          </div>
          <div>
            <input style={{ width: '90%' }} type='date' />
          </div>
        </div>
        <div className='col-12 col-md-2'>
          <div>
            Shift
          </div>
          <div>
            <div className='dropdown'>
              <button
                style={{ width: '90%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Morning
                <div className='dropdown-toggle'>

                </div>
              </button>
              <ul className="dropdown-menu">
                <li>Hello</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-12 my-3 col-md-4 text-center text-white'>
         <h5>Milk Purchase</h5>
        </div>
        
      </div>
      <div>
      <div className='mx-2 my-2' style={{width:'95vw',overflowX:'scroll'}}>
          <table className="table my-2">
            <thead>
              <tr>
                <th scope="col">Entry No</th>
                <th scope="col">Supplier/code Name</th>
                <th scope="col">Qty in Kg</th>
                <th scope="col">FAT %</th>
                <th scope="col">SNF %</th>
                <th scope="col">Milk</th>
                <th scope="col">Milk Rate</th>
                <th scope="col">Net Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
                <td><input type='text'/></td>
              </tr>
             
            </tbody>
          </table>
        </div>

        <div>
          <table class="table my-5">
            <thead>
              <tr>
                <th scope="col">CLR(%)</th>
                <th scope="col">SNF(in Kg)</th>
                <th scope="col">SNF Addition</th>
                <th scope="col">SNF Rate</th>
                <th scope="col">SNF Amt</th>
                <th scope="col">FAT Kg</th>
                <th scope="col">FAT Rate</th>
                <th scope="col">FAT Amt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>0.0000</td>
                <td></td>
                <td></td>
                <td></td>
                <td>0.000</td>
                <td>0.0000</td>
             
                <td>0.0000</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tick</th>
                <th scope="col">Code</th>
                <th scope="col">Supplier</th>
                <th scope="col">B/C</th>
                <th scope="col">QTY</th>
                <th scope="col">FAT%</th>
                <th scope="col">CLR%</th>
                <th scope="col">SNF </th>
                <th scope="col">SNF Kg</th>
                <th scope="col">Milk Rate</th>
                <th scope="col">FAT Rate</th>
                <th scope="col">SNF Rate</th>
                <th scope="col">FAT Amt</th>
                <th scope="col">Net Amt</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div style={{width:'1vw',height:'2vh',border:'1px solid black'}}>

                  </div>
                </th>
                <td>1</td>
                <td>Harpreet</td>
                <td>BM</td>
                <td>4.000</td>
                <td>5.00</td>
                <td>0.00</td>
                <td>5.00</td>
                <td>8.000</td>
                <td>0.320</td>
                <td>0.200</td>
                <td>26.00</td>
                <td>00.00</td>
                <td>00.00</td>
                <td><IconButton><EditIcon/></IconButton></td>
                <td><IconButton><DeleteIcon/></IconButton></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MilkPurchasecom