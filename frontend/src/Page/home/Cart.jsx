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
  padding: 100px 150px;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  color: #1fa5ea;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 3px solid #3a7bd5;
  background: #fff;
  border-radius: 10px;
  color: #3a7bd5;
  transition: all 0.3s;
  &:hover {
    background: #3a7bd5;
    color: #fff;
  }
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  font-weight: 550;
  &:hover {
    color: #3a7bd5;
  }
`;

const Bottom = styled.div``;

const VinhKhang = styled.div`
  display: flex;
  padding: 30px;
`;

const Vinh = styled.div`
  flex: 3;
  margin-right: 30px;
`;

const Khang = styled.div`
  flex: 1;
`;

const Info = styled.div``;

const Product = styled.div``;

const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 1.5fr;
  align-items: center;
  position: sticky;
  top: 80px;
  height: 30px;
  background: #fff;
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 1.5fr;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 160px;
  cursor: pointer;
`;

const Details = styled.div`
  text-align: center;
`;

const ProductName = styled.div`
  color: #3a7bd5;
  font-weight: 700;
  font-size: 20px;
`;

const Hr = styled.hr`
  background-color: #3a7bd5;
`;

const CheckOut = styled.div`
  border-radius: 10px;
  border: 2px solid #3a7bd5;
  padding: 10px;
  position: sticky;
  top: 90px;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
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
    #1fa5ea 50%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
`;

const Text = styled.div`
  margin: 15px 0px;
  font-size: 16px;
  font-weight: 600;
`;

const FreeShip = styled.div`
  margin: 10px 0px;
  font-size: 12px;
  color: #808089;
`;

const Cart = () => {
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
        <Title>MY CART</Title>
        <Top>
          <a href="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </a>
          <TopTexts>
            <TopText>Shopping Bag ({cart.length})</TopText>
          </TopTexts>
        </Top>

        <VinhKhang>
          <Vinh>
            <ProductHeader className="fw-bold">
              <Details></Details>
              <Details>Product</Details>
              <Details>Price</Details>
              <Details>Quantity</Details>
              <Details>Total amount</Details>
            </ProductHeader>
            {cart?.map((product) => (
              <Bottom>
                <Info>
                  <Product>
                    <ProductDetail>
                      <Details className="text-center">
                        <Image src={product?.image} />
                      </Details>
                      <Details>
                        <ProductName>{product?.name}</ProductName>
                        <Details>
                          <b>Category:</b> {product.brand_id?.name}
                        </Details>
                      </Details>
                      <Details>{product?.price}</Details>
                      <Details className="px-3">
                        <IncDecCounter />
                      </Details>
                      <Details className="text-danger">
                        {product?.price}
                      </Details>
                    </ProductDetail>
                  </Product>
                  <Hr />
                </Info>
              </Bottom>
            ))}
          </Vinh>
          <Khang>
            <CheckOut>
              <Text>Thành tiền:</Text>
              <Hr />
              <Text>Tax:</Text>
              <Hr />
              <Text>Tổng tiền:</Text>
              <Hr />
              <FreeShip>* Miễn phí ship toàn quốc</FreeShip>
              <ContainerButton>
                <a href="/checkout">
                  <Button type="submit">Check Out</Button>
                </a>
              </ContainerButton>
            </CheckOut>
          </Khang>
        </VinhKhang>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
