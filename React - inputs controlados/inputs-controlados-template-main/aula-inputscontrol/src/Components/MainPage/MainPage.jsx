import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const onChangenome = (event) => {
    //console.log(event.target.value)
    setNome(event.target.value)
  }
  const onChangeidade = (event) => {
    setIdade(event.target.value)
  }
  const onChangeemail = (event) => {
    setEmail(event.target.value)
  }
  const onChangesenha = (event) => {
    setSenha(event.target.value)
  }
  const btnEnviar = () => {
    setNome('')
    setIdade('')
    setEmail('')
    setSenha('')
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} 
          onChange={onChangenome} 
          />
        </label>
        <label>
          Idade:
          <Input value={idade} 
          onChange={onChangeidade}
          /* onChange={(event)=>setIdade(event.target.value)} */
          />
        </label>  
        <label>
          Email:
          <Input value={email} 
          onChange={onChangeemail}
          />
        </label>  
        <label>
          Senha:
          <Input value={senha} 
          onChange={onChangesenha}
          />
        </label>  
        <button onClick={btnEnviar}> Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
