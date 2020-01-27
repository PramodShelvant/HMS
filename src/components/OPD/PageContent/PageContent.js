import React, { useEffect, useState } from 'react';
import Table from './Table'
import {OPD} from './OPD'
import axios from 'axios'

const PageContent = (props) => {
  const [Data,setData]=useState([]);
useEffect(()=>{
   axios.get('http://localhost:3000/'+props.url).
  then(res=>{//console.log(res.data)
setData(res.data)
//console.log(Data)
})
},[props.url])
  return (
    <div className="content-wrapper">
     
    <section className="content">
      
<nav aria-label="breadcrumb">
  <ol class="breadcrumb bg-primary ">
  <li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">{props.breadcrum}</li>
  </ol>
</nav>{
  props.col?
     <Table Datasrc={Data} col={props.col} url={props.url}/>  :''
    
    }
    </section>
    </div>
  );
}

export default PageContent;
