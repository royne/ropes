import Image from 'next/image'
import CardContact from '../components/home/CardContact';
import { FormContact } from '../components/home/FormContact';
import Layout from "../components/layouts/home/Layout";
import { SecContact, BoxContact } from '../components/ui/home/contact'
import { LISTCONTACT } from '../data/contact'

export default function Contac() {
  return (
    <Layout>
      <SecContact>
        <BoxContact>
          <div className='box_info'>
            <h1>CONTACTO</h1>
            {LISTCONTACT.map(elm => <CardContact key={elm.name} data={elm} />)}
          </div>
        </BoxContact>
        <BoxContact>
          <Image src={'/statics/img/sombrillas.png'} layout={"fill"} objectFit={'cover'} />
        </BoxContact>
      </SecContact>
      <FormContact />
    </Layout>
  );
}
