import React from 'react';
import Submenu from './submenu';
import { NavLink ,useLocation} from 'react-router-dom';

export default (props) => {
  
  const location=useLocation();
  const u=location.pathname.toString().split('/')[1];
  React.useEffect(()=>{},[]);
  const handle=()=>{
   // alert('hello')
   
  props.setBreadcrum(props.items.name)
  
  //window.localStorage.setItem('name',props.items.name)
  if(typeof(props.items.submenu)==='undefined')
  {
  props.setid(props.items.id);
  props.setcol(props.items.col)
  window.localStorage.setItem('col',JSON.stringify(props.items.col))
  props.seturl(props.items.url)} 
  
  window.localStorage.setItem('url',props.items.url)
  props.setsidebutton(props.items.sidebtn)
  
  window.localStorage.setItem('sidebtn',JSON.stringify(props.items.sidebtn))
  }
  return (
    <li className="nav-item has-treeview shadow p-1">
    <NavLink to={'/'+u+'/'+props.items.url} className="nav-link py-1 text-white" activeStyle={{backgroundColor:'#192965'}} activeClassName='active' onClick={handle}>
      <i className={props.items.icon}></i>
      <p className='pl-3 ' style={{letterSpacing:'2px',lineHeight:'100%'}}>
        {props.items.name}
        {(props.items.submenu)?
        <i className="right fas fa-angle-down"></i>:''}
      </p>
    </NavLink>
    {(props.items.submenu)?
    <Submenu  {...props} name={props.items.name} items={props.items.submenu} />:<></>}
  </li>
  );
}
