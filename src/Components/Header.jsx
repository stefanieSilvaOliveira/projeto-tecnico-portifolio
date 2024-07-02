import React from "react"
import { Logo,Container,Icones } from "../styles";
import LogoCodigo from '../assets/logo.png';



function Header(){
    const PaginaWeb = (url) => {
        window.open(url, "_blank");

    };

    return(
       
       <Container>
       <Logo>
        <img src={LogoCodigo} alt="logo"/>
       </Logo>
       <ul>
               <li onClick={() => handleItemClick('tecnologias')}>Tecnologias</li>
               <li>Sobre mim</li>
               <li>Interesses</li>
           </ul>
           <Icones>
           <i class='bx bxl-github'  onClick={() => PaginaWeb('https://github.com/stefanieSilvaOliveira')} ></i>
           <i class='bx bxl-linkedin-square' onClick={() => PaginaWeb('https://www.linkedin.com/in/stefanie-silva-de-oliveira/')} ></i>
           <i class='bx bxl-instagram' onClick={() => PaginaWeb('https://www.instagram.com/stefoliver__/?next=%2F')} ></i>
           </Icones>
        </Container>
    )
}

export default Header;