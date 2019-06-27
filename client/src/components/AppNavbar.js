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
        <NavbarBrand href="#">Jing Cheng</NavbarBrand>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink active href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Introduction
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Spently
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    );
  }
}
