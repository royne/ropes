import styled from '@emotion/styled';

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--red);
  transition-duration: 4s;
  transition-delay: 2s;
  & > span {
    font-size: 16px;
    cursor: pointer;
  }
  @media (max-width: 570px){
    height: auto;
    justify-content: center;
    flex-direction: column;
    & > span {
      margin-bottom: 5px;
    }
  }
`;

export const BurgerBtn = styled.div`
  width: 30px;
  height: 40px;
  cursor: pointer;
  & > div {
    width: 25px;
    height: 4px;
    margin-bottom: 3px;
    background: var(--red);
  }
  @media (max-width: 576px){
    padding: 0 2%;
  }
`;