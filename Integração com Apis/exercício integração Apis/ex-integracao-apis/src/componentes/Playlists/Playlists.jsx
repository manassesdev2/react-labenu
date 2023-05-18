import React, { useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from "axios";
import {
  ContainerInputs,
  InputMusica,
  Botao,
  ContainerMusicas,
} from "../Musicas/styled";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [playlistSearch, setPlaylistSearch] = useState("");
  const [novaPlaylist, setNovaPlaylist] = useState("");

  const headers = {
    headers: {
      Authorization: "manasses-almeida-ozemela",
    },
  };

  const recebePlaylists = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
        headers
      )
      .then((resposta) => {
        setPlaylists(resposta.data.result.list);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  const procuraPlaylist = async (bananinha) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${bananinha}`,
        headers
      );
      setPlaylists(response.data.result.playlist);
      setPlaylistSearch("");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const adicionaPlaylist = async (bananinha) => {
    const banana = {
      name: bananinha,
    };
    try {
      await axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
        banana,
        headers
      );
      recebePlaylists();
      setNovaPlaylist("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    recebePlaylists();
  }, []);

  return (
    <div>
      <ContainerMusicas>
        <h2>LABEFY</h2>
        <ContainerInputs>
          <InputMusica
            value={playlistSearch}
            onChange={(e) => {
              setPlaylistSearch(e.target.value);
            }}
            placeholder="playlist"
          />
          <Botao onClick={() => procuraPlaylist(playlistSearch)}>
            Procurar playlist
          </Botao>

          <InputMusica
            value={novaPlaylist}
            onChange={(e) => {
              setNovaPlaylist(e.target.value);
            }}
            placeholder="nova playlist"
          />
          <Botao onClick={() => adicionaPlaylist(novaPlaylist)}>
            Adicionar Playlist
          </Botao>
        </ContainerInputs>
      </ContainerMusicas>

      {playlists.map((playlist) => {
        return (
          <Musicas
            key={playlist.id}
            playlist={playlist}
            recebePlaylists={recebePlaylists}
          />
        );
      })}
    </div>
  );
}

export default Playlists;