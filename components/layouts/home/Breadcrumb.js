import Link from 'next/link';
import styled from '@emotion/styled';

const BoxBreadcrumb = styled.div`
  font-weight: bold;
  &>a{
    font-family: Baskerville-bold;
    color: var(--black);
  }
`

const Breadcrumb = ({router}) => {
  const { categoryId, productId } = router.query;
  const buildName = text => capitalize(text.replace(/-/," "))
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  return (
    <BoxBreadcrumb>
      <Link href="/">Home - </Link>
      <Link href="/[categoryId]" as={`/${categoryId}`}>
        {buildName(categoryId)}
      </Link>
      {productId && (
        <Link href="/[categoryId]/[productId]" as={`/${categoryId}/${productId}`}>
          {` - ${buildName(productId)} `}
        </Link>
      )}
    </BoxBreadcrumb>
  );
}
 
export default Breadcrumb;