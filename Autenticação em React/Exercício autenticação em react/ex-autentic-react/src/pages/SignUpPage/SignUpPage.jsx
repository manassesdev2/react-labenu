import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import { useState } from "react";

function SignUpPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({name:"", email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    signUp()
  };

  const signUp = () =>{
    const aluno = "darvas"
    const body = {
      name: form.name,
      email: form.email,
      password: form.password
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/signup`, body)
    .then((res)=>{
      console.log(res)
      localStorage.setItem(res)
      goToFeed(navigate)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <main>
      <h1>Cadastro</h1>
      
      <FormContainer onSubmit={submitForm}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </InputContainer>
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

        <button onClick={() => goToFeed(navigate)}>Cadastrar</button>
        <button>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}
export default SignUpPage;