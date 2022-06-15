import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useMenu} from '../../../context/categoriesContext'
import { ContainerMenuCategories, BoxSub } from "../../ui/home/category/category";

const MenuCategories = () => {
  const [showSub, setShowSub] = useState(false);
  const [idSub, setIdSub] = useState();
  const categories = useMenu()

  const handleHideSub = (e) => {
    setIdSub(parseInt(e.target.getAttribute("id")));
    setShowSub(!showSub);
  }

  const hoverElement = e => e.target.style.color = "red";
  const hideHoveElement = e => e.target.style.color = "black";

  return (
    <ContainerMenuCategories>
      {categories ?
        categories.map((category) => {
          return (
            <div style={{ position: "relative" }}>
              <div style={{justifyContent:"left" ,display:"flex",paddingLeft:"30px"}} onMouseOver={hoverElement} onMouseOut={hideHoveElement}>
                <Link
                  href={`/[categoryId]`}
                  as={`/${category.public_url}`}
                  key={category.id}
                >
                  <span style={{paddingRight:10}} >{category.name}</span>
                </Link>
                {category.sub_categories.length !== 0 && (
                  <img src="/statics/img/red.svg" style={{ width: 10 }} onClick={handleHideSub} onMouseEnter={handleHideSub} id={category.id}/>
                )}
              </div>
              {idSub === category.id && <BoxSub hide={showSub} onMouseLeave={handleHideSub} id={category.id} onMouseOver={hoverElement} onMouseOut={hideHoveElement}>
                {category.sub_categories.map((sub, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/[categoryId]`} as={`/${sub.public_url}`} key={sub}>
                        <small>{sub.name}</small>
                      </Link>
                    </li>
                  );
                })}
              </BoxSub>}
            </div>
          );        
      })
      :
      <p>Cargando...</p>
      }
    </ContainerMenuCategories>
  );
}
 
export default MenuCategories;