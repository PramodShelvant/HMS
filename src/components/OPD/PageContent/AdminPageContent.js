import React, { useEffect, useState } from 'react';
import {useLocation,Route, NavLink} from 'react-router-dom';
import AdminTable from './AdminTable'

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
import Registration from '../../Forms/Registration'
import DisplayForm from '../../Forms/DisplayForm'

const AdminPageContent = (props) => {
  const [Data,setData]=useState([]);
  const [index,setIndex]=useState({});
 
  useEffect(()=>
  {
    let myurl=window.localStorage.getItem('user');
    myurl=myurl?`${props.url}/${JSON.parse(myurl).role}/${JSON.parse(myurl).userId}`:props.url
  
    axios.get('http://hospitalmanagemapp.gbfpue2n5p.us-east-1.elasticbeanstalk.com/'+myurl).
    then(res=>{
    setData(res.data)
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
  <div className='btn-group'>
    {
    (props.sidebutton||[]).map((item,i)=>{return (item.type)?<NavLink to={'/dashboard/appointment/'+i} className={item.className +'text-primary' } onClick={()=>{
      props.setBreadcrum(item.name)
  props.setcol(item.col)
  props.seturl(item.url)
  props.setsidebutton(item.sidebtn)
    }}>{item.name}</NavLink>:<button className={item.className+' text-primary' } data-toggle="modal" data-target={item.id}>{item.name}</button>})
    }
  </div>
  </li>
  </ol>
  </nav>{
  props.col?
     <div className='px-5 pb-5'><AdminTable Datasrc={Data} id={props.id} col={props.col} url={props.url} setIndex={setIndex}/></div> :''
    
    }
    </div>
    </section>

    <BookMyAppointment  {...index}/>
    <AddPat  {...index}/>
    <Radiology {...index}/> 
    <Pathology {...index}/> 
    <PurchaseMedicine {...index}/>
    <AddMedicine {...index}/>
    <GenerateBill {...index}/>
    <IPDAddpat {...index}/>
    <AddPatient {...index}/>
    <AddComplain {...index}/>
    <AddDispatch {...index}/>
    <AddReceive {...index}/>
    <CallLog {...index}/>
    <AddVisitor {...index}/>
    <ImportMedicine {...index}/>
    <AddNewPatient {...index}/>
    <Registration data={index}/>
    <DisplayForm data={index}/>
    </div>
  );
}

export default AdminPageContent;
