import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CategoryItem.css";

const Container = styled.div`
  padding: 0 150px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function CategoryItem() {
  return (
    <Container>
      <OwlCarousel
        className="owl-theme"
        items="5"
        autoplay
        loop
        nav=""
        dots="none"
        margin="10"
      >
        <div>
          <Image
            className="img"
            src={
              "https://xeotogiadinh.com/wp-content/uploads/2017/08/Honda-logo-Merah-kiri-e1516676510251.jpg"
            }
          />
        </div>
        <div>
          <Image
            className="img"
            src={
              "https://shivangan.com/admin/uploads/our_client_image/1614165406.jpg"
            }
          />
        </div>
        <div>
          <Image
            className="img"
            src={
              "https://dnssolution.vn/wp-content/uploads/2020/07/logo-Piaggio.png"
            }
          />
        </div>
        <div>
          <Image
            className="img"
            src={
              "https://news.webike.vn/wp-content/uploads/2017/07/SYM-logo-4CCF4DA2EA-seeklogo.com_.png"
            }
          />
        </div>
        <div>
          <Image
            className="img"
            src={
              "https://logoxe.net/wp-content/uploads/2021/07/logo-xe-suzuki-1200x900.jpg"
            }
          />
        </div>
      </OwlCarousel>
    </Container>
  );
}

export default CategoryItem;
