import { HeaderNav } from "../../ui/home/Layout";
import Link from 'next/link';

const Header = () => {
  return ( 
    <HeaderNav>
      <Link href="/">
        <img src="/statics/img/logoryl_red.svg" />
      </Link>
    </HeaderNav>
   );
}
 
export default Header;