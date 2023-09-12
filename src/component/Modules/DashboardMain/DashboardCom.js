import React from 'react'
import EastIcon from '@mui/icons-material/East';

import { useNavigate } from 'react-router-dom'
import "./DashboardCom.css"
import { dashboardDummyData } from './DashboardDummy';

const DashboardCom = () => {

  const Navigate = useNavigate()

  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='row mt-4 p-3 p-sm-0 '>
          {
            dashboardDummyData.map((item, id) => {
              return (
                <div className='col-12 col-lg-6 col-xl-3 col-md-6 mt-4 d-flex justify-content-center align-items-center' key={id}>
                  <div className='bg-light mt-4 mt-lg-0 boxshadow' onClick={() => Navigate(item.link)} style={{ height: "10rem", width:"16rem", cursor: "pointer" }}>
                    <div className='d-flex justify-content-center align-items-center flex-column pt-4'>
                      <div className='text-white smallcard'>
                        {item.icon}
                      </div>
                      <div className='titlecard mt-3'>
                        <p className='cardtext'>{item.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default DashboardCom