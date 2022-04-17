import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 20px 10%;
  margin: 0 auto 30px auto;
  text-align: center;
`

export const ContainerProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`

export const BoxImg = styled.div`
  width: 45%;
  margin: 0 auto;
  position: relative;
  & > img {
    width: 300px;
    height: 300px;
  }
  .box_photo_mini{
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(110%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    &>img{
      width: 30px;
      height: 30px;
      margin-left: 20px;
      margin-bottom: 15px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.5);
      cursor: pointer;
    }
  }
`;

export const BoxInfo = styled.div`
  width: 45%;
  margin: 0 auto;
  text-align: left;
  .container_color{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
  } 
  .box_color {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
  }
`;
