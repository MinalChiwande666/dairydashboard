import React from 'react'

const Textinputcom = ({item,onChange}) => {
  return (
   <input 
   value={item.rate}
   type='text'
   onChange={(e)=>onChange(item.id,e.target.value)}
   />
  )
}

export default Textinputcom