import Garagem from "./Componentes/Garagem";
import "./Componentes/Styles.css";

export default function App() {

  const nome = "Juliana"
  const aluno = 'Manassés'

  const apresentaGaragem = (nomeDaGaragem) => {
    alert(`Boas vindas a garagem de ${nomeDaGaragem}`)
  }

  const carro1 = {
    nome: 'Gol',
    cor: 'Preto',
    ano: 2010,
    flex: true
  }

  const carro2 = {
    nome: 'Fiat',
    cor: 'Prata',
    ano: 2020,
    flex: false
  }

  const carro3 = {
    nome: 'Chery QQ',
    cor: 'Vermelho',
    ano: 2023,
    flex: true
  }

  const carro4 = {
    nome: 'Mob',
    cor: 'Branco',
    ano: 2019,
    flex: false
  }

  return (
    <div>
      <Garagem
        nome={aluno}
        apresentaGaragem={apresentaGaragem}
        carro1={carro1}
        carro2={carro2}
        carro3={carro3}
        carro4={carro4}
      />
    </div>
  );
}
