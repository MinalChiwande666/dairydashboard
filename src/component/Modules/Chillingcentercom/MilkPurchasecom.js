import React, { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DialogActions, DialogTitle, Button, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios'
import "./chilling.css"
import { TextField } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const MilkPurchasecom = () => {
  const [togg, settogg] = useState(false)
  const [togg2, settogg2] = useState(false)
  const [togg3, settogg3] = useState(false)

  const [getalldata, setalldata] = useState([])
  const [fatinp, setfatinp] = useState('')
  const [suppid, setsuppid] = useState([])
  const [snfinp, setsnfinp] = useState('')
  const [milrate, setmilkrate] = useState()
  const [type, settype] = useState('')
  const [ntamt, setntamt] = useState()
  const [qtyval, setqtyval] = useState()
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
    "Route": "",
    "collector": ""
  })


  const [openDailogDel, setOpenDailogDel] = useState(false)
  const [delId, setDelId] = useState()

  const save = () => {
    console.log("net amount=>", milkpurchaseform.netAmount)
    let newform = {
      "supplierId": String(milkpurchaseform.supplier),
      "qty": String(milkpurchaseform.qty),
      "fat": String(milkpurchaseform.fat),
      "snf": String(milkpurchaseform.snf),
      "milk": String(milkpurchaseform.milk),
      "milkRate": String(milrate) || String(milkpurchaseform.milkRate),
      "netAmount": String(ntamt),
      "date": String(milkpurchaseform.date),
      "shift": String(milkpurchaseform.shift),
      // "Route": String(milkpurchaseform.Route),
      // "collector": String(milkpurchaseform.collector)
    }
    console.log(newform)
    try {
      fetch('http://103.38.50.113:8080/DairyApp/saveMilkPurchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newform)
      }).then((data) => {
        return data.json()
      }).then((resp) => {
        console.log(resp)
        alert(resp.message)
        window.location.reload()
        getallmilkpurchase()
      }).catch((e) => {
        console.log(e, "Error")
      })
    } catch (e) {
      console.log(e, "Error")
    }

  }


  const handleDelete = () => {
    let del = {
      id: delId
    }
    console.log(del)
    axios.post('http://103.38.50.113:8080/DairyApp/deleteMilkPurchaseById', del).then((delData) => {
      console.log(delData.data)
      // console.log(delData)
      if (delData.data) {
        setOpenDailogDel(false)
        getallmilkpurchase()
      }
    }).catch((e) => {
      console.log("Something went wrong in delete", e)
    })
  }

  const handleClose = () => {
    setOpenDailogDel(false)
  }


  const dailoge = () => {
    return (
      <>
        <Dialog

          open={openDailogDel}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogActions style={{ height: '2rem' }}>
            <IconButton>
              <CancelIcon style={{ color: 'blue' }} />
            </IconButton>
          </DialogActions>
          <div style={{ background: 'white' }}>

            <DialogTitle>
              Are You sure you want to delete?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleDelete}>Yes</Button>
              <Button onClick={handleClose}>No</Button>
            </DialogActions>
          </div>
        </Dialog>
      </>
    )
  }


  const milktype = [
    {
      name: 'cow',
    },
    {
      name: 'buffaloo'
    }
  ]


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
    fetch('http://103.38.50.113:8080/DairyApp/getSupplierId').then((data) => {
      return data.json()
    }).then((res) => {
      console.log(res)
      setsuppid(res)
    })
  }, [])

  const calculation = () => {
    console.log("milk qty=>", qtyval)
    // fetch(`http://103.38.50.113:8080/DairyApp/netAmountCalculate?qty=20&milkRate=12`).then((data)=>{
    //   return data.json()
    // }).then((res)=>{
    //   console.log("net amt=>",res)
    // })
  }


  useEffect(() => {

    getallmilkpurchase()
    try {

      if (fatinp && snfinp) {

        fetch(`http://103.38.50.113:8080/DairyApp/getRate?fat=${fatinp}&snf=${snfinp}&milktype=${type}`).then((data) => {
          return data.json()
        }).then((resp) => {
          console.log("resp +>", resp)
          setmilkrate(resp)

        }).catch((e) => {
          console.log(e)
        })
      } else {
        setmilkrate('')
      }
    } catch (e) {
      console.log(e)
    }
    calculation()
  }, [fatinp, snfinp, type])

  useEffect(() => {
    console.log(type)

  }, [type])

  useEffect(() => {
    console.log("qty =>", milkpurchaseform.qty)
    //  console.log("milkrate=>",milrate)
    console.log("calculate")
    fetch(`http://103.38.50.113:8080/DairyApp/netAmountCalculate?qty=${milkpurchaseform.qty}&milkRate=${milrate}`).then((data) => {
      return data.json()
    }).then((res) => {
      console.log(res, "cal=>")
      setntamt(res)
    })
  }, [milrate])
  console.log(milrate)


  const deleteMilkPurData = (id) => {
    setOpenDailogDel(true)
    setDelId(id)
  }



  return (
    <>
      <div className='p-2 sm-0'>
        <div className='container mt-4 chillingCenterCont' style={{height:"52vh"}}>
          {dailoge()}
          <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Milk Purchase</h3></div>
          <div className='row mt-4'>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column'>
                <label style={{ fontSize: "14px" }}>Date</label>
                <TextField
                  style={{ width: '95ch' }} value={milkpurchaseform.date}
                  className='txtsize' variant="standard" type="date" onChange={(e) => {
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      date: e.target.value
                    })
                  }} />
              </div>
            </div>

            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div>
                <TextField
                  variant='standard'
                  label="Shift"
                  value={milkpurchaseform.shift === '' ? 'Select' : milkpurchaseform.shift}
                  sx={{ width: "25ch" }}
                />
                {
                  togg ?
                    <div className='milkpurchaseselect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          shift.map((item) => (
                            <li style={{ listStyle: 'none' }}
                              onClick={() => {
                                setmilkpurchaseform({
                                  ...milkpurchaseform,
                                  shift: item.name
                                })
                                settogg(false)
                              }}
                            >{item.name}</li>
                          ))
                        }
                      </ul>
                    </div> : null
                }
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => settogg(!togg)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>
          </div>

          <div className='row mt-4'>
            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center'>
              <div className='mt-2'>
                <TextField
                  variant='standard'
                  label="SupplierId"
                  value={milkpurchaseform.supplier === '' ? 'Select' : milkpurchaseform.supplier}
                  sx={{ width: "25ch" }}
                />
                {
                  togg2 ?
                    <div className='milkpurchaseselect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          suppid.map((item) => (
                            <li style={{ listStyle: 'none' }}
                              onClick={() => {
                                setmilkpurchaseform({
                                  ...milkpurchaseform,
                                  supplier: item
                                })
                                settogg2(false)
                              }}
                            >{item}</li>
                          ))
                        }
                      </ul>
                    </div> : null
                }
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => settogg2(!togg2)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField
                label="Supplier Name" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={milkpurchaseform.qty}
                  onChange={(e) => {
                    setqtyval(e.target.value)
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      qty: e.target.value
                    })
                  }}
                  label="Qty in KG" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField
                  onChange={(e) => {
                    setfatinp(e.target.value)
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      fat: e.target.value
                    })
                  }}
                  label="FAT %" variant="standard" />
              </Box>
            </div>

            

          </div>

          <div className='row mt-4'>

          <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField
                  onChange={(e) => {
                    setsnfinp(e.target.value)
                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      snf: e.target.value
                    })
                  }}
                  label="SNF %" variant="standard" />
              </Box>
            </div>

            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center'>
              <div className='mt-2'>
                <TextField
                  variant='standard'
                  label="Milk"
                  value={milkpurchaseform.milk === "" ? "Select" : milkpurchaseform.milk}
                  sx={{ width: "25ch" }}
                />
                {
                  togg3 ?
                    <div className='milkpurchaseselect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          milktype.map((item) => (
                            <li style={{ listStyle: 'none' }}
                              onClick={() => {
                                settype(item.name)
                                setmilkpurchaseform({
                                  ...milkpurchaseform,
                                  milk: item.name
                                })
                                settogg3(false)
                              }}
                            >{item.name}</li>
                          ))
                        }
                      </ul>
                    </div> : null
                }
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => settogg3(!togg3)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={milrate === null || milrate === undefined || !milrate ? milkpurchaseform.milkRate : milrate}
                  onChange={(e) => {
                    if (milrate === null || milrate === undefined) {
                      setmilkpurchaseform({
                        ...milkpurchaseform,
                        milkRate: e.target.value
                      })
                      console.log(e.target.value)
                    } else {
                      setmilkpurchaseform({
                        ...milkpurchaseform,
                        milkRate: milrate
                      })
                    }
                  }}
                  label="Milk Rate" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField
                  value={milkpurchaseform.netAmount === "" ? ntamt : milkpurchaseform.netAmount}
                  onChange={(e) => {
                    console.log(e.target.value)

                    setmilkpurchaseform({
                      ...milkpurchaseform,
                      netAmount: e.target.value
                    })

                  }}
                  InputLabelProps={{shrink:true}}
                  type='number'
                  label="Net Amount" variant="standard" />
              </Box>
            </div>
          </div>
          <div className='row mt-4 mb-2'>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
              <button className='btn btn-primary mx-0 mx-sm-4' onClick={() => save()}>Save</button>
            </div>
          </div>
        </div>

        <div className='container mt-4 accMastTable mb-3 p-0'>
          <table className='tableAccMaster table table-stripped'>
            <thead style={{zIndex:"1000"}}>
              <tr>
                <th scope="col">sr.no</th>
                <th scope="col">SupplierId</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">QTY</th>
                <th scope="col">FAT%</th>
                <th scope="col">SNF%</th>
                <th scope="col">Milk</th>
                <th scope="col">Milk Rate</th>
                <th scope="col">Net Amt</th>
                <th scope="col">Date</th>
                <th scope="col">Shift</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
              {
                getalldata.map((item, i) => (
                  <tr>
                    <th scope="row" className='text-center'>{item.id}</th>
                    <td>{item.supplierId}</td>
                    <td>{item.supplierId}</td>
                    <td>{item.qty}</td>
                    <td>{item.fat}</td>
                    <td>{item.snf}</td>
                    <td>{item.milk}</td>
                    <td>{item.milkRate}</td>
                    <td>{item.netAmount}</td>
                    <td>{item.date}</td>
                    <td>{item.shift}</td>
                    <td><IconButton><DeleteIcon onClick={() => deleteMilkPurData(item.id)} style={{ color: 'red', cursor: 'pointer' }} /></IconButton></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>


      {/* <div className='container-fluid'>
        {dailoge()}
        <div className='row' style={{ background: 'radial-gradient(circle at 10% 20%, rgba(95, 173, 254, 0.46) 0%, rgba(91, 224, 254, 0.46) 47.2%, rgba(170, 254, 235, 0.43) 90%)', color: "rgb(81, 80, 80)" }}>
          <div className='col-12 col-md-2 pb-2'>
            <div className='text-white' style={{ fontSize: "1.2rem" }}>
              Date
            </div>
            <div>
              <input
                value={milkpurchaseform.date}
                onChange={(e) => {
                  setmilkpurchaseform({
                    ...milkpurchaseform,
                    date: e.target.value
                  })
                }}
                style={{ width: '90%', fontSize: '1.1rem', padding: "0.2rem" }} type='date' />
            </div>
          </div>
          <div className='col-12 col-md-2 pb-2'>
            <div className='text-white' style={{ fontSize: "1.2rem" }}>
              Shift
            </div>
            <div>
              <div className='dropdown'>
                <button
                  style={{ width: '100%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}
                  className="btn bg-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {milkpurchaseform.shift === "" ? "Select" : milkpurchaseform.shift}
                  <div className='dropdown-toggle'>

                  </div>
                </button>
                <ul className="dropdown-menu" style={{ cursor: "pointer", width: "100%" }}>
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
            <h3>Milk Purchase</h3>
          </div>

        </div>
        <div>
          <div className='mx-2 my-2 milkpurchasestyle'>
            <table className="table my-2">
              <thead>
                <tr>
                  <th scope="col">SupplierId</th>
                  <th scope="col">Qty in Kg</th>
                  <th scope="col">FAT %</th>
                  <th scope="col">SNF %</th>
                  <th scope="col">Milk</th>
                  <th scope="col">Milk Rate</th>
                  <th scope="col">Net Amount</th>
                  <th scope='col'>Save</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {milkpurchaseform.supplier === "" ? "Select" : milkpurchaseform.supplier}
                      </button>
                      <ul className="dropdown-menu" >
                        {
                          suppid.map((item) => (
                            <li
                              onClick={() => setmilkpurchaseform({
                                ...milkpurchaseform,
                                supplier: item
                              })}
                              className='dropdown-item' style={{ zIndex: "1" }}>{item}</li>
                          ))

                        }
                      </ul>
                    </div>
                  </th>

                  <td><input
                    style={{ marginTop: "5px" }}
                    value={milkpurchaseform.qty}
                    onChange={(e) => {
                      setqtyval(e.target.value)
                      setmilkpurchaseform({
                        ...milkpurchaseform,
                        qty: e.target.value
                      })
                    }}
                    type='text' /></td>


                  <td><input
                    style={{ marginTop: "5px" }}
                    onChange={(e) => {
                      setfatinp(e.target.value)
                      setmilkpurchaseform({
                        ...milkpurchaseform,
                        fat: e.target.value
                      })
                    }}
                    type='text' /></td>


                  <td><input
                    style={{ marginTop: "5px" }}
                    onChange={(e) => {
                      setsnfinp(e.target.value)
                      setmilkpurchaseform({
                        ...milkpurchaseform,
                        snf: e.target.value
                      })
                    }}
                    type='text' /></td>


                  <td> <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {milkpurchaseform.milk === "" ? "Select" : milkpurchaseform.milk}
                    </button>
                    <ul class="dropdown-menu">
                      {
                        milktype.map((item) => (
                          <li
                            onClick={() => {
                              settype(item.name)
                              setmilkpurchaseform({
                                ...milkpurchaseform,
                                milk: item.name
                              })
                            }}
                            className='dropdown-item'>{item.name}</li>
                        ))
                      }
                    </ul>
                  </div></td>

                  <td><input
                    style={{ marginTop: "5px" }}
                    value={milrate === null || milrate === undefined || !milrate ? milkpurchaseform.milkRate : milrate}
                    onChange={(e) => {
                      if (milrate === null || milrate === undefined) {
                        setmilkpurchaseform({
                          ...milkpurchaseform,
                          milkRate: e.target.value
                        })
                        console.log(e.target.value)
                      } else {
                        setmilkpurchaseform({
                          ...milkpurchaseform,
                          milkRate: milrate
                        })
                      }
                    }}
                    type='text' /></td>

                  <td><input
                    value={milkpurchaseform.netAmount === "" ? ntamt : milkpurchaseform.netAmount}
                    style={{ marginTop: "5px" }}
                    onChange={(e) => {
                      console.log(e.target.value)

                      setmilkpurchaseform({
                        ...milkpurchaseform,
                        netAmount: e.target.value
                      })

                    }}
                    type='number' />
                  </td>
                  <td><button onClick={() => save()} className='btn btn-primary' style={{ width: "90px" }}>Save</button></td>
                </tr>

              </tbody>
            </table>
          </div>



          <div className='mt-4' style={{ height: "65vh", overflow: 'scroll' }}>
            <table className="table mt-3 table-bordered border-primary" style={{ width: "100%", fontSize: "0.9rem" }}>
              <thead>
                <tr>
                  <th scope="col">sr.no</th>
                  <th scope="col">SupplierId</th>
                  <th scope="col">QTY</th>
                  <th scope="col">FAT%</th>
                  <th scope="col">SNF%</th>
                  <th scope="col">Milk</th>
                  <th scope="col">Milk Rate</th>
                  <th scope="col">Net Amt</th>
                  <th scope="col">Date</th>
                  <th scope="col">Shift</th>
                  <th scope="col">Delete</th>

                </tr>
              </thead>
              <tbody>
                {
                  getalldata.map((item, i) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.supplierId}</td>
                      <td>{item.qty}</td>
                      <td>{item.fat}</td>
                      <td>{item.snf}</td>
                      <td>{item.milk}</td>
                      <td>{item.milkRate}</td>
                      <td>{item.netAmount}</td>
                      <td>{item.date}</td>
                      <td>{item.shift}</td>
                      <td><IconButton><DeleteIcon onClick={() => deleteMilkPurData(item.id)} style={{ color: 'red', cursor: 'pointer' }} /></IconButton></td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default MilkPurchasecom
