import styled from '@emotion/styled'

export const SectionShops = styled.section`
  width: 100%;
  margin: 30px 0;
  color: var(--white);
  font-weight: bold;
  .second_box{
    background: #BF3F2C;
  }
  display: flex;
  .hide_box{
    width: 30%;
  }
`
export const BoxShops = styled.article`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  background: var(--gray1);
  &>iframe{
    width: 400px;
    height: 400px;
  }
`
export const BoxInfoShops = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>img{
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  &>h2{
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
  }

`
export const ShopInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: 30px;
  font-size: 22px;
`

export const SectionTime = styled.section`
  width: 100%;
  text-align: center;
  padding: 50px 0;
   &>h2{
    font-size: 42px;
    font-weight: bold;
    margin: 50px 0;
  }
`
export const BoxTime = styled.article`
  width: 100%;
  text-align: center;
  background: #BF3F2C;
  color: var(--white);
  display: flex;
  justify-content: center;
  padding: 50px 0 ;
`
export const InfoTime = styled.div`
  width: 90%;
  text-align: center;
  border: 5px solid white;
  padding: 50px 0 ;
  .text_primary{
    font-size: 36px;
    font-weight: bold;
  }
  .text_second{
    font-size: 22px;
  }
`