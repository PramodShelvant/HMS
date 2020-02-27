import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import Table from '../../Table'
import {Getdata,Postdata} from '../../../Network/Server'

export default function Pharmacy() 
{
    const column=[{data:'billNo',title:'Bill No'},{data:'date',title:'Date'},{data:'patientName',title:'Patient Name'},{data:'doctorName',title:'Doctor Name'},{data:'total',title:'Total'},{data:'action',title:'Action'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[]
    const Link=<NavLink to='dfgh'/>

    React.useEffect(()=>{Getdata().then(data=>setdataSrc(data));},[])


    return (
        <>
        <nav aria-label="breadcrumb" >
        <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
        <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page">
        <h6 className='text-sm' style={{letterSpacing:'1px',lineHeight:'100%'}}>Pharmacy</h6>
        <div className='btn-group p-0'>
        <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>
        </div>
        </li>
        </ol>
        </nav>
        <div className='px-5 pb-5'>
        <Table id='postaldispatch' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
        </div>
      </>
    )
}
