import React, { Fragment } from "react";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import SideNav from "./SideNav";

const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Main = styled.main`
  width: 80%;
  height: 100vh;
  overflow-y: auto;
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --red: #ef3829; /* rojo */
            --white: #ffffff;
            --grey1: #b4b2b2; /* gris claro*/
            --gray2: #908e8e; /* gris oscuro*/
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
        <SideNav />
        <Main>{props.children}</Main>
      </DivContainer>
    </Fragment>
  );
};

export default Layout;
