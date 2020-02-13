import React, { useEffect, useState } from 'react';
import {useLocation,Route, NavLink} from 'react-router-dom';
import Table from './Table'

import axios from 'axios'
import AddVisitor from '../../Forms/FrontOffice/AddVisitor'
import CallLog from '../../Forms/FrontOffice/CallLog'
import AddReceive from '../../Forms/FrontOffice/AddReceive'
import AddDispatch from '../../Forms/FrontOffice/AddDispatch'
import AddComplain from '../../Forms/FrontOffice/AddComplain'
import AddPat from '../../Forms/OPDForms/AddPat'
import IPDAddpat from '../../Forms/IPDForms/IPDAddpat'
import GenerateBill from '../../Forms/Pharmacy/GenerateBill'
import AddMedicine from '../../Forms/Pharmacy/AddMedicine'
import PurchaseMedicine from '../../Forms/Pharmacy/PurchaseMedicine'
import ImportMedicine from '../../Forms/Pharmacy/ImportMedicine'
import Pathology from '../../Forms/Pathology/Pathology'
import Radiology from '../../Forms/Radiology/Radiology'
import AddPatient from '../../Forms/OperatioTheatre/AddPatient'
import AddNewPatient from '../../Forms/NewPatient'
import BookMyAppointment from '../../homepage/BookMyAppointment'

const PageContent = (props) => {
  const [Data,setData]=useState([]);
  useEffect(()=>
  {
    let myurl=window.localStorage.getItem('user');
    myurl=myurl?`${props.url}/${JSON.parse(myurl).role}/${JSON.parse(myurl).userId}`:props.url
//alert(myurl)
    axios.get('http://192.168.0.121:8080/'+myurl).
    then(res=>{//console.log(res.data)
    setData(res.data)
    console.log(Data)
    console.log(props.url)
  })
  },[props.url])
  return (
    
    <div className="content-wrapper my-3"  style={{  
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
    <section className="content px-4" >
      <div className="card shadow">
  <nav aria-label="breadcrumb" >
  <ol class="p-2 px-5" style={{backgroundColor:'#3f51b5'}} >
  <li class="text-white font-weight-bold d-sm-flex justify-content-between align-items-baseline" aria-current="page"><div style={{letterSpacing:'2px',lineHeight:'100%'}}>{props.breadcrum}</div>
  <div>
    {
    (props.sidebutton||[]).map((item,i)=>{return (item.type)?<NavLink to={'/dashboard/appointment/'+i} className={item.className } onClick={()=>{
      props.setBreadcrum(item.name)
  props.setcol(item.col)
  props.seturl(item.url)
  props.setsidebutton(item.sidebtn)
    }}>{item.name}</NavLink>:<button className={item.className } data-toggle="modal" data-target={item.id}>{item.name}</button>})
    }
  </div>
  </li>
  </ol>
  </nav>{
  props.col?
     <div className='px-5 pb-5'><Table Datasrc={Data} col={props.col} url={props.url}/></div> :''
    
    }
    </div>
    </section>

    <BookMyAppointment />
    <AddPat />
    <Radiology /> 
    <Pathology /> 
    <PurchaseMedicine />
    <AddMedicine />
    <GenerateBill/>
    <IPDAddpat/>
    <AddPatient />
    <AddComplain />
    <AddDispatch />
    <AddReceive />
    <CallLog />
    <AddVisitor />
    <ImportMedicine />
    <AddNewPatient/>
    </div>
  );
}

export default PageContent;
