import styled from "styled-components"


export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    //left: 0;
    //z-index: 100;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #3985ab;
    height: 8rem;
    width: 100%;
    margin: 5px 0;
        
`

export const StyledButton = styled.button`
background: #c0f6c096;
border-radius: 3px;
border: 2px solid #000000;
color: #000000;
padding: 0.25em 1em;
width: 10rem;
height: 60%;
&:hover {
    background: #000000;
    color: orange;
    cursor: pointer;
}
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40vh;
    width: 100vw;
`