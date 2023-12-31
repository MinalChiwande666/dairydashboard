import { TextField } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import * as FileSaver from 'file-saver'
import * as XLSX from "xlsx";
import Box from '@mui/material/Box';
import { useReactToPrint } from 'react-to-print';
import DeleteIcon from '@mui/icons-material/Delete';
import { DialogActions, DialogTitle, Button, IconButton} from '@mui/material';
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Routecom = () => {
    const [routeincid,setrouteincid] = useState()
    const [routeform, setrouteform] = useState({
        km: '',
        routeName: '',
        areaName: ''
    })
    const [loader, setloader]=useState(false)
    const [opendailogdel, setopendailogdel] = useState(false)
    const [delById, setDelById] = useState()
    const [showtable, setshowtable] = useState(false)
    const [routedata, setroutedata] = useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);

    const save = () => {
        try {
            fetch('http://103.38.50.113:8080/DairyApp/saveRouteMaster', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(routeform)
            }).then((data) => {
                return data.json()
            }).then((res) => {
                console.log(res)
                alert(res.message)
                window.location.reload()
            })
        } catch (e) {
            console.log("Error =>", e)
        }
    }

    useEffect(() => {
        fetch('http://103.38.50.113:8080/DairyApp/getAllRouteMasterData').then((data) => {
            return data.json()
        }).then((res) => {
          
            setroutedata(res)
        })
    }, [])

  useEffect(()=>{
    fetch('http://103.38.50.113:8080/DairyApp/getAllRouteMasterData').then((data) => {
        return data.json()
    }).then((res) => {
        let id = res.pop()
        console.log(id)
        setrouteincid(id.id)
    
    })
  },[])
    const componentRef = useRef()
    const print = useReactToPrint({
        content: () => componentRef.current,
    })

    const exporttoexcel = async () => {
        const fileName = "myfile";
        const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        const fileExtension = ".xlsx";
        const ws = XLSX.utils.json_to_sheet(routedata)
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    const deleteRMid = (id) =>{
        setDelById(id)
        setopendailogdel(true)
    }

    const handleDelete = () =>{
        let del = {
            id:delById
        }
        axios.post('http://103.38.50.113:8080/DairyApp/deleteRouteMasterById',del).then((delData)=>{
            if(delData.data){
                setopendailogdel(false)
            }
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }).catch((e)=>{
            console.log(("Something went wrong",e))
        })
    }

    const handleClose = () => {
        setopendailogdel(false)
    }

    const dailoge = () => {
        return (
          <>
            <Dialog
    
              open={opendailogdel}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogActions style={{ height: '2rem' }}>
                <IconButton>
                  <CancelIcon style={{ color: 'blue' }} />
                </IconButton>
              </DialogActions>
              <div style={{ background: 'white' }}>
    
                <DialogTitle>
                  Are You sure you want to delete?
                </DialogTitle>
                <DialogActions>
                  <Button onClick={handleDelete}>Yes</Button>
                  <Button onClick={handleClose}>No</Button>
                </DialogActions>
              </div>
            </Dialog>
          </>
        )
      }

    return (
        <>
            <div className='p-2 sm-0'>
                <div className='container mt-4 RouteCont'>
                    {dailoge()}
                    <div><h3 className='text-center pt-3' style={{ textDecoration: "underline" }}>Route Master</h3></div>
                    <div className='row mt-4'>
                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField InputLabelProps={{ shrink: "true" }} value={routeincid + 1} label="ID" variant="standard" />
                            </Box>
                        </div>

                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField onChange={(e) => {
                                    setrouteform({
                                        ...routeform,
                                        km: e.target.value
                                    })
                                }}
                                value={routeform.km} label="Km" variant="standard" />
                            </Box>
                        </div>

                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField onChange={(e) => {
                                    setrouteform({
                                        ...routeform,
                                        routeName: e.target.value
                                    })
                                }}
                                    value={routeform.routeName} label="Route Name" variant="standard" />
                            </Box>
                        </div>

                        <div className='col-12 col-lg-6 col-xl-3 col-md-6 d-flex justify-content-center align-items-center'>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                                autoComplete="off">
                                <TextField onChange={(e) => {
                                    setrouteform({
                                        ...routeform,
                                        areaName: e.target.value
                                    })
                                }}
                                    value={routeform.areaName} label="Area Name" variant="standard" />
                            </Box>
                        </div>
                    </div>

                    <div className='container mt-4 mb-2 mb-sm-0'>
                        <button className='btn btn-primary mx-0 mx-sm-3 mx-md-3 mt-2 mt-sm-0' onClick={() => setshowtable(!showtable)}>Show Table</button>
                        <button className='btn btn-primary mx-3 mt-2 mt-sm-0' onClick={() => save()}>Save</button>
                        <button className='btn btn-primary mx-3 mt-2 mt-sm-0' onClick={() => setrouteform({
                            km: '',
                            routeName: '',
                            areaName: ''
                        })}>Clear</button>
                        <button className='btn-primary btn' onClick={()=>exporttoexcel()}>Export To Excel</button>
                        <button className='btn btn-primary mx-3 mt-2 mt-sm-0' onClick={() => print()}>Print</button>
                    </div>
                </div >

                {
                    showtable &&
                    <div className='container mt-4 accMastTable mb-3 p-0'>
                        <table ref={componentRef} className='tableAccMaster table table-stripped'>
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Route Name</th>
                                    <th scope="col">Area Name</th>
                                    <th scope="col">KM</th>
                                    <th scope='col'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {routedata.map((item, i) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.routeName}</td>
                                        <td>{item.areaName}</td>
                                        <td>{item.km}</td>
                                        <td><DeleteIcon style={{color:'red'}} onClick={() => deleteRMid(item.id)} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </>

    )
}

export default Routecom