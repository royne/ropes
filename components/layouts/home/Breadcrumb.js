import Link from 'next/link';
import styled from '@emotion/styled';

const BoxBreadcrumb = styled.div`
  font-weight: bold;
  &>a{
    color: var(--black);
  }
`

const Breadcrumb = ({router}) => {
  const { categoryId, productId } = router.query;
  return (
    <BoxBreadcrumb>
      <Link href="/">Home - </Link>
      <Link href="/[categoryId]" as={`/${categoryId}`}>
        {categoryId}
      </Link>
      {productId && (
        <Link href="/[categoryId]/[productId]" as={`/${categoryId}/${productId}`}>
          {` - ${productId} `}
        </Link>
      )}
    </BoxBreadcrumb>
  );
}
 
export default Breadcrumb;