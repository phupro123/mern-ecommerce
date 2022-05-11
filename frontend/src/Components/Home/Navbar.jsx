import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

const Navbar1 = () => {
  return (
    <div
      className="containerNav"
      style={{ position: "fixed", zIndex: "5", width: "100%" }}
    >
      <Navbar bg="light" expand="lg" style={{ height: "80px" }}>
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
              <NavDropdown title="LOGIN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="CATEROGY" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">Xe số</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Xe tay ga</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Xe côn tay</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Xe mô tô</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PAGES" id="navbarScrollingDropdown">
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
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    // <Container>
    //   <Wrapper>
    //     <Left>
    //       <Language>EN</Language>
    //       <SearchContainer>
    //         <Input placeholder="Search" />
    //         <Input placeholder="Khang" />
    //         <Search style={{ color: "grey", fontSize: 16 }} />
    //       </SearchContainer>
    //     </Left>
    //     <Center>
    //       <Logo>VINTAGE.</Logo>
    //     </Center>
    //     <Right>
    //       <Link to="/register">
    //         <MenuItem>Register</MenuItem>
    //       </Link>

    //       <Link to="/login">
    //         <MenuItem>Sign in</MenuItem>
    //       </Link>
    //       <MenuItem>
    //         <Badge badgeContent={4} color="primary">
    //           <ShoppingCartOutlined color="action" />
    //         </Badge>
    //       </MenuItem>
    //     </Right>
    //   </Wrapper>
    // </Container>
  );
};

export default Navbar1;
