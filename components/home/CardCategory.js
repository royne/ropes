import React from 'react';
import Link from 'next/link';
import {ContainerCard, CardImg} from '../ui/home/category/category';

const CardCategory = ({product, category}) => {
  return ( 
    <ContainerCard>
      <CardImg>
        <Link href={`/[categoryId]/[productId]`} as={`/${category}/${product.public_url}`} >
          <img src={product.image_url} /> 
        </Link>
      </CardImg>
      <span>{product.name}</span>
    </ContainerCard>
   );
}
 
export default CardCategory;