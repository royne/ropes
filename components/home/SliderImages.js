import styled from '@emotion/styled'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    max-width: 100%;
  }
`

const SliderImages = () => {
  return (
    <Container>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src="/statics/img/slider/img1.jpg" />
        </div>
        <div>
          <img src="/statics/img/slider/img2.jpg" />
        </div>
        <div>
          <img src="/statics/img/slider/img3.jpg" />
        </div>
      </Carousel>
    </Container>
  );
}
 
export default SliderImages;