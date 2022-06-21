import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {BASE_URL} from '../../setings/config';
import Layout from '../../components/layouts/home/Layout';
import Breadcrumb from "../../components/layouts/home/Breadcrumb";
import {Container, ContainerCategories} from '../../components/ui/home/category/category';
import CardCategory from "../../components/home/CardCategory";
import CardSubCategory from "../../components/home/CardSubCategory";
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
        {category.sub_categories.length !== 0 && <h2>Sub Categorias</h2>}
        <ContainerCategories>
          {category.sub_categories && category.sub_categories.map((elm) => <CardSubCategory sub={elm}/>)}
        </ContainerCategories>
        <ContainerCategories>
          {category && category.products.map((elm) => <CardCategory product={elm} category={category.public_url} /> )}
        </ContainerCategories>
        <ImageCategories text={category.public_url} />
      </Container>
    </Layout>
  );
}
 
export default Category;