import React from 'react'
import { useState } from 'react'
const Chillingcom = () => {
    const [collecttype, setcollecttype] = useState('')
    const [selmilktype, setselmilktype] = useState('')
    const collection = [
        {
            id: 1,
            name: 'Morning'
        },
        {
            id: 2,
            name: 'Evening'
        }
    ]
    const milktype = [
        {
            id: 1,
            name: 'Cow'
        },
        {
            id: 2,
            name: 'Buffalo'
        }
    ]
    return (
        <div className='container-fluid'>
            <div className='text-center' style={{fontSize:'2rem'}}>Chilling Center</div>
            <div className='container' style={{ boxShadow: '10px 10px 10px 0px gray',padding:'0.5rem 0.9rem' }}>
                <div className='row'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Invoice Id
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12  col-md-3 col-sm-12'>
                        <div>
                            InWard No
                        </div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {collecttype === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        collection.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setcollecttype(item.name)}
                                                    className='dropdown-item'>{item.name}</li>
                                            </>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            InWard Date
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='date' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Collection Type
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text'
                                placeholder='collection type'
                            />
                        </div>
                    </div>
                </div>

                <div className='row bg-light mt-3 p-1'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Vendor Name
                        </div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                    className="btn bg-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {collecttype === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        collection.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setcollecttype(item.name)}
                                                    className='dropdown-item'>{item.name}</li>
                                            </>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-2 col-md-3 col-sm-12'>
                        <div>
                            Address
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-2 col-md-3 col-sm-12'>
                        <div>
                            Mobile No
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Milk Type
                        </div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                    className="btn bg-white " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selmilktype === '' ? 'Select' : selmilktype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        milktype.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setselmilktype(item.name)}
                                                    className='dropdown-item'>{item.name}</li>
                                            </>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Item Name
                        </div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}
                                    className="btn bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {collecttype === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        collection.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setcollecttype(item.name)}
                                                    className='dropdown-item'>{item.name}</li>
                                            </>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-2 col-md-3 col-sm-12'>
                        <div>
                            Unit
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-2 col-md-3 col-sm-12'>
                        <div>
                            Batch
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            MBRT
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                </div>

                <div className='row bg-light mt-3 p-2'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Fat
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            SNF
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-0 col-md-3 col-sm-12'>
                        <div>
                            Warehouse
                        </div>
                        <div>
                            <div className="dropdown">
                                <button
                                    style={{ width: '80%', textAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem' }}
                                    className="btn bg-white " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {collecttype === '' ? 'Select' : collecttype}
                                    <div className='dropdown-toggle'>

                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    {
                                        collection.map((item, i) => (
                                            <>
                                                <li
                                                    onClick={() => setcollecttype(item.name)}
                                                    className='dropdown-item'>{item.name}</li>
                                            </>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Temp
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', padding: '0px', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Rate
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Transport Rate
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Over Charge
                        </div>
                        <div>
                        <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Acidity
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                </div>

                <div className='row bg-light mt-3 p-2'>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Weight
                        </div>
                        <div>
                            <input
                                type='number'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            In Kg
                        </div>
                        <div>
                            <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                            Total
                        </div>
                        <div>
                        <input
                                type='text'
                                style={{ fontSize: '0.8rem', width: '80%' }}
                            />
                        </div>
                    </div>
                    <div className='col-12 mt-1 col-md-3 col-sm-12'>
                        <div>
                           Remark
                        </div>
                        <div>
                            <input
                                style={{ width: '80%', fontSize: '0.8rem' }}
                                type='text' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chillingcom