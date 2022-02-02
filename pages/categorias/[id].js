import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Layout from '../../components/layouts/home/Layout';
import {Container, ContainerCategories} from '../../components/ui/home/category/category';
import CardCategory from "../../components/home/CardCategory";

const Category = () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <Layout>
      <Container>
        <h1>{id}</h1>
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