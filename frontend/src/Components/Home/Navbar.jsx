import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/apiRequest";
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
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken);
  };

  const cart = useSelector((state) => state.cart.carts?.allCart);
  return (
    // {`ROLE: ${user?.role === "2" ? "seller" : "customer"}`}
    <div style={{ position: "fixed", zIndex: "10", width: "100%" }}>
      <Navbar
        bg="light"
        expand="lg"
        style={{ height: "80px", padding: "0 150px" }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
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
              {user ? (
                <NavDropdown
                  title={`Hi, ${user?.fullname}`}
                  id="navbarScrollingDropdown"
                  style={{ margin: "30px", fontWeight: "bold" }}
                >
                  <NavDropdown.Item href={`/myprofile/${user?.slug}`}>
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={`/myorder/${user?.slug}`}>
                    My Orders
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Link
                    to="/logout"
                    onClick={handleLogout}
                    style={{ textDecoration: "none" }}
                  >
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title="LOGIN"
                  id="navbarScrollingDropdown"
                  style={{ margin: "30px", fontWeight: "bold" }}
                >
                  <NavDropdown.Item href={`/myprofile/${user?.slug}`}>
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={`/myorder/${user?.slug}`}>
                    My Orders
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                </NavDropdown>
              )}

              <NavDropdown
                title="CATEROGY"
                id="navbarScrollingDropdown"
                style={{ margin: "30px", fontWeight: "bold" }}
              >
                <NavDropdown.Item href="/category/xe-so">
                  Xe số
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/xe-tay-ga">
                  Xe tay ga
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/xe-con-tay">
                  Xe côn tay
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/xe-mo-to">
                  Xe mô tô
                </NavDropdown.Item>
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
            <a
              href="/cart"
              style={{
                textDecoration: "none",
                fontSize: "12px",
                position: "relative",
              }}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ marginLeft: "30px", width: "30px", height: "30px" }}
              />
              Cart
              <span
                style={{
                  color: "#3a7bd5",
                  background: "#fff",
                  border: "1px solid #3a7bd5",
                  fontWeight: "bold",
                  height: "16px",
                  right: "15px",
                  top: "-2px",
                  borderRadius: "50%",
                  display: "inline-block",
                  lineHeight: "16px",
                  position: "absolute",
                  padding: "0px 4px",
                }}
              >
                {cart?.length}
              </span>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
