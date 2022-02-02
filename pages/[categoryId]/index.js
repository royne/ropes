import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/layouts/home/Layout';
import Breadcrumb from "../../components/layouts/home/Breadcrumb";
import {Container, ContainerCategories} from '../../components/ui/home/category/category';
import CardCategory from "../../components/home/CardCategory";

const Category = () => {
  const router = useRouter()
  const {categoryId} = router.query

  return (
    <Layout>
      <Breadcrumb router={router} />
      <Container>
        <h1>{categoryId}</h1>
        <ContainerCategories>
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </ContainerCategories>
        <img src="/statics/img/categories/other.jpg" />
      </Container>
    </Layout>
  );
}
 
export default Category;