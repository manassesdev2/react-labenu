import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro de Endereço</h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número da residência:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Fone:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Enviar dados</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Voltar para Tela de Login</BackToLoginButton> 
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
