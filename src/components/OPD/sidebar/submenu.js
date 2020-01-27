import React from 'react';

import {Link} from 'react-router-dom'
const submenu = (props) => {
  return (
    <ul className="nav nav-treeview">
    {props.items.map((item)=><li className="nav-item">
        <Link href="#" className="nav-Link" onClick={()=>{props.setBreadcrum(props.name+" / "+item.name)}}>
          <i className={item.icon + '  ml-3'}></i>
          <p className="pl-3">{item.name}</p>
        </Link>
      </li>)  }
    </ul>
  );
}
export default submenu;
