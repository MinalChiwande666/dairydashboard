import React from 'react'

const Farmertable = React.forwardRef((props,ref) => {
    const {allusers,dates,sid, supplierId} = props

    
  return (
    <><div  style={{ height: '50vh', overflowY: 'scroll' }}>
              <table ref={ref} class="table table-bordered table-hover">
                <thead class="table-primary">
                  <tr >
                    <th scope="col">Sr No.</th>
                    <th scope="col">Id</th>
                    <th scope="col">Supplier Id</th>
                    <th scope="col">Supplier </th>
                    <th scope="col">Date</th>
                    <th scope="col">Milk Type</th>
                    <th scope="col">Ltr</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Fat Kg</th>
                    <th scope="col">SNF Kg</th>
                    <th scope="col"> Total Amount</th>
                  </tr>
                </thead>
                <tbody style={{ height: '50vh', overflowY: 'auto' }}>
                  {
                    allusers.filter((da) => {
                      if (supplierId) {
                        // Check if da.supplierId matches the provided supplierId
                        if (da.supplierId === Number(supplierId)) {
                          return true;
                        }
                      }
                      
                      // Check if da.date is within the date range
                      if (da.date >= dates.fdate && da.date <= dates.tdate) {
                        return true;
                      }
                      return false
                     

                    }).map((item, i) => (
                      <tr>
                        <th scope="row">{i}</th>
                        <td>{item.id}</td>
                        <td>{item.supplierId}</td>
                        <td>{item.supplier}</td>
                        <td>{item.date}</td>
                        <td>{item.milk}</td>
                        <td>{item.qty}</td>
                        <td>{item.fat}</td>
                        <td>{item.milkRate}</td>
                        <td>{item.fat}</td>
                        <td>{item.snf}</td>
                        <td>{item.netAmount}</td>
                      </tr>

                    ))
                  }
               

                </tbody>
              </table >

            </div></>
  )
})

export default Farmertable