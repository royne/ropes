import { useState, useRef } from 'react'
import {BASE_URL} from '../../setings/config'
import { SectionFormContact, Form, BoxInput, BtnSubmit } from '../ui/home/contact'

export const FormContact = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    info:'',
    phone: ''
  })
  const btnForm = useRef()
  const formRef = useRef()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    btnForm.current.disabled = true; 
    const url = `${BASE_URL}/messages`;
    const formData = new FormData();
    formData.append("message[name]", data.name);
    formData.append("message[email]", data.email);
    formData.append("message[info]", data.info);
    formData.append("message[phone]", data.phone);
    const request = await fetch(url, {
      method: "POST",
      body: formData,
    });
    request.ok
      ? alert("Mensaje envido con exito")
      : alert("Ocurrio un error");
    setData({
      name: '',
      email: '',
      info: '',
      phone: ''
    });
    formRef.current.reset()
    btnForm.current.disabled = false;
  }
  return (
    <SectionFormContact>
      <h2>CONTÁCTANOS</h2>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <BoxInput>
          <label>Nombre</label>
          <input type="text"  placeholder='Escribe tu nombre' onChange={handleChange} name="name"/>
        </BoxInput>
        <BoxInput>
          <label>Email</label>
          <input type="email" placeholder='Escribe tu email' onChange={handleChange} name="email"/>
        </BoxInput>
        <BoxInput>
          <label>Mensaje</label>
          <textarea placeholder='Escribe tu mensaje' rows="8"  onChange={handleChange} name="info"/>
        </BoxInput>
        <BoxInput>
          <label>Telefono</label>
          <input type="number" placeholder='Escribe tu celular' onChange={handleChange} name="phone"/>
        </BoxInput>

        <BtnSubmit type="submit" value="ENVIAR" ref={btnForm} />
      </Form>
    </SectionFormContact>
  )
}
