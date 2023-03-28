import { useState } from 'react'
import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, setNome }) {

  const [automovel,setAutomovel] = useState({
    cor:"Azul",
    ano:"2023",
    flex:true,
    adicionado:"Ozemela",
    modelo:'Toro'
  })
  const carro2 = {
    cor:"Cinza",
    ano:"2013",
    flex:true,
    adicionado:"Ozemela",
    modelo:'Fox'
  }
  function mudarNomeGaragem () {
    setNome('Maria')
  }
  function mudarCarro () {
    setAutomovel(carro2)
  }

  
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudarCarro}>Muda carro</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionado}
          flex={automovel.adicionado}
          mudarCarro={mudarCarro}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
