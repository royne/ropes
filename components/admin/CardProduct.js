import styled from '@emotion/styled'  

const Card = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0,0,0,0.5);
  margin-bottom: 10px;
  padding: 8px;
  &>img{
    width: 60px;
    height: 60px;
  }
`

const CardProduct = ({product}) => {
  return (
    <Card>
      <img src={product.photos[0]} />
      <div>
        <p>
          <b>Nombre:</b> {product.name}
        </p>
        <p>
          <b>Categoria:</b> {product.category.name}
        </p>
      </div>
    </Card>
  );
}
 
export default CardProduct;