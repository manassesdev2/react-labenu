import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState("login");

  const trocarTela = (novaTela) => {
    setTela(novaTela);
  };

  const checarTela = () => {
    if (tela === "login") {
      return <TelaLogin trocarTela={trocarTela} />;
    }

    if (tela === "cadastro") {
      return <TelaCadastro trocarTela={trocarTela} />;
    }

    if (tela === "usuario") {
      return <TelaUsuarioCadastrado />;
    }
  };

  // opção com ternário
  // return (
  //   <MainContainer>
  //     <GlobalStyled />
  //     {tela === "login" ? (
  //       <TelaLogin trocarTela={trocarTela} />
  //     ) : (
  //       <TelaCadastro trocarTela={trocarTela} />
  //     )}
  //   </MainContainer>
  // );

  return (
    <MainContainer>
      <GlobalStyled />
      {checarTela()}
    </MainContainer>
  );
}

export default App;
