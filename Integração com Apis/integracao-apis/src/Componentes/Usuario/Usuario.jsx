import React, { useEffect, useState } from "react";
import axios from "axios";

function Usuario(props) {
  const [usuario, setUsuario] = useState(props.usuario);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    getUserById(usuario.id);
  }, [usuario]);

  const getUserById = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: { Authorization: "manasses-almeida-ozemela" }
        }
      )
      .then((res) => {
        setEmail(res.data.email);
        setNome(res.data.name);
      })
      .catch((err) => console.log(err.response));
  };
  const body = {
    name: nome,
    email: email
  };

  const editUser = (id) =>
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        body,
        {
          headers: {
            Authorization: "manasses-almeida-ozemela"
          }
        }
      )
      .then((res) => {
        setNome(nome);
        setEmail(email);
        setEditar(!editar);
      })
      .catch((err) => console.log(err.response));

  const deleteUser = (id) => {
    if (window.confirm("Tem certeza que deseja deletar esse usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "manasses-almeida-ozemela"
            }
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err.response));
    }
  };
  return (
    <>
      {editar ? (
        <div>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={() => editUser(usuario.id)}>
            Enviar alterações
          </button>
        </div>
      ) : (
        <>
          <p>Nome:{nome}</p>
          <p>E-mail:{email}</p>
        </>
      )}
      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={() => deleteUser(usuario.id)}>Excluir</button>
    </>
  );
}

export default Usuario;
