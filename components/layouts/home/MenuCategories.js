import Link from 'next/link';
import {useState, useEffect} from 'react';
import { BASE_URL } from "../../../setings/config";
import { ContainerMenuCategories } from "../../ui/home/category/category";

const MenuCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = () => {
      const url = `${BASE_URL}/categories`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCategories(data));
    } 
    getData()
  }, [])

  console.log(categories)

  return (
    <ContainerMenuCategories>
      {categories &&
        categories.map((category) => (
          <Link href={`/[categoryId]`} as={`/${category.name}`}>
            {category.name}
          </Link>
        ))}
    </ContainerMenuCategories>
  );
}
 
export default MenuCategories;