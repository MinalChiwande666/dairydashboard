import React, { useEffect, useState } from 'react'

const Billtablecom = React.forwardRef((props, ref) => {
    const [suppiddata, setsuppiddata] = useState([])
    const [totalamt,settotalamt] = useState()
    const { data, suppid, tcode, fcode, form, code, setdata, listid,databyid,totalamount } = props
    let namt;
    let nsamt;
    let sum2;
    const [netamount, setnetamount] = useState(0)
    console.log("list id =>",listid)
    useEffect(() => {
        
    //    if(listid)
    //    {
    //       try{
    //         fetch(`http://103.38.50.113:8080/DairyApp/findBySupplierID?supplierId=${listid}`).then((data) => {
    //             return data.json()
    //         }).then((res) => {
              
    //             console.log("res by id=>", res.filteredMilkPurchases)
    //             setsuppiddata(res?.filteredMilkPurchases)
    //             settotalamt(res?.totalNetAmount)
                
    
    //         }).catch((e)=>{
    //             console.log(e)
    //         })
    //       }catch(e){
    //         console.log(e)
    //       }
       
    //    }
      
        
        
    }, [databyid])
    console.log("data y id =>",databyid)
    // console.log("total amount =>",totalamount)

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
            console.log("netamt=>",namt)

        }
        total()
        return (
            <p>{namt}</p>
        )
    }
   useEffect(()=>{
    gettotal()
   },[])
    return (
        <div className='container mt-4 p-0 billCont mb-3'>
            <table ref={ref} className="tableBillCont table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Supplier Name</th>
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
                                <td className='text-center'>{item.supplierName}</td>
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
                                    listid === "Select"? "Select Id To View" :(databyid ===undefined?
                                        
                                        <h4 style={{flex:"1"}} className="text-center mx-auto">Loading...</h4>:
                                        databyid.map((item, i) => (
                                            <tr>
                                                <td className='text-center'>{item.id}</td>
                                                <td className='text-center'>{item.supplierName}</td>
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
                                        )))
                                }
                            </>
                        )
                    }
                    {
                        listid === "Select" ? "" :
                        <tr>
                            <td colSpan={"10"} className='totalAmt'>Total</td>
                            <td className='totalAmt' style={{color:"red"}}>{!listid?gettotal():totalamount}</td>
                        </tr>
                    }
                    

                </tbody>
            </table>
        </div>
    )
}
)

export default Billtablecom
