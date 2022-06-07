import Image from 'next/image'
import Layout from "../components/layouts/home/Layout";
import { Section, BoxSection, BoxRow } from '../components/ui/home/about'

export default function About() {
  return (
    <Layout>
      <Section><Image src="/statics/img/Maletas.jpg" layout='fill' objectFit='cover' /></Section>

      <Section>
        <BoxSection wt={'50%'}><Image src="/statics/img/reata.jpg" width={300} height={300} objectFit={'contain'} /></BoxSection>
        <BoxSection wt={'50%'}>
          <h2>¿Quiénes Somos?</h2>
          <p>Somos una empresa que comercializa insumos para la confección y algunos productod finales para el hogar, desde 1998</p>
        </BoxSection>
      </Section>

      <Section>
        <BoxSection wt={'70%'} bg={'#D7D6D8'}>
          <BoxRow>
            <div className='text-box'>
              <h3>Honestidad</h3>
              <p>Nuestra intencion va mucho mas alla de vender</p>
            </div>
            <div className='text-box'>
              <h3>Familiaridad</h3>
              <p>Procuramos tener un ambiente calido y cercano</p>
            </div>
          </BoxRow>
          <div><img src="/statics/img/team.svg" style={{width:100}}/></div>
          <BoxRow>
            <div className='text-box'>
              <h3>Cumplimiento</h3>
              <p>Nos esforzamos por llevar acabo todo a tiempo</p>
            </div>
            <div className='text-box'>
              <h3>Lealtad</h3>
              <p>Sabemos que es indispensable poseerla al ser parte del mercado</p>
            </div>
          </BoxRow>
        </BoxSection>

        <BoxSection wt={'30%'}><Image src="/statics/img/Chaqueta.jpg" layout='fill' objectFit='cover'/></BoxSection>
      </Section>

    </Layout>
  )
}
