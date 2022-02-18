import React, { useState } from "react";
import { BASE_URL } from "../../setings/config";
import Layout from "../../components/layouts/admin/Layout";
import { BoxMain } from "../../components/ui/admin/common";
import { BoxForm, BoxField, ImputSubmit } from "../../components/ui/admin/Form";

const NewColor = () => {
  const [data, setData] = useState({
    name: "",
    code: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}/colors`;
    const formData = new FormData();
    formData.append("color[name]", data.name);
    formData.append("color[code]", data.code);
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });
    request.ok
      ? alert("Color creado con exito")
      : alert("Ocurrio un error");
    setData({
      name: "",
      code: "",
    });
  };

  return (
    <Layout>
      <BoxMain>
        <h1>Nuevo Color</h1>
        <div>
          <BoxForm onSubmit={handleSubmit}>
            <fieldset>
              <legend>Información General </legend>

              <BoxField>
                <label htmlFor="nombre">Nombre Color</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre del Color"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </BoxField>
              <BoxField>
                <label htmlFor="nombre">Color</label>
                <input
                  type="color"
                  id="color"
                  name="code"
                  value={data.code}
                  onChange={handleChange}
                />
                <div style={{background: `${data.code}`}}>{data.name}</div>
              </BoxField>
            </fieldset>

            <ImputSubmit type="submit" value="Crear Color" />
          </BoxForm>
        </div>
      </BoxMain>
    </Layout>
  );
};

export default NewColor;
