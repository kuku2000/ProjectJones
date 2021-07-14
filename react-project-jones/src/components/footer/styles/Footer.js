import styled from "styled-components";


export const Container=styled.div`
padding: 80px 60px;
background: rgb(0, 0, 0);
background: radial-gradient(circle, rgba(0, 0, 0, 1) 97%, rgba(255, 0, 0, 1) 100%);
box-shadow: tomato 2vw;

`;


export const Wrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1300px;
margin:0 auto;

`;


export const Column=styled.div`
display: flex;
flex-direction: column;
text-align:center;
cursor: pointer;
color: whitesmoke;


//align-items:center;
`;


export const Row=styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
grid-gap: 60px;

@media (max-width:1000px;){

grid-template-columns: repeat(auto-fill, minmax(200px,1fr))

}

`;


export const Link=styled.div`
color: whitesmoke;
margin-bottom: 20px;
font-size: 2vw;
text-decoration:none;

&:hover {

    color:#ff9c00;
    transition:200ms ease-in;

}
`;


export const Title=styled.div`
padding-bottom: 2vw;
font-weight:bold;
margin-bottom:40px;
font-size: 1.8vw;
`;