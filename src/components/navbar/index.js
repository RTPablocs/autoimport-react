import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./navStyles";

const Navbar = () => {
    return (
        <>
        <Nav>
          <NavLink to='/'>
              Autoimport
          </NavLink>
          <NavMenu>
            <NavLink to='/ads' activeStyle>
              Ads
            </NavLink>
            <NavLink to='/tests' activeStyle>
              Car Tests
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
}
export default Navbar;

