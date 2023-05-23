// import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  justify-content: flex-end;
  background: #455954;
  display: flex;
  height: 100px;
  padding : 0 16px;
  position: sticky;
  top: 0;
  z-index: 1200;
  @media screen and (min-width: 769px) {
    justify-content: space-between;
  }
`
export const MenuLink = styled.a`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none !important;
  padding: 0 1.2rem;
  height: 100%;
  &:hover {
    color: #000000;
  }
`

export const Hamburger = styled.i`
  display: block;
  font-size: 1.9rem;
  cursor: pointer;
  padding : 10px;
  align-self: center;
  position : relative;

  &:hover {
    transform: scale(1.3);
    transition : 0.2s all;
  }
  @media screen and (min-width: 769px) {
    display: none; 
    color: #ffffff;
  }
`
export const Menu = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`