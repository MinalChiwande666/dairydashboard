import { ListItemButton, ListItemText, Collapse, List } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { } from '@mui/material/'
import React, { useState } from 'react'

const DailyTaskcom = () => {
    const [open, setopen] = useState(false)
    const [item, setitem] = useState('')
    const someitem = [
        {
            id: 1,
            name: 'item'
        },
        {
            id: 1,
            name: 'item'
        },
        {
            id: 1,
            name: 'item'
        },
        {
            id: 1,
            name: 'item'
        },
        {
            id: 1,
            name: 'item'
        },
        {
            id: 1,
            name: 'item'
        },
    ]
    const handleclick = () => {
        setopen(!open)
    }
    return (
        <div className='container-fluid text-center'>
            <h1>Daily Ticket</h1>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-lg-3 col-md-6'>
                        <div className='w-100'>
                            <ListItemButton
                                onClick={handleclick}
                                style={{ padding: '3px' }}
                            >
                                <ListItemText primary={item === '' ? "select" : item} />
                                {open ? <><ExpandLess /></> : <><ExpandMore /></>}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        someitem.map((item, i) => (
                                            <ListItemButton
                                                onClick={() => setitem(item.name)}
                                                sx={{ pl: 4 }}>

                                                <ListItemText primary={item.name} />
                                            </ListItemButton>
                                        ))
                                    }
                                </List>
                            </Collapse>
                        </div>

                    </div>
                    <div className='col-12 col-lg-3 col-md-6 '>
                        <div className='w-100'>
                            <ListItemButton
                                style={{ width: '100%', backgroundColor: 'red', padding: '3px' }}
                            >
                                <ListItemText primary="select" />
                            </ListItemButton>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 col-md-6'>
                        <div className='w-100'>
                            <ListItemButton
                                style={{ width: '100%', backgroundColor: 'red', padding: '3px' }}
                            >
                                <ListItemText primary="select" />
                            </ListItemButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyTaskcom