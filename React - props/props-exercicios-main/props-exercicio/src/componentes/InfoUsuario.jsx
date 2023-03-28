const InfoUsuario = (props) => {
    return (
      <div className="box-pagina-principal">
        <img src={props.card.imagem} alt="picsum-foto" />
        <h4>{props.card.usuario}</h4>
      </div>
    );
  };
  
  export default InfoUsuario;
  