import { Carro } from "../Carro/Carro";
import { Botao, GaragemContainer, Estacionamento } from './styled';

export function Garagem(props) {
  return (
    <GaragemContainer>

      <h1>Garagem da {props.nome}</h1>

      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>

      <Estacionamento>
        <Carro adicionadoPor={props.nome} imagem={"https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960"} cor={"Vermelho"} ano={2022} flex={"true"} />

        <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"} />
        
        <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
        <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </Estacionamento>

    </GaragemContainer>

    /* voltamos as 20:54 */
  );
}
