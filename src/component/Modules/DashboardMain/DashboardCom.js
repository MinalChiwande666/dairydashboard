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
                <div className='col-12 col-lg-6 col-xl-3 col-md-6 mt-4' key={id}>
                  <div className='bg-light mt-4 mt-lg-0 boxshadow' onClick={() => Navigate(item.link)} style={{ height: "11rem", cursor: "pointer" }}>
                    <div className='d-flex justify-content-between'>
                      <div className='text-white smallcard'>
                        {item.icon}
                      </div>
                      <div className='p-2 titlecard'>
                        <p className='text-dark cardtext'>{item.title}</p>
                      </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3 pl-3 px-3'>
                      <hr className='w-100 text-dark' />
                    </div>
                    <div className='d-flex text-box'>
                      <div className="bottomButtonHover">
                        <button>
                          <div className='mx-1 row justify-content-end'>
                            <div className='col-auto px-1'>
                              View
                            </div>
                            <div className='col-auto m-0 p-0 iconHover3 '>
                              <EastIcon style={{ fontSize: "0.9rem" }} />
                            </div>
                          </div>
                        </button>
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