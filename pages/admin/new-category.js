import React, {useState} from 'react';
import {BASE_URL} from '../../setings/config';
import Layout from '../../components/layouts/admin/Layout';
import { BoxMain } from "../../components/ui/admin/common";
import { BoxForm, BoxField, ImputSubmit } from "../../components/ui/admin/Form";

const NewCategory = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleUploadSuccess = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}/categories`;
    const formData = new FormData();
    if (data.name) formData.append("category[name]", data.name);
    if (data.image) formData.append("category[image]", data.image);
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });
    request.ok
      ? alert("Categoria creada con exito")
      : alert("Ocurrio un error");
    setData({
      name: "",
      image: ""
    });
  }
  

  return (
    <Layout>
      <BoxMain>
        <h1>Nueva Categoria</h1>
        <div>
          <BoxForm onSubmit={handleSubmit}>
            <fieldset>
              <legend>Información General </legend>

              <BoxField>
                <label htmlFor="nombre">Nombre Categoria</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre de la Categoria"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
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
}
 
export default NewCategory;