import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify'
import * as FileSaver from 'file-saver'
import * as XLSX from "xlsx";
import './accountmaster.css'
const Employeemastercom = () => {
  const outerTheme = useTheme()
  const [selectdesignation, setseldesignation] = useState({})
  const [showcontactdetail, setshowcontactdetail] = useState(false)
  const [joiningdetailshow, setjoiningdetailsshow] = useState(false)
  const [showaccountdetail, setshowaccountdetail] = useState(false)
  const [loader,setloader] = useState(false)
  const [showothersetail, setshowotherdetail] = useState(false)
  const [showcostcenter, setshowcostcenter] = useState(false)
  const [showmanager, setshowmanager] = useState(false)
  const [showledger, setshowledger] = useState(false)
  const [showtable, setshowtable] = useState(false)
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

  const clear = ()=>{
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
    try{

      let data = await fetch('http://103.38.50.113:8080/DairyApp/getAllEmployeeData')
      let datares = await data.json()
     if(datares){
      setloader(false)
      setemployeealldata(datares)
     }
    }catch(e)
    {
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
        theme="light"></ToastContainer>
      <div className='container'>
        <h3 className='text-center'>Employee Master</h3>
        <div className='row my-2'>
          <div className='col-12 col-md-3'>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                value={1}
                label={"Employee No"}
                variant='standard'
              />
            </ThemeProvider>
          </div>

          <div className='col-12 col-md-3'>
            <div style={{ fontSize: '0.7rem' }}>
              Status
            </div>
            <div className='dropdown '>
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
            </div>
          </div>

          <div className='col-12 col-md-3'>
            <div style={{ fontSize: '0.7rem' }}>
              Account Group
            </div>
            <div className='dropdown '>
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
            </div>
          </div>

          <div className='col-12 col-md-3'>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                value={employeeform.category}
                onChange={(e) => {
                  setemployeeform({
                    ...employeeform,
                    category: e.target.value
                  })
                }}
                label={"Category"}
                variant='standard'
              />
            </ThemeProvider>
          </div>



        </div>

        <div className='row my-2'>
          <div className='col-12 col-md-3'>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                label={"Employee Name"}
                value={employeeform.employeeName}
                variant='standard'
                onChange={(e) => {
                  setemployeeform({
                    ...employeeform,
                    employeeName: e.target.value
                  })
                }}
              />
            </ThemeProvider>
          </div>

          <div className='col-12 col-md-3'>
            <div>
              Gender
            </div>
            <div className='dropdown'>
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
            </div>
          </div>

          <div className='col-12 col-md-3'>
            <div>
              Type
            </div>
            <div className='dropdown'>
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
            </div>
          </div>

          <div className='col-12 col-md-3'>
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                value={employeeform.grp}
                label={"Group"}
                variant='standard'
                onChange={(e) => {
                  setemployeeform({
                    ...employeeform,
                    grp: e.target.value
                  })
                }}
              />
            </ThemeProvider>
          </div>

        </div>

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
                    })} type='text' /></td>
                    <td><input value={employeeform.mobile}
                      onChange={(e) => {
                        setemployeeform({
                          ...employeeform,
                          mobile: e.target.value
                        })
                      }}
                      type='text' /></td>
                    <td><input value={employeeform.eMail}
                      onChange={(e) => {
                        setemployeeform({
                          ...employeeform,
                          eMail: e.target.value
                        })
                      }}
                      type='text' /></td>
                    <td><input value={employeeform.city}
                      onChange={(e) => {
                        setemployeeform({
                          ...employeeform,
                          city: e.target.value
                        })
                      }}
                      type='text' /></td>
                    <td><input
                      onChange={(e) => {
                        setemployeeform({
                          ...employeeform,
                          district: e.target.value
                        })
                      }}
                      value={employeeform.district} type='text' /></td>
                    <td><input
                      onChange={(e) => {
                        setemployeeform({
                          ...employeeform,
                          pinCode: e.target.value
                        })
                      }}
                      value={employeeform.pinCode} type='text' /></td>
                    <td><input
                      onChange={(e) => {
                        setemployeeform({
                          ...employeeform,
                          state: e.target.value
                        })
                      }}
                      value={employeeform.state} type='text' /></td>
                    <td><input
                      onChange={(e) => {
                        setemployeeform({
                          ...employeeform,
                          country: e.target.value
                        })
                      }}
                      value={employeeform.country} type='text' /></td>

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

              {/* <div className='col-12 col-md-4'>
                <div>
                  Debit/Credit
                </div>
                <div>
                  <div className='dropdown'>
                    <button style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {employeeform.debitCredit === "" ? "select" : employeeform.debitCredit}
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                  </div>
                  <ul className="dropdown-menu">
                    {
                      debitcredit.map((item, i) => (
                        <><li onClick={() => {
                          setemployeeform({
                            ...employeeform,
                            debitCredit: item.name
                          })
                        }}>{item.name}</li></>
                      ))
                    }
                  </ul>
                </div>
              </div> */}
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
                      <td><input type='text' value={employeeform.bankName} onChange={(e) => {
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
            onClick={()=>exporttoexcel()}
            className='bg-primary border border-none rounded text-white'>export</button>
          </div>
          <div className='col-12 col-md-3'>
            <button onClick={()=>clear()} className='bg-primary border border-none rounded text-white'>clear</button>
          </div>
        </div>

      </div>
    </div>}</>
            
  )
}

export default Employeemastercom