import React, {useEffect} from "react";
import ScrollReveal from "scrollreveal";
import {ContainerCard,Card} from '../styles';

import ImageDog  from '../assets/image-dog.png';
import ImageLiteratura from '../assets/image-livro.png';
import ImageBolo from '../assets/image-bolo.png';


function SectionCard(){
    
    useEffect(() => {
        ScrollReveal().reveal('.card-container',{
            delay: 200,
            distance: '50px',
            origin: 'right',
            easing: 'ease-out',
        });
    }, []);

    return(
        
        <ContainerCard className="card-container">
        <Card>
        <img src={ImageLiteratura} alt=""></img>
        <h1>Trabalho Voluntário</h1>
        <p>Realizo um trabalho volutário Biblico,onde ajudo diversos
         tipos de pessoas a fazerem um estudo profundo da Biblia.   
        </p> 
        </Card>    
        
        <Card>
        <img className="image-shitzu" src={ImageDog} alt=""></img>
        <h1>Paixão por animais</h1>
        <p>
        Sou apaixonada por animais,tenho uma cachorrinha
        chamada Pedrita,considero ela uma das minhas melhores
        compahias.  
        </p> 
        </Card>   

        <Card>
        <img className="image-choco" src={ImageBolo} alt=""></img>
        <h1>Doces</h1>
        <p>
         Gosto muito de cozinhar e fazer pratos diferentes na cozinha,
         e uma das minhas especialidades são bolos e outros tipos de doces,
         já tive uma mini lojinha de bolos de pote.
        </p> 
        </Card> 
        </ContainerCard>
 
    )
}

export default SectionCard;