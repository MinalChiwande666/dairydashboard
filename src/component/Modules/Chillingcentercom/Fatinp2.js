import React from 'react'

const Fatinp2 = ({item,onChange}) => {
  return (
    <input type='text' value={item.fat} onChange={(e)=>{
     onChange(item.id,e.target.value)
    }}/>
  )
}

export default Fatinp2