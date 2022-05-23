import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get1Product, get1ProductBySlug } from "../../redux/apiProduct";
import { addToCart } from "../../redux/cart";
import { Accordion, Form, Button } from "react-bootstrap";
import "./CheckOut.css";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 150px;
`;

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);
  const cart = useSelector((state) => state.cart.carts?.allCart);
  //const length = cart.lenght()
  const selectedProduct = useSelector(
    (state) => state.product.products?.allProduct
  );

  const { slug } = useParams();
  useEffect(() => {
    get1ProductBySlug(dispatch, slug);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCart = (e) => {
    e.preventDefault();

    const element = document.getElementById("amount");
    const quantity = element?.value;

    const newProduct = selectedProduct;
    let tempProduct = Object.assign({ quantity }, newProduct);
    const cartTemp = [...cart];

    addToCart(tempProduct, cartTemp, dispatch, navigate);
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text-danger">
              Step 1: Checkout Information
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Name
                  </Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Phone
                  </Form.Label>
                  <Form.Control required type="number" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Email address
                  </Form.Label>
                  <Form.Control required type="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Address
                  </Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Step 2: Payment Method</Accordion.Header>
            <Accordion.Body>
              <Form>
                <h6>Payment Method</h6>
                <Form.Select>
                  <option>-- Please select --</option>
                  <option value="1">CashOnDelivery</option>
                  <option value="2">ATM/VISA</option>
                  <option value="3">MOMO</option>
                </Form.Select>

                <Form.Group className="mb-3">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Step 3: Confirm Order</Accordion.Header>
            <Accordion.Body>
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CheckOut;
