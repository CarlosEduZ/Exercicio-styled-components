import React from "react";
import CardVideo from "./Componentes/CardVideo";
// import "./styles.css";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import {
  TelaInteira,
  Header,
  Main,
  MenuVertical,
  BotoesMenuVertical,
  PainelDeVideos,
  Footer,
  H4
} from "./style";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
      <GlobalStyle />
      <TelaInteira>
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <MenuVertical>
            <ul>
              <BotoesMenuVertical>Início</BotoesMenuVertical>
              <BotoesMenuVertical>Em alta</BotoesMenuVertical>
              <BotoesMenuVertical>Inscrições</BotoesMenuVertical>
              <hr />
              <BotoesMenuVertical>Originais</BotoesMenuVertical>
              <BotoesMenuVertical>Histórico</BotoesMenuVertical>
            </ul>
          </MenuVertical>

          <PainelDeVideos>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </PainelDeVideos>
        </Main>

        <Footer>
          <H4>Oi! Eu moro no footer!</H4>
        </Footer>
      </TelaInteira>
    </>
  );
}
