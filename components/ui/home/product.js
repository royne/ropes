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
  & > img {
    max-width: 100%;
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
  } 
  .box_color {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-left: 5px;
    background: var(--red);
  }
`;
