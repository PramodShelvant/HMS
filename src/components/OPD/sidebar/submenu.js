import React from 'react';

import {NavLink,useLocation} from 'react-router-dom'
export default (props) => {
  
  const location=useLocation();
  const u=location.pathname.toString().split('/')[1];
  const handle=(item)=>{
   //alert(JSON.stringify(item.name))
    props.setBreadcrum(item.name)
    
   // window.localStorage.setItem('name',props.items.name)
    
    
    props.setcol(item.col)
  //  window.localStorage.setItem('col',JSON.stringify(props.items.col))
    props.seturl(item.url)
    
  //  window.localStorage.setItem('url',props.items.url)
    props.setsidebutton(item.sidebtn)
  }
    
   // window.localStorage.setItem('sidebtn',JSON.stringify(props.items.sidebtn))
    React.useEffect(()=>{},[]);
   
  return (
    <ul className="nav nav-treeview text-dark bg-light">
    {props.items.map((item)=><li className="nav-item">
    <NavLink to={'/'+u+'/'+item.url} className="nav-link py-1 text-dark bg-light border-bottom border-right" activeStyle={{backgroundColor:'#192965'}} activeClassName='active' onClick={()=>handle(item)}>
      <i className={item.icon +' pl-3'}></i>
      <p className='pl-3' style={{letterSpacing:'2px',lineHeight:'100%'}}>
        {item.name}
        </p>
    </NavLink></li>)  }
    </ul>
  );
}

