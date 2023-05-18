import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'

export default function Signup() {
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")

    const onChangeNome = (e) => {
        setNomeUsuario(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeSenha = (e) => {
        setSenha(e.target.value)
    }
    const onChangeConfirmaSenha = (e) => {
        setConfirmaSenha(e.target.value)
    }

    // const enviarCadastro = () => {
    //     //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
    //     if (senha === confirmaSenha) {
    //         console.log({nomeUsuario, email, senha, confirmaSenha})
    //     }
    // }
    const enviarCadastro = (e) => {
        e.preventDefault(); // prevent form reset
      
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (senha === confirmaSenha) {
          console.log({ nomeUsuario, email, senha, confirmaSenha });
        }
      
        // printing the form data
        console.log({
          nomeUsuario,
          email,
          senha,
          confirmaSenha,
        });
      };
      

    // const enviaLogin = (e) => {
    //     e.preventDefault()
    //     resetForm()
    // }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    id='nome'
                    name='nomeUsuario'
                    value={nomeUsuario}
                    onChange={onChangeNome}
                    placeholder="username"
                    required
                    type="text"
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    name='email'
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="nome@email.com"
                    required
                    type="email"
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    id='senha'
                    name='senha'
                    value={senha}
                    onChange={onChangeSenha}
                    placeholder="Crie sua senha"
                    required
                    type="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    title="A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número."
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    id='confirma-senha'
                    name='confirmaSenha'
                    value={confirmaSenha}
                    onChange={onChangeConfirmaSenha}
                    placeholder="Confirme a senha"
                    required
                    type="password"
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
