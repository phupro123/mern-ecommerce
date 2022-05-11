import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCategory1 } from "../../redux/apiProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ContainerItem = styled.div`
  padding: 20px;
  width: 20%;
  height: auto;
`;

const Name = styled.h5`
  font-size: 16px;
  text-align: right;
`;

const Price = styled.h5`
  font-size: 16px;
  text-align: right;
  color: #f55f8d;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CategoryProducts1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);
  const productList = useSelector(
    (state) => state.product.products?.allProduct
  );

  const { id } = useParams();

  //Load trang
  useEffect(() => {
    getCategory1(dispatch);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      {productList?.map((product) => (
        <ContainerItem>
          <Link to={`/product/${product?._id}`}>
            <Image src={product?.image} />
          </Link>
          <Name>{product?.name}</Name>
          <Price>{product?.price}</Price>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default CategoryProducts1;