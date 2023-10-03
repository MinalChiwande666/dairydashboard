import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
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
  const [loader, setloader] = useState(false)
  const [empincid, setempincid] = useState()
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
      })
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    } catch (e) {
      console.log(e, "error")
    }

  }

  const exporttoexcel = async () => {
    const fileName = "myfile";
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
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
      setempincid(id.id)
    })
  }, [])
  return (

    <>
      {loader ? <div className="loader-container">
        <div className="spinner"></div>
      </div> :
        <div className='container-fluid' onClick={() => {
          if (togg1 === true) {
            setTogg1(false)
          } else if (togg2 === true) {
            setTogg2(false)
          } else if (togg3 === true) {
            setTogg3(false)
          } else if (togg4 === true) {
            setTogg4(false)
          } else if (togg5 === true) {
            setTogg5(false)
          } else if (togg6 === true) {
            setTogg6(false)
          } else if (togg7 === true) {
            setTogg7(false)
          } else if (togg8 === true) {
            setTogg8(false)
          } else if (togg9 === true) {
            setTogg9(false)
          } else if (togg10 === true) {
            setTogg10(false)
          } else if (togg11 === true) {
            setTogg11(false)
          }
        }}>
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
                    <th scope='col' style={{ width: "150px" }}>EID</th>
                    <th scope='col' style={{ width: "150px" }}>Employee name</th>
                    <th scope='col' style={{ width: "150px" }}>Gender</th>
                    <th scope='col' style={{ width: "150px" }}>Joining Date</th>
                    <th scope='col' style={{ width: "150px" }}>Department</th>
                    <th scope='col' style={{ width: "150px" }}>Designation</th>
                    <th scope='col' style={{ width: "150px" }}>Salary</th>
                    <th scope='col' style={{ width: "150px" }}>Group</th>
                    <th scope='col' style={{ width: "150px" }}>Category</th>
                    <th scope='col' style={{ width: "150px" }}>Account Group</th>
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
        </div>}
    </>
  )
}

export default Employeemastercom