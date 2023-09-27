import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './sidebar.css'
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Sidebar({ toggle, state, setState }) {
    const colorTheme = createTheme({
        palette: {
            primary: {
                main: '#800070'
            },
        },
    });
    const navigate = useNavigate()

    const list = (anchor) => {
        return (
            <Box
                style={{ height: '100vh' }}
                className="sidebarstyle"
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggle(anchor, true)}
                onKeyDown={toggle(anchor, true)}>

                <Menu>
                    <span>
                        <h1 className='text-center sidebarTitle'>Dairy</h1>
                    </span>
                    <SubMenu label="Masters Modules">
                        <SubMenu label="Main Master" className='sidebarmain'>
                            <MenuItem
                                className='sidebarcolor'
                                onClick={() => {
                                    navigate('/accountmaster')
                                }}>Account Master
                            </MenuItem>

                            <MenuItem
                                className='sidebarcolor'
                                onClick={() => {
                                    navigate('/route')
                                }}>Route Master
                            </MenuItem>

                            <MenuItem
                                className='sidebarcolor'
                                onClick={() => {
                                    navigate('/customermaster')
                                }}>
                                Customer Master
                            </MenuItem>

                            <MenuItem
                                className='sidebarcolor'
                                onClick={() => {
                                    navigate('/employee')
                                }}
                                >
                                Employee Master
                            </MenuItem>
                            <MenuItem
                                className='sidebarcolor'
                                onClick={() => {
                                    navigate('/supplier')
                                }}
                                >
                                Supplier Master
                            </MenuItem>
                            <MenuItem
                                className='sidebarcolor'
                                onClick={() => {
                                    navigate('/vendor')
                                }}
                                >
                                Vendor Master
                            </MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        label="Direct Milk Purchase">
                        <MenuItem onClick={() => navigate('/chilingcenter')}className='sidebarmain'>
                            Chilling Center
                        </MenuItem>
                        {/* <MenuItem onClick={() => navigate('/milkchalan')} className='sidebarmain'>
                            Milk Chalan
                        </MenuItem> */}
                        <MenuItem onClick={() => navigate('/milkpurchase')} className='sidebarmain'>
                            Milk Purchase
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/farmerpassbook')} className='sidebarmain'>
                            Farmer Passbook
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/milklist')} className='sidebarmain'>
                            Milk List
                        </MenuItem>
                    </SubMenu>

                    {/* <SubMenu label="Bulk Milk Module">
                        <SubMenu label="Bulk Milk Entry">
                            <MenuItem onClick={() => navigate('/purratecontractmaster')}>
                                PurRate Contract Master
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/vehicleentry')}>
                                Vehicle Entry
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/vehicleqcentry')}>
                                Vehicle QC Entry
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/vehicleqcapproval')}>
                                Vehicle QC Approval
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/milkgrn')}>
                                Milk GRN
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/milkgrntopurchase')}>
                                Milk GRN to Purchase
                            </MenuItem>
                        </SubMenu>

                        <SubMenu label="Purchase Bulk Milk Report">
                            <MenuItem onClick={() => navigate('/bulkmilkporchaserep')}>
                                Bulk Milk Purchase Report
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/purchaseinwardrep')}>
                                Purchase Inward Report
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/vehicleqcrep')}>
                                Vehicle QC Report
                            </MenuItem>
                        </SubMenu>

                        <SubMenu label="Bulk Customised">
                            <MenuItem onClick={() => navigate('/rptbulkmilkreport')}>
                                RPT Bulk Milk Report
                            </MenuItem>
                        </SubMenu>
                    </SubMenu> */}


                    <SubMenu label="Plant Module">
                        <MenuItem onClick={() => navigate('/plantin')} className='sidebarmain'>
                            Plant In
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/plantprofitlosscollection')} className='sidebarmain'>
                            Profit/Loss
                        </MenuItem>
                    </SubMenu>

                    {/* <SubMenu label="Sanstha Milk Module">
                        <SubMenu label="Sanstha Master" className='sidebarmain'>
                            <MenuItem
                                onClick={() => navigate('/sansthamaster')} className="sidebarcolor">
                                Sanstha master
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/purchaseratecontractmaster')} className="sidebarcolor">
                                Purchase rate contract master
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/purchaseratecontract')} className="sidebarcolor">
                                Purchase rate contract
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label="Milk Collection" className='sidebarmain'>
                            <MenuItem
                                onClick={() => navigate('/milkcollectionexcelupload')} className="sidebarcolor">
                                Milk collection with Excel upload
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/downloadsanthamilkcollection')} className="sidebarcolor">
                                Download sanstha Milk Collection
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionwithqc')} className="sidebarcolor">
                                Combine Collection with QC
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionmanualkg')} className="sidebarcolor">
                                Milk Collection Manual:kg
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionltr')} className="sidebarcolor">
                                Milk Collection Ltr
                            </MenuItem>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>

                <Menu >
                    <SubMenu label='Bill Generation' onClick={() => navigate('/Billgeneration')}>

                    </SubMenu>
                </Menu>
                <Divider />
            </Box>)
    };

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button onClick={toggle(anchor, true)}>{anchor}</Button> */}
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggle(anchor, false)}
                        onOpen={toggle(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}