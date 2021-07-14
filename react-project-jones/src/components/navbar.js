import React from 'react'
import styled , {css} from 'styled-components/macro'
import {Link} from 'react-router-dom';
import { menuData } from '../Data/menudata';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
height: 60px;
background: #000000;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:100;
position:fixed;
width: 100%;

`;
const NavLink = css`
color: #ffffff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;


`
const Logo = styled(Link)`
${NavLink};
font-style: italic;
color: #FFFFFF;
`
const Menubars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px){
display: block;
background-size: contain;
height: 30px;
width: 30px;
cursor: pointer;
position: absolute;
top: 0;
right: 0;
transform: translate(-50%, 50%);
color: #ffffff;

}
`;
const NavMenu = styled.div`
display:flex;
align-items: center;
margin-right: '48px';

@media screen and (max-width: 768px){
display: none;

}
`;
const NavMenuLinks = styled(Link)`
color:#ffffff;
padding-right: 4rem;
align-items:center;
text-decoration:none;


`
const Navbtn = styled.div`
display: flex;
@media screen and (max-width: 768px){
display: none;

}
`


const navbar = ({toggle}) => {
    return (
        <Nav>
<Logo to = "/">JONES</Logo>
<Menubars onClick={toggle}/>
<NavMenu>
{menuData.map((item, index) => (
<NavMenuLinks to= {item.link} key = {index}>
{item.title}
</NavMenuLinks>

))}
</NavMenu>
<Navbtn>
<Button to='/contact' primary='true'>Contact Us</Button></Navbtn>
        </Nav>
    )
}

export default navbar
