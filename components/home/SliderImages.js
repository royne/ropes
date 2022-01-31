import styled from '@emotion/styled'

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
      <img src="/statics/img/slider/img2.jpg" /> 
    </Container>
   );
}
 
export default SliderImages;