import React from 'react';
import ToggleButton from './ToggleButton'

import NavList from './NavList'
const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ToggleButton />
      <NavList/>
    </nav>
  );
}

export default Navbar;
