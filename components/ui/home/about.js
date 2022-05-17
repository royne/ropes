import styled from '@emotion/styled'

export const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  position: relative;
  display: flex;
`

export const BoxSection = styled.div`
  width: ${(props) => props.wt ? props.wt : ''};
  background-color: ${(props) => props.bg ? props.bg : ''};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`
export const BoxRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  .text-box{
    width: 40%;
    &>h3, p{
      text-align: center;
    }
  }
`