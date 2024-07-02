import styled from 'styled-components';



export const Container = styled.div`
           display: flex;
           align-items: center;
           justify-content: space-around;
           width: 100%;
           height: 80px;
           padding: 20px 0 20px 20px;
           background-color: #000;


    @media (max-width: 480px) {
          width: 100%;
        }

           ul{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 150px;

            @media (max-width: 480px) {
                margin-right: 0;
    }
   }
       li{
            color: #FFF;
            list-style: none;
            margin: 45px 40px 40px 45px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 400; 
            transition: 0.3s ease;

            @media (max-width: 480px) {
                margin: 5px 10px;
                font-size: 14px;
            }
            
            
            &:active {
            transform: scale(0.9);
        } 

}
         
`;

export const Logo = styled.div`

display: flex;
align-items: center;
justify-content: center;  

img{
    width: 100px;
    height: 100px;
    margin: 50px 90px 30px 20px;
    cursor: pointer;

    @media (max-width: 480px) {
      width: 80px;
      height: 80px;
      margin: 0 10px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
}
`
export const Icones = styled.div`
 
i{
    color: #FFF;
    font-size: 28px;
    margin: 20px 20px 20px 30px;
    cursor: pointer;
    transition: color 0.3s ease, text-shadow 0.3s ease; /* Aqui o objetivo é que quando o 
                                                        usuário clique em cima dos icones eles mudem pra uma cor diferente
                                                        e tenham um efeito brilhante */
    &:hover {
            color: #e53939;
            text-shadow: 0 0 10px #e53939; 
        }

        &:active {
            transform: scale(0.9);
        }

        @media (max-width: 480px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin: 0 5px;
    }
}
`
export const ContainerSection = styled.div`
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: 100%;
         height: 700px;

         @media (max-width: 480px) {
          flex-direction: column;
          height: auto;
       }
         

`     
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  h2{
            color:  #e53939;
            font-weight: bolder;
            font-size: 25px;
            margin-top: -10px;
            margin-left: 50px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: .5em;
            border-width: 4px 0;
            padding: 1.5em 0em;
            width: 100%;
            text-align: center;
            display: inline-block;

            @media (max-width: 480px) {
              font-size: 18px;
              text-align: center;
              margin-left: 0;
    }

    }          
`;


export const H1 = styled.h1`
           width: 400px;
           color: #000;
           font-size: 60px;
           font-weight: bolder;
           font-family: 'Personalizada';
           text-align: center;
           margin-top: -130px;
           margin-left: 200px;
           cursor: pointer;


  @media (max-width: 480px) {
    width: 50%;
    font-size: 45px;
    margin-top: 100px;
    margin-left: 100px;
  }

`
export const P = styled.p`
     text-align: center;
     font-size: 16px;
     font-weight: 400;
     color: #000;
     cursor: pointer;
     width: 450px;
     height: 100px;
     margin-left: 160px;
     margin-top: -10px;
     letter-spacing: 1px;

     span{
     color: #e53939;
     font-weight: bold;
     }

     @media (max-width: 480px) {
    width: 80%;
    margin-left: 40px;
    font-size: 15px;
    margin-bottom: 50px;
  }
 

`
export const ImageSection = styled.image`
         display: flex;
         justify-content: center;
         align-items: center;  
         margin-right: 200px;
         margin-top: -120px;

    img {
    width: 330px;
    height: 330px;
    background-color: #000;
   
    margin-top: 20px;
    margin-left: 100px;
    border-radius: 14em;
    box-shadow: 5px 5px 50px rgba(252,5,5,0.699);
    animation: animateBg 5s linear infinite;
    
    cursor: pointer; 

    @media (max-width: 480px) {
     
      height: auto;
      width: 120%;
      margin-top: 200px;
      margin-left: 150px;
    }
  }          
`

export const ContainerText = styled.div`
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
       

        h1{
         
          margin-top: -20px;
          color:  #000;
          font-size: 30px;
          font-weight: bolder;
          font-family: 'Personalizada';

          }

          @media (max-width: 480px) {
              
               margin-top: 180px;
               margin-left: 0;
               font-size: 22px;
    
        }

        p{
          margin-top: 18px;
          margin-bottom: 80px;
          color: #000;
          text-align: center;
          font-size: 15px;
          font-weight: 300;
          width: 300px;
  
        }      
`

export const CarroselConteiner = styled.div`
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 50%;
          right: 50%;
          margin-top: 30px;
          transform: translate(-50%, -50%);
          min-width: 650px;
          cursor: pointer;
        
         
           

          @media (max-width: 480px) {
                  width: 100%;
                  height: auto;
                  min-width: auto; 
                  margin-top: 10px;
                }
                 
            
            .logoEdit{
             height: 100px;
             width: 100px;
             border-radius: 5px;
             object-fit: cover;
             object-position: center;

             @media (max-width: 480px) {
              
              height: 80px;
              width: 80px;
   } 
            }               
`

export const CustomNextButton = styled.div`
color: #FFF;
font-weight: bolder;
background-color: #000;
padding: 7px;
border-radius: 50%;
position: absolute;
right: 10px;
z-index: 10;
transition: transform 0.2s;
cursor: pointer;

&:active {
    transform: scale(0.9);
  }

&::after {
  content: '>';
}

`;

export const CustomPrevButton = styled.div`
color: #FFF;
background-color: #000;
padding: 7px;
padding: 8px;
border-radius: 50%;
position: absolute;
top: 50%;
left: 10px;
z-index: 10;
transition: transform 0.2s;
cursor: pointer;

  &:active {
    transform: scale(0.9);
  }

  &::after {
  content: '<';
}
`;

export const ContainerTop = styled.div`
          
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color:  #fff;
          margin-top: 180px;
          position: relative;
         

          h1{
            margin-top: 5px;
            text-align: center;
            color: #000;
            font-family: 'Title';
            font-size: 40px;
   
          }

          @media (max-width: 480px) {
    
            font-size: 50px;
            height: 100%;
            margin-bottom: 200px;
            
            h1{
              color: #000;
              font-size: 50px;
              text-align: center;
            }
            
    }

  
`;

export const ContainerCard = styled.div`
         display: flex;
         align-items: center;
         justify-content: center;
         height: 80vh;
         gap: 80px;
        
        
         @media (max-width: 480px) {
            
            flex-direction: column;
            align-items: center;
            width: 100%; 
            max-width: none;
            gap: 15px;
            padding: 10px;
            }
`
export const Card = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        gap: 10px;
        width: 300px;
        height: 280px;
        padding: 30px;
        background-color: #e53939;
        box-shadow: 0px 0px 12px 4px  rgba(0,0,0,0.1);
        position: relative;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 480px) {
    
          width: 100%; 
          height: auto;
          max-width: none; 
          padding: 20px; 
          gap: 15px; 
    }

       .image-shitzu{
        height: 100px;
        width: 100px;

        @media (max-width: 480px) {
    
                height: auto;
    }
       }
       .image-choco{
        height: 80px;
        width: 80px;

        @media (max-width: 480px) {
              height: auto;
}
       }
       
        h1{
        font-size: 18px;
        color: #000;
        font-family: 'Personalizada';

        @media (max-width: 468px) {
    
              font-size: 20px;
              text-align: center;    
}
       }
       
       p{
         font-size: 15px;
         font-weight: 300;
         color: #fff;

         @media (max-width: 480px) {
    
          text-align: center;
          font-size: 16px;
          
}
       }
        

`
           