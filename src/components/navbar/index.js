import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    MainLink 
} from "./navStyles";

const Navbar = () => {
    return (
        <>
        <Nav>
          <MainLink to='/'>
              Autoimport
          </MainLink>
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
            <NavBtnLink to='/new'>New</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
}
export default Navbar;

