import React from 'react'
import "./chilling.css"

const Fatinp = ({item,onChange,id}) => {
  return (
    <input type='text' className='inp-size' value={item.fat} onChange={(e)=>onChange(id,e.target.value)}/>
  )
}

export default Fatinp