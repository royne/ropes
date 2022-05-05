import styled from '@emotion/styled'  
import Link from 'next/link';
import { BASE_URL } from '../../setings/config';

const Card = styled.div`
  width: 300px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.5);
  margin-bottom: 10px;
  padding: 8px;
  .card_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>img{
      width: 60px;
      height: 60px;
    }
  }
  .card_btns{
    display: flex;
    width: 100%;
    justify-content: space-between;
    .btn{
      padding: 5px 10px;
      color: var(--white);
      border-radius: 5px;
      cursor: pointer;
    }
    .btn-destroy{
      background: var(--red);
    }
    .btn-edit{
      background: var(--gray2);
    }
  }
`

const CardProduct = ({product}) => {

  const destroy = async () =>{
    const result = confirm("Esta seguro de esta acción?");
    if (result) {
      await fetch(`${BASE_URL}/products/${product.id}`, {method: "DELETE"})
      alert("producto eliminado")
    }
  }

  if (Object.keys(product).length === 0) return null

  return (
    <Card>
      <div className='card_box'>
        <img src={product.photos[0]} />
        <div>
          <p>
            <b>Nombre:</b> {product.name}
          </p>
          <p>
            <b>Categoria:</b> {product.category.name}
          </p>
        </div>
      </div>

      <div className='card_btns'>
        <Link href={`/admin/edit-product?id=${product.id}`}><span className="btn btn-edit">Editar</span></Link>
        <span className="btn btn-destroy" onClick={destroy}>Eliminar</span>
      </div>
    </Card>
  );
}
 
export default CardProduct;