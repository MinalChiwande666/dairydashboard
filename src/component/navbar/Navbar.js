import React from 'react'
import "./Navbar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()
  const logoutuser = ()=>{
    localStorage.setItem('username',null)
    navigate('/')
  }

  function ButtonAppBar() {
    const [state, setState] = React.useState({

      left: false,

    });
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ background: 'radial-gradient(circle at 10% 20%, rgba(91, 173, 254, 0.46) 0%, rgba(91, 224, 254, 0.46) 47.2%, rgba(170, 254, 235, 0.43) 90%)', color:"rgb(81, 80, 80)", position:"sticky", top:"0"}}
          >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer('left', true)}
            ><MenuIcon /></IconButton>
            
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, cursor:'pointer', fontWeight:"600"}} onClick={()=>navigate('/dashboard')}>
              DASHBOARD
            </Typography>
            <Button className='logoutbtn' onClick={()=>logoutuser()}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Sidebar toggle={toggleDrawer} state={state} setState={setState} />
      </Box>
    );
  }
  return (
    <div>{ButtonAppBar()}</div>
  )
}

export default Navbar