import React, { useEffect } from 'react'

const Billtablecom = React.forwardRef((props, ref) => {
    const { data, suppid,tcode,fcode,form,code } = props
    

   
    return (
        <div style={{ width: '100vw', height: '50vh', overflowY: 'scroll' }}>
            <div style={{ width: '100vw', height: '50vh', overflowY: 'scroll' }}>
                <table ref={ref} class="table table-bordered">
                    <thead>
                        <tr>
                            <th  className='text-center' scope="col">code (Id)</th>
                            <th className='text-center' scope="col">supplierId</th>
                            <th className='text-center' scope="col">date</th>
                            <th className='text-center' scope="col">shift</th>
                            <th className='text-center' scope="col">MilkType</th>
                            <th className='text-center' scope="col">qty</th>
                            <th className='text-center' scope="col">fat(%)</th>

                            <th className='text-center' scope="col">snf(%)</th>
                            <th className='text-center' scope="col">Milkrate</th>

                            <th className='text-center' scope="col">netAmount</th>





                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.filter((data) => {
                            
                            if ((!form.from && !form.to) ) {
                                return data
                            }
                            else if ((data.date >= form.from && data.date <= form.to) || (data.supplierId>=Number(fcode) && data.supplierId <= Number(tcode)) || (data.supplierId === Number(code)))  {
                                return data
                            }
                            
                          
                          
                        }).map((item, i) => (
                            <tr>
                                <td  className='text-center'>{item.id}</td>
                                <td className='text-center'>{item.supplier}</td>
                                <td className='text-center'>{item.date}</td>
                                <td className='text-center'>{item.shift}</td>
                                <td className='text-center'>{item.milk}</td>
                                <td className='text-center'>{item.qty}</td>
                                <td className='text-center'>{item.fat}</td>

                                <td className='text-center'>{item.snf}</td>
                                <td className='text-center'>{item.milkRate}</td>

                                <td>{item.netAmount}</td>

                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div><div>

            </div>
        </div>
    )
}
)

export default Billtablecom