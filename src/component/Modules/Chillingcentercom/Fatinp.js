import React from 'react'

const Fatinp = ({item,onChange,id}) => {
  return (
    <input type='text' value={item.fat} onChange={(e)=>onChange(id,e.target.value)}/>
  )
}

export default Fatinp