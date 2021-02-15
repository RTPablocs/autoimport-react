import {NavLink as Link} from "react-router-dom";
import styled from 'styled-components';


export const Nav = styled.nav`
    background: #252525;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2 )
    z-index: 10; 
    justify-content: flex-start;
    border-bottom: 5px solid #DD1540;
`;
export const MainLink = styled(Link)`
    color: #fff;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    flex-grow:2;
    size: 26px !important;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display:flex;
    size: 22px;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    
    &.active{
    color: #DD1540;
    }
`;

export const NavMenu = styled.div`
  display:flex;
  align-items: center;
  margin-right: -24px;
  white-space: no-wrap;
  width: 100vw;
  justify-content: flex-end;
  @media screen and (max-width: 768px){
    display:none;
  }  
`;

export const NavBtn = styled.nav`
  display:flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 10vw;
  
  @media screen and (max-width: 768px){
    display:none;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #DD1540;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
