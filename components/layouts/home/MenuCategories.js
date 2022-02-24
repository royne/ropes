import React from 'react';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { BASE_URL } from "../../../setings/config";
import { ContainerMenuCategories, BoxSub } from "../../ui/home/category/category";

const MenuCategories = () => {
  const [categories, setCategories] = useState([])
  const [showSub, setShowSub] = useState(false);
  const [idSub, setIdSub] = useState();

  useEffect(() => {
    const getData = () => {
      const url = `${BASE_URL}/categories?parents=true`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCategories(data));
    } 
    getData()
  }, [])
  const handleHideSub = (e) => {
    setIdSub(parseInt(e.target.getAttribute("id")));
    setShowSub(!showSub);
  }
  console.log(categories)

  return (
    <ContainerMenuCategories>
      {categories &&
        categories.map((category) => {
          return (
            <div style={{ position: "relative" }}>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <Link
                  href={`/[categoryId]`}
                  as={`/${category.name}`}
                  key={category.id}
                >
                  <span>{category.name}</span>
                </Link>
                {category.sub_categories.length !== 0 && (
                  <small onClick={handleHideSub} onMouseEnter={handleHideSub} id={category.id}>
                    >>
                  </small>
                )}
              </div>
              {idSub === category.id && <BoxSub hide={showSub} onMouseLeave={handleHideSub} id={category.id}>
                {category.sub_categories.map((sub, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/[categoryId]`} as={`/${sub}`} key={sub}>
                        <small>{sub}</small>
                      </Link>
                    </li>
                  );
                })}
              </BoxSub>}
            </div>
          );        
      })}
    </ContainerMenuCategories>
  );
}
 
export default MenuCategories;