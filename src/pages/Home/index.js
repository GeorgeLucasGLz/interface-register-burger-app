import React, { useState, useRef } from "react";
import LogoImage from '../../assets/logo.png'
import Arrow from '../../assets/arrow.svg'
import axios from "axios";
import { useHistory } from "react-router-dom";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Image,
  Container,
  Input,
  InputLabel,
 



} from '../Home/styles'

const App = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputOrder = useRef()
  const history = useHistory()

  const baseUrl = "https://api-register-users-dvs7.vercel.app"

  async function addNewUser() {

    const { data: newOrder } = await axios.post(`${baseUrl}/order`,
      { order: inputOrder.current.value, name: inputName.current.value, })

    setUsers([...users, newOrder])


    history.push('/pedidos')


  }


  return (


    <Container>

      <Image src={LogoImage}></Image>
      <H1>Faça seu Pedido!</H1>

      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Digite seu Pedido" ref={inputOrder}></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Digite seu Nome" ref={inputName}></Input>

        <Button onClick={addNewUser}>Fazer Pedido<img src={Arrow}></img>
        </Button>



      </ContainerItens>
    </Container>


  )



}

export default App