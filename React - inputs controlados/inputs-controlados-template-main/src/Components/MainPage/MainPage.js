import React from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input />
        </label>
        <label>
          Idade:
          <Input/>
        </label>  
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
