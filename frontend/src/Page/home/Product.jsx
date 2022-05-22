import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import Newsletter from "../../Components/Home/Newsletter";
import IncDecCounter from "../../Components/Home/IncDecCounter";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get1Product, get1ProductBySlug } from "../../redux/apiProduct";
import { addToCart } from "../../redux/cart";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  position: relative;
  top: 80px;
  left: 0;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
`;

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
  margin-top: 20px;
`;


const Product =  () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.auth.login?.currentUser);
  const cart = useSelector((state) => state.cart.carts?.allCart);
  const selectedProduct = useSelector( (state) => state.product.products?.allProduct  )

  const { slug } = useParams()
  useEffect(() => {
    get1ProductBySlug( dispatch, slug)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCart = (e) => {
    e.preventDefault()

    const element = document.getElementById('amount')
    const quantity = element?.value
  
    const newProduct= selectedProduct
    let tempProduct = Object.assign({quantity}, newProduct);
    let cartTemp = [...cart] 
    
     addToCart(tempProduct,cartTemp,dispatch,navigate)  
  };

  return (
 
    <Container>
      <Navbar />
         <Wrapper>
        <ImgContainer>
          <Image src={selectedProduct?.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{selectedProduct?.name}</Title>
          <Desc>{selectedProduct?.description}</Desc>
          <Price>{selectedProduct?.price}</Price>
          <AddContainer>
            <IncDecCounter />
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
     

    
      <Newsletter />
      <Footer />
    </Container>
   
  );
};


export default Product;
