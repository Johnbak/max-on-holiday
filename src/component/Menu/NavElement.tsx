import React, { useEffect, useRef, useState } from 'react'
import { Menu, PrimaryNav, MenuLink, Hamburger } from './Nav'
import { useOutsideAlerter } from '../utils';

const Navbar = () => {
  const hamburgurIconRef = useRef(null);
  const [hamburger, setHamburger] = useState(false);


  useOutsideAlerter(hamburgurIconRef, () => {
    if (hamburger) {
      setHamburger(false);
    }
  });


  const handleHamburgerClick = () => {
    setHamburger((prevHamburger) => !prevHamburger);
  };

  return (
    <PrimaryNav>
      <Menu>
        <MenuLink href="/home" >
          Home
        </MenuLink>
        <MenuLink href="/about" >
          About
        </MenuLink>
        <MenuLink href="/products" >
          Products
        </MenuLink>
        <MenuLink href="/blog">
          Blog
        </MenuLink>
      </Menu>
      <div style={{
        position: "relative",
        alignSelf: "center"
      }}>
        <Hamburger
          ref={hamburgurIconRef}
          className="snes-jp-logo"
          onClick={handleHamburgerClick} />
        <div className="nes-container is-rounded is-dark"
          style={{
            width: "300px",
            height: "250px",
            right: -16,
            top: 100,
            position: "absolute",
            zIndex: "900",
            display: 'flex',
            opacity: hamburger ? 1 : 0,
            borderRadius: "10px",
            transition: 'opacity 0.5s ease-in-out',  // When the hamburger state is true, the opacity is set to 1, making the div visible with a fade-in effect. When the hamburger state is false, the opacity
          }}>
          <div className="lists">
            <p>Home</p>
            <p>About</p>
            <p>Products</p>
            <p>Blog</p>
            <p>Click me</p>
          </div>
        </div>
        {/* <div
          style={{
            width: "300px",
            height: "250px",
            right: -16,
            top: 120,
            backgroundColor: "red",
            position: "absolute",
            zIndex: "900",
            display: 'flex',
            opacity: hamburger ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',  // When the hamburger state is true, the opacity is set to 1, making the div visible with a fade-in effect. When the hamburger state is false, the opacity
          }}>
        </div> */}
      </div>

    </PrimaryNav>

  )
}
export default Navbar