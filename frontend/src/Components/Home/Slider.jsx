import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { Carousel } from "react-bootstrap";

const Image = styled.img`
  height: 750px;
  object-fit: cover;
  transition: all 1s;
  object-position: center;
`;

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1881106.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CÙNG VỚI</h3>
          <p>HTP Shop</p>
          <h3>CHINH PHỤC TƯƠNG LAI</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://i.pinimg.com/originals/29/70/e7/2970e7b6c91e63e406b626aa95c31671.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BẮT ĐẦU HÀNH TRÌNH NÀO</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="http://1.bp.blogspot.com/-dybm_gQ_UWM/VL6sDe0XcpI/AAAAAAAAVGc/P__ELsy3hUM/s1600/hinh-anh-xe-moto-7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>KHÔNG GIỚI HẠN</h3>
          <p>Sống hết mình</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://img4.thuthuatphanmem.vn/uploads/2020/04/28/hinh-nen-3d-xe-moto_025907885.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cháy hết mình</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
