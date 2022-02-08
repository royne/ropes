import React, {useState} from 'react';
import { BASE_URL } from "../../setings/config";
import Layout from '../../components/layouts/admin/Layout';
import { BoxMain } from "../../components/ui/admin/common";
import { BoxForm, BoxField, ImputSubmit, InputCheckbox, BoxInputCheckbox } from "../../components/ui/admin/Form";
import useColors from "../../hooks/useColors";
import useCategories from "../../hooks/useCategories";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    dimension: "",
    category: "",
    color: "",
    images: "",
    color_ids: ""
  });

  const colors = useColors();
  const categories = useCategories();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form-product");
    const url = `${BASE_URL}/products`;
    const formData = new FormData();
    formData.append("product[name]", data.name);
    formData.append("product[description]", data.description);
    formData.append("product[dimension]", data.dimension);
    formData.append("product[category_id]", data.category);
    formData.append("product[color_ids]", data.color_ids);
    data.photos.map((elm, i) => formData.append(`product[photos][${i}]`, elm));
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const response = await request.json();
    setData({
      name: "",
      description: "",
      dimension: "",
      category: "",
      photos: "",
      color_ids: "",
    });
    form.reset()
  }

  const handleChecked = () => {
    const nodelist = document.querySelectorAll("input[type=checkbox]:checked")
    const ids = Array.apply(null, nodelist).map((e) => parseInt(e.id))
    setData({
      ...data,
      color_ids: ids,
    })
  };

  const handlePhotos = async (e) => {
    const formData = new FormData();
    const arrayPhotos = Array.from(e.target.files);
    setData({
      ...data,
      photos: arrayPhotos,
    });
    arrayPhotos.map((elm, i) => formData.append(`photos_${i}`, elm));
  };


  return (
    <Layout>
      <BoxMain>
        <h1>Nuevo Producto</h1>
        <div>
          <BoxForm onSubmit={handleSubmit} id="form-product" noValidate>
            <fieldset>
              <legend>Información General </legend>

              <BoxField>
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre de la Categoria"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />
              </BoxField>
              <BoxField>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={data.description}
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
                  value={data.dimension}
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
                <BoxInputCheckbox>
                  {colors &&
                    colors.map((elm, i) => (
                      <InputCheckbox bg={elm.code}>
                        <input
                          type="checkbox"
                          value={elm.id}
                          key={elm.id}
                          id={elm.id}
                          onChange={handleChecked}
                        />
                        <label htmlFor={elm.id} bg={elm.code}>
                          {elm.name}
                        </label>
                      </InputCheckbox>
                    ))}
                </BoxInputCheckbox>
              </BoxField>
              <BoxField>
                <label htmlFor="photos">Imagenes</label>
                <input
                  type="file"
                  accept="image/*"
                  id="photos"
                  name="photos"
                  onChange={handlePhotos}
                  multiple
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