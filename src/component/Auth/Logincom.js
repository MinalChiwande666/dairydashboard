import React, { useState } from 'react'
import './login.css'
import { useNavigate, useNavigation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { IconButton, TextField } from '@mui/material'


const Logincom = () => {
  const [loginuser, setloginuser] = useState({
    username: '',
    password: ''
  })
  const [usernameerr, setusernameerr] = useState(false)
  // const [passworderr, setpassworderr] = useState(false)

  const navigate = useNavigate()

  const handlelogin = () => {
    let ct = 0;
    if (!loginuser.username) {
      ct++
      setusernameerr(true)
    }
    else {
      if (loginuser.username && loginuser.password) {
        ct++
        fetch('http://103.38.50.113:8080/DairyApp/loginApi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginuser)
        }).then((res) => {
          return res.json()
        }).then((data) => {
         let info = toast.success(`${data.status} Login`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          if(info)
          {
            setTimeout(()=>{
              navigate('/dashboard')
            },2000)
          }
         
        })
      }
    }
  }
  return (
    <div className='container-fluid logincon'>
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
      <div className='row'>
        
        <div className='col-12 col-md-12 loginbox text-center'>
          <div>
            <img src='https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg' className='image-fluid text-center' style={{width:'20%'}} alt=""/>
          </div>
          <div>
          <h2>Login Dairy</h2>
          </div>
          <div className='my-3'>
           
            <div>
            <TextField
            className='input'
             value={loginuser.username}
             onChange={(e) => {
               if (e.target.value) {
                 setusernameerr(false)
               }
               setloginuser({
                 ...loginuser,
                 username: e.target.value
               })
             }}
            id="outlined-basic" style={{padding:'0'}} label="Username" variant="outlined" />
             
            </div>
            {
              usernameerr ? <div style={{ fontSize: '0.6rem', color: 'red' }}>
                Please Enter Your Username
              </div> : null
            }
          </div>
          <div className='my-3'>
           
            <div>
            <TextField id="outlined-basic" 
            type='password'
            className='input password'
            value={loginuser.password}
            onChange={(e) => {
              setloginuser({
                ...loginuser,
                password: e.target.value
              })
            }}
            style={{padding:'0'}} label="Password" variant="outlined" />
            
            </div>
          </div>
          <div className='text-center my-3 bthcon'>
            <button onClick={() => handlelogin()} className='loginbtn'>Login</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Logincom