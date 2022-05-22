
import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get1Product, get1ProductBySlug } from "../../redux/apiProduct";
import { addToCart } from "../../redux/cart";
import IncDecCounter from "../../Components/Home/IncDecCounter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);
  const cart = useSelector((state) => state.cart.carts?.allCart);
  //const length = cart.lenght()
  const selectedProduct = useSelector((state) => state.product.products?.allProduct)



  const { slug } = useParams()
  useEffect(() => {
    get1ProductBySlug(dispatch, slug)


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCart = (e) => {
    e.preventDefault()

    const element = document.getElementById('amount')
    const quantity = element?.value

    const newProduct = selectedProduct
    let tempProduct = Object.assign({ quantity }, newProduct);
    const cartTemp = [...cart]

    addToCart(tempProduct, cartTemp, dispatch, navigate)
  };




  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <a href='/'>


            <TopButton>CONTINUE SHOPPING</TopButton>
          </a>
          <TopTexts>
            <TopText>Shopping Bag ({cart.length})</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        {cart?.map((product) => (
          <Bottom>



            <Info>
              <Product>
                <ProductDetail>
                  <Image src={product?.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product?.name}
                    </ProductName>
                    <ProductId>
                      <b>Category:</b> {product.brand_id?.name}
                    </ProductId>
                    <ProductSize>
                      <b>Amount:</b> {product?.amount}
                    </ProductSize>
                    <ProductSize>
                      <b>Prize:</b> {product?.price}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>

                    <IncDecCounter />

                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
            </Info>

          </Bottom>
        ))}
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>8 VNĐ</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>0 VNĐ</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>0 VNĐ</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>8 VNĐ</SummaryItemPrice>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
