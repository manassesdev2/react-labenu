import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
      <StyledLabel htmlFor="title">
          Título:
          <Input id="título" value={props.inputTitle} onChange={props.onChangeTitle} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.inputImage} onChange={props.onChangeImage} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.inputDescription} onChange={props.onChangeDescription} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro