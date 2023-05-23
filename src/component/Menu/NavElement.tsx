import React from 'react'
import { Menu, PrimaryNav, MenuLink, Hamburger } from './Nav'

const Navbar = () => {
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
      <Hamburger className="snes-jp-logo" >
        <div style={{
          width: "120px",
          height: "180px",
          right: 20,
          top: 140,
          backgroundColor: "red",
          position: "absolute",
          zIndex: "900"
        }}>
        </div>
      </Hamburger >
    </PrimaryNav>

  )
}
export default Navbar