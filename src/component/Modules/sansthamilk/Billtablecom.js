import React, { useEffect, useState } from 'react'

const Billtablecom = React.forwardRef((props, ref) => {
    const [suppiddata,setsuppiddata] = useState([])
    const { data, suppid, tcode, fcode, form, code, setdata,listid } = props
    let namt;
    let nsamt;
    let sum2;
    const [netamount, setnetamount] = useState(0)

    useEffect(()=>{
      if(listid)
      {
        fetch(`http://103.38.50.113:8080/DairyApp/findBySupplierID?supplierId=${listid}`).then((data)=>{
            return data.json()
        }).then((res)=>{
            let stot = [];
            console.log("res by id=>",res)
            res.filter((item)=>{
                return item
            }).map((da)=>{
               console.log("s amt =>",da.netAmount)
               stot.push(Number(da.netAmount))
            })
            setsuppiddata(res)

            sum2 = stot.reduce((amm,cal2)=>{
                return amm + cal2
            })
        console.log("sum2 =>",sum2)
           
        })
 
        
      }
    },[listid])

    console.log(sum2, "second ntamnt")
    const gettotal = () => {
        const total = () => {
            let tot = [];
            data.filter((data) => {

                if ((!fcode && !tcode)) {
                    return data
                }

                else if ((data.supplierId >= fcode && data.supplierId <= tcode)) {

                    return data

                }


            }).filter((da) => {
                if (!form.from && !form.to) {
                    return da
                }
                else if (da.date >= form.from && da.date <= form.to) {
                    return da
                }
            }).map((item) => {
                console.log("map netamt=>", item.netAmount)
                tot.push(Number(item.netAmount))
            })
            // for(let i=0;i<=data.length-1;i++)
            // {
            //    tot.push(parseInt(data[i]?.netAmount))
            // }
            console.log(tot)
            let sum = tot.reduce((accum, cal) => {
                return accum + cal
            }, 0)
            namt = sum
            console.log(namt)

        }
        total()
        return (
            <p>{namt}</p>
        )
    }

    return (
            <div style={{ width: '100vw', height: '50vh', overflow: 'scroll' }}>
                <table ref={ref} class="table table-bordered">
                    <thead>
                        <tr>
                            <th className='text-center' scope="col">code (Id)</th>
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
                            
                         listid === ""?(   data.filter((data) => {

                                if ((!fcode && !tcode)) {
                                    return data
                                }

                                else if ((data.supplierId >= fcode && data.supplierId <= tcode)) {

                                    return data

                                }


                            }).filter((da) => {
                                if (!form.from && !form.to) {
                                    return da
                                }
                                else if (da.date >= form.from && da.date <= form.to) {
                                    return da
                                }
                            }).map((item, i) => (
                                <tr>
                                    <td className='text-center'>{item.id}</td>
                                    <td className='text-center'>{item.supplierId}</td>
                                    {/* <td className='text-center'>{item.supplier}</td> */}
                                    <td className='text-center'>{item.date}</td>
                                    <td className='text-center'>{item.shift}</td>
                                    <td className='text-center'>{item.milk}</td>
                                    <td className='text-center'>{item.qty}</td>
                                    <td className='text-center'>{item.fat}</td>
                                    <td className='text-center'>{item.snf}</td>
                                    <td className='text-center'>{item.milkRate}</td>
                                    <td>{item.netAmount}</td>

                                </tr>
                            ))):(<>
                            {
                                suppiddata.map((item,i)=>(
                                    <tr>
                                        <td className='text-center'>{item.id}</td>
                                    <td className='text-center'>{item.supplierId}</td>
                                    {/* <td className='text-center'>{item.supplier}</td> */}
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
                            </>)
                        }
                        <tr>
                            <td colSpan={"9"}>Total</td>
                            <td>{gettotal()}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
    )
}
)

export default Billtablecom