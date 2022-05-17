import {useState, useEffect} from 'react'
import Layout from '../../components/layouts/admin/Layout';
import { BoxMain } from "../../components/ui/admin/common";
import { BASE_URL } from '../../setings/config';

const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${BASE_URL}/messages`)
      const data = await response.json()
      setMessages(data)
    }
    getData()
  },[])

  return (
    <Layout>
      <BoxMain>
        <h1>MENSAJES</h1>
        <div>
          <table className='table'>
            <thead>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Mnesaje</th>
            </thead>
            <tbody>
              {messages && messages.map(elm => {
                return(
                  <tr>
                    <td>{elm.name}</td>
                    <td>{elm.email}</td>
                    <td>{elm.phone}</td>
                    <td>{elm.info}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>  
      </BoxMain>  
    </Layout>
  )
}

export default Messages