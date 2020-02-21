import React from 'react';

import {NavLink,useLocation} from 'react-router-dom'
export default (props) => {
  
  const location=useLocation();
  const u=location.pathname.toString().split('/')[1];
  const handle=(item)=>{
    props.setBreadcrum(item.name)
    props.setid(item.id)
    props.setcol(item.col)
    props.seturl(item.url)
    props.setsidebutton(item.sidebtn)
  }
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

