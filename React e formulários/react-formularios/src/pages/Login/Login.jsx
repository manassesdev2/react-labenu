import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { irParaCadastro } from "../../Routes/coordinator";
import { ContainerForm, ContainerLogin, Input } from "./styled";

export default function Login() {
  const navigate = useNavigate();
  // const [formulario, setFormulario] = useState({
  //   email: "",
  //   password: ""
  // });

  const [form, onChange, setForm] = useForm({ email: "", password: "" });
  const enviaLogin = (e) => {
    e.preventDefault();
    setForm({ email: "", password: "" });
    console.log(form);
  };
  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          id="senha"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua senha"
          type="password"
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>
        Ainda não tenho uma conta
      </button>
    </ContainerLogin>
  );
}
