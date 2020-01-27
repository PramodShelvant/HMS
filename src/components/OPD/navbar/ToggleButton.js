import React from 'react';
import {Link} from 'react-router-dom';

const ToggleButton = () => {
  return <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></Link>
    </li>
  </ul>;
  
}

export default ToggleButton;
