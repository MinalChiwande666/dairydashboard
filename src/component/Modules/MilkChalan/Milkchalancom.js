import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { Button, DialogActions, DialogTitle, IconButton } from '@mui/material';


const Milkchalancom = () => {
  const outerTheme = useTheme()
 
  const [showadulteration, setshowadulteration] = useState(false)
  const [showtransport, setshowtransport] = useState(false)
  const collection = [
    {
      id: 1,
      name: 'Morning'
    },
    {
      id: 2,
      name: 'Evening'
    }
  ]

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

  return (
    <div className='container-fluid'>
      <div className='container'>
    
        <h3 className='text-center'>Milk Deilivery</h3>
        <div style={{ boxShadow: '10px 10px 10px 0px gray' }}>
          <div className='row mt-3'>
            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  label="InWard Id"
                  variant='standard'
                  style={{ width: '90%' }}
                />
              </ThemeProvider>
            </div>
            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  style={{ width: '90%' }}
                  variant='standard'
                  label="Inward No"
                />
              </ThemeProvider>
            </div>
            <div className='col-12 col-md-3'>
              <div>
                Inward Date
              </div>
              <div>
                <input style={{ width: '90%' }} type='date' />
              </div>
            </div>


            <div className='col-12 col-md-3'>
              <div>
                Collection Type
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-12 col-md-3'>
              <div>
                Party Name
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '90%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  label="Address"
                  style={{ width: '90%' }}
                  variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Mobile No" variant='standard' style={{ width: '90%' }} />
              </ThemeProvider>
            </div>
            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Temp" variant='standard' style={{ width: '90%' }} />
              </ThemeProvider>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-12 col-md-3'>
              <div>
                Warehouse
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '90%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <div>
                Item Name
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '90%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Unit" variant='standard' style={{ width: '90%' }} />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <div>
                Batch
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '90%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-12 col-md-3'>
              <div>
                Type
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '90%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="FAT" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Degree" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="SNF" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Rate" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="In Kg Weight" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="	Weight (LTR)" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Total" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Acidity" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="MBR" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Transport Rate" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Overcharge" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-12 col-md-3'>

              <div>
                Employee
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '90%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Protien" type='number' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label="Remark" type='text' style={{ width: '90%' }} variant='standard' />
              </ThemeProvider>
            </div>

            <div className='col-12 col-md-3'>

            </div>
          </div>
        </div>

        <div className='my-4' style={{ boxShadow: '10px 10px 10px 0px gray' }}>
          <div className='row my-4'>
            <div className='col-1 col-md-1'>
              <IconButton onClick={() => setshowadulteration(!showadulteration)}>
                <AddCircleIcon />
              </IconButton>
            </div>
            <div className='col-10 col-md-10'>
              <h3 className='text-center'>Adulteration Test</h3>
            </div>
          </div>

          {showadulteration ? <><div className='row'>
            <div className='col-12 col-md-3'>
              <div>
                Sugar
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <div>
                Starch
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <div>
                Urea
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-3'>
              <div>
                Neutraliser(Soda)
              </div>
              <div>
                <div className="dropdown">
                  <button
                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select
                    <div className='dropdown-toggle'>

                    </div>
                  </button>
                  <ul className="dropdown-menu">
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                    <li className='dropdown-item'>Hello</li>
                  </ul>
                </div>
              </div>
            </div>

          </div><div className='row mt-3'>
              <div className='col-12 col-md-3'>
                <div>
                  Salt
                </div>
                <div>
                  <div className="dropdown">
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Select
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-3'>
                <div>
                  Malto Dextrin
                </div>
                <div>
                  <div className="dropdown">
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Select
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-3'>
                <div>
                  Glucose
                </div>
                <div>
                  <div className="dropdown">
                    <button
                      style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                      className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Select
                      <div className='dropdown-toggle'>

                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                      <li className='dropdown-item'>Hello</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-12 col-md-3'>


              </div>

            </div></> : null}


        </div>

        <div className='my-4' style={{ boxShadow: '10px 10px 10px 0px gray' }}>
          <div className='row'>
            <div className='col-1 col-md-1'>
              <IconButton onClick={() => setshowtransport(!showtransport)}>
                <AddCircleIcon />
              </IconButton>
            </div>
            <div className='col-10 col-md-10'>
              <h3 className='text-center'>Transport Details</h3>
            </div>
          </div>

          {
            showtransport &&
            <><div className='row justify-content-between'>
              <div className='col-12 col-md-3'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField label="Vehicle Name" variant='standard' style={{ width: '90%' }} />
                </ThemeProvider>
              </div>
              <div className='col-12 col-md-3'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField label="Vehicle No" variant='standard' style={{ width: '90%' }} />
                </ThemeProvider>
              </div>
              <div className='col-12 col-md-3'>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField label="Seal No" variant='standard' style={{ width: '90%' }} />
                </ThemeProvider>
              </div>

            </div><div className='row justify-content-between'>
                <div className='col-12 col-md-3'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField label="Driver Name" variant='standard' style={{ width: '90%' }} />
                  </ThemeProvider>
                </div>
                <div className='col-12 col-md-3'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField label="Mobile  No" variant='standard' style={{ width: '90%' }} />
                  </ThemeProvider>
                </div>
                <div className='col-12 col-md-3'>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <TextField label="Remark" variant='standard' style={{ width: '90%' }} />
                  </ThemeProvider>
                </div>

              </div></>}
        </div>

        <div className='row'>
          <div className='col-3 col-3'>
            <button className='border border-none bg-primary rounded text-white'>Show More</button>
          </div>
          <div className='col-3 col-3'>
            <input />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Milkchalancom