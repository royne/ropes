import React, { Fragment } from "react";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Whatsapp from "./Whatsapp";

const DivContainer = styled.div`
  width: 100%;
  padding: 0 15%;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 300px);
  overflow: hidden;
  @media (max-width: 576px) {
    height: calc(100vh - 90px);
  }
`;

const Main = styled.main`
  width: 100%;
  padding-bottom: 0;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--red);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: var(--red);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--black);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-track {
    background: var(--red);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track:hover,
  ::-webkit-scrollbar-track:active {
    background: var(--red);
  }
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --red: #EF3829; /* rojo */
            --white: #ffffff;
            --gray1: #B4B2B2; /* gris claro*/
            --gray2: #908E8E; /* gris oscuro*/
            --gray3: #E1E0E2; /* gris claro2 */
            --black: #000000; /* negro */
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            background-color: var(--white);
            margin: 0;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "arial", serif;
            font-weight: 700;
          }
          h3 {
            font-family: "helvetica", sans-serif;
          }
          p {
            font-family: "helvetica", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
          img {
            max-width: 100%;
          }
        `}
      ></Global>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="content-language" content="es"></meta>
        <title key="title">Reatas y Lonas</title>
        <meta name="theme-color" content="#300047" />
      </Head>
      <DivContainer>
        <Header />
        <NavBar />
        <Content>
          <Main>{props.children}</Main>
        </Content>
        <Whatsapp />
        <Footer />
      </DivContainer>
    </Fragment>
  );
}
 
export default Layout;