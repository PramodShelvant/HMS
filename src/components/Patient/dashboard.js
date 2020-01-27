import React,{useState} from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar';
import Table from './Table';
export default (prop) =>{
  const [hide,setHide]=useState(0);
 
return(<React.Fragment>
<Navbar hide={hide} setHide={setHide}/>
<div className='d-sm-flex'>
<div className='mh-100 bg-primary p-0'>
<Sidebar hide={hide} items={prop.items}/>
</div>
<div className='flex-grow-1 p-5 bg-light' style={{width:'80%'}}>

<Table />
</div>
</div>
</React.Fragment>)
}
