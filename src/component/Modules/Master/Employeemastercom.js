import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import * as FileSaver from 'file-saver'
import * as XLSX from "xlsx";
import './accountmaster.css'
const Employeemastercom = () => {
  const outerTheme = useTheme()
  const [selectdesignation, setseldesignation] = useState({})
  const [showcontactdetail, setshowcontactdetail] = useState(false)
  const [joiningdetailshow, setjoiningdetailsshow] = useState(false)
  const [showaccountdetail, setshowaccountdetail] = useState(false)
  const [loader, setloader] = useState(false)
  const [empincid, setempincid] = useState()
  const [showothersetail, setshowotherdetail] = useState(false)
  const [showcostcenter, setshowcostcenter] = useState(false)
  const [showmanager, setshowmanager] = useState(false)
  const [showledger, setshowledger] = useState(false)
  const [showtable, setshowtable] = useState(false)
  const [togg1, setTogg1] = useState(false)
  const [togg2, setTogg2] = useState(false)
  const [togg3, setTogg3] = useState(false)
  const [togg4, setTogg4] = useState(false)
  const [togg5, setTogg5] = useState(false)
  const [togg6, setTogg6] = useState(false)
  const [togg7, setTogg7] = useState(false)
  const [togg8, setTogg8] = useState(false)
  const [togg9, setTogg9] = useState(false)
  const [togg10, setTogg10] = useState(false)
  const [togg11, setTogg11] = useState(false)


  const [employeealldata, setemployeealldata] = useState([])
  const [employeeform, setemployeeform] = useState({

    "employeeName": "",
    "status": "",
    "gender": "",
    "accountGroup": "",
    "type": "",
    "category": "",
    "grp": "",
    "dateOfBirth": "",
    "retirementDate": "",
    "jobProfile": "",
    "noticeDays": "",
    "joiningDate": "",
    "salary": "",
    "department": "",
    "companyEmail": "",
    "contractEndDate": "",
    "salaryMode": "",
    "designation": "",
    "attendanceID": "",
    "enterCast": "",
    "address": "",
    "mobile": "",
    "eMail": "",
    "city": "",
    "district": "",
    "pinCode": "",
    "state": "",
    "country": "",
    "openingBalance": "",
    "uanNo": "",
    "debitCredit": "",
    "epfNo": "",
    "panNo": "",
    "esiNo": "",
    "accountNo": "",
    "bankName": "",
    "branch": "",
    "ifscCode": "",
    "micrNo": "",
    "bankAddress": "",
    "bloodGroup": "",
    "aadharCardNo": "",
    "education": "",
    "managers": "",
    "isCostCenterAllocated": "",
    "subLedgerName": "",
    "grp1": ""

  })

  const clear = () => {
    setemployeeform({

      "employeeName": "",
      "status": "",
      "gender": "",
      "accountGroup": "",
      "type": "",
      "category": "",
      "grp": "",
      "dateOfBirth": "",
      "retirementDate": "",
      "jobProfile": "",
      "noticeDays": "",
      "joiningDate": "",
      "salary": "",
      "department": "",
      "companyEmail": "",
      "contractEndDate": "",
      "salaryMode": "",
      "designation": "",
      "attendanceID": "",
      "enterCast": "",
      "address": "",
      "mobile": "",
      "eMail": "",
      "city": "",
      "district": "",
      "pinCode": "",
      "state": "",
      "country": "",
      "openingBalance": "",
      "uanNo": "",
      "debitCredit": "",
      "epfNo": "",
      "panNo": "",
      "esiNo": "",
      "accountNo": "",
      "bankName": "",
      "branch": "",
      "ifscCode": "",
      "micrNo": "",
      "bankAddress": "",
      "bloodGroup": "",
      "aadharCardNo": "",
      "education": "",
      "managers": "",
      "isCostCenterAllocated": "",
      "subLedgerName": "",
      "grp1": ""

    })
  }
  const getallemployee = async () => {
    setloader(true)
    try {

      let data = await fetch('http://103.38.50.113:8080/DairyApp/getAllEmployeeData')
      let datares = await data.json()
      if (datares) {
        setloader(false)
        setemployeealldata(datares)
      }
    } catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {
    getallemployee()
  }, [])
  const status = [
    {
      id: 1,
      name: 'Active'
    },
    {
      id: 2,
      name: 'In Active'
    }
  ]

  const accgrp = [
    {
      id: 1,
      name: 'libilities'
    },
    {
      id: 2,
      name: 'Duties & Taxes'
    },
    {
      id: 3,
      name: 'Provisions'
    }
  ]

  const gender = [
    {
      id: 1,
      name: 'male'
    },
    {
      id: 2,
      name: 'female'
    },
    {
      id: 3,
      name: 'transgender'
    }
  ]

  const type = [
    {
      id: 1,
      name: 'company'
    },
    {
      id: 2,
      name: 'contract'
    }
  ]

  const salarymode = [
    {
      id: 1,
      name: 'cheque'
    },
    {
      id: 2,
      name: 'cash'
    },
    {
      id: 3,
      name: 'bank'
    }
  ]

  useEffect(() => {

  }, [])

  const jobprofile = [
    {
      id: 1,
      name: 'Contract'
    },
    {
      id: 2,
      name: 'Permanant'
    },
    {
      id: 3,
      name: 'Trainee'
    }
  ]

  const department = [
    {
      id: 1,
      name: 'sales',
      designation: 'sales manager'
    },
    {
      id: 2,
      name: 'developer',
      designation: 'Senior developer'
    }
  ]

  const debitcredit = [
    {
      id: 1,
      name: 'debit'
    },
    {
      id: 2,
      name: 'credit'
    }
  ]

  const ccallocated = [
    {
      id: 1,
      name: 'Yes'
    },
    {
      id: 2,
      name: 'No'
    }
  ]
  const save = () => {
    console.log(employeeform)
    try {
      fetch('http://103.38.50.113:8080/DairyApp/saveEmployeeMaster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeform)
      }).then((data) => {
        return data.json()
      }).then((res) => {
        toast.success(`${res.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        console.log(res)
      })
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    } catch (e) {
      console.log(e, "error")
    }

  }
  const customTheme = (outerTheme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#E0E3E7',
              '--TextField-brandBorderHoverColor': '#B2BAC2',
              '--TextField-brandBorderFocusedColor': '#6F7E8C',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&:before, &:after': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&:before': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              },

              '&.Mui-focused:after': {
                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
    });
  const exporttoexcel = async () => {
    const fileName = "myfile";
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(employeealldata)
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  useEffect(() => {
    fetch('http://103.38.50.113:8080/DairyApp/getAllEmployeeData').then((data) => {
      return data.json()
    }).then((res) => {
      let id = res.pop()
      // console.log(id.id)
      setempincid(id.id)
    })
  }, [])
  return (

    <>
      {loader ? <div className="loader-container">
        <div className="spinner"></div>
      </div> :
        <div className='container-fluid'>
          <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light">
          </ToastContainer>

          <div className='container mt-4 accCont' style={{ height: "40vh" }}>
            <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Employee Master</h3></div>
            <div className='row mt-4'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={empincid + 1}
                    label="Employee No"
                    variant='standard'
                  />
                </Box>
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Status"
                    value={employeeform.status === "" ? "Select" : employeeform.status}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg1 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            status.map((item, i) => (
                              <>
                                <li style={{ listStyle: 'none' }} onClick={() => {
                                  setemployeeform({
                                    ...employeeform,
                                    status: item.name
                                  })
                                  setTogg1(false)
                                }}>{item.name}</li>
                              </>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg1(!togg1)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>

                {/* <div className='dropdown '>
                  <button style={{ width: '90%' }} className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {employeeform.status === "" ? "Select" : employeeform.status}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className='dropdown-menu'>
                    {
                      status.map((item, i) => (
                        <>
                          <li onClick={() => {
                            setemployeeform({
                              ...employeeform,
                              status: item.name
                            })
                          }}>{item.name}</li>
                        </>
                      ))
                    }
                  </ul>
                </div> */}
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Account Group"
                    value={employeeform.accountGroup === "" ? "Select" : employeeform.accountGroup}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg2 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            accgrp.map((item, i) => (
                              <>
                                <li style={{ listStyle: 'none' }} onClick={() => {
                                  setemployeeform({
                                    ...employeeform,
                                    accountGroup: item.name
                                  })
                                  setTogg2(false)
                                }}>{item.name}</li>
                              </>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg2(!togg2)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
                {/* <div className='dropdown '>
                  <button style={{ width: '90%' }} className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {employeeform.accountGroup === "" ? "Select" : employeeform.accountGroup}
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className='dropdown-menu'>
                    {
                      accgrp.map((item, i) => (
                        <>
                          <li onClick={() => {
                            setemployeeform({
                              ...employeeform,
                              accountGroup: item.name
                            })
                          }}>{item.name}</li>
                        </>
                      ))
                    }
                  </ul>
                </div> */}
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.category}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        category: e.target.value
                      })
                    }}
                    label="Category"
                    variant='standard'
                  />
                </Box>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    label="Employee Name"
                    value={employeeform.employeeName}
                    variant='standard'
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        employeeName: e.target.value
                      })
                    }}
                  />
                </Box>
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Gender"
                    value={employeeform.gender === "" ? "Select" : employeeform.gender}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg3 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            gender.map((item, i) => (
                              <li style={{ listStyle: 'none' }}
                                onClick={() => {
                                  setemployeeform({
                                    ...employeeform,
                                    gender: item.name
                                  })
                                  setTogg3(false)
                                }}
                              >{item.name}</li>
                            ))

                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg3(!togg3)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
                {/* <div className='dropdown'>
                  <button style={{ width: '90%' }} className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {employeeform.gender === "" ? "Select" : employeeform.gender}

                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className='dropdown-menu'>
                    {
                      gender.map((item, i) => (
                        <li
                          onClick={() => {
                            setemployeeform({
                              ...employeeform,
                              gender: item.name
                            })
                          }}
                        >{item.name}</li>
                      ))

                    }
                  </ul>
                </div> */}
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Type"
                    value={employeeform.type === "" ? "Select" : employeeform.type}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg4 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            type.map((item, i) => (
                              <li style={{ listStyle: 'none' }}
                                onClick={() => {
                                  setemployeeform({
                                    ...employeeform,
                                    type: item.name
                                  })
                                  setTogg4(false)
                                }}
                              >{item.name}</li>
                            ))

                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg4(!togg4)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
                {/* <div className='dropdown'>
                  <button style={{ width: '90%' }} className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {employeeform.type === "" ? "Select" : employeeform.type}

                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className='dropdown-menu'>
                    {
                      type.map((item, i) => (
                        <li
                          onClick={() => {
                            setemployeeform({
                              ...employeeform,
                              type: item.name
                            })
                          }}
                        >{item.name}</li>
                      ))

                    }
                  </ul>
                </div> */}
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.grp}
                    label="Group"
                    variant='standard'
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        grp: e.target.value
                      })
                    }}
                  />
                </Box>
              </div>

            </div>
          </div>

          <div className='container mt-4 accCont' style={{ height: "50vh" }}>

            <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Joining Details</h5></div>
            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div className="d-flex flex-column">
                  <label style={{ fontSize: "14px" }}>
                    Date of Birth
                  </label>
                  <TextField
                    style={{ width: '30ch' }}
                    value={employeeform.dateOfBirth}
                    variant="standard" type="date"
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        dateOfBirth: e.target.value
                      })
                    }} />
                </div>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div className="d-flex flex-column">
                  <label style={{ fontSize: "14px" }}>
                    Date of Joining
                  </label>
                  <TextField
                    style={{ width: '30ch' }}
                    value={employeeform.joiningDate}
                    variant="standard" type="date"
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        joiningDate: e.target.value
                      })
                    }} />
                </div>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div className="d-flex flex-column">
                  <label style={{ fontSize: "14px" }}>
                    Date of Contract
                  </label>
                  <TextField
                    style={{ width: '30ch' }}
                    value={employeeform.contractEndDate}
                    variant="standard" type="date"
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        contractEndDate: e.target.value
                      })
                    }} />
                </div>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.enterCast}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        enterCast: e.target.value
                      })
                    }}
                    label="Enter Cast" variant="standard"
                  />
                </Box>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div className="d-flex flex-column">
                  <label style={{ fontSize: "14px" }}>
                    Retirement Date
                  </label>
                  <TextField
                    style={{ width: '30ch' }}
                    value={employeeform.retirementDate}
                    variant="standard" type="date"
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        retirementDate: e.target.value
                      })
                    }} />
                </div>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.salary}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        salary: e.target.value
                      })
                    }}
                    label="Salary" variant="standard"
                  />
                </Box>
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Salary Mode"
                    value={employeeform.salaryMode === "" ? "Select" : employeeform.salaryMode}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg5 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            salarymode.map((item, i) => (
                              <li style={{ listStyle: "none" }} onClick={() => {
                                setemployeeform({
                                  ...employeeform,
                                  salaryMode: item.name
                                })
                                setTogg5(false)
                              }}>{item.name}</li>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg5(!togg5)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>

              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Job Profile"
                    value={employeeform.jobProfile === "" ? "Select" : employeeform.jobProfile}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg6 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            jobprofile.map((item, i) => (
                              <>
                                <li style={{ listStyle: "none" }} onClick={() => {
                                  setemployeeform({
                                    ...employeeform,
                                    jobProfile: item.name
                                  })
                                  setTogg6(false)
                                }}>{item.name}</li>
                              </>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg6(!togg6)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className='row mt-3'>
              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Department"
                    value={employeeform.department === "" ? "Select" : employeeform.department}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg7 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            department.map((item, i) => (
                              <>
                                <li style={{ listStyle: "none" }} onClick={() => {
                                  setseldesignation(item)
                                  setemployeeform({
                                    ...employeeform,
                                    department: item.name
                                  })
                                  setTogg7(false)
                                }}>{item.name}</li>
                              </>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg7(!togg7)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Designation"
                    value={employeeform.designation === "" ? "Select" : employeeform.designation}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg8 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          <li onClick={() => {
                            setemployeeform({
                              ...employeeform,
                              designation: selectdesignation.designation
                            })
                            setTogg8(false)
                          }}>{selectdesignation.designation}</li>
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg8(!togg8)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.noticeDays}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        noticeDays: e.target.value
                      })
                    }}
                    label="Notice Days" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.companyEmail}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        companyEmail: e.target.value
                      })
                    }}
                    label="Company Email" variant="standard"
                  />
                </Box>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.attendanceID}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        attendanceID: e.target.value
                      })
                    }}
                    label="Attendence Id" variant="standard"
                  />
                </Box>
              </div>
            </div>
          </div>

          <div className='container mt-4 accCont' style={{ height: "35vh" }}>

            <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Contact Details</h5></div>
            <div className='row mt-3'>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.address}
                    onChange={(e) => setemployeeform({
                      ...employeeform,
                      address: e.target.value
                    })}
                    label="Address" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.mobile}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        mobile: e.target.value
                      })
                    }}
                    label="Mobile" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.eMail}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        eMail: e.target.value
                      })
                    }}
                    label="E-Mail" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.city}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        city: e.target.value
                      })
                    }}
                    label="City" variant="standard"
                  />
                </Box>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.district}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        district: e.target.value
                      })
                    }}
                    label="District" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.pinCode}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        pinCode: e.target.value
                      })
                    }}
                    label="Pincode" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.state}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        state: e.target.value
                      })
                    }}
                    label="State" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.country}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        country: e.target.value
                      })
                    }}
                    label="Country" variant="standard"
                  />
                </Box>
              </div>
            </div>
          </div>

          <div className='container mt-4 accCont' style={{ height: "45vh" }}>

            <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Account Details</h5></div>
            <div className='row mt-3'>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.openingBalance}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        openingBalance: e.target.value
                      })
                    }}
                    label="Opening Balance" variant="standard"
                  />
                </Box>
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Debit/Credit"
                    value={employeeform.debitCredit === "" ? "select" : employeeform.debitCredit}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg9 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            debitcredit.map((item, i) => (
                              <>
                                <li style={{ listStyle: "none" }}
                                  onClick={() => {
                                    setemployeeform({
                                      ...employeeform,
                                      debitCredit: item.name
                                    })
                                    setTogg9(false)
                                  }}
                                >{item.name}</li>
                              </>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg9(!togg9)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>

              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.panNo}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        panNo: e.target.value
                      })
                    }}
                    label="PAN No" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.uanNo}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        uanNo: e.target.value
                      })
                    }}
                    label="UAN No" variant="standard"
                  />
                </Box>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.epfNo}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        epfNo: e.target.value
                      })
                    }}
                    label="EPF No" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.esiNo}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        esiNo: e.target.value
                      })
                    }}
                    label="ESI No" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.accountNo}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        accountNo: e.target.value
                      })
                    }}
                    label="Account No" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.bankName}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        bankName: e.target.value
                      })
                    }}
                    label="Bank Name" variant="standard"
                  />
                </Box>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.branch}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        branch: e.target.value
                      })
                    }}
                    label="Branch" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.ifscCode}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        ifscCode: e.target.value
                      })
                    }}
                    label="IFSC Code" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.micrNo}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        micrNo: e.target.value
                      })
                    }}
                    label="MICR Code" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.bankAddress}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        bankAddress: e.target.value
                      })
                    }}
                    label="Bank Address" variant="standard"
                  />
                </Box>
              </div>
            </div>


          </div>

          <div className='container mt-4 accCont' style={{ height: "20vh" }}>

            <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Other Details</h5></div>
            <div className='row mt-3'>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.bloodGroup}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        bloodGroup: e.target.value
                      })
                    }}
                    label="Blood Group" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.aadharCardNo}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        aadharCardNo: e.target.value
                      })
                    }}
                    label="Adhaar No" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    value={employeeform.education}
                    onChange={(e) => {
                      setemployeeform({
                        ...employeeform,
                        education: e.target.value
                      })
                    }}
                    label="Education" variant="standard"
                  />
                </Box>
              </div>
            </div>


          </div>

          <div className='container mt-4 accCont' style={{ height: "26vh" }}>

            <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Employee Manager</h5></div>
            <div className='row mt-3'>
              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Employee Manager"
                    value={employeeform.managers === "" ? "Select" : employeeform.managers}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg10 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          <li style={{ listStyle: "none" }} onClick={() => {
                            setemployeeform({
                              ...employeeform,
                              managers: 'employee1'
                            })
                            setTogg10(false)
                          }}>Employee1</li>
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg10(!togg10)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>

              </div>
            </div>


          </div>

          <div className='container mt-4 accCont' style={{ height: "26vh" }}>

            <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Cost Center</h5></div>
            <div className='row mt-3'>
              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                Is Cost Center
              </div>

              <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <div>
                  <TextField
                    variant='standard'
                    label="Is cost center"
                    value={employeeform.isCostCenterAllocated === "" ? "Select" : employeeform.isCostCenterAllocated}
                    sx={{ width: "25ch" }}
                  />
                  {
                    togg11 ?
                      <div className='milkpurchaseselect'>
                        <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                          {
                            ccallocated.map((item, i) => (
                              <li onClick={() => {
                                setemployeeform({
                                  ...employeeform,
                                  isCostCenterAllocated: item.name
                                })
                                setTogg11(false)
                              }}>{item.name}</li>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
                <div className='mt-4'>
                  <IconButton onClick={() => setTogg11(!togg11)}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </div>
              </div>


            </div>


          </div>

          <div className='container mt-4 accCont' style={{ height: "20vh" }}>

            <div><h5 className='text-center pt-3' style={{ textDecoration: "underline" }}>Create Ledger</h5></div>
            <div className='row mt-3'>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    label="Sub Ledger Name" variant="standard"
                  />
                </Box>
              </div>

              <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                <Box component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                  autoComplete="off">
                  <TextField
                    label="Group" variant="standard"
                  />
                </Box>
              </div>
            </div>
          </div>

          <div className='container mt-4 mb-2 mb-sm-0'>
            <button onClick={() => setshowtable(!showtable)} className='btn btn-primary mb-3'>Employee list</button>
            <button onClick={() => { save() }} className='btn btn-primary mx-3 mb-3'>Save</button>
            <button onClick={() => { exporttoexcel() }} className='btn btn-primary mx-3 mb-3'>Export</button>
            <button onClick={() => { clear() }} className='btn btn-primary mx-3 mb-3'>Clear</button>
          </div>


          {showtable ?
            <div className='container mt-4 accMastTable mb-3 p-0'>
              <table className="tableAccMaster table table-stripped">
                <thead>
                  <tr>
                    <th scope='col' style={{width:"150px"}}>EID</th>
                    <th scope='col' style={{width:"150px"}}>Employee name</th>
                    <th scope='col' style={{width:"150px"}}>Gender</th>
                    <th scope='col' style={{width:"150px"}}>Joining Date</th>
                    <th scope='col' style={{width:"150px"}}>Department</th>
                    <th scope='col' style={{width:"150px"}}>Designation</th>
                    <th scope='col' style={{width:"150px"}}>Salary</th>
                    <th scope='col' style={{width:"150px"}}>Group</th>
                    <th scope='col' style={{width:"150px"}}>Category</th>
                    <th scope='col' style={{width:"150px"}}>Account Group</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    employeealldata.map((item, i) => (
                      <tr>
                        <th scope="row" className='text-center'>{item.id}</th>
                        <td>{item.employeeName}</td>
                        <td>{item.gender}</td>
                        <td>{item.joiningDate}</td>
                        <td>{item.department}</td>
                        <td>{item.designation}</td>
                        <td>{item.salary}</td>
                        <td>{item.grp}</td>
                        <td>{item.category}</td>
                        <td>{item.accountGroup}</td>
                      </tr>
                    ))

                  }
                </tbody>
              </table>
            </div> : null
          }





          {/* <>
            <div className='row my-3'>
              <div className='col-1 col-1'>
                <IconButton onClick={() => setjoiningdetailsshow(!joiningdetailshow)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div className='col-10 col-md-10 mt-2'>
                <h5 className='text-center'>Joining Details</h5>
              </div>
            </div>
            {
              joiningdetailshow ?
                <>  <div className='row'>
                  <div className='col-12 col-md-3'>
                    <div>
                      Date Of Birth
                    </div>
                    <div>
                      <input
                        value={employeeform.dateOfBirth}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            dateOfBirth: e.target.value
                          })
                        }}
                        type='date' />
                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div>
                      Date Of Joining
                    </div>
                    <div>
                      <input
                        value={employeeform.joiningDate}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            joiningDate: e.target.value
                          })
                        }}
                        type='date' />
                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div>
                      Date of Contract
                    </div>
                    <div>
                      <input
                        value={employeeform.contractEndDate}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            contractEndDate: e.target.value
                          })
                        }}
                        type='date' />
                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <TextField
                        value={employeeform.enterCast}
                        label="Enter cast"
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            enterCast: e.target.value
                          })
                        }}
                      />
                    </ThemeProvider>
                  </div>

                </div>

                  <div className='row my-2'>
                    <div className='col-12 col-md-3'>
                      <div>
                        Retirement Date
                      </div>
                      <div>
                        <input
                          value={employeeform.retirementDate}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              retirementDate: e.target.value
                            })
                          }}
                          type='date' />
                      </div>
                    </div>

                    <div className='col-12 col-md-3'>
                      <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                          variant='standard'
                          label={"Salary"}
                          value={employeeform.salary}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              salary: e.target.value
                            })
                          }}
                        />
                      </ThemeProvider>
                    </div>

                    <div className='col-12 col-md-3'>
                      <div>
                        Salary Mode
                      </div>
                      <div>
                        <div className='dropdown'>
                          <button
                            style={{ width: '80%' }}
                            className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {employeeform.salaryMode === "" ? "Select" : employeeform.salaryMode}
                            <div className='dropdown-toggle'>

                            </div>
                          </button>
                          <ul className='dropdown-menu'>
                            {
                              salarymode.map((item, i) => (
                                <li onClick={() => {
                                  setemployeeform({
                                    ...employeeform,
                                    salaryMode: item.name
                                  })
                                }}>{item.name}</li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='col-12 col-md-3'>

                    </div>




                  </div>

                  <div className='row my-2'>
                    <div className='col-12 col-md-3'>
                      <div>
                        Job Profile
                      </div>
                      <div>
                        <div className='dropdown'>
                          <button style={{ width: '80%' }}
                            className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {employeeform.jobProfile === "" ? "Select" : employeeform.jobProfile}
                            <div className='dropdown-toggle'>

                            </div>
                          </button>
                          <ul className='dropdown-menu'>
                            {
                              jobprofile.map((item, i) => (
                                <>
                                  <li onClick={() => {
                                    setemployeeform({
                                      ...employeeform,
                                      jobProfile: item.name
                                    })
                                  }}>{item.name}</li>
                                </>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='col-12 col-md-3'>
                      <div>
                        Department
                      </div>
                      <div>
                        <div className='dropdown'>
                          <button style={{ width: '80%' }}
                            className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {employeeform.department === "" ? "Select" : employeeform.department}
                            <div className='dropdown-toggle'>

                            </div>
                          </button>
                          <ul className='dropdown-menu'>
                            {
                              department.map((item, i) => (
                                <>
                                  <li onClick={() => {
                                    setseldesignation(item)
                                    setemployeeform({
                                      ...employeeform,
                                      department: item.name
                                    })
                                  }}>{item.name}</li>
                                </>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='col-12 col-md-3'>
                      <div>
                        Designation
                      </div>
                      <div>
                        <div className='dropdown'>
                          <button
                            style={{ width: '80%' }}
                            className="btn bg-light d-flex align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {employeeform.designation === "" ? "Select" : employeeform.designation}
                            <div className='dropdown-toggle'>

                            </div>
                          </button>
                          <ul className='dropdown-menu'>
                            <li onClick={() => {
                              setemployeeform({
                                ...employeeform,
                                designation: selectdesignation.designation
                              })
                            }}>{selectdesignation.designation}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='col-12 col-md-3'>

                    </div>




                  </div>

                  <div className='row my-2'>
                    <div className='col-12 col-md-3'>
                      <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                          variant='standard'
                          label="Notice Days"
                          value={employeeform.noticeDays}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              noticeDays: e.target.value
                            })
                          }}
                        />
                      </ThemeProvider>
                    </div>

                    <div className='col-12 col-md-3'>
                      <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                          variant='standard'
                          label="Company Email"
                          value={employeeform.companyEmail}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              companyEmail: e.target.value
                            })
                          }}
                        />
                      </ThemeProvider>
                    </div>

                    <div className='col-12 col-md-3'>
                      <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                          variant='standard'
                          label="Attendence Id"
                          value={employeeform.attendanceID}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              attendanceID: e.target.value
                            })
                          }}
                        />
                      </ThemeProvider>
                    </div>

                    <div className='col-12 col-3'>

                    </div>
                  </div></> : null
            }

            <div className='row'>
              <div className='col-1 col-md-1'>
                <IconButton onClick={() => setshowcontactdetail(!showcontactdetail)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div className='col-10 col-md-10'>
                <h5 className='text-center'>Contact Details</h5>
              </div>
            </div>

            {
              showcontactdetail ?
                <div style={{ width: '80vw', overflowX: 'scroll' }}>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Address</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">E-Mail</th>
                        <th scope="col">City</th>
                        <th scope="col">District</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">State</th>
                        <th scope="col">country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td><input value={employeeform.address} onChange={(e) => setemployeeform({
                          ...employeeform,
                          address: e.target.value
                        })} type='text' />
                        </td>
                        <td><input value={employeeform.mobile}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              mobile: e.target.value
                            })
                          }}
                          type='text' />
                        </td>
                        <td><input value={employeeform.eMail}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              eMail: e.target.value
                            })
                          }}
                          type='text' />
                        </td>
                        <td><input value={employeeform.city}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              city: e.target.value
                            })
                          }}
                          type='text' />
                        </td>
                        <td><input
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              district: e.target.value
                            })
                          }}
                          value={employeeform.district} type='text' />
                        </td>
                        <td><input
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              pinCode: e.target.value
                            })
                          }}
                          value={employeeform.pinCode} type='text' />
                        </td>
                        <td><input
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              state: e.target.value
                            })
                          }}
                          value={employeeform.state} type='text' />
                        </td>
                        <td><input
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              country: e.target.value
                            })
                          }}
                          value={employeeform.country} type='text' />
                        </td>

                      </tr>

                    </tbody>
                  </table>
                </div> : null
            }

            <div className='row'>
              <div className='col-1 col-md-1'>
                <IconButton onClick={() => setshowaccountdetail(!showaccountdetail)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div className='col-10 col-md-10'>
                <h5 className='text-center'>Account Details</h5>
              </div>
            </div>
            {
              showaccountdetail ?
                <> <div className='row'>
                  <div className='col-12 col-md-4'
                  >
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <TextField
                        variant='standard'
                        value={employeeform.openingBalance}
                        label={'Opening balance'}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            openingBalance: e.target.value
                          })
                        }}
                      />
                    </ThemeProvider>
                  </div>

                  <div className='col-12 col-md-4'>
                    <div>
                      Debit/Credit
                    </div>
                    <div>
                      <div className="dropdown">
                        <button
                          style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                          className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {employeeform.debitCredit === "" ? "select" : employeeform.debitCredit}
                          <div className='dropdown-toggle'>

                          </div>
                        </button>
                        <ul className="dropdown-menu">
                          {
                            debitcredit.map((item, i) => (
                              <>
                                <li
                                  onClick={() => setemployeeform({
                                    ...employeeform,
                                    debitCredit: item.name
                                  })}
                                  className='dropdown-item'>{item.name}</li>
                              </>
                            ))
                          }

                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-md-4'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <TextField
                        value={employeeform.panNo}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            panNo: e.target.value
                          })
                        }}
                      />
                    </ThemeProvider>
                  </div>
                </div>
                  <div className='row'>
                    <div className='col-12 col-md-4'>
                      <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                          value={employeeform.uanNo}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              uanNo: e.target.value
                            })
                          }}
                          label={"UAN No"}
                          variant='standard'
                        />
                      </ThemeProvider>
                    </div>

                    <div className='col-12 col-md-4'>
                      <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                          value={employeeform.epfNo}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              epfNo: e.target.value
                            })
                          }}
                          label={"EPF No"}
                          variant='standard'
                        />
                      </ThemeProvider>
                    </div>

                    <div className='col-12 col-md-4'>
                      <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                          value={employeeform.esiNo}
                          onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              esiNo: e.target.value
                            })
                          }}
                          label={"ESI No"}
                          variant='standard'
                        />
                      </ThemeProvider>
                    </div>
                  </div>

                  <div style={{ width: '80vw', overflowX: 'scroll' }}>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Account No</th>
                          <th scope="col">Bank Name</th>
                          <th scope="col">Branch</th>
                          <th scope="col">IFSC Code</th>
                          <th scope="col">MICR Code</th>
                          <th scope="col">Bank Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td><input type='text' value={employeeform.accountNo} onChange={(e) => {
                            setemployeeform({
                              ...employeeform,
                              accountNo: e.target.value
                            })
                          }} /></td>
                          <td><input type='text'
                            value={employeeform.bankName}
                            onChange={(e) => {
                              setemployeeform({
                                ...employeeform,
                                bankName: e.target.value
                              })
                            }} /></td>
                          <td><input type='text'
                            value={employeeform.branch}
                            onChange={(e) => {
                              setemployeeform({
                                ...employeeform,
                                branch: e.target.value
                              })
                            }}
                          /></td>
                          <td><input type='text'
                            value={employeeform.ifscCode}
                            onChange={(e) => {
                              setemployeeform({
                                ...employeeform,
                                micrNo: e.target.value
                              })
                            }}
                          /></td>
                          <td><input type='text'
                            value={employeeform.micrNo}
                            onChange={(e) => {
                              setemployeeform({
                                ...employeeform,
                                ifscCode: e.target.value
                              })
                            }}
                          /></td>
                          <td><input type='text'
                            value={employeeform.bankAddress}
                            onChange={(e) => {
                              setemployeeform({
                                ...employeeform,
                                bankAddress: e.target.value
                              })
                            }}
                          /></td>
                        </tr>

                      </tbody>
                    </table>
                  </div></> : null
            }

            <div className='row'>
              <div className='col-1 col-md-1'>
                <IconButton onClick={() => setshowotherdetail(!showothersetail)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div className='col-10 col-md-10'>
                <h5 className='text-center'>Other Details</h5>
              </div>
            </div>
            {
              showothersetail ?
                <div className='row'>
                  <div className='col-12 col-md-4'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <TextField
                        label={"Blood Group"}
                        variant='standard'
                        value={employeeform.bloodGroup}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            bloodGroup: e.target.value
                          })
                        }}
                      />
                    </ThemeProvider>
                  </div>
                  <div className='col-12 col-md-4'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <TextField
                        label={"Adhaar No"}
                        variant='standard'
                        value={employeeform.aadharCardNo}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            aadharCardNo: e.target.value
                          })
                        }}
                      />
                    </ThemeProvider>
                  </div>
                  <div className='col-12 col-md-4'>
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <TextField
                        label={"Blood Group"}
                        variant='standard'
                        value={employeeform.education}
                        onChange={(e) => {
                          setemployeeform({
                            ...employeeform,
                            education: e.target.value
                          })
                        }}
                      />
                    </ThemeProvider>
                  </div>
                </div> : null
            }
            <div className='row'>
              <div className='col-1 col-md-1'>
                <IconButton onClick={() => setshowmanager(!showmanager)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div className='col-10 col-md-10'>
                <h5 className='text-center'>Employee Manager</h5>
              </div>
            </div>
            {showmanager ?
              <div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Employee Manager</th>
                      <th scope="col">Add</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td><div className='dropdown'>
                        <button style={{ width: '10vw', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                          className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {employeeform.managers === "" ? "Select" : employeeform.managers}
                          <div className='dropdown-toggle'>

                          </div>
                        </button>
                        <ul className="dropdown-menu">
                          <li onClick={() => {
                            setemployeeform({
                              ...employeeform,
                              managers: 'employee1'
                            })
                          }}>Employee1</li>
                        </ul>
                      </div></td>
                      <td>delete</td>

                    </tr>

                  </tbody>
                </table>
              </div> : null}

            <div className='row'>
              <div className='col-1 col-md-1'>
                <IconButton onClick={() => setshowcostcenter(!showcostcenter)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div className='col-10 col-md-10'>
                <h5 className='text-center'>Cost Center</h5>
              </div>
            </div>
            {
              showcostcenter ?
                <>
                  <div className='row'>
                    <div className='col-12 col-md-5'>
                      Is cost center
                    </div>
                    <div className='col-12 col-md-5'>
                      <div className='dropdown'>
                        <button style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                          className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {employeeform.isCostCenterAllocated === "" ? "Select" : employeeform.isCostCenterAllocated}

                          <div className='dropdown-toggle'>

                          </div>
                        </button>
                        <ul className="dropdown-menu">
                          {
                            ccallocated.map((item, i) => (
                              <li onClick={() => {
                                setemployeeform({
                                  ...employeeform,
                                  isCostCenterAllocated: item.name
                                })
                              }}>{item.name}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </> : null
            }
            <div className='row'>
              <div className='col-1 col-md-1'>
                <IconButton onClick={() => setshowledger(!showledger)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <div className='col-10 col-md-10'>
                <h5 className='text-center'>Create Ledger</h5>
              </div>
            </div>
            {
              showledger ?

                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sub Ledger Name</th>
                        <th scope="col">Group</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td><input type='text' /></td>
                        <td><input type='text' /></td>

                      </tr>

                    </tbody>
                  </table>
                </div> : null
            }
            <div className='row'>
              <div className='col-1 col-md-2'>
                <button
                  onClick={() => setshowtable(!showtable)}
                  className='bg-primary border border-none rounded text-white'>Employee list</button>
              </div>
            </div>
            {showtable ? <div style={{ width: '80vw', overflowX: 'scroll', height: '50vh', overflowY: 'scroll' }}>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">EID</th>
                    <th scope="col">Employee name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Joining Date</th>
                    <th scope="col">Department</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Group</th>
                    <th scope="col">Category</th>
                    <th scope="col">Account Group</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    employeealldata.map((item, i) => (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.employeeName}</td>
                        <td>{item.gender}</td>
                        <td>{item.joiningDate}</td>
                        <td>{item.department}</td>
                        <td>{item.designation}</td>
                        <td>{item.salary}</td>
                        <td>{item.grp}</td>
                        <td>{item.category}</td>
                        <td>{item.accountGroup}</td>
                      </tr>
                    ))

                  }
                </tbody>
              </table>
            </div> : null
            }

            <div className='row'>
              <div className='col-12 col-md-3'>
                <button
                  onClick={() => {
                    save()
                  }}
                  className='bg-primary border border-none rounded text-white'>Save</button>
              </div>
              <div className='col-12 col-md-3'>
                <button
                  onClick={() => exporttoexcel()}
                  className='bg-primary border border-none rounded text-white'>export</button>
              </div>
              <div className='col-12 col-md-3'>
                <button onClick={() => clear()} className='bg-primary border border-none rounded text-white'>clear</button>
              </div>
            </div>
          </> */}

        </div>}</>

  )
}

export default Employeemastercom