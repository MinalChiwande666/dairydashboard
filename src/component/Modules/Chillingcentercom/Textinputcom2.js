import React from 'react'

const Textinputcom2 = ({item,onChange}) => {
  return (
   <input type='text' className='inp-size' value={item.rate} onChange={(e)=>onChange(item.id,e.target.value)}/>
  )
}

export default Textinputcom2