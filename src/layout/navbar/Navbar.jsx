import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavbarText } from "react-bootstrap";

export const NavbarPage = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FoodiesYard</Navbar.Brand>
          <Nav className="me-auto">
            <NavbarText>
              {" "}
              <NavLink to={"/"}> Home</NavLink>
            </NavbarText>
            <NavbarText>
              {" "}
              <NavLink to={"/favorites"}>Favorites </NavLink>
            </NavbarText>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
