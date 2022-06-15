import Link from "next/link";
import { FooterConatiner } from "../../ui/home/Layout";

const Footer  = () => {
  return (
    <FooterConatiner>
      <p>Llámanos</p>
      <div className="box_footer">
        <span>+57 312 743 79 71</span>
        <span>+57 312 735 79 89</span>
        <span>+57 312 735 16 87</span>
      </div>
      <div className="box_footer box_social">
        <span className="btn_footer">Siguenos en</span>
        <Link href={"https://www.facebook.com/reatasylonas"}>
          <img src="/statics/img/facebook.png" style={{ cursor: "pointer" }}/>
        </Link>
        <Link href={"https://www.instagram.com/reatasylonasbogota"}>
          <img src="/statics/img/instagram.svg" style={{ cursor: "pointer", marginLeft:10, filter:"revert" }}/>
        </Link>
      </div>
      <p>© Todos los derechos reservados a Reatas & Lonas</p>
    </FooterConatiner>
  );
}
 
export default Footer;