import React from 'react';
import NavSearch from './NavSearch'
import Notification from './Notification'
import UserProfile from './UserProfile'
const NavList = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-2 ">
        <href className='nav-link'>
        <NavSearch/>
        </href>
      </li>
      <li className="nav-item dropdown m-2" >
        <Notification />
      </li>
      <li class="dropdown user user-menu m-2">
         <UserProfile/>
      </li>
    </ul>
  );
}

export default NavList;
