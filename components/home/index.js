import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layouts/home/Layout";
import Breadcrumb from "../../../components/layouts/home/Breadcrumb";
import {Container, ContainerProduct, BoxImg, BoxInfo} from '../../../components/ui/home/product';

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <Layout>
      <Breadcrumb router={router} />
      <Container>
        <h1>{productId}</h1>
        <ContainerProduct>
          <BoxImg>
            <img src="/statics/img/product.jpg" />
            <div>
              <img src="" />
            </div>
          </BoxImg>
          <BoxInfo>
            <h3>Nombre Producto</h3>
            <p>
              Usos: is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and.
            </p>
            <p>Ancho: 150</p>
            <p>Colores: </p>
            <div className="container_color">
              COLORES:
              <div className="box_color"></div>
              <div className="box_color"></div>
            </div>
          </BoxInfo>
        </ContainerProduct>
      </Container>
    </Layout>
  );
};

export default Product;
