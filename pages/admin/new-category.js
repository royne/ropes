import Layout from '../../components/layouts/admin/Layout';
import { BoxMain } from "../../components/ui/admin/common";
import { BoxForm, BoxField, ImputSubmit } from "../../components/ui/admin/Form";

const NewCategory = () => {

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
        <h1>Nueva Categoria</h1>
        <div>
          <BoxForm onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Información General </legend>

              <BoxField>
                <label htmlFor="nombre">Nombre Categoria</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre de la Categoria"
                  name="nombre"
                  onChange={handleChange}
                />
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

            <ImputSubmit type="submit" value="Crear Categoria" />
          </BoxForm>
        </div>
      </BoxMain>
    </Layout>
  );
}
 
export default NewCategory;