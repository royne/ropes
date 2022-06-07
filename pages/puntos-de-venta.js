import Layout from "../components/layouts/home/Layout";
import { SectionShops, BoxShops, BoxInfoShops, ShopInfo, SectionTime, BoxTime, InfoTime } from '../components/ui/home/shops'

export default function Shops() {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", fontWeight:"bold", fontSize:42 }}>PUNTOS DE VENTA</h1>
      <SectionShops>
        <BoxShops>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9451138744043!2d-74.07892328470642!3d4.603851196655431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a09b7482e3%3A0xab599cc380ab057a!2sCl.%2015%20%2310-90%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1652242590345!5m2!1ses-419!2sco" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <BoxInfoShops>
            <img src="/statics/img/position.png" />
            <h2>Local Calle 15</h2>
            <ShopInfo>
              <span>Bogotá</span>
              <span>Calle 15 # 10 - 90</span>
              <span>Carrera 12 # 15 - 16</span>
              <span>Local con doble entrada</span>
            </ShopInfo>
          </BoxInfoShops>
        </BoxShops>
      </SectionShops>

      <SectionShops>
        <div className="hide_box">.</div>
        <BoxShops className="second_box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15908.048805946402!2d-74.09380311465581!3d4.59183279662493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalle%2014%20%2310-77%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1652242705488!5m2!1ses-419!2sco" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <BoxInfoShops>
            <img src="/statics/img/position.png" />
            <h2>Local Calle 14 </h2>
            <ShopInfo>
              <span>Bogotá</span>
              <span>Calle 14 # 10 - 77</span>
            </ShopInfo>
          </BoxInfoShops>
        </BoxShops>
      </SectionShops>

      <SectionShops>
        <BoxShops>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.950405332745!2d-74.07978108470638!3d4.602904396656123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f990a0dce2fe3%3A0x9d335e0e6b346146!2sCra.%2012%20%23%2313-70%2C%20Bogot%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1652242782246!5m2!1ses-419!2sco" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <BoxInfoShops>
            <img src="/statics/img/position.png" />
            <h2>Local Carrera 12</h2>
            <ShopInfo>
              <span>Bogotá</span>
              <span>Carrera 12 # 13 - 70</span>
            </ShopInfo>
          </BoxInfoShops>
        </BoxShops>
      </SectionShops>

      <SectionTime>
        <h2>HORARIO DE ATENCIÓN</h2>
        <BoxTime>
          <InfoTime>
            <p className="text_primary">LUNES A VIERNES</p>
            <p className="text_second">8:30 AM - 6:00 PM</p>
            <p className="text_primary">SÁBADOS</p>
            <p className="text_second">8:30 AM - 5:00 PM</p>
            <p className="text_primary">NO HAY SERVICIO NI DOMINGOS NI FESTIVOS</p>
          </InfoTime>
        </BoxTime>
      </SectionTime>

    </Layout>
  );
}
