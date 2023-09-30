import React, { useState } from 'react'
import './sidebar.css'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import Header from './Header'
const Sidebarcom = () => {
    const [show, setshow] = useState(false)

    return (
        <div style={{ display: "flex", height: "100vh" }}>

            {
                show &&
                <Sidebar className="sidebar">
                    <Menu
                        menuItemStyles={{
                            button: ({ level, active, disabled }) => {
                                // only apply styles on first level elements of the tree
                                if (level === 0)
                                    return {
                                        color: disabled ? '#f5d9ff' : '#d359ff',
                                        backgroundColor: active ? '#eecef9' : undefined,
                                    };
                            },
                        }}
                    >
                        <MenuItem
                            icon={<HorizontalSplitIcon />}
                            className="menu1">
                            <h3>Dairy</h3>
                        </MenuItem>


                        <SubMenu
                            children={{}}
                            icon={<HorizontalSplitIcon />}
                            style={{ fontSize: '0.9rem' }}
                            label="Masters Modules">
                            <SubMenu
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                                label="A.Main Master">
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>

                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>

                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>



                            </SubMenu>
                            <SubMenu
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                                label="B.Main Master">
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>

                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>

                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>



                            </SubMenu>
                            <SubMenu
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                                label="Master List Reports">
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>

                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>

                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                    onClick={() => {
                                        alert("hello")
                                    }}>Hello</MenuItem>



                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            label="Sanstha Milk Module"
                            icon={<HorizontalSplitIcon />}
                            style={{ fontSize: '0.9rem' }}
                        >
                            <SubMenu
                                label="Sanstha Master"
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                            >
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                            </SubMenu>
                            <SubMenu
                                label="Milk Collection"
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                            >
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                            </SubMenu>
                            <SubMenu
                                label="Sanstha Machine Integration"
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                            >
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                            </SubMenu>
                            <SubMenu
                                label="Sanstha posting"
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                            >
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                            </SubMenu>
                            <SubMenu
                                label="Sanstha core report"
                                icon={<HorizontalSplitIcon />}
                                style={{ fontSize: '0.9rem' }}
                            >
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                                <MenuItem
                                    icon={<DoneOutlinedIcon />}
                                    style={{ fontSize: '0.9rem' }}
                                >hello</MenuItem>
                            </SubMenu>
                        </SubMenu>
                        <MenuItem> Invoices </MenuItem>
                        <SubMenu label="Charts">
                            <SubMenu label="Charts">
                                <MenuItem> Timeline Chart </MenuItem>
                                <MenuItem> Bubble Chart </MenuItem>
                            </SubMenu>
                            <MenuItem> Bubble Chart </MenuItem>
                        </SubMenu>
                        <MenuItem> Charts </MenuItem>
                        <MenuItem> Wallets </MenuItem>
                        <MenuItem> Transactions </MenuItem>
                        <MenuItem> Settings </MenuItem>
                        <MenuItem> Logout </MenuItem>
                    </Menu>
                </Sidebar>
            }
            <Header show={show} setshow={setshow} />

        </div>
    )
}

export default Sidebarcom