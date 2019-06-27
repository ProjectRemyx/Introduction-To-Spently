import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "shards-react";

export default class NavExample extends React.Component {

  render() {
    return (
      <Navbar type="dark" theme="Dark" expand="md">
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
