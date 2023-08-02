import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function Sidebar() {
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
    const list = (anchor) => {
        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, true)}
                onKeyDown={toggleDrawer(anchor, true)}
            >
                <Menu>
                    <MenuItem>
                        <h1>Hello</h1>
                    </MenuItem>
                    <SubMenu
                        label="Masters Modules"
                    >
                        <SubMenu
                            label="A.Main Master"
                        >
                            <MenuItem style={{ fontSize: '0.9rem' }}
                                onClick={() => {
                                    alert("hello")
                                }}>Account Master</MenuItem>

                            <MenuItem
                                style={{ fontSize: '0.9rem' }}
                                onClick={() => {
                                    alert("hello")
                                }}>
                                <Link to={'/'}>Customer Master</Link>
                            </MenuItem>

                            <MenuItem style={{ fontSize: '0.9rem' }}>
                                <Link to={'/dashboard'}>Supplier Master</Link>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '0.9rem' }}>
                                <Link to={'/dashboard'}>Employee Master</Link>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '0.9rem' }}>
                                <Link to={'/dashboard'}>Item Master</Link>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '0.9rem' }}>
                                <Link to={'/dashboard'}>Opening Stock</Link>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '0.9rem' }}>
                                <Link to={'/dashboard'}>HSN Code Master</Link>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '0.9rem' }}>
                                <Link to={'/dashboard'}>TDS Code Master</Link>
                            </MenuItem>
                            <MenuItem style={{ fontSize: '0.9rem' }}>
                                <Link to={'/dashboard'}>TCS Code Master</Link>
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label="B.Other Modules">
                            <MenuItem>
                                Account Group
                            </MenuItem>
                            <MenuItem>
                                Scheme Master
                            </MenuItem>
                            <MenuItem>
                                Department Master
                            </MenuItem>
                            <MenuItem>
                                Area Master
                            </MenuItem>
                            <MenuItem>
                                Route
                            </MenuItem>
                            <MenuItem>
                                Unit Master
                            </MenuItem>
                            <MenuItem>
                                Warehouse Master
                            </MenuItem>
                            <MenuItem>
                                Rate Contract Master
                            </MenuItem>
                            <MenuItem>
                                Recorded Master
                            </MenuItem>
                            <MenuItem>
                                Transport Master
                            </MenuItem>
                            <MenuItem>
                                Vehicle Master
                            </MenuItem>
                            <MenuItem>
                                Purchase Term and Conditions
                            </MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>

                <Divider />


            </Box>)
    };

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}