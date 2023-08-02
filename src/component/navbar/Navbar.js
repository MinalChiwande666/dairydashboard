import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
  

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
      style={{background:'black'}}
      position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left',true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button 
          onClick={toggleDrawer('left',true)}
          color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Sidebar toggle={toggleDrawer}/>
    </Box>
  );
}
  return (
    <div>{ButtonAppBar()}</div>
  )
}

export default Navbar