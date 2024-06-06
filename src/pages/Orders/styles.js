import styled from 'styled-components'



export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color: black;
height: 100%;
min-height: 100vh;
`

export const ArrowImg = styled.img`
margin-right: 5px;
width: 18px;
transform: rotateY(180deg);

`

export const ContainerItens = styled.div`
border: 2px solid green;
border-radius: 10px;
padding-inline: 20px;
display: flex;
flex-direction: column;
margin-bottom: 40px;

`

export const Image = styled.img`
margin-top: 10px;
background-color: green;
border-radius: 50%;
padding: 20px;
width: 200px;
height: 200px;


`




export const Button = styled.button`

background-color: green;
color: white;
width: 342px;
height: 68px;
margin-top: 50px;
border: none;
border-radius: 12px;
margin-bottom: 30px;
cursor: pointer;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;



`


export const LI = styled.li`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 20px;
padding-left: 20px;
background-color: #3c3c3c;
width: 342px;
height: 58px;
border-radius: 10px;
border: none;
outline: none;
gap: 5px;

img{
cursor: pointer;
width: 22px;
height: 25px;
margin-right: 15px;

}

button{
    background: transparent;
    border: none;
}

`

export const Info = styled.div`

display: flex;
flex-direction: column;



`