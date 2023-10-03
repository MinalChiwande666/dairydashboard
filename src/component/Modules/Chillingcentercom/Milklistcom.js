import React, { useEffect, useState } from 'react'
import "./chilling.css"
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import GC from '@grapecity/spread-sheets';
import Textinputcom from './Textinputcom';
import Snfcom from './Snfcom';
import Fatinp from './Fatinp';
import Textinputcom2 from './Textinputcom2';
import Fatinp2 from './Fatinp2';
import Snfinp from './Snfinp';
import TextField from '@mui/material/TextField'

const Milklistcom = () => {
    const [milk, setmilk] = useState('')
    const [gettype, settype] = useState('')
    const [lisid,setlistid] = useState()
    const [togg, settogg] = useState(false)
    const [togg2, settogg2] = useState(false)
    const [togg3, settogg3] = useState(false)
    const [idinc,setidinc] = useState('')
    const [objupdate,setupdateobj] = useState({})
    const [miltype, setmilktype] = useState('')
    const [basis, setbasis] = useState('')
    const [listno, setlistno] = useState('')
    const [fromfat, setfromfat] = useState('')
    const [tofat, settofat] = useState('')
    const [fromsnf, setfromsnf] = useState('')
    const [tosnf, settosnf] = useState('')
    const [snfrange, setsnfrange] = useState([])
    const [fatrange, setfatrange] = useState([])
    const [newarr, setnewarr] = useState([])
    const [ssnf, setssnf] = useState()
    const [listnos, setlistnos] = useState([])
    const [esnf, setesnf] = useState()
    const [snfra, setsnfra] = useState({})
    const [snffatdata, setsnffatdata] = useState([])
    const [inputdata, setinputdata] = useState({})
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


    useEffect(()=>{
        fetch('http://103.38.50.113:8080/DairyApp/getListNo').then((data)=>{
         return data.json()
        }).then((res)=>{
         let id = res.pop()
         setidinc(id)
        })
      },[])


    const deletetable = () => {
        console.log(code)
        fetch(`http://103.38.50.113:8080/DairyApp/deleteMilkRateByListNo?listNo=${code}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
          
        }).then((data) => {
            return data.json()
        }).then((resp) => {
            alert(resp.message)
            console.log(resp)

            setTimeout(()=>{
                window.location.reload()
            },3000)
        })
    }


    const save = () => {
        let obj = {
            milktype: milk,
            onThebasic: gettype,
            entries: newarr
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
                console.log(resp, " server response")
                console.log(resp.data.listNo)
                localStorage.setItem("inclistno", JSON.stringify(resp.data.listNo))
                alert(resp.message)
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

    useEffect(() => {
        if (fromsnf && tosnf) {
            fetch(`http://103.38.50.113:8080/DairyApp/generateSnfRange?minsnf=${fromsnf}&maxsnf=${tosnf}`).then((data) => {
                return data.json()
            }).then((res) => {
                console.log("snf range=>", res)
                setsnfrange(res)
            })
        }
    }, [fromsnf, tosnf])

    useEffect(() => {
        if (fromfat && tofat) {
            fetch(`http://103.38.50.113:8080/DairyApp/generateFatRange?minfat=${fromfat}&maxfat=${tofat}`).then((data) => {
                return data.json()
            }).then((res) => {
                console.log("fat res=>", res)
                setfatrange(res)
            })
        }
    }, [fromfat, tofat])

    const handlesheet = (row, col, value) => {
        setinputdata({
            ...inputdata,
            snf: col,
            fat: row,
            rate: value,
            [`${row}-${col}`]: value,
        })
        //   console.log("row=>",row,"Col=>",col,"val=>",value)
    }

    useEffect(() => {
        console.log("input data=>", inputdata)
        let obj = {
            snf: inputdata.snf,
            fat: inputdata.fat,
            rate: inputdata.rate || ""
        }
        if (obj.rate.length > 1) {
            setnewarr([...newarr, obj])
        }
    }, [inputdata])

    useEffect(()=>{
        fetch('http://103.38.50.113:8080/DairyApp/getListNo1').then((data)=>{
            return data.json()
        }).then((res)=>{
            console.log("res id =>",res)
            setlistid(res)
        })
    })
    
    const updatelist = ()=>{
        try{
          if(code)
          {
            fetch(`http://103.38.50.113:8080/DairyApp/findByListNo/${code}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(objupdate)
            }).then((data)=>{
                return data.json()
            }).then((res)=>{
                console.log(res)
                alert(res.message)
            })
          }
        }catch(e)
        {

        }
    }
    return (
        <>
            <div className='p-2 sm-0' onClick={()=>{
                if(togg === true){
                    settogg(false)
                }else if(togg2 === true){
                    settogg2(false)
                }else if(togg3 === true){
                    settogg3(false)
                }
            }}>
                <div className='container mt-4 chillingCenterCont'>
                    <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Milk Rate List</h3></div>
                    <div className='row mt-3'>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center flex-column'>
                            <div className='text-dark'>
                                With effect Date
                            </div>
                            <div>
                                <input type='date' />
                            </div>
                        </div>
                        <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <TextField
                                    variant='standard'
                                    label="Milk Type"
                                    value={milk === '' ? '' : milk}
                                    sx={{ width: "25ch" }}
                                />
                                {
                                    togg ?
                                        <div className='masterSelect'>
                                            <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                {
                                                    milktype.map((item) => (
                                                        <li
                                                            style={{ listStyle: 'none' }}
                                                            onClick={() => {
                                                                setmilk(item.name)
                                                                settogg(false)
                                                            }}
                                                        >{item.name}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div> : null}
                            </div>
                            <div className='mt-4'>
                                <IconButton onClick={() => settogg(!togg)}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>
                            </div>
                        </div>

                        <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <TextField
                                    variant='standard'
                                    label="On the Basis of"
                                    value={gettype === '' ? '' : gettype}
                                    sx={{ width: "25ch" }}
                                />
                                {
                                    togg2 ?
                                        <div className='masterSelect'>
                                            <ul className='d-flex justify-content-center flex-column m-0 p-0'>
                                                {
                                                    type.map((item) => (
                                                        <li
                                                            style={{ listStyle: 'none' }}
                                                            onClick={() => {
                                                                if (item) {
                                                                    fetch('')
                                                                }
                                                                settype(item.name)
                                                                settogg2(false)
                                                            }}
                                                        >{item.name}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div> : null}
                            </div>
                            <div className='mt-4'>
                                <IconButton onClick={() => settogg2(!togg2)}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>
                            </div>
                        </div>

                        <div style={{ position: 'relative' }} className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <div>
                                <TextField
                                    variant='standard'
                                    label="List No"
                                    value={listno === '' ? '' : listno}
                                    sx={{ width: "25ch" }}
                                />
                                {
                                    togg3 ?
                                        <div className='masterSelect' style={{ height: "13vh", overflowY: "scroll" }}>
                                            <ul className='d-flex justify-content-center flex-column m-0 p-0' >
                                                {
                                                    listnos.map((item) => (
                                                        <li
                                                            style={{ listStyle: 'none' }}
                                                            onClick={() => {
                                                                setcode(item)
                                                                if (item) {
                                                                    fetch(`http://103.38.50.113:8080/DairyApp/getListNo/${item}`).then((data) => {
                                                                        return data.json()
                                                                    }).then((res) => {
                                                                        console.log(res)
                                                                        setsnffatdata(res)
                                                                    })
                                                                }
                                                                setlistno(item)
                                                                settogg3(false)
                                                            }}
                                                        >{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div> : null}
                            </div>
                            <div className='mt-4'>
                                <IconButton onClick={() => settogg3(!togg3)}>
                                    <KeyboardArrowDownIcon />
                                </IconButton>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='container mt-4 chillingCenterCont'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <input contentEditable={false} style={{ width: "100px", pointerEvents: 'none', color: 'white', border: 'none', padding: '5px', fontWeight: '700', borderRadius: '0.4rem' }} className='bg-primary my-2 text-center' type='text' value={`List No.${!code?lisid:code}`} />
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <h5 className='mt-3'>SNF RANGE</h5>
                        </div>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField value={fromsnf}
                                    onChange={(e) => setfromsnf(e.target.value)}
                                    label="Min Snf" variant="standard" />
                            </Box>
                        </div>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField value={tosnf}
                                    onChange={(e) => settosnf(e.target.value)}
                                    label="Max Snf" variant="standard" />
                            </Box>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <h5 className='mt-3'>FAT RANGE</h5>
                        </div>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField value={fromfat}
                                    onChange={(e) => setfromfat(e.target.value)}
                                    label="Min Fat" variant="standard" />
                            </Box>
                        </div>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField value={tofat}
                                    onChange={(e) => settofat(e.target.value)}
                                    label="Max Fat" variant="standard" />
                            </Box>
                        </div>
                    </div>
                </div>

                <div className='container milklisttable mt-4 mb-3 p-0'>
                    {
                        snffatdata.length === 0 ?
                            <table className='table tableMilkList table-bordered'>
                                <thead>
                                    <tr>
                                        <th>FAT/SNF</th>
                                        {
                                            snfrange.map((col) => (
                                                <>
                                                    <th >{col}</th>
                                                </>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        fatrange.map((row) => (
                                            <tr>
                                                <td>{row}</td>
                                                {
                                                    snfrange.map((col) => (
                                                        <>
                                                            <td><input className='inp-size' value={inputdata[`${row}-${col}`] || ""} type='text' onChange={(e) => handlesheet(row, col, e.target.value)} /></td>
                                                        </>
                                                    ))
                                                }
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table> :
                            <table className='table tableMilkList table-bordered'>
                                <thead>
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
                                                    <button className='btn btn-primary' onClick={() => {
                                                         alert(fatdata)
                                                        let newobj = {
                                                            fat: parseFloat(fatdata.fat),
                                                            snf: parseFloat(fatdata.snf),
                                                            rate: parseFloat(fatdata.rate)
                                                        }
                                                        console.log(newobj)
                                                        setupdateobj(fatdata)
                                                        // setnewarr([...newarr, newobj])
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

                <div className='container'>
                    <div className='row my-4'>
                        <div className='col-12 col-md-1'>
                            <button onClick={() => deletetable()} className='btn btn-danger text-white' style={{ width: "80px", fontWeight: "600" }}>Delete</button>
                        </div>
                        <div className='col-12 col-md-1'>
                           {!code? <button
                                onClick={() => save()}
                                className='btn btn-primary mt-sm-0 mt-2' style={{ width: "80px", fontWeight: "600" }}>Save</button>: <button
                                onClick={()=>updatelist()}
                                className='btn btn-primary mt-sm-0 mt-2' style={{ width: "80px", fontWeight: "600" }}>Update</button>}
                        </div>

                    </div>
                </div>
            </div>



            
        </>
    )
}

export default Milklistcom
