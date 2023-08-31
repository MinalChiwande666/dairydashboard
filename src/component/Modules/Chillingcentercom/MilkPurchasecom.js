import React, { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const MilkPurchasecom = () => {
  const [getalldata, setalldata] = useState([])
  const [fatinp,setfatinp] = useState('')
  const [snfinp,setsnfinp] = useState('')
  const [milrate,setmilkrate] = useState()
  const [milkpurchaseform, setmilkpurchaseform] = useState({
    "supplier": "",
    "qty": "",
    "fat": "",
    "snf": "",
    "milk": "",
    "milkRate": "",
    "netAmount": "",
    "date": "",
    "shift": "",
    "collector": "",
    "fDate": null,
    "tDate": null,
    "farmerId": 0,
    "route": "hello"
  })
  const save = () => {
    console.log(milkpurchaseform)
    fetch('http://103.38.50.113:8080/DairyApp/saveMilkPurchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(milkpurchaseform)
    }).then((data) => {
      return data
    }).then((resp) => {
      console.log(resp)
      alert(resp.message)
    })
  }
  const shift = [
    {
      id: 1,
      name: 'Morning'
    },
    {
      id: 2,
      name: 'Evening'
    }
  ]
  const getallmilkpurchase = () => {
    try {
      fetch('http://103.38.50.113:8080/DairyApp/getAllMilkPurchase').then((data) => {
        return data.json()
      }).then((resp) => {
        console.log(resp)
        setalldata(resp)
      })
    } catch (e) {
      console.log(e, "error")
    }
  }

  useEffect(() => {
    getallmilkpurchase()
    try{

      if(fatinp && snfinp)
      {
  
        fetch(`http://103.38.50.113:8080/DairyApp/getRate?fat=${fatinp}&snf=${snfinp}&milktype=cow`).then((data)=>{
         return data.json()
       }).then((resp)=>{
         console.log(resp)
         setmilkrate(resp)
       }).catch((e)=>{
        console.log(e)
       })
      }else
      {
        setmilkrate('')
      }
    }catch(e)
    {
      console.log(e)
    }
  }, [fatinp,snfinp])
  console.log("milk rate =>",milrate)
  return (
    <div className='container-fluid'>
      <div className='row bg-primary'>
        <div className='col-12 col-md-2'>
          <div>
            Date
          </div>
          <div>
            <input
              onChange={(e) => {
                setmilkpurchaseform({
                  ...milkpurchaseform,
                  date: e.target.value
                })
              }}
              style={{ width: '90%' }} type='date' />
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
                {milkpurchaseform.shift === "" ? "Select" : milkpurchaseform.shift}
                <div className='dropdown-toggle'>

                </div>
              </button>
              <ul className="dropdown-menu">
                {
                  shift.map((item, i) => (
                    <li
                      onClick={() => {
                        setmilkpurchaseform({
                          ...milkpurchaseform,
                          shift: item.name
                        })
                      }}
                      className='dropdown-item'>{item.name}</li>
                  ))

                }

              </ul>
            </div>
          </div>
        </div>
        <div className='col-12 my-3 col-md-4 text-center text-white'>
          <h5>Milk Purchase</h5>
        </div>

      </div>
      <div>
        <div className='mx-2 my-2' style={{ width: '95vw', overflowX: 'scroll' }}>
          <table className="table my-2">
            <thead>
              <tr>
                <th scope="col">Entry No</th>
                <th scope="col">Supplier/code Name</th>
                <th scope="col">Qty in Kg</th>
                <th scope="col">FAT %</th>
                <th scope="col">SNF %</th>
                <th scope="col">Collector</th>
                <th scope="col">Route</th>
                <th scope="col">Milk</th>
                <th scope="col">Milk Rate</th>
                <th scope="col">Net Amount</th>
                <th scope='col'>Save</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><input onChange={(e) => {
                  setmilkpurchaseform({
                    ...milkpurchaseform,
                    supplier: e.target.value
                  })
                }} type='text' /></td>
                <td><input
                  onChange={(e) => {
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      qty: e.target.value
                    })
                  }}
                  type='text' /></td>
                <td><input
                  onChange={(e) => {
                    setfatinp(e.target.value)
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      fat: e.target.value
                    })
                  }}
                  type='text' /></td>
                <td><input
                  onChange={(e) => {
                    setsnfinp(e.target.value)
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      snf: e.target.value
                    })
                  }}
                  type='text' /></td>
                  <td><input
                  onChange={(e) => {
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      collector: e.target.value
                    })
                  }}
                  type='text' /></td>
                  <td><input
                  onChange={(e) => {
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      route: e.target.value
                    })
                  }}
                  type='text' /></td>
                <td>
                  
                  <input
                  onChange={(e) => {
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      milk: e.target.value
                    })
                  }}
                  type='text' /></td>
                <td><input
                  value={milrate===null || milrate === undefined ? milkpurchaseform.milkRate:milrate}
                  onChange={(e) => {
                     if(milrate === null || milrate === undefined)
                     {
                      setmilkpurchaseform({
                        ...milkpurchaseform,
                        milkRate:e.target.value
                      })
                     }else{

                       setmilkpurchaseform({
                         ...milkpurchaseform,
                         milkRate: milrate
                       })
                     }
                  }}
                  type='text' /></td>
                <td><input
                onChange={(e)=>{
                  setmilkpurchaseform({
                    ...milkpurchaseform,
                    netAmount:e.target.value
                  })
                }} 
                type='text' /></td>
                <td><button onClick={() => save()} className='bg-primary border border-none rounded text-white'>Save</button></td>
              </tr>

            </tbody>
          </table>
        </div>

        <div style={{ width: '95vw', overflowX: 'scroll' }}>
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

        <div style={{ width: "95vw", overflowX: 'scroll' }}>
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
                <th scope="col">Generate bill</th>
              </tr>
            </thead>
            <tbody>
              {
                getalldata.map((item, i) => (
                  <tr>
                    <th scope="row">
                      <div style={{ width: '1vw', height: '2vh', border: '1px solid black' }}>

                      </div>
                    </th>
                    <td>{item.id}</td>
                    <td>{item.supplier}</td>
                    <td>BM</td>
                    <td>{item.qty}</td>
                    <td>{item.fat}</td>
                    <td>0.00</td>
                    <td>{item.snf}</td>
                    <td>8.000</td>
                    <td>0.320</td>
                    <td>0.200</td>
                    <td>26.00</td>
                    <td>00.00</td>
                    <td>{item.netAmount}</td>
                    <td><IconButton><EditIcon /></IconButton></td>
                    <td><IconButton><DeleteIcon /></IconButton></td>
                    <td><button className='bg-primary border border-none text-white rounded' onClick={()=>{
                      alert(item.supplierId)
                      localStorage.setItem('suppid',JSON.stringify(item.supplierId))
                    }}>Generate bill</button></td>
                  </tr>
                ))

              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MilkPurchasecom