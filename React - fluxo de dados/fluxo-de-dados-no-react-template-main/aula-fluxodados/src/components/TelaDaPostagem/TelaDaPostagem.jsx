import React from 'react'
import {ContainerPostagem, Title, Image, Description} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Title>{props.inputTitle}</Title> 
            <Image src={props.inputImage} alt='drone view'/>
            <Description>{props.inputDescription}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem