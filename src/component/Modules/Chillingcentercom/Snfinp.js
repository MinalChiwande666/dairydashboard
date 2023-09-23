import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'


const Snfinp = ({ item, onChange }) => {
  return (
    <input type='text' className='inp-size' value={item.snf} onChange={(e)=>onChange(item.id,e.target.value)}/>
  )
}

export default Snfinp