import styled from "@emotion/styled";

export const HeaderNav = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 0 3%;
  box-sizing: border-box;
  color: #ffffff;
  & > img {
    height: 80px;
  }
`;

export const FooterConatiner = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 170px;
  background-color: var(--red);
  padding: 0 3%;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 14px;
  .box_footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .box_social {
    justify-content: center;
    margin: 10px 0;
    & > img {
      width: 40px;
      height: 40px;
      filter: invert(1);
    }
  }
  .btn_footer {
    padding: 7px 35px;
    background-color: var(--white);
    color: var(--red);
    margin-right: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    & > span {
      font-size: 14px !important;
    }
  }

  /* & > p {
    margin: 0 !important;
  } */
`;
