import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.jsx";
import { FormContainer, InputContainer } from "./styled.jsx";

import axios from "axios";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    login()
  };

  const login = ()=>{
    const aluno = "darvas"
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`, body)
    .then((res)=>{
      console.log(res)
      localStorage.setItem("token", res.data.token)
      goToFeed(navigate)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  return (
    <main>
      <h1>Login</h1>
      
      <FormContainer onSubmit={submitForm}>
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>
        <button onClick={() => goToFeed(navigate)}>Entrar</button>
        {/* <button>Entrar</button> */}
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}
export default LoginPage;