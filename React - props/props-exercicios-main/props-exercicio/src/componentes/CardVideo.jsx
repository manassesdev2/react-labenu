import InfoUsuario from "./InfoUsuario";
import "./styles.css";

function CardVideo(props) {
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section
            className="painel-de-videos"
            onClick={() => props.reproduzVideo(props.card)}
          >
            <InfoUsuario card={props.card1} />
            <InfoUsuario card={props.card2} />
            <InfoUsuario card={props.card3} />
            <InfoUsuario card={props.card4} />
            <InfoUsuario card={props.card5} />
            <InfoUsuario card={props.card6} />
            <InfoUsuario card={props.card7} />
            <InfoUsuario card={props.card8} />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default CardVideo;
