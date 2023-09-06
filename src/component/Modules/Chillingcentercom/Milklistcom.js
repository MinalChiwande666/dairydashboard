import React, { useEffect, useState } from 'react'
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import GC from '@grapecity/spread-sheets';
import Textinputcom from './Textinputcom';
import Snfcom from './Snfcom';
import Fatinp from './Fatinp';
import Textinputcom2 from './Textinputcom2';
import Fatinp2 from './Fatinp2';
import Snfinp from './Snfinp';
const Milklistcom = () => {
    const [milk, setmilk] = useState('')
    const [gettype, settype] = useState('')
    const [miltype, setmilktype] = useState('')
    const [basis, setbasis] = useState('')
    const [listno,setlistno] = useState('')
    const [ssnf, setssnf] = useState()
    const [listnos, setlistnos] = useState([])
    const [esnf, setesnf] = useState()
    const [snfra, setsnfra] = useState({})
    const [snffatdata, setsnffatdata] = useState([])
    const [code, setcode] = useState()
    const [listarr, setlistarr] = useState([])
    const [fatra, setfatra] = useState({})
    const [entries, setentries] = useState([])
    const [fatsnf, setfatsnf] = useState([
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        },
        {

            snf: '',
            fat: '',
            rate: ''
        }
    ])
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

    useEffect(() => {
        fetch('http://103.38.50.113:8080/DairyApp/getListNo').then((data) => {
            return data.json()
        }).then((res) => {
            console.log(res, "dropdown list")
            setlistnos(res)
        })
    }, [])

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




    useEffect(() => {


    }, [])

    const save = () => {
        let obj = {
            milktype: milk,
            onThebasic: gettype,
            entries: entries
        }
        console.log(obj)
        try {
            fetch('http://103.38.50.113:8080/DairyApp/saveMilkRates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then((data) => {
                return data.json()
            }).then((resp) => {
                console.log(resp.data.listNo)
                localStorage.setItem("inclistno",JSON.stringify(resp.data.listNo))
                window.location.reload()
            })
        } catch (e) {
            console.log("Error", e)
        }

    }

    const handlechange = (itemId, newval) => {
        setfatsnf((prev) =>
            prev.map((item, i) =>
                itemId === i ? { ...item, rate: newval } : item
            )
        )
    }
    const handlesnfchange = (itemID, newval) => {
        setfatsnf((prev) =>
            prev.map((item, i) =>
                itemID === i ? { ...item, snf: newval } : item
            )
        )
    }
    const handlefatchange = (itemID, newval) => {
        setfatsnf((prev) =>
            prev.map((item, i) =>
                itemID === i ? { ...item, fat: newval } : item
            )
        )
    }
    const handleupdsnfchange = (itemID, newval) => {
        setsnffatdata((prev) =>
            prev.map((item) =>
                itemID === item.id ? { ...item, snf: newval } : item
            )
        )
    }
    const handleupdfatchange = (itemID, newval) => {
        setsnffatdata((prev) =>
            prev.map((item) =>
                item.id === itemID ? { ...item, fat: newval } : item
            )
        )
    }
    const handleupdchange = (itemID, newval) => {
        setsnffatdata((prev) =>
            prev.map((item) =>
                item.id === itemID ? { ...item, rate: newval } : item
            )
        )
    }
    console.log("snffat=>", fatsnf)
    console.log("entries =>", entries)
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='bg-primary py-1 px-3 col-12 col-md-12'>
                    <div className='row'>
                        <div className='col-12 col-md-2'>
                            <div className='text-white mt-3' style={{fontWeight:"700"}}>MILK RATE LIST</div>
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
                                                        if(item)
                                                        {
                                                            fetch('')
                                                        }
                                                        settype(item.name)
                                                    }}><a class="dropdown-item" href="#">{item.name}</a></li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <div className='col-5 col-md-3'>
                                    <div style={{ fontSize: '0.8rem' }} className='text-white'>
                                        List No
                                    </div>
                                    <div class="dropdown">
                                        <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          {listno === ''?"Select":listno}
                                        </a>

                                        <ul class="dropdown-menu" style={{overflow:"scroll", height:"35vh"}}>
                                            {
                                                listnos.map((item, i) => (
                                                    <li
                                                    onClick={()=>{
                                                        
                                                        if(item)
                                                        {
                                                            fetch(`http://103.38.50.113:8080/DairyApp/findByListNo/${item}`).then((data) => {
                                                                return data.json()
                                                            }).then((res) => {
                                                                console.log(res)
                                                                setsnffatdata(res)
                                                            })
                                                        }
                                                        setlistno(item)}}
                                                    className="dropdown-item">{item}</li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                    {/* <input
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
                                        type='number' style={{ width: '100%' }} /> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <input contentEditable={false} style={{pointerEvents:'none', color:'white',width:'8vw',border:'none',padding:'5px',fontWeight:'700',borderRadius:'0.4rem'}} className='bg-primary my-2 text-center' type='text' value={`List No.${JSON.parse(localStorage.getItem('inclistno')) + 1}`}/>
                <div style={{ overflow: 'scroll', height:"64vh"}}>
                    {snffatdata.length === 0 ? <table class="table table-bordered">
                        <thead className='table-primary'>
                            <tr style={{width:"100%"}} className='text-center'>
                                <th>SNF</th>
                                <th>FAT</th>
                                <th>RATE</th>
                                <th>Add</th>
                                <th><button
                                    onClick={() => setfatsnf([...fatsnf, { snf: '', fat: '', rate: '' }])}
                                    className='btn btn-primary text-white' style={{fontSize:"0.9rem", fontWeight:"600"}}>+</button></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                fatsnf.map((item, i) => (

                                    <tr>
                                        <td className='text-center'>
                                            <Snfcom item={item} id={i} onChange={handlesnfchange}/>
                                        </td>
                                        <td className='text-center'>
                                            <Fatinp item={item} id={i} onChange={handlefatchange} />
                                        </td>
                                        <td className='text-center'>
                                            <Textinputcom item={item} id={i} onChange={handlechange} />
                                        </td>
                                        <td className='text-center'>
                                            <button className='btn btn-primary' style={{width:"70px", fontWeight:"600"}} onClick={() => {

                                                let newobj = {
                                                    fat: parseFloat(item.fat),
                                                    snf: parseFloat(item.snf),
                                                    rate: parseFloat(item.rate)
                                                }
                                                setentries([...entries, newobj])
                                            }}>Add</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> :
                        <table class="table table-bordered">
                            <thead className='table-primary'>
                                <tr>
                                    <th>SNF</th>
                                    <th>FAT</th>
                                    <th>RATE</th>
                                    <th>ADD</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    snffatdata.map((fatdata, i) => (
                                        <tr>
                                            <td>
                                                <Snfinp item={fatdata} onChange={handleupdsnfchange} />
                                            </td>
                                            <td>
                                                <Fatinp2 item={fatdata} onChange={handleupdfatchange} />
                                            </td>
                                            <td>
                                                <Textinputcom2 item={fatdata} onChange={handleupdchange} />
                                            </td>
                                            <td>
                                                <button onClick={() => {
                                                    let newobj = {
                                                        fat: parseFloat(fatdata.fat),
                                                        snf: parseFloat(fatdata.snf),
                                                        rate: parseFloat(fatdata.rate)
                                                    }
                                                    setentries([...entries, newobj])
                                                }}>Add</button>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-1 col-md-1'>
                        <button onClick={() => deletetable()} className='btn btn-danger border border-none text-white' style={{width:"80px", fontWeight:"600"}}>Delete</button>
                    </div>
                    {/* <div className='col-1 col-md-1'>
                        <button className='bg-light border border-none px-2'>Serach</button>
                    </div> */}

                    {/* <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>Settings</button>
              </div> */}
                    <div className='col-1 col-md-1'>
                        <button
                            onClick={() => save()}
                            className='btn btn-primary border border-none px-2' style={{width:"80px", fontWeight:"600"}}>Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Milklistcom