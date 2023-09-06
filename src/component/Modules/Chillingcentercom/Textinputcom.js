import React from 'react'

const Textinputcom = ({item,onChange,id}) => {

  return (
   <input 
   value={item.rate}
   type='text'
   onChange={(e)=>onChange(id,e.target.value)}
   />
  )
}

export default Textinputcom