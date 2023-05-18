import React from "react";
import { useForm } from "../../hooks/useForm";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [form, onChange, clear] = useForm({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: "",
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (form.modulos <= 2) {
      alert("O número de módulos deve ser maior que 2");
    } else if (form.responsavel.length < 5) {
      alert("O nome do responsável deve ter no mínimo 5 caracteres");
    } else {
      clear();
      console.log(
        `Nome: ${form.nome}, Módulos: ${form.modulos}, Tecnologias: ${form.tecnologias}, Responsável: ${form.responsavel}`
      );
    }
  };

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={onHandleSubmit}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChange}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          id="modulos"
          type="number"
          name="modulos"
          value={form.modulos}
          onChange={onChange}
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChange}
          required
        />

        <label htmlFor="responsavel">Responsável: </label>
        <Input
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChange}
          required
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;