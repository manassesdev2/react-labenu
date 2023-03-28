
import {Car} from './styled';


export function Carro(props) {
    return (
      <Car>
      <div>
        <h2>Meu carro</h2>
        <img src={props.imagem}></img>
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </ul>
      </div>
      </Car>
    );
  }
  
