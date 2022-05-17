import styled from '@emotion/styled'

export const SecContact = styled.section`
  width: 100%;
  min-height: 68vh;
  display: flex;
  margin-top: 50px;
`

export const BoxContact = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  .box_info>h1{
    text-align: center;
    margin-bottom: 50px;
    font-family: Baskerville-bold;
  }
   @media (max-width: 576px){
    width: 80%;
  }
`


export const BoxCard = styled.article`
  text-align: center;
  margin-bottom: 50px;
  &>h3{
    color: var(--red);
  }
`
export const RowList = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`
export const Ico = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  &>img{
    width: 13px;
    height: 13px;
    filter: invert(1);
  }
`

export const SectionFormContact = styled.section`
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`
export const Form = styled.form`
  width: 50%;
  @media (max-width: 576px){
    width: 90%;
  }
`
export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const BtnSubmit = styled.input`
  border: none;
  padding: 10px 50px;
  background: var(--gray2);
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
`