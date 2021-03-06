import styled from '@emotion/styled'
import Link from 'next/link';

const WhatsappImg = styled.img`
  position: fixed;
  bottom: 3%;
  right: 3%;
  width: 50px;
  height: 50px;
  cursor: pointer;
   @media (max-width: 576px){
    bottom: 170px;
  }
`

const Whatsapp = () => {
  return (
    <a href="https://wa.me/573127437971/?text=Hola%20quiero%20solicitar%20mi%20cotización" target="_blank">
      <WhatsappImg src="/statics/img/whatsapp.png" />
    </a>
  );
}
 
export default Whatsapp;