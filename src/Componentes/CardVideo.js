import { BoxPaginaPrincipal, Img, H4 } from "./style";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <BoxPaginaPrincipal
      className="box-pagina-principal"
      onClick={reproduzVideo}
    >
      <Img src={props.image1} alt={props.textoAlternativo} />
      <H4>{props.titulo}</H4>
    </BoxPaginaPrincipal>
  );
}

export default CardVideo;
