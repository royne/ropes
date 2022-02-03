import Link from 'next/link';
import styled from "@emotion/styled";

const BoxSideNav = styled.div`
  width: 20%;
  height: 100vh;
  background: var(--gray2);
  .side_nav_menu {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .btn_sidenav {
    padding: 10px 30px;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--red);
    & > a {
      color: var(--white);
      cursor: pointer;
    }
  }
`;

const SideNav = () => {
  return (
    <BoxSideNav>
      <img src="/statics/img/logoryl_red.svg" />
      <div className="side_nav_menu">
        <ul>
          <li className="btn_sidenav">
            <Link href="/admin">Productos</Link>
          </li>
          <li className="btn_sidenav">
            <Link href="/admin/new-product">Nuevo Producto</Link>
          </li>
          <li className="btn_sidenav">
            <Link href="/admin/new-category">Nueva Categoria</Link>
          </li>
        </ul>
      </div>
    </BoxSideNav>
  );
}
 
export default SideNav;