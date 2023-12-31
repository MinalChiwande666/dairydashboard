import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './accountmaster.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import * as FileSaver from 'file-saver'
import * as XLSX from "xlsx";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const AccountmasCom = () => {
  const [selectaccounaset, setaccountasset] = useState('')
  const [status, setstatus] = useState('')
  const [costecenter, setcostcenter] = useState('No')
  const [showtable, setshowtable] = useState(false)
  const [drop, setdrop] = useState(false)
  const [selaccountgroup, setselaccountgroup] = useState('')
  const [selopentype, setopentype] = useState('')
  const [allusers, setallusers] = useState([])
  const [togg, settogg] = useState(false)
  const [togg1, settogg1] = useState(false)
  const [togg2, settogg2] = useState(false)
  const [togg3, settogg3] = useState(false)
  const [accountform, setaccountform] = useState(
    {
      accountName: '',
      openingBalance: '',
      panCardNo: '',
      accountType: '',
      accountGroup: '',
      openingType: '',
      aadharcardNo: '',
      status: '',
      gstNo: '',
      mainLegger: '',
      isCostCenterAllocated: ''
    }
  )

  const getData = () => {
    axios.get('http://103.38.50.113:8080/DairyApp/getAllAccountMasterData').then((data) => {
      console.log(data.data)
      setallusers(data.data)
    }).catch((e) => {
      console.log("error=>", e)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  const saveform = async () => {
    let newform = {
      accountName: accountform.accountName,
      openingBalance: accountform.openingBalance,
      panCardNo: accountform.panCardNo,
      accountType: selectaccounaset,
      accountGroup: selaccountgroup,
      openingType: selopentype,
      aadharcardNo: accountform.aadharcardNo,
      status: status,
      gstNo: accountform.gstNo,
      mainLegger: accountform.mainLegger,
      isCostCenterAllocated: costecenter
    }

    axios.post('http://103.38.50.113:8080/DairyApp/saveAccountMaster', newform).then((data) => {
      alert(data.data.message)
      if (data.status === 200) {
        setaccountform({
          accountName: '',
          openingBalance: '',
          panCardNo: '',
          accountType: '',
          accountGroup: '',
          openingType: '',
          aadharcardNo: '',
          status: '',
          gstNo: '',
          mainLegger: '',
          isCostCenterAllocated: ''
        })

        setTimeout(() => {
          window.location.reload()
        }, 2000);
      }
    }).catch((e) => {
      console.log("error")
    })


  }
  const exporttoexcel = async () => {
    const fileName = "myfile";
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(allusers)
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }
  const opentype = [
    {
      id: 1,
      name: 'Debit'
    },
    {
      id: 2,
      name: 'Credit'
    }
  ]
  const costcenterstat = [
    {
      id: 1,
      status: 'Yes'
    },
    {
      id: 2,
      status: 'No'
    }
  ]
  const Status = [
    {
      id: 1,
      stat: 'Active'
    },
    {
      id: 2,
      stat: 'Inactive'
    }
  ]
  const items = [
    {
      id: 1,
      name: 'Asset'
    },
    {
      id: 1,
      name: 'Libility'
    },
    {
      id: 1,
      name: 'Income'
    },
    {
      id: 1,
      name: 'Expense'
    },

  ]
  const accountgroup = [
    {
      id: 1,
      name: 'Current Assets'
    },
    {
      id: 2,
      name: 'Fixed Assets'
    },
    {
      id: 3,
      name: 'Investments'
    },
    {
      id: 4,
      name: 'Misc Expenses(Assets)'
    }
  ]
  const print = async () => {
    const resp = await fetch('http://103.38.50.113:8080/DairyApp/print')
    console.log(resp)
    if (resp.redirected === false) {
      window.location.href = resp.url
    } else {
      console.log("request was not redirected")
    }
  }


  const clear = () => {
    setaccountform({
      accountName: '',
      openingBalance: '',
      panCardNo: '',
      accountType: '',
      accountGroup: '',
      openingType: '',
      aadharcardNo: '',
      status: '',
      gstNo: '',
      mainLegger: '',
      isCostCenterAllocated: ''
    })
  }

  return (
    <>

      <div className='p-2 sm-0' onClick={()=>{
        if(togg === true){
          settogg(false)
        }else if(togg1 === true){
          settogg1(false)
        }else if(togg2 === true){
          settogg2(false)
        }else if(togg3 === true){
          settogg3(false)
        }else if(drop === true){
          setdrop(false)
        }
      }}>
        <div className='container mt-4 accCont' style={{ height: "70vh" }}>
          <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Account Master</h3></div>
          <div className='row mt-4'>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField label="Account No" variant="standard" />
              </Box>
            </div>

            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div>
                <TextField
                  variant='standard'
                  label="Account Type"
                  value={selectaccounaset === '' ? '' : selectaccounaset}
                  sx={{ width: "25ch" }}
                />
                {
                  drop ?
                    <div className='masterSelect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          items.map((item) => (
                            <li
                              style={{ listStyle: 'none' }}
                              onClick={() => {
                                setaccountasset(item.name)
                                setdrop(false)
                              }}
                            >{item.name}</li>
                          ))
                        }
                      </ul>
                    </div> : null}
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => setdrop(!drop)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>

            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div>
                <TextField
                  variant='standard'
                  label="Status"
                  value={status === '' ? '' : status}
                  sx={{ width: "25ch" }}
                />
                {
                  togg ?
                    <div className='masterSelect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          Status.map((item) => (
                            <li
                              style={{ listStyle: 'none' }}
                              onClick={() => {
                                setstatus(item.stat)
                                settogg(false)
                              }}
                            >{item.stat}</li>
                          ))
                        }
                      </ul>
                    </div> : null}
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => settogg(!togg)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={accountform.accountName}
                  onChange={(e) => {
                    setaccountform({
                      ...accountform,
                      accountName: e.target.value
                    })
                  }}
                  label="Account Name" variant="standard" />
              </Box>
            </div>
          </div>

          <div className='row mt-4'>
            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div>
                <TextField
                  variant='standard'
                  label="Account Group"
                  value={selaccountgroup === '' ? '' : selaccountgroup}
                  sx={{ width: "25ch" }}
                />
                {
                  togg1 ?
                    <div className='masterSelect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          accountgroup.map((item) => (
                            <li
                              style={{ listStyle: 'none' }}
                              onClick={() => {
                                setselaccountgroup(item.name)
                                settogg1(false)
                              }}
                            >{item.name}</li>
                          ))
                        }
                      </ul>
                    </div> : null}
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => settogg1(!togg1)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={accountform.gstNo}
                  onChange={(e) => {
                    setaccountform({
                      ...accountform,
                      gstNo: e.target.value
                    })
                  }}
                  label="GST No" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={accountform.openingBalance}
                  onChange={(e) => {
                    setaccountform({
                      ...accountform,
                      openingBalance: e.target.value
                    })
                  }}
                  label="Opening Balance" variant="standard" />
              </Box>
            </div>

            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div>
                <TextField
                  variant='standard'
                  label="Opening Type"
                  value={selopentype === '' ? '' : selopentype}
                  sx={{ width: "25ch" }}
                />
                {
                  togg2 ?
                    <div className='masterSelect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          opentype.map((item) => (
                            <li
                              style={{ listStyle: 'none' }}
                              onClick={() => {
                                setopentype(item.name)
                                settogg2(false)
                              }}
                            >{item.name}</li>
                          ))
                        }
                      </ul>
                    </div> : null}
              </div>
              <div className='mt-4'>
                <IconButton onClick={() => settogg2(!togg2)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>

          </div>

          <div className='row mt-4'>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={accountform.mainLegger}
                  onChange={(e) => {
                    setaccountform({
                      ...accountform,
                      mainLegger: e.target.value
                    })
                  }}
                  label="Main Ledger" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={accountform.panCardNo}
                  onChange={(e) => {
                    setaccountform({
                      ...accountform,
                      panCardNo: e.target.value
                    })
                  }}
                  label="PAN Card No" variant="standard" />
              </Box>
            </div>

            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                autoComplete="off">
                <TextField value={accountform.aadharcardNo}
                  onChange={(e) => {
                    setaccountform({
                      ...accountform,
                      aadharcardNo: e.target.value
                    })
                  }}
                  label="Adhaar Card No" variant="standard" />
              </Box>
            </div>
          </div>
          <div><h3 className='text-center pt-4' style={{ textDecoration: "underline" }}>Cost Center</h3></div>
          <div className='row mt-3'>
            <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center mt-3'>
              <p>Is Cost Center Allocated </p>
            </div>

            <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
              <div>
                <TextField
                  variant='standard'
                  label=""
                  value={costecenter === '' ? '' : costecenter}
                  sx={{ width: "25ch" }}
                />
                {
                  togg3 ?
                    <div className='masterSelect'>
                      <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                        {
                          costcenterstat.map((item) => (
                            <li
                              style={{ listStyle: 'none' }}
                              onClick={() => {
                                setcostcenter(item.status)
                                settogg3(false)
                              }}
                            >{item.status}</li>
                          ))
                        }
                      </ul>
                    </div> : null}
              </div>
              <div className='mt-2'>
                <IconButton onClick={() => settogg3(!togg3)}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </div>
            </div>
          </div>

          <div className='container mt-4 mb-2 mb-sm-0'>
            <button className='btn btn-primary mx-0 mx-sm-3 mx-md-3' onClick={() => setshowtable(!showtable)}>Show Table</button>
            <button className='btn btn-primary mx-3' onClick={() => saveform()}>Save</button>
            <button className='btn btn-primary mx-3' onClick={() => clear()}>Clear</button>
            <button className='btn btn-primary mx-3' onClick={() => print()}>Print</button>
            <button className='btn btn-primary mx-3' onClick={() => exporttoexcel()}>Export To Excel</button>
          </div>
        </div>
      </div>


      {
        showtable &&
        <>

          <div className='container mt-4 accMastTable mb-3 p-0'>
            <table className='tableAccMaster table table-stripped'>
              <thead>
                <tr>
                  <th scope="col" style={{ width: "150px" }}>Account Id</th>
                  <th scope="col" style={{ width: "150px" }}>Account Name</th>
                  <th scope="col" style={{ width: "150px" }}>Account Type</th>
                  <th scope="col" style={{ width: "150px" }}>Group</th>
                  <th scope="col" style={{ width: "150px" }}>Main Ledger</th>
                  <th scope="col" style={{ width: "150px" }}>Opening Balance</th>
                  <th scope="col" style={{ width: "150px" }}>Opening Type</th>
                  <th scope="col" style={{ width: "150px" }}>GST No</th>
                  <th scope="col" style={{ width: "150px" }}>PAN Card No</th>
                  <th scope="col" style={{ width: "150px" }}>Adhaar Card No</th>
                  <th scope="col" style={{ width: "150px" }}>Account Group</th>
                  <th scope="col" style={{ width: "150px" }}>Cost Center</th>
                </tr>
              </thead>
              <tbody>
                {
                  allusers.map((item, i) => (
                    <tr>
                      <th scope="row" className='text-center'>{item.id}</th>
                      <td>{item.accountName}</td>
                      <td>{item.accountType}</td>
                      <td>Current Assets</td>
                      <td>{item.mainLegger}</td>
                      <td>{item.openingBalance}</td>
                      <td>{item.openingType}</td>
                      <td>{item.gstNo}</td>
                      <td>{item.panCardNo}</td>
                      <td>{item.aadharcardNo}</td>
                      <td>{item.accountGroup}</td>
                      <td>{item.isCostCenterAllocated}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </>
      }
    </>
  )
}

export default AccountmasCom