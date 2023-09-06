import React from 'react'

const Snfcom = ({item,onChange,id}) => {
  return (
   <input type='text' value={item.snf} onChange={(e)=>onChange(id,e.target.value)}/>
  )
}

export default Snfcom