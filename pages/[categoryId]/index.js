import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {BASE_URL} from '../../setings/config';
import Layout from '../../components/layouts/home/Layout';
import Breadcrumb from "../../components/layouts/home/Breadcrumb";
import {Container, ContainerCategories} from '../../components/ui/home/category/category';
import CardCategory from "../../components/home/CardCategory";

const Category = () => {
  const [category, setCategory] = useState({})
  const router = useRouter()
  const {categoryId} = router.query

  useEffect(() => {
    const getData = () => {
      const url = `${BASE_URL}/categories/${categoryId}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCategory(data));
    };
    getData();
  }, [categoryId]);

  if(Object.keys(category).length === 0) return null

  return (
    <Layout>
      <Breadcrumb router={router} />
      <Container>
        <h1>{category.name}</h1>
        <ContainerCategories>
          {category && category.products.map((elm) => <CardCategory product={elm} category={category.id} /> )}
        </ContainerCategories>
        <img src="/statics/img/categories/other.jpg" />
      </Container>
    </Layout>
  );
}
 
export default Category;