import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get1Product, get1ProductBySlug } from "../../redux/apiProduct";
import { addToCart, removeAllFormCart } from "../../redux/cart";
import { Accordion, Form, Button } from "react-bootstrap";
import "./CheckOut.css";
import { isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";
import { createOder } from "../../redux/apiOder";
import {  removeFormCart } from "../../redux/cart";
import IncDecCounterCart from "../../Components/Home/IncDecCounterCart";
import { createOderDetail } from "../../redux/OderDetail";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 150px;
`;

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const user = useSelector((state) => state.auth.login?.currentUser);
  const cart = useSelector((state) => state.cart.carts?.allCart);
  
  //Oder
  const [id,setId]= useState('')
  const [username, setUsername] = useState(user?.fullname);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState("");
  const [receiver, setReceiver] = useState("");
  const [payment, setPayment] = useState('1')
  const today = new Date().toISOString()

  //OderDetail
  const [id2,setId2] = useState('')
  const length = cart?.length 
  let cartTemp = [...cart];
  useEffect(() => {
    if(user===null)
    {
      navigate('/')
    }
    getLengthOder()
    getLenthOderDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLengthOder=async() =>{
    
    try{
        
        const res= await axios.get("/oder/getLength")
        setId(res.data)

    }catch(err){
      return err
    }
 }

  const getLenthOderDetail =async() =>{
    try{
        
        const res= await axios.get("/oderdetail/getLength")
        setId2(res.data)
        
    }catch(err){
      return err
    }
  }
  const handleCheckout= (()=>{
    let i=0
    let tempId = id+1 
    let temp = id2+1
    for(i;i<length;i++)
    {
      const newOder ={
          _id: tempId,
          customer_id: user?._id,
          buy_date: today,
          seller_id:cart[i]?.seller_id,
          phone: phone,
          address:address,
          receiver:receiver,
          pay_id:payment,
      }
     createOder(newOder,dispatch)
     
     
      const newOderDetail ={
        _id:temp,
        oder_id:id+1,
        product_id: cart[i]?._id,
        unit_price: cart[i]?.price,
        quantity: cart[i]?.quantity,
      }
      createOderDetail(newOderDetail)
      temp+=1
      tempId+=1
     }
     removeAllFormCart(cartTemp,dispatch)
     const slug = user?.slug
     navigate('/myorder/'+{slug})
  })
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
                  <Form.Control required type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Phone
                  </Form.Label>
                  <Form.Control required type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Email address
                  </Form.Label>
                  <Form.Control required type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Address
                  </Form.Label>
                  <Form.Control required type="text" onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Receiver
                  </Form.Label>
                  <Form.Control required type="text" onChange={(e) => setReceiver(e.target.value)} />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Step 2: Payment Method</Accordion.Header>
            <Accordion.Body>
              <Form>
              <span className="text-danger">*</span> Payment Method
                <Form.Select onChange={(e) => setPayment(e.target.value)}>
                  <option>-- Please select --</option>
                  <option value="1">CashOnDelivery</option>
                  <option value="2">ATM/VISA</option>
                  <option value="3">MOMO</option>
                </Form.Select>

                <Form.Group className="mb-3">
                  <Form.Label>Note</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Step 3: Confirm Order</Accordion.Header>
            <Accordion.Body>

             
             
                
             

              <Button variant="primary" type="submit" onClick={handleCheckout}>
              Confirm Order
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
