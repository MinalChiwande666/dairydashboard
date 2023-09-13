import React from 'react'
import "./Dummy.css"
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DummyFormCom = () => {
    return (
        <div className='p-2 p-sm-0'>
            <div className='container mt-4 dummyCont'>
                <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Dummy Form</h3></div>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '30ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                        </Box>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']} sx={{ width: '30ch', ml: 1, mb: 1 }}>
                                <DatePicker />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                        <Box >
                            <FormControl variant="standard" sx={{ width: '30ch', m: 1 }}>
                                <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                        <Box
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '30ch' }}}
                            noValidate
                            autoComplete="off">
                            <TextField id="standard-basic" label="From Code" variant="standard" />
                        </Box>
                    </div>
                </div>
                {/* <div className='row mt-4'>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Name</label>
                            <input type="text" placeholder='Enter your Name' className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Date</label>
                            <input type="date" className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Select Item</label>
                            <select className="form-control mt-1 inputstext">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Email</label>
                            <input type="email" className='mt-1 inputstext' placeholder='Enter your Name' required />
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Name</label>
                            <input type="text" placeholder='Enter your Name' className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Date</label>
                            <input type="date" className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Select Item</label>
                            <select className="form-control mt-1 inputstext">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Email</label>
                            <input type="email" className='mt-1 inputstext' placeholder='Enter your Name' required />
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Name</label>
                            <input type="text" placeholder='Enter your Name' className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Date</label>
                            <input type="date" className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Select Item</label>
                            <select className="form-control mt-1 inputstext">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Email</label>
                            <input type="email" className='mt-1 inputstext' placeholder='Enter your Name' required />
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Name</label>
                            <input type="text" placeholder='Enter your Name' className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Date</label>
                            <input type="date" className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Select Item</label>
                            <select className="form-control mt-1 inputstext">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Email</label>
                            <input type="email" className='mt-1 inputstext' placeholder='Enter your Name' required />
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Name</label>
                            <input type="text" placeholder='Enter your Name' className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Date</label>
                            <input type="date" className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Select Item</label>
                            <select className="form-control mt-1 inputstext">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Email</label>
                            <input type="email" className='mt-1 inputstext' placeholder='Enter your Name' required />
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Name</label>
                            <input type="text" placeholder='Enter your Name' className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Date</label>
                            <input type="date" className='mt-1 inputstext' required />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Select Item</label>
                            <select className="form-control mt-1 inputstext">
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                                <option>Default select</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-xl-3 col-md-6'>
                        <div className='input-fields'>
                            <label>Enter Email</label>
                            <input type="email" className='mt-1 inputstext' placeholder='Enter your Name' required />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='container mt-4 mb-2 mb-sm-0'>
                <button className='btn btn-primary buttonsStyle'>Save</button>
                <button className='btn btn-success mx-3 buttonsStyle'>Print</button>
                <button className='btn btn-secondary buttonsStyle'>Clear</button>
            </div>

            <div className='container mt-4 p-0 dummyCont mb-3'>
                <table className='tableCont table table-striped'>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Owner</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr><tr>
                            <td>1</td>
                            <td>Shoes</td>
                            <td>Anuj</td>
                            <td>anuj@gmail.com</td>
                            <td>Uday</td>
                            <td>
                                <button className='editbtn'><FiEdit /></button>&nbsp;&nbsp;
                                <button className='deletebtn'><MdOutlineDelete /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DummyFormCom