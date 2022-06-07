import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {BASE_URL} from '../../setings/config';
import Layout from '../../components/layouts/home/Layout';
import Breadcrumb from "../../components/layouts/home/Breadcrumb";
import {Container, ContainerCategories} from '../../components/ui/home/category/category';
import CardCategory from "../../components/home/CardCategory";
import ImageCategories from '../../components/home/ImageCategories';

const Category = () => {
  const [category, setCategory] = useState({})
  const router = useRouter()
  const {query: {categoryId}} = router

  useEffect(() => {
    if (categoryId) {
      const getData = async () => {
        const url = `${BASE_URL}/categories/${categoryId}`;
        const response = await fetch(url);
        const data = await response.json();
        setCategory(data);
      };
      getData();
    }
  }, [categoryId]);

  if(Object.keys(category).length === 0) return null

  return (
    <Layout>
      <Breadcrumb router={router} />
      <Container>
        <h1>{category.name}</h1>
        <ContainerCategories>
          {category && category.products.map((elm) => <CardCategory product={elm} category={category.name} /> )}
        </ContainerCategories>
        <ImageCategories text={category.name} />
      </Container>
    </Layout>
  );
}
 
export default Category;