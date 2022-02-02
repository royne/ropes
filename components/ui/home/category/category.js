import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

export const ContainerCategories = styled.section`
  width: 100%;
  height: auto;
  padding: 20px 10%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ContainerCard = styled.div`
  width: 300px;
  height: 310px;
  margin-bottom: 50px;
  & > span {
    display: flex;
    text-transform: capitalize;
  }
`;
export const CardImg = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  background: var(--red);
  & > img {
    max-width: 100%;
  }
`;