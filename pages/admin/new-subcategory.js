import React, { useState } from "react";
import { BASE_URL } from "../../setings/config";
import useCategories from "../../hooks/useCategories";
import Layout from "../../components/layouts/admin/Layout";
import { BoxMain } from "../../components/ui/admin/common";
import { BoxForm, BoxField, ImputSubmit } from "../../components/ui/admin/Form";

const NewSubCategory = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    parent_category_id: ""
  });

  const categories = useCategories();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadSuccess = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form-subcategory");
    const url = `${BASE_URL}/categories`;
    const formData = new FormData();
    if (data.name) formData.append("category[name]", data.name);
    if (data.image) formData.append("category[image]", data.image);
    if (data.parent_category_id) formData.append("category[parent_category_id]", data.parent_category_id);
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });
    request.ok
      ? alert("Sub Categoria creada con exito")
      : alert("Ocurrio un error");
    setData({
      name: "",
      image: "",
      parent_category_id: ""
    });
    form.reset();
  };

  return (
    <Layout>
      <BoxMain>
        <h1>Nueva Sub Categoria</h1>
        <div>
          <BoxForm onSubmit={handleSubmit} id="form-subcategory">
            <fieldset>
              <legend>Información General </legend>

              <BoxField>
                <label htmlFor="nombre">Nombre Sub Categoria</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre de la Sub Categoria"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </BoxField>

              <BoxField>
                <label htmlFor="category">Categoria</label>
                <select
                  name="parent_category_id"
                  id="parent_category_id"
                  onChange={handleChange}
                >
                  <option>----Elige Categoria Padre----</option>
                  {categories &&
                    categories.map((elm) => (
                      <option key={elm.id} value={elm.id}>
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
                  id="image"
                  name="image"
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
};

export default NewSubCategory;
