import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { BASE_URL } from "../../setings/config";
import Layout from '../../components/layouts/admin/Layout';
import { BoxMain } from "../../components/ui/admin/common";
import { BoxForm, BoxField, ImputSubmit, InputCheckbox, BoxInputCheckbox } from "../../components/ui/admin/Form";
import useColors from "../../hooks/useColors";
import useCategories from "../../hooks/useCategories";

const EditProduct = () => {
  const [product, setProduct] =useState({})
  const [data, setData] = useState({});

  const colors = useColors();
  const categories = useCategories();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const url = `${BASE_URL}/products/${id}?type_id=true`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
      };
      getData();
    }
  }, [id]);

  console.log(product);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form-product");
    const url = `${BASE_URL}/products/${id}`;
    const formData = new FormData();
    if (data.name) formData.append("product[name]", data.name);
    if (data.description) formData.append("product[description]", data.description);
    if (data.dimension) formData.append("product[dimension]", data.dimension);
    if (data.category) formData.append("product[category_id]", data.category);
    if (data.color_ids) formData.append("product[color_ids]", data.color_ids);
    const request = await fetch(url, {
      method: "PATCH",
      body: formData,
    });
    request.ok
      ? alert("Producto editado con exito")
      : alert("Ocurrio un error");
    form.reset()
    return router.push("/admin")
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

  if (Object.keys(product).length === 0) return null

  return (
    <Layout>
      <BoxMain>
        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
          <h1>Editar Producto</h1>
          <h2>{product.name}</h2>
          <img src={product.photos[0]} width="150" height="150" />
        </div>
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
                  value={product.name}
                />
              </BoxField>
              <BoxField>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={product.description}
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
                  value={product.dimension}
                />
              </BoxField>
              <BoxField>
                <label htmlFor="category">Categoria</label>
                <select name="category" id="category" onChange={handleChange} value={product.category.id}>
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
                Colores: 
                <div style={{display:"flex"}}>
                  {product.colors.map(e => (
                    <span key={e.id} style={{background: e.code, width:20, height:20, marginRight:10}}></span>
                  ))}
                </div>
              </BoxField>

              <BoxField>
                <label htmlFor="color">Editar Colores</label>
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
              
              {/* <BoxField>
                <label htmlFor="photos">Editar Imagenes</label>
                <input
                  type="file"
                  accept="image/*"
                  id="photos"
                  name="photos"
                  onChange={handlePhotos}
                  multiple
                />
              </BoxField> */}
            </fieldset>

            <ImputSubmit type="submit" value="Editar Producto" />
          </BoxForm>
        </div>
      </BoxMain>
    </Layout>
  );
}

export default EditProduct;