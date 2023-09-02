import React from 'react'

const Snfinp = ({item,onChange}) => {
  return (
    <input type='text' value={item.snf} onChange={(e)=>onChange(item.id,e.target.value)}/>
  )
}

export default Snfinp