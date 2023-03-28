import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";


const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const tarefaExiste = localStorage.getItem("tarefas");
    if (tarefaExiste) {
      const tarefaParaArray = JSON.parse(tarefaExiste);
      setTarefas(tarefaParaArray);
    }
  }, []);

  useEffect(() => {
    const tarefasEmString = JSON.stringify(tarefas);
    localStorage.setItem("tarefas", tarefasEmString);
  }, [tarefas]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: inputValue,
      completa: false
    };

    if (!inputValue) {
      return alert("O campo precisa ser preenchido");
    }

    setTarefas([...tarefas, novaTarefa]);
    setInputValue("");
  };

  const selectTarefa = (id) => {
    const mudaTarefa = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });

    setTarefas(mudaTarefa);
  };

  const onChangeFilter = (event) => {
    setFiltro(event.target.value);
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map((tarefa, indice) => {
          return (
            <Tarefa
              key={indice}
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          );
        })}
      </TarefaList>
    </div>
  );
}

export default App;



//function App() {
  // exemplo useEffect
  // const [contador, setContador] = useState(0);
  // const [contador2, setContador2] = useState(0);

  // console.log("Olares Ozemela!");

  // useEffect(() => {
  //   console.log("Estou dentro do useEffect");
  // }, [contador2]);

  // return (
  //   <div className="App">
  //     <GlobalStyles />
      {/* exemplo useEffect */}
      {/* <h1>Aula de Local Storage</h1>
      <button onClick={() => setContador(contador + 1)}>Contador</button>
      {contador}
      <br />
      <button onClick={() => setContador2(contador2 + 1)}>Contador 2</button>
      {contador2} */}
      {/* <FormLocal />
    </div>
  );
}

export default App; */}
