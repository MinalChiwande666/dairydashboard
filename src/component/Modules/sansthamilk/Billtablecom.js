import React, { useEffect, useState } from 'react'

const Billtablecom = React.forwardRef((props, ref) => {
    const [suppiddata, setsuppiddata] = useState([])
    const { data, suppid, tcode, fcode, form, code, setdata, listid } = props
    let namt;
    let nsamt;
    let sum2;
    const [netamount, setnetamount] = useState(0)

    useEffect(() => {
        if (listid) {
            fetch(`http://103.38.50.113:8080/DairyApp/findBySupplierID?supplierId=${listid}`).then((data) => {
                return data.json()
            }).then((res) => {
              
                console.log("res by id=>", res)
                setsuppiddata(res)

            })
        }
    }, [listid])

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
        <div className='container mt-4 p-0 billCont mb-3'>
            <table ref={ref} className="tableBillCont table table-striped">
                <thead>
                    <tr>
                        <th>Suppier Name</th>
                        <th>SupplierId</th>
                        <th>Date</th>
                        <th>Shift</th>
                        <th>MilkType</th>
                        <th>Qty</th>
                        <th>FAT(%)</th>
                        <th>SNF(%)</th>
                        <th>Milk Rate</th>
                        <th>Net Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        listid === "" ? (data.filter((data) => {

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
                                <td className='text-center'>{item.date}</td>
                                <td className='text-center'>{item.shift}</td>
                                <td className='text-center'>{item.milk}</td>
                                <td className='text-center'>{item.qty}</td>
                                <td className='text-center'>{item.fat}</td>
                                <td className='text-center'>{item.snf}</td>
                                <td className='text-center'>{item.milkRate}</td>
                                <td>{item.netAmount}</td>

                            </tr>
                        ))) : (

                            <>
                                {
                                    listid === "Select" ? "Select Id To View" :
                                        suppiddata.map((item, i) => (
                                            <tr>
                                                <td className='text-center'>{item.id}</td>
                                                <td className='text-center'>{item.supplierId}</td>
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
                            </>
                        )
                    }
                    {
                        listid === "Select" ? "" :
                        <tr>
                            <td colSpan={"9"} className='totalAmt'>Total</td>
                            <td className='totalAmt' style={{color:"red"}}>{gettotal()}</td>
                        </tr>
                    }
                    

                </tbody>
            </table>
        </div>
    )
}
)

export default Billtablecom
