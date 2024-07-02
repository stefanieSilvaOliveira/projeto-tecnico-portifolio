import React, {useEffect} from "react";
import ScrollReveal from "scrollreveal";
import {H1,P,ContainerSection,TextContainer,ImageSection} from "../styles"

import ImageMy from '../assets/image-my.png'



function Section(){
    
    useEffect(() => {
        ScrollReveal().reveal('.text-container', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-out',
        });
        ScrollReveal().reveal('.image-section', {
            delay: 400,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-out',
        });
    }, []);
    
    
    return(
        <ContainerSection>
        <TextContainer className="text-container">
        <H1>
        Stefanie 
        Silva
        </H1>
        <h2>
        Desenvolvedora Front End
        </h2>  
        <P>
        Tenho 30 anos e sou apaixonada pelo mundo da tecnologia,principalmente quando o assunto é
        desenvolvimento.Atualmente tenho como objetivo ganhar experiência profissional na área e
        acredito que fazer parte da equipe <span>Código Certo</span> vai me ajudar a ter esse desenvolvimento
        de forma humanizada e com oportunidades.
        </P>   
        </TextContainer>

        <ImageSection className="image-section">
        <img src={ImageMy} alt="image-main"></img>   
        </ImageSection>

        </ContainerSection>
    )
}

export default Section;