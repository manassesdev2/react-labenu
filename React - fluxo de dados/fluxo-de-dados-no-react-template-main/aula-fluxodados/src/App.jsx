import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [inputImage, setInputImage] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  const [inputTitle, setInputTitle] = useState("")

  const onChangeImage = (e) => {
    setInputImage(e.target.value)
  }

  const onChangeDescription = (e) => {
    setInputDescription(e.target.value)
  }
  const onChangeTitle = (e) => {
    setInputTitle(e.target.value)
  }
  console.log(inputImage, inputDescription, inputTitle)
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
          inputImage={inputImage}
          onChangeImage={onChangeImage}
          setInputImage={setInputImage}
          inputDescription={inputDescription}
          onChangeDescription={onChangeDescription}
          inputTitle={inputTitle}
          onChangeTitle={onChangeTitle}
          />
        </aside>
        <TelaDaPostagem
        inputImage={inputImage}
        inputDescription={inputDescription}
        inputTitle={inputTitle}
        />
      </Container>
    </>
  );
}

export default App;
