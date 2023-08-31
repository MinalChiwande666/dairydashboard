import React, { useEffect, useState } from 'react'
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import GC from '@grapecity/spread-sheets';
const Milklistcom = () => {
    const [milk, setmilk] = useState('')
    const [gettype, settype] = useState('')
    const [ssnf,setssnf] = useState()
    const [esnf,setesnf] = useState()
    const [snfra, setsnfra] = useState({})
    const [snffatdata, setsnffatdata] = useState([])
    const [code, setcode] = useState()
    const [fatra, setfatra] = useState({})
    const milktype = [
        {
            id: 1,
            name: 'Cow'
        },
        {
            id: 2,
            name: 'Buffaloo'
        }
    ]
    const type = [
        {
            id: 1,
            name: 'SNF'
        },
        {
            id: 2,
            name: 'FAT'
        }
    ]

    let spreadBackColor = 'aliceblue';
    let sheetName = 'Goods List';
    let hostStyle = {
        width: '100%',
        height: '600px'
    };

    const [snffat, setsnffat] = useState(
        {
            id: 1,
            snf: [{ sn: 1, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.2, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.3, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.4, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.5, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.6, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.7, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.8, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 1.9, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.1, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.2, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.3, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.4, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.5, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.6, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.7, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.8, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 2.9, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.1, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.2, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.3, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.4, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.5, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.6, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.7, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.8, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 3.9, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }, { sn: 4, input: '', input: '', input: '', input: '', input: '', input: '', input: '', input: '' }],
            fat: [{ sn: 1 }, { sn: 1.2 }, { sn: 1.3 }, { sn: 1.4 }, { sn: 1.5 }, { sn: 1.6 }, { sn: 1.7 }, { sn: 1.8 }, { sn: 1.9 }, { sn: 2 }],
        },

    )
    const deletetable = () => {
        console.log(code)
        fetch(`http://103.38.50.113:8080/DairyApp/deleteMilkRateByListNo?listNo=${code}`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: code
            })
        }).then((data) => {
            return data
        }).then((resp) => {
            alert(resp)
            console.log(resp)
            window.location.reload()
        })
    }
    let snfrange = [{ snff: '1-1.4', from: 1, to: 1.4 }]
    let fatrange = [{ fatf: '1-1.4', from: 1, to: 1.4 }]

    useEffect(() => {
        console.log(snffat.snf.length)
        console.log(snfra)
        console.log("start snf",ssnf)
        console.log("end snf",esnf)

    }, [snfra,ssnf,esnf])



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='bg-primary py-1 px-3 col-12 col-md-12'>
                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <div className='text-white'>MILK RATE LIST</div>
                        </div>


                        <div className='col-10 col-md-10'>
                            <div className='row'>
                                <div className='col-6 col-md-3'>
                                    <div className='text-white'>
                                        With effect Date
                                    </div>
                                    <div>
                                        <input type='date' />
                                    </div>
                                </div>
                                <div className='col-6 col-md-3'>
                                    <div style={{ fontSize: '0.8rem' }} className='text-white'>
                                        Milk Type
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {milk === "" ? "Select" : milk}
                                        </button>
                                        <ul class="dropdown-menu">
                                            {
                                                milktype.map((item, i) => (

                                                    <li onClick={() => setmilk(item.name)} class="dropdown-item">{item.name}</li>
                                                ))
                                            }


                                        </ul>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3'>
                                    <div style={{ fontSize: '0.8rem' }} className='text-white'>
                                        On the Basis of
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {gettype === "" ? "Select" : gettype}
                                        </button>
                                        <ul class="dropdown-menu">
                                            {
                                                type.map((item, i) => (
                                                    <li onClick={() => {
                                                        settype(item.name)
                                                    }}><a class="dropdown-item" href="#">{item.name}</a></li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <div className='col-5 col-md-3'>
                                    <div className='text-white'>
                                        List No
                                    </div>
                                    <input
                                        onChange={(e) => {
                                            setcode(e.target.value)
                                            if (e.target.value) {
                                                fetch(`http://103.38.50.113:8080/DairyApp/findByListNo/${e.target.value}`).then((data) => {
                                                    return data.json()
                                                }).then((res) => {
                                                    console.log(res)
                                                    setsnffatdata(res)
                                                })
                                            } else if (e.target.value === '') {
                                                setsnffatdata([])
                                            }

                                        }}
                                        type='number' style={{ width: '100%' }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-6 col-md-3'>
                        <div>
                            SNF start range
                        </div>
                        <div>
                            <input value={ssnf} onChange={(e)=>setssnf(e.target.value)} type='text' />
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div>
                            SNF end range
                        </div>
                        <div>
                            <input value={esnf} onChange={(e)=>setesnf(e.target.value)} type='text' />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 col-md-3'>
                        <div>
                            FAT start range
                        </div>
                        <div>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='col-6 col-md-3'>
                        <div>
                            FAT end range
                        </div>
                        <div>
                            <input type='text' />
                        </div>
                    </div>
                </div>

                <div style={{ width: '80vw', overflowX: 'scroll' }}>
                    {snffatdata.length === 0 ? <table class="table table-bordered">
                        <thead className='table-primary'>
                            <tr >
                                <th scope="col">{'FAT/SNF'}</th>
                                {
                                    snffat.snf.filter((ta, i) => {
                                        let k;
                                        let l;
                                        if (!snfra.from && !snfra.to) {
                                            return ta
                                        }
                                        else if (ta.sn >= ssnf && ta.sn <= esnf) {
                                            return ta
                                        }


                                    }).map((item, i) => (
                                        <th>{item.sn}</th>
                                    ))
                                }

                            </tr>
                        </thead>
                        <tbody>
                            {
                                snffat.fat.filter((fa, i) => {
                                    if (!fatra.from && !fatra.to) {
                                        return fa
                                    } else if (fa.sn >= fatra.from && fa.sn <= fatra.to) {
                                        return fa
                                    }
                                }).map((item, i) => (
                                    <tr>
                                        <td>{item.sn}</td>


                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>

                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input value={item.input} style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>


                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> :
                        <table class="table table-bordered">
                            <thead className='table-primary'>
                                <tr>
                                    <th scope="col">{'FAT/SNF'}</th>
                                    {
                                        snffatdata.map((snfda, i) => (
                                            <>
                                                <th>{snfda.snf}</th>
                                            </>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    snffatdata.map((fatdata, i) => {
                                        let loop = fatdata.rate
                                        let emarr = []
                                        emarr.push(...emarr, fatdata.rate)
                                        console.log(emarr)
                                        return (
                                            <tr>
                                                <td>{fatdata.fat}</td>
                                                <td>
                                                    <input type='text' value={snffatdata[0].rate} />
                                                </td>
                                                <td>
                                                    <input type='text' value={snffatdata[0].rate} />
                                                </td>
                                                <td>
                                                    <input type='text' value={snffatdata[0].rate} />
                                                </td>
                                                <td>
                                                    <input type='text' value={snffatdata[0].rate} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-1 col-md-1'>
                        <button onClick={() => deletetable()} className='bg-danger border border-none text-white'>Delete</button>
                    </div>
                    <div className='col-1 col-md-1'>
                        <button className='bg-light border border-none px-2'>Serach</button>
                    </div>

                    {/* <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>Settings</button>
              </div> */}
                    <div className='col-1 col-md-1'>
                        <button className='bg-light border border-none px-2'>Save</button>
                    </div>
                    <div className='col-1 col-md-1'>
                        <button className='bg-light border border-none px-2'>clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Milklistcom