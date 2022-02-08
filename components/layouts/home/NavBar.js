import {useState, useRef} from 'react';
import {BurgerBtn, Nav} from '../../ui/home/navbar';
import {css} from '@emotion/react';
import MenuCategories from './MenuCategories';
import Link from 'next/link';

const NavBar = () => {
  const [hideMenu, setHideMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)

  const handleHide = () => setHideMenu(!hideMenu)
  const handleCategories = () => setActiveMenu(!activeMenu);

  return (
    <div>
      <BurgerBtn onClick={handleHide}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerBtn>
      {hideMenu && (
        <Nav>
          <Link href="/">
            <span>INICIO</span>
          </Link>
          <span
            css={css`
              position: relative;
              cursor: pointer;
            `}
            onClick={handleCategories}
          >
            CATALOGO
            {activeMenu && <MenuCategories activeMenu={activeMenu} />}
          </span>
          <Link href="/acerca-de">
            <span>ACERCA DE</span>
          </Link>
          <Link href="/puntos-de-venta">
            <span>PUNTOS DE VENTA</span>
          </Link>
          <Link href="/contacto">
            <span>CONTACTO</span>
          </Link>
        </Nav>
      )}
    </div>
  );
}
 
export default NavBar;