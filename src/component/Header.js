import React from 'react'
// import { AiOutlineHome } from "react-icons/ai";
import './sidebar.css'
import { useState } from 'react'
import Sidebarcom from './Sidebarcom'
const Header = ({setshow,show}) => {
  const [showsidebar, setshowsidebar] = useState(false)

  return (
    <>
      <div className='container-fluid'>
        <div >
          <button onClick={()=>setshow(!show)}>open</button>
        </div>
        <div>
          <p>Dashboard</p>
        </div>
      </div>
    </>
  )
}

export default Header