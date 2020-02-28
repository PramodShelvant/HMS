import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink, BrowserRouter,Link} from 'react-router-dom'
import Table from '../../Table'
import {Getdata} from '../../../Network/Server'

export default function Diagnosis(props) 
{
    const column=[{data:'reportType',title:'Report Type'},{data:'reportDate',title:'Report Date'},{data:'description',title:'Description'},{data:'download',title:'Download'}]
    const [dataSrc,setdataSrc]=React.useState([]);
    const columnDefs=[{targets:-1,orderable:false,responsivePriority:1,createdCell:(td,cellData,rowData,row,col)=>ReactDOM.render(<BrowserRouter><button onClick={()=>props.setindex(rowData)} data-toggle='modal' data-target='#viewDetails'><i className='fa fa-eye'></i></button>
    </BrowserRouter>,td)}]
    
    React.useEffect(()=>{Getdata('opdDiagnosis').then(data=>setdataSrc(data));},[])

    return (
    <>
    <nav aria-label="breadcrumb" >
      <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
        <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline text-xs " aria-current="page">
          <h6 className='text-sm ' style={{letterSpacing:'1px',lineHeight:'100%'}}>Diagnosis</h6>
          <div className='btn-group p-0'>
            <button className={'btn btn-xs  btn-light ml-1 ' } style={{marginLeft:'0.5px !important',opacity:0}} data-toggle="modal" data-target="sdf">dfgh</button>              
            <NavLink to="/patient/visits" class="btn btn-light text-xs  btn-xs  ml-1"> Visits</NavLink>
         <NavLink to="/patient/diagnosis" class="btn btn-light text-xs  btn-xs  ml-3"> Diagnosis</NavLink>                 
          </div>
        </li>
      </ol>
    </nav>
    <div className='px-5 pb-5'>
      <Table id='opdDiagnosis' col={column} dataSrc={dataSrc} columnDefs={columnDefs}/>
    </div>
  </>
  )
}
