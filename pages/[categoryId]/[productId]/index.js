import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {BASE_URL} from '../../../setings/config';
import {css} from '@emotion/react';
import Layout from "../../../components/layouts/home/Layout";
import Breadcrumb from "../../../components/layouts/home/Breadcrumb";
import {Container, ContainerProduct, BoxImg, BoxInfo} from '../../../components/ui/home/product';

const Product = () => {
  const [product, setProduct] = useState({})
  const [activeImage, setActiveImage] = useState()
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() =>{
    const getData = () => {
      const url = `${BASE_URL}/products/${productId}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data)
          setActiveImage(data.photos[0])
        });
    } 
    getData()
  },[])

  if(Object.keys(product).length === 0) return null

  const handleActiveImage = (e) => setActiveImage(product.photos[e.target.id])

  return (
    <Layout>
      <Breadcrumb router={router} />
      <Container>
        <h1>{product.name}</h1>
        <ContainerProduct>
          <BoxImg>
            <img src={`${activeImage}`} alt="producto" />
            <div className="box_photo_mini">
              {product && product.photos.map((elm,i) => (
                <img src={elm} alt="producto" id={i} key={i} onClick={handleActiveImage} />
              ))}
            </div>
          </BoxImg>
          <BoxInfo>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><b>Ancho:</b> {product.dimension}</p>
            <p>
              <b>Colores:</b>
              {product && product.colors.map((elm) => (
                <span key={elm.id}> {elm.name}, </span>
              ))}
            </p>
            <div className="container_color">
              <b>COLORES:</b>
              {product && product.colors.map((elm) => (
                <div className="box_color" css={css`background: ${elm.code};`} key={elm.id}></div>
              ))}
            </div>
          </BoxInfo>
        </ContainerProduct>
      </Container>
    </Layout>
  );
};

export default Product;
