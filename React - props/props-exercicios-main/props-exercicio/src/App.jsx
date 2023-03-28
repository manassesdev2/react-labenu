import React from "react";
import CardVideo from "./componentes/CardVideo";

const card1 = {
  usuario: "Chicago-illinois",
  imagem: "https://picsum.photos/400/400?a=5 "
};

const card2 = {
  usuario: "San Francisco-California",
  imagem: "https://picsum.photos/400/400?a=6"
};

const card3 = {
  usuario: "Los Angeles - California",
  imagem: "https://picsum.photos/400/400?a=7 "
};

const card4 = {
  usuario: "Miami beach",
  imagem: "https://picsum.photos/400/400?a=8 "
};

const card5 = {
  usuario: "Disney World",
  imagem: "https://picsum.photos/400/400?a=9 "
};

const card6 = {
  usuario: " Golden Gate Bridge",
  imagem: "https://picsum.photos/400/400?a=10"
};

const card7 = {
  usuario: " Brooklyn - New York",
  imagem: "https://picsum.photos/400/400?a=11 "
};

const card8 = {
  usuario: "Brasilia - Brasil",
  imagem: "https://picsum.photos/400/400?a=5 "
};

export default function App() {
  function reproduzVideo(nome) {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
      <CardVideo
        reproduzVideo={reproduzVideo}
        card1={card1}
        card2={card2}
        card3={card3}
        card4={card4}
        card5={card5}
        card6={card6}
        card7={card7}
        card8={card8}
      />
    </div>
  );
}
