import Layout from '../../components/layouts/admin/Layout';
import { BoxMainIndex } from "../../components/ui/admin/common";
import useProducts from "../../hooks/useProducts";
import CardProduct from "../../components/admin/CardProduct";

const Admin = () => {
  const products = useProducts();

  return ( 
    <Layout>
      <BoxMainIndex>
        {products && products.map(elm => <CardProduct key={elm.id} product={elm} />)}
      </BoxMainIndex>
    </Layout>
   );
}
 
export default Admin;