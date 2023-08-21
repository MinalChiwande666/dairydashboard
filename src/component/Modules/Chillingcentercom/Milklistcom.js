import React from 'react'
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import GC from '@grapecity/spread-sheets';
const Milklistcom = () => {
    let spreadBackColor = 'aliceblue';
    let sheetName = 'Goods List';
    let hostStyle = {
        width: '100%',
        height: '600px'
    };

    const data = [
        {
            Name: "FAT/SNF",
            snfval:7.00,
            snfval2:7.10,
            snfval3:7.20,
            snfval4:7.30,
            snfval5:7.40,
            snfval6:7.50,
            snfval7:7.60,
            snfval8:7.70,
            snfval9:7.80,
            snfval10:7.90,
            snfval11:8.00
        },
        {
            Name: "Potato",
            
            Price: 2.01,
            
        },
        {
            Name: "Tomato",
            Category: "Vegetable",
            Price: 3.21,
            "Shopping Place": "Other",
        },
        {
            Name: "Sandwich",
            Category: "Food",
            Price: 2,
            "Shopping Place": "Wal-Mart",
        },
        {
            Name: "Hamburger",
            Category: "Food",
            Price: 2,
            "Shopping Place": "Wal-Mart",
        },
        {
            Name: "Grape",
            Category: "Fruit",
            Price: 4,
            "Shopping Place": "Sun Store",
        },
    ];

    let columnWidth = 100;
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
                                    <div className='text-white'>
                                        Milk Type
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3'>
                                    <div className='text-white'>
                                        On the Basis of
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-5 col-md-3'>
                                    <div className='text-white'>
                                        List No
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <table class="table table-bordered">
                    <thead className='table-primary'>
                        <tr >
                            <th scope="col">FAT/SNF</th>
                            <th scope="col">7.0</th>
                            <th scope="col">7.10</th>
                            <th scope="col">7.20</th>
                            <th scope="col">7.30</th>
                            <th scope="col">7.40</th>
                            <th scope="col">7.50</th>
                            <th scope="col">7.60</th>
                            <th scope="col">7.70</th>
                            <th scope="col">7.80</th>
                            <th scope="col">7.90</th>
                            <th scope="col">8.00</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>
                            <td>
                                <input style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center' }} type='text' />
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='container'>
                <SpreadSheets
                    allowUserZoom={true}

                    backColor={spreadBackColor} hostStyle={hostStyle}>
                    <Worksheet
                        colCount={1000}
                        rowCount={1000}
                        name={sheetName} dataSource={data}>
                        <Column dataField='Name' width={300}></Column>
                        <Column dataField='Category' width={columnWidth}></Column>
                    </Worksheet>
                </SpreadSheets>
            </div>
        </div>
    )
}

export default Milklistcom