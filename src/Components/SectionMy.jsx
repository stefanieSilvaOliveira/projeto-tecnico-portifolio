import React,{useEffect} from "react";
import ScrollReveal from "scrollreveal";

import {ContainerTop} from '../styles';


function SectionMy(){
    
    useEffect(() => {
        ScrollReveal().reveal('.text-top', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-out',
        });
    }, []);
      
    return(
        <ContainerTop className="text-top">
         <h1>Conheça um pouco sobre mim</h1>
        </ContainerTop>
           
    )
}

export default SectionMy;

