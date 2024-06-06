import React, { useState, useRef, useEffect } from "react";
import OrdersImage from '../../assets/ordersImage.png'
import Trash from '../../assets/trash.png'
import Arrow from '../../assets/arrow.svg'
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Image,
  Container,
  LI,
  Info

  


} from './styles'

const Orders = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputOrder = useRef()
  const history = useHistory()


  function goToBackPage() {

    history.push('/')

  }

    const baseUrl = "https://api-register-users-dvs7.vercel.app"

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get(`${baseUrl}/order`)
      setUsers(newUsers)
    }

    fetchUsers()

  }, [])


  async function deleteOrder(userID) {

    await axios.delete(`${baseUrl}/order/${userID}`)
    const newUsers = users.filter(user => user.id !== userID)
    setUsers(newUsers)
  }


  return (


    <Container>

      <Image src={OrdersImage}></Image>
      <H1>Pedidos Realizados!</H1>

      <ContainerItens isGreen={true}>


        <ul>

          {users.map(user => (

            <LI key={user.id}>

              <Info>
                <span>{user.order}</span>
                <span>{user.name}</span>
              </Info>

              <button onClick={() => deleteOrder(user.id)}>
                <img src={Trash}></img>
              </button>

            </LI>
          ))}

        </ul>

        <Button onClick={goToBackPage} btnGreen={true}><img src={Arrow}></img>Voltar</Button>

      </ContainerItens>
    </Container>
  )



}

export default Orders