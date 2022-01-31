import {useState} from 'react';
import {BurgerBtn, Nav} from '../../ui/home/navbar';

const NavBar = () => {
  const [hideMenu, setHideMenu] = useState(false)
  const handleHide = () => setHideMenu(!hideMenu)

  return ( 
    <div onClick={handleHide}>
      <BurgerBtn>
        <div></div>
        <div></div>
        <div></div>
      </BurgerBtn>
      {hideMenu && 
        <Nav>
          <span>INICIO</span>
          <span>CATALOGO</span>
          <span>ACERCA DE</span>
          <span>PUNTOS DE VENTA</span>
          <span>CONTACTO</span>
        </Nav>
      }
    </div>
   );
}
 
export default NavBar;