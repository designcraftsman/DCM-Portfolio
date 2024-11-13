import React from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";

const NavbarDark = () => {
  return (
    <nav className="container navbar  ">
      <div className="d-flex justify-content-between align-items-center w-100">
        <a className="navbar-brand fs-1" href="/">DCM</a>
        <a href="/" className='text-dark fs-1'><HiBars3BottomRight/></a>
      </div>
    </nav>
  );
}

export default NavbarDark;