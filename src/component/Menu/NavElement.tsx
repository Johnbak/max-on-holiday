import React, { useRef, useState } from "react";
import { Menu, PrimaryNav, MenuLink, Hamburger } from "./Nav";
import { scrollToDiv, useOutsideAlerter } from "../utils";
import styled from "styled-components";

const Navbar = () => {
  const hamburgurIconRef = useRef(null);
  const hamburgurBlockRef = useRef(null);
  const [hamburger, setHamburger] = useState(false);

  // TODO:: Future refactor
  // hamburgurIconRef is icon Hamburgur
  // hamburgurBlockRef is block black Hamburgur
  useOutsideAlerter(hamburgurIconRef, hamburgurBlockRef, () => {
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
        <MenuLink onClick={() => scrollToDiv("home")}>Home</MenuLink>
        <MenuLink onClick={() => scrollToDiv("about")}>About</MenuLink>
        <MenuLink onClick={() => scrollToDiv("exp")}>Experience</MenuLink>
        <MenuLink onClick={() => scrollToDiv("skill")}>Skill</MenuLink>
      </Menu>
      <div
        style={{
          position: "relative",
          alignSelf: "center",
        }}
      >
        <Hamburger
          ref={hamburgurIconRef}
          className="snes-jp-logo"
          onClick={handleHamburgerClick}
        />
        <div
          ref={hamburgurBlockRef}
          className="nes-container is-rounded is-dark"
          style={{
            width: "280px",
            height: "250px",
            right: -16,
            top: 100,
            position: "absolute",
            zIndex: "900",
            display: hamburger ? "flex" : "none",
            opacity: hamburger ? 1 : 0,
            borderRadius: "10px",
            transition: "opacity 0.5s ease-in-out", // When the hamburger state is true, the opacity is set to 1, making the div visible with a fade-in effect. When the hamburger state is false, the opacity
          }}
        >
          <div className="lists">
            <NavItem onClick={() => scrollToDiv("home")}>Home</NavItem>
            <NavItem onClick={() => scrollToDiv("about")}>About</NavItem>
            <NavItem onClick={() => scrollToDiv("exp")}>Experience</NavItem>
            <NavItem onClick={() => scrollToDiv("skill")}>Skill</NavItem>
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
  );
};
export default Navbar;

const NavItem = styled.p`
  position: relative;
  &:hover {
    &:after {
      // Drill to after when stage hover(p) set display block to after(< Arrow)
      display: block;
    }
  }
  &:after {
    //Arrow
    display: none;
    position: absolute;
    bottom: 3px;
    right: -70px;
    content: "";
    order: 2;
    transform: rotate(180deg);
    width: 2px;
    height: 2px;
    color: white;
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px,
      4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px,
      10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px,
      2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
  }
`;
