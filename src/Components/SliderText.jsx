import React,{useEffect} from "react";
import ScrollReveal from "scrollreveal";
import {ContainerText} from '../styles';


function SliderText(){
    
    useEffect(() => {
        ScrollReveal().reveal('.text-container-section', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-out',
        });
        
        });
    
    
    return(
       <ContainerText className="text-container-section">
        <h1>Habilidades Interpessoais</h1>
        <p>Quero destacar as tecnologias que tenho experiência,
            através de projetos pessoais.
        </p>
        </ContainerText>
    )
}

export default SliderText;







