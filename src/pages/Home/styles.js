import styled from 'styled-components'



export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color: black;
height: 100%;
min-height: 100vh;


`

export const ContainerItens = styled.div`
border: 2px solid red;
border-radius: 10px;
padding-inline: 18px;
display: flex;
flex-direction: column;
height: 100%;
margin-bottom: 30px;
width: 380px;

@media (max-width: 450px ) {
    
    
    width: 300px;
    
}



`

export const Image = styled.img`
padding-right: 5px;
padding-bottom: 20px;
margin-top: 10px;
border: 3px solid red;
box-shadow: 0 0 5px red;
border-radius: 50%;
width: 250px;
height: 250px;


`


export const Input = styled.input`


padding-left: 10px;
background-color: #3c3c3c;
width: 342px;
height: 58px;
border-radius: 10px;
border: 2px solid red;
outline: none;

@media (max-width: 450px ) {
    
    
    width: 260px;
    
}

`

export const InputLabel = styled.label`

margin-top: 20px;

`

export const Button = styled.button`

border: 2px solid yellow;
background-color: #fd0000;
color: white;
width: 342px;
height: 68px;
margin-top: 30px;
border-radius: 12px;
margin-bottom: 30px;
cursor: pointer;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;



@media (max-width: 450px ) {
    
    
    width: 260px;
    
}
`
