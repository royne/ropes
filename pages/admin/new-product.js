import Layout from '../../components/layouts/admin/Layout';
import { BoxMain } from "../../components/ui/admin/common";
import { BoxForm, BoxField, ImputSubmit } from "../../components/ui/admin/Form";
import useColors from "../../hooks/useColors";
import useCategories from "../../hooks/useCategories";

const NewProduct = () => {
  const colors = useColors();
  const categories = useCategories();

  const handleChange = () => {
    console.log("change");
  }

  const handleSubmit = () => {
    console.log("submit");
  }
  const handleUploadSuccess = () => {
    console.log("submit");
  };


  return (
    <Layout>
      <BoxMain>
        <h1>Nuevo Producto</h1>
        <div>
          <BoxForm onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Información General </legend>

              <BoxField>
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre de la Categoria"
                  name="nombre"
                  onChange={handleChange}
                />
              </BoxField>
              <BoxField>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                />
              </BoxField>
              <BoxField>
                <label htmlFor="dimension">Medida</label>
                <input
                  type="number"
                  id="dimension"
                  placeholder="Dimencion"
                  name="dimension"
                  onChange={handleChange}
                />
              </BoxField>
              <BoxField>
                <label htmlFor="category">Categoria</label>
                <select name="category" id="category" onChange={handleChange}>
                  <option>----Elige Categoria----</option>
                  {categories &&
                    categories.map((elm) => (
                      <option key={elm.id} value={elm.id}>
                        {elm.name}
                      </option>
                    ))}
                </select>
              </BoxField>
              <BoxField>
                <label htmlFor="color">Color</label>
                <select name="color" id="color" onChange={handleChange}>
                  <option>-----Elige Color----</option>
                  {colors &&
                    colors.map((elm) => (
                      <option style={{ background: elm.code }} key={elm.id}  value={elm.id}>
                        {elm.name}
                      </option>
                    ))}
                </select>
              </BoxField>
              <BoxField>
                <label htmlFor="imagen">Imagen</label>
                <input
                  type="file"
                  accept="image/*"
                  id="imagen"
                  name="imagen"
                  onChange={handleUploadSuccess}
                />
              </BoxField>
            </fieldset>

            <ImputSubmit type="submit" value="Crear Producto" />
          </BoxForm>
        </div>
      </BoxMain>
    </Layout>
  );
}
 
export default NewProduct;