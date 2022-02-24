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
  box-shadow: 0 5px 10px rgba(0,0,0,0.6);
  & > img {
    width: 300px;
    height: 300px;
    cursor: pointer;
  }
`;

export const ContainerMenuCategories = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5% 15px;
  width: 200px;
  height: 400px;
  transform: translateY(100%);
  background: var(--gray1);
  color: var(--black);
  display: flex;
  flex-direction: column;
  z-index: 10;
  &>a{
    color: var(--black);
  }
`;

export const BoxSub = styled.ul`
  display: ${(props) => props.hide ? "block" : "none" };
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(110%);
  width: 100px;
  padding: 0 10px;
  background: var(--gray1);
`