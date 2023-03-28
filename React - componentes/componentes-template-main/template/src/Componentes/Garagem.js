import React from "react";
import {Carro} from './Carro'
import Logo from '../img/logo.png'

function Garagem (){
    return(
        <div className="Garagem">
            <h1>Garagem da Ozemela</h1>
            <img src={Logo} />
            <Carro></Carro>
            <Carro></Carro>
            <Carro></Carro>
            
        </div>
    )
}
export default Garagem
