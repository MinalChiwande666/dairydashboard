import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import './sidebar.css'
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { createTheme,ThemeProvider } from '@mui/material/styles';

export default function Sidebar({ toggle, state, setState }) {
    const colorTheme = createTheme({
        palette: {
          primary: {
            main: '#800080'
          },
        },
      });
    const navigate = useNavigate()
    const hoverEffect = {
        backgroundColor: 'red', // Normal background color
        transition: 'background-color 0.3s', // Transition effect
      };
    const list = (anchor) => {
        return (
            <Box
                style={{height:'100vh'}}
                className="bg-dark text-white"
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggle(anchor, true)}
                onKeyDown={toggle(anchor, true)}
            >
              
                <Menu
                
               
                >
                    <MenuItem>
                        <h1 className='text-center'>Dairy</h1>
                    </MenuItem>
                    <SubMenu
                      rootStyles={hoverEffect}
                      
                        label="Masters Modules"
                    >
                        <SubMenu
                            label="A.Main Master"
                            className='bg-dark text-white'
                        >
                            <MenuItem style={{ fontSize: '0.9rem' }}
                            className='bg-dark text-white'
                                onClick={() => {
                                    navigate('/accountmaster')
                                }}>Account Master</MenuItem>

                            <MenuItem
                            className='bg-dark text-white'
                                style={{ fontSize: '0.9rem' }}
                                onClick={() => {
                                    navigate('/customermaster')
                                }}>
                                Customer Master
                            </MenuItem>


                            <MenuItem
                            className='bg-dark text-white'
                                onClick={() => {
                                    navigate('/employee')
                                }}
                                style={{ fontSize: '0.9rem' }}>
                                Employee Master
                            </MenuItem>
                            <MenuItem
                            className='bg-dark text-white'
                                onClick={() => {
                                    navigate('/supplier')
                                }}
                                style={{ fontSize: '0.9rem' }}>
                                Supplier Master
                            </MenuItem>
                            <MenuItem
                            className='bg-dark text-white'
                                onClick={() => {
                                    navigate('/vendor')
                                }}
                                style={{ fontSize: '0.9rem' }}>
                                Vendor Master
                            </MenuItem>
                           
                        </SubMenu>
                        <SubMenu className='bg-dark text-white' label="B.Other Modules">
                            <MenuItem className='bg-dark text-white'>
                                Account Group
                            </MenuItem>
                            <MenuItem className='bg-dark text-white'>
                                Scheme Master
                            </MenuItem>
                            <MenuItem className='bg-dark text-white'>
                                Department Master
                            </MenuItem>
                            <MenuItem className='bg-dark text-white'>
                                Area Master
                            </MenuItem>
                            <MenuItem className='bg-dark text-white' onClick={()=>navigate('/route')}>
                                Route
                            </MenuItem>
                           
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        label="Direct Milk Purchase"
                    >
                        <MenuItem
                            onClick={() => navigate('/chilingcenter')}
                        >
                            Chilling Center
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/milkchalan')}>
                            Milk Chalan
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/milkpurchase')}>
                            Milk Purchase
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/farmerpassbook')}>
                            Farmer Passbook
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/milklist')}>
                            Milk List
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="Milk Chalan">


                    </SubMenu>

                    <SubMenu label="Bulk Milk Module">
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
                    </SubMenu>


                    <SubMenu label="Plant Module">
                        <MenuItem onClick={() => navigate('/plantin')}>
                            Plant In
                        </MenuItem>
                        <MenuItem onClick={() => navigate('/plantprofitlosscollection')}>
                            Profit/Loss
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="Sanstha Milk Module">
                        <SubMenu label="Sanstha Master">
                            <MenuItem
                                onClick={() => navigate('/sansthamaster')}>
                                Sanstha master
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/purchaseratecontractmaster')}>
                                Purchase rate contract master
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/purchaseratecontract')}>
                                Purchase rate contract
                            </MenuItem>
                        </SubMenu>
                        <SubMenu label="Milk Collection">
                            <MenuItem
                                onClick={() => navigate('/milkcollectionexcelupload')}>
                                Milk collection with Excel upload
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/downloadsanthamilkcollection')}>
                                Download sanstha Milk Collection
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionwithqc')}>
                                Combine Collection with QC
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionmanualkg')}>
                                Milk Collection Manual:kg
                            </MenuItem>
                            <MenuItem
                                onClick={() => navigate('/Milkcollectionltr')}>
                                Milk Collection Ltr
                            </MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu label='Bill Generation'
                        onClick={() => navigate('/Billgeneration')}
                    >

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