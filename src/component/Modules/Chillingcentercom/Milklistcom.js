import React, { useEffect, useState } from 'react'
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import GC from '@grapecity/spread-sheets';
const Milklistcom = () => {
    const [milk, setmilk] = useState('')
    const [gettype, settype] = useState('')
    const [snfra, setsnfra] = useState({})
    const [fatra,setfatra] = useState({})
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
            snf: [{sn:1}, {sn:1.2},{sn:1.3},{sn:1.4} ,{sn: 1.5}, {sn:1.6}, {sn:1.7}, {sn:1.8}, {sn:1.9},{sn: 2}],
            fat:  [{sn:1}, {sn:1.2},{sn:1.3},{sn:1.4} ,{sn: 1.5}, {sn:1.6}, {sn:1.7}, {sn:1.8}, {sn:1.9},{sn: 2}],
        },

    )

    let snfrange = [{ snff: '1-1.4', from: 1, to: 1.4 }]
    let fatrange = [{ fatf: '1-1.4', from: 1, to: 1.4 }]

    useEffect(() => {
        console.log(snfra)
    }, [snfra])
    


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
                                    <input type='number' style={{ width: '100%' }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='col-6 col-md-3'>
                    <div style={{ fontSize: '0.8rem' }} >
                        SNF Range
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                        </button>
                        <ul class="dropdown-menu">
                            {
                                snfrange.map((item, i) => (
                                    <li onClick={() => {
                                        setsnfra(item)
                                    }} className="dropdown-item">{item.snff}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div style={{ fontSize: '0.8rem' }} >
                        FAT Range
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select
                        </button>
                        <ul class="dropdown-menu">
                            {
                                fatrange.map((item, i) => (
                                    <li onClick={() => {
                                        setfatra(item)
                                    }} className="dropdown-item">{item.fatf}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div style={{ width: '80vw', overflowX: 'scroll' }}>
                    <table class="table table-bordered">
                        <thead className='table-primary'>
                            <tr >
                                <th scope="col">{'FAT/SNF'}</th>
                                {
                                    snffat.snf.filter((ta, i) => {
                                        let k;
                                        let l;
                                        if(!snfra.from && !snfra.to)
                                        {
                                         return ta
                                        }
                                        else if(ta.sn >= snfra.from && ta.sn <=snfra.to){
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
                                snffat.fat.filter((fa,i)=>{
                                    if(!fatra.from && !fatra.to)
                                    {
                                        return fa
                                    }else if(fa.sn >= fatra.from && fa.sn <= fatra.to)
                                    {
                                        return fa
                                    }
                                }).map((item, i) => (
                                    <tr>
                                        <td>{item.sn}</td>

                                        <td><input 
                                        onChange={(e)=>{
                                            localStorage.setItem('milkrate',JSON.stringify(e.target.value))
                                        }}
                                        style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>
                                        <td><input style={{ width: '7vw', border: 'none', outline: 'none' }} type='text' /></td>


                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='container'>
             <div className='row my-4'>
              <div className='col-1 col-md-1'>
                <button className='bg-danger border border-none text-white'>Delete</button>
              </div>
              <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>Serach</button>
              </div>
              <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>Export</button>
              </div>
              <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>Import</button>
              </div>
              <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>Settings</button>
              </div>
              <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>Save</button>
              </div>
              <div className='col-1 col-md-1'>
                <button className='bg-light border border-none '>clear</button>
              </div>
             </div>
            </div>
        </div>
    )
}

export default Milklistcom