import React from 'react'

const Billtablecom = React.forwardRef((props, ref) => {
    const { data, suppid } = props
    return (
        <div style={{ width: '100vw', height: '50vh', overflowY: 'scroll' }}>
            <div style={{ width: '100vw', height: '50vh', overflowY: 'scroll' }}>
                <table ref={ref} class="table">
                    <thead>
                        <tr>
                            <th scope="col">code (Id)</th>
                            <th scope="col">supplierId</th>
                            <th scope="col">date</th>
                            <th scope="col">shift</th>
                            <th scope="col">MilkType</th>
                            <th scope="col">qty</th>
                            <th scope="col">fat(%)</th>

                            <th scope="col">snf(%)</th>
                            <th scope="col">Milkrate</th>

                            <th scope="col">netAmount</th>





                        </tr>
                    </thead>{
                        data.filter((data) => {
                            if (!suppid) {
                                return data
                            }
                            else if (data.supplierId === suppid) {
                                return data
                            }
                        }).map((item, i) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.supplier}</td>
                                <td>{item.date}</td>
                                <td>{item.shift}</td>
                                <td>{item.milk}</td>
                                <td>{item.qty}</td>
                                <td>{item.fat}</td>

                                <td>{item.snf}</td>
                                <td>{item.milkRate}</td>

                                <td>{item.netAmount}</td>

                            </tr>
                        ))
                    }
                </table>
            </div><div>

            </div>
        </div>
    )
}
)

export default Billtablecom