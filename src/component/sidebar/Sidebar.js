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
                    <MenuItem>
                        <h1 className='text-center sidebarTitle'>Dairy</h1>
                    </MenuItem>
                    <SubMenu label="Masters Modules">
                        <SubMenu label="Main Master" style={{background:"#8ec9ee", color:"white", fontFamily:"Roboto Condensed', sans-serif"}}>
                            <MenuItem style={{ fontSize: '0.9rem' }}
                                className='submenuSidebarstyle'
                                onClick={() => {
                                    navigate('/accountmaster')
                                }}>Account Master</MenuItem>

                            <MenuItem
                                className='submenuSidebarstyle'
                                style={{ fontSize: '0.9rem' }}
                                onClick={() => {
                                    navigate('/customermaster')
                                }}>
                                Customer Master
                            </MenuItem>

                            <MenuItem
                                className='submenuSidebarstyle'
                                onClick={() => {
                                    navigate('/employee')
                                }}
                                style={{ fontSize: '0.9rem' }}>
                                Employee Master
                            </MenuItem>
                            <MenuItem
                                className='submenuSidebarstyle'
                                onClick={() => {
                                    navigate('/supplier')
                                }}
                                style={{ fontSize: '0.9rem' }}>
                                Supplier Master
                            </MenuItem>
                            <MenuItem
                                className='submenuSidebarstyle'
                                onClick={() => {
                                    navigate('/vendor')
                                }}
                                style={{ fontSize: '0.9rem' }}>
                                Vendor Master
                            </MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        label="Direct Milk Purchase">
                        <MenuItem onClick={() => navigate('/chilingcenter')} className='submenuSidebarstyle'>
                            Chilling Center
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/milkchalan')} className='submenuSidebarstyle'>
                            Milk Chalan
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/milkpurchase')} className='submenuSidebarstyle'>
                            Milk Purchase
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/farmerpassbook')} className='submenuSidebarstyle'>
                            Farmer Passbook
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/milklist')} className='submenuSidebarstyle'>
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
                        <MenuItem onClick={() => navigate('/plantin')} className='submenuSidebarstyle'>
                            Plant In
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/plantprofitlosscollection')} className='submenuSidebarstyle'>
                            Profit/Loss
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="Sanstha Milk Module">
                        <SubMenu label="Sanstha Master" className='submenuSidebarstyle'>
                            <MenuItem
                                onClick={() => navigate('/sansthamaster')} className='submenuSidebarstyle'>
                                Sanstha master
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/purchaseratecontractmaster')} className='submenuSidebarstyle'>
                                Purchase rate contract master
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/purchaseratecontract')} className='submenuSidebarstyle'>
                                Purchase rate contract
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label="Milk Collection" className='submenuSidebarstyle'>
                            <MenuItem
                                onClick={() => navigate('/milkcollectionexcelupload')} className='submenuSidebarstyle'>
                                Milk collection with Excel upload
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/downloadsanthamilkcollection')} className='submenuSidebarstyle'>
                                Download sanstha Milk Collection
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionwithqc')} className='submenuSidebarstyle'>
                                Combine Collection with QC
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionmanualkg')} className='submenuSidebarstyle'>
                                Milk Collection Manual:kg
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionltr')} className='submenuSidebarstyle'>
                                Milk Collection Ltr
                            </MenuItem>
                        </SubMenu>
                    </SubMenu>
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