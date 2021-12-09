import React, { useState } from "react";
import "./chessApp.css";
import { state } from "./store/state";
import { Link } from "react-router-dom";
import {
  Button,
  NavbarText,
  Collapse,
  NavItem,
  NavItemProps,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
} from "reactstrap";

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <Navbar color="light" expand dark light>
            <NavbarBrand> CHESS </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <Link to="/game">
                    <NavLink>NEW GAME</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/">
                    <NavLink>HOME</NavLink>
                  </Link>
                </NavItem>
              </Nav>
              <NavbarText>
                "Chess is the struggle against the error"{" "}
              </NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
};
