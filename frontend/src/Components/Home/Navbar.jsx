import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

const Button = styled.button`
  padding: 10px 25px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #00d2ff 0,
    #1fa5ea 51%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
`;

const Navbar1 = () => {
  return (
    <div style={{ position: "fixed", zIndex: "5", width: "100%" }}>
      <Navbar
        bg="light"
        expand="lg"
        style={{ height: "80px", padding: "0 150px" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://htpshop.vn/public/userfiles/logo/htp-shop.webp"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="LOGIN"
                id="navbarScrollingDropdown"
                style={{ margin: "30px", fontWeight: "bold" }}
              >
                <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="CATEROGY"
                id="navbarScrollingDropdown"
                style={{ margin: "30px", fontWeight: "bold" }}
              >
                <NavDropdown.Item href="/Category1">Xe số</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Category2">Xe tay ga</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Category3">Xe côn tay</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Category4">Xe mô tô</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="PAGES"
                id="navbarScrollingDropdown"
                style={{ margin: "30px", fontWeight: "bold" }}
              >
                <NavDropdown.Item href="/">Home Default</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Checkout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">About</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Contacts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Standard Forms</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">FAQ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Privacy Policy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Terms & Conditions</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
