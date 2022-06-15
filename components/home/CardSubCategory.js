import Link from 'next/link'
import styled from '@emotion/styled'

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 100px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.5);
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  &>h3{
    margin: 0;
    text-transform: uppercase;
  }
`

const CardSubCategory = ({sub}) => {
  return (
    <Link href={`/[categoryId]`} as={`/${sub.public_url}`}>
      <Box><h3>{sub.name}</h3></Box>
    </Link>
  )
}

export default CardSubCategory