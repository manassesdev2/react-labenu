import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {

  /* let nome = 'Labenu'

  function btnMudaNome () {
    nome = 'Manassés'
    
  }   */
  

  const [nome, setNome] = useState('Labenu')

  function btnMudaNome () {
    /* const novoNome = prompt('Qual o nome da garagem?')
    setNome(novoNome) */
    setNome('Juliana')
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} setNome={setNome} />
    </div>
  )
}
