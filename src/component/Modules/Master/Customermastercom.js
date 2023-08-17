import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './accountmaster.css'
const Customermastercom = () => {
    const [customerdata, setcustomerdata] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [hide1, sethide1] = useState(false)
    
    const [hide2, sethide2] = useState(false)
    const [hide3, sethide3] = useState(false)
    const [hide4, sethide4] = useState(false)
    const [hide5, sethide5] = useState(false)

    const customername = [
        {
            id: 1,
            name: 'Neeraj'
        },
        {
            id: 2,
            name: 'pranay'
        }
    ]
    const outerTheme = useTheme()
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

    const getcustomeralldata = async () => {
        let data = await fetch('http://103.38.50.113:8080/DairyApp/getAllCustomerMasterData')
        let alldata = await data.json()
        console.log(alldata)
        setcustomerdata(alldata)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    
    useEffect(() => {
        getcustomeralldata()
    }, [])
    return (
        <div className='container-fluid'>
            <div className='container'>
                <h1 className='text-center'>Customer Master</h1>
                <div style={{ boxShadow: '10px 10px 10px 0px gray' }}>
                    <div className='row'>
                        <div className='col-12 col-md-3'>
                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    value={1}
                                    style={{ pointerEvents: 'none' }}
                                    contentEditable={false}

                                    label="Customer No." variant="standard"
                                />
                            </ThemeProvider>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 col-md-3'>

                            <ThemeProvider theme={customTheme(outerTheme)}>
                                <TextField
                                    label="Customer name"
                                    variant='standard'
                                />
                                <IconButton onClick={handleClick} >
                                    <KeyboardArrowDownIcon className='dropicon'/>

                                </IconButton>

                            </ThemeProvider>
                            <Menu
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                id="basic-menu">
                                <MenuItem>
                                    Neeraj
                                </MenuItem>
                                <MenuItem>
                                    Neeraj
                                </MenuItem>
                                <MenuItem>
                                    Neeraj
                                </MenuItem>
                            </Menu>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Account Group
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                GST State
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Status
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 col-md-3'>
                            <div>
                                Sales Person
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Category
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Type Of Gst
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Alias
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 col-md-3'>
                            <div>
                                Email Id
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Group
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                GST No
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Aniivery Date
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 col-md-3'>
                            <div>
                                Opening Balance
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Debit/Credit
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 col-md-3'>
                            <div>
                                Select Route Name
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Main Ledger
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row mt-4'>
                        <div className='col-12 col-md-3'>
                            <div>
                                TAX Type
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div style={{ boxShadow: '10px 10px 10px 0px gray' }}>
                    <div className='row mt-4'>
                        <div className='col-12 col-md-3'>
                            <div>

                                Milk Rate Contract
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                By-Product Rate
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Ice-Cream Rate
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div>
                                Other Rate
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
                                        <li>Hello</li>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='row mt-4'>
                        <div className='col-1 col-md-1'>
                            <IconButton
                                onClick={() => sethide1(!hide1)}
                            >
                                {hide1 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                            </IconButton>
                        </div>
                        <div className='col-11 col-md-11'>
                            <h6 className='text-center'>Contact And Address details</h6>
                            {
                                hide1 &&
                                <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                    <table class="table ">
                                        <caption>List of users</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">Sr No</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Area</th>
                                                <th scope="col">Taluka</th>
                                                <th scope='col'>District</th>
                                                <th scope='col'>City</th>
                                                <th scope='col'>PinCode</th>
                                                <th scope='col'>State</th>
                                                <th scope='col'>Phone No</th>
                                                <th scope='col'>Mobile No</th>
                                                <th scope='col'>Transit Days</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>

                    </div>
                </div>

                <div>
                    <div className='row mt-4'>
                        <div className='col-1 col-md-1'>
                            <IconButton
                                onClick={() => sethide2(!hide2)}
                            >
                                {hide2 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                            </IconButton>
                        </div>
                        <div className='col-11 col-md-11'>
                            <h6 className='text-center'>Contact details</h6>
                            {
                                hide2 &&
                                <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                    <table class="table ">
                                        <caption>List of users</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">Sr No</th>
                                                <th scope="col">Contact Person</th>
                                                <th scope="col">Mobile</th>
                                                <th scope="col">Designation</th>
                                                <th scope='col'>District</th>
                                                <th scope='col'>E-Mail</th>
                                                <th scope='col'>Date of Birth</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='' /></td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>

                    </div>
                </div>

                <div>
                    <div className='row mt-4'>
                        <div className='col-1 col-md-1'>
                            <IconButton
                                onClick={() => sethide3(!hide3)}
                            >
                                {hide3 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                            </IconButton>
                        </div>
                        <div className='col-11 col-md-11'>
                            <h6 className='text-center'>Account details</h6>
                            {
                                hide3 &&
                                <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                    <table class="table ">
                                        <caption>List of users</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">Sr No</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Area</th>
                                                <th scope="col">Taluka</th>
                                                <th scope='col'>District</th>
                                                <th scope='col'>City</th>
                                                <th scope='col'>PinCode</th>
                                                <th scope='col'>State</th>
                                                <th scope='col'>Phone No</th>
                                                <th scope='col'>Mobile No</th>
                                                <th scope='col'>Transit Days</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>

                    </div>
                </div>

                <div>
                    <div className='row mt-4'>
                        <div className='col-1 col-md-1'>
                            <IconButton
                                onClick={() => sethide4(!hide4)}
                            >
                                {hide4 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                            </IconButton>
                        </div>
                        <div className='col-11 col-md-11'>
                            <h6 className='text-center'>Bank details</h6>
                            {
                                hide4 &&
                                <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                    <table class="table ">

                                        <thead>
                                            <tr>
                                                <th scope="col">Sr No</th>
                                                <th scope="col">Account No</th>
                                                <th scope="col">Bank Name</th>
                                                <th scope="col">Branch</th>
                                                <th scope='col'>IFSC No</th>
                                                <th scope='col'>MICR No</th>
                                                <th scope='col'>Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>


                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>

                    </div>
                </div>

                <div>
                    <div className='row mt-4'>
                        <div className='col-1 col-md-1'>
                            <IconButton
                                onClick={() => sethide5(!hide5)}
                            >
                                {hide5 ? <RemoveCircleIcon /> : <AddCircleIcon />}
                            </IconButton>
                        </div>
                        <div className='col-11 col-md-11'>
                            <h6 className='text-center'>Create Ledger</h6>
                            {
                                hide5 &&
                                <div className="customerdrop" style={{ width: "100%", overflowX: "scroll" }}>
                                    <table class="table ">

                                        <thead>
                                            <tr>
                                                <th scope="col">Sr No</th>
                                                <th scope="col">Sub Ledger Name</th>
                                                <th scope="col">Group</th>
                                                <th scope="col">AMID</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            }

                        </div>

                    </div>
                </div>

                <div className='mt-3'>
                    <button className='bg-primary border border-none border-rounded text-white'>Customer data</button>
                </div>

                <div className='col-12 mt-3 col-md-10' style={{ width: '100%', overflowX: 'scroll', height: '50vh', overflowY: 'scroll' }}>
                    <table class="table border">
                        <thead >
                            <tr >
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Id</th>
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Customer Name</th>
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Opening Balance</th>
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Debit/Credit</th>
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Gst No</th>
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Category</th>
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Gst State</th>
                                <th className='bg-light border border-left' scope="col" style={{ fontSize: '0.7rem' }}>Status</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Acount Group</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Area</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Mobile No</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Sales Person</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Contact Person</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Email Id</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Date of birth</th>
                                <th className='bg-light border border-left' scope='col' style={{ fontSize: '0.7rem' }}>Route</th>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            {
                                customerdata.map((item, i) => (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.customerName}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.openingBalance}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.debitCredit}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.gstNo}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.category}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.gstState}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.status}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.accountGroup}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.area}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.mobileNo}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.salesPerson}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.contactPerson}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.emailID}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.dateofBirth}</td>
                                        <td className='border border-left' style={{ fontSize: '0.7rem' }}>{item.selectRouteName}</td>
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

export default Customermastercom