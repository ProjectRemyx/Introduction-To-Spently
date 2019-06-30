import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "shards-react";

export default class AppNavbar extends React.Component {

  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md" className="top-nav">
        <NavbarBrand href="http://jingkcheng.com">Jing Cheng</NavbarBrand>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink active href=".">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#aboutSection">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skillsSection">
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#spentlySection">
                Spently
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    );
  }
}
