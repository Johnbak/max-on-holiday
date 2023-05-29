// import { FaBars } from 'react-icons/fa'
import styled from "styled-components";
// import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  justify-content: flex-end;
  background: #212529;
  display: flex;
  height: 100px;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 1200;
  @media screen and (min-width: 769px) {
    justify-content: space-between;
  }
`;
export const MenuLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  padding: 0 1.8rem;
  height: 100%;
  transition: 0.2s all cubic-bezier(0.22, 0.61, 0.36, 1); //when scale back
  &:hover {
    transform: scale(1.3);
    transform-origin: center;
    transition: 0.2s all;
    color: #fff;
  }
`;

export const Hamburger = styled.i`
  display: block;
  font-size: 1.9rem;
  /* cursor: pointer; */
  padding: 10px;

  &:hover {
    transform: scale(1.3);
    transform-origin: center;
    transition: 0.2s all;
  }
  @media screen and (min-width: 769px) {
    display: none;
    color: #ffffff;
  }
`;
export const Menu = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;
