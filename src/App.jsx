import React from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Slider from "./Components/Slider";
import SliderText from "./Components/SliderText";
import SectionMy from "./Components/SectionMy";
import SectionCard from "./Components/SectionCard";


function App(){
    return(
        <div>
        <Header></Header>  
        <Section></Section> 
        <SliderText></SliderText> 
        <Slider></Slider>
        <SectionMy></SectionMy>
        <SectionCard></SectionCard>
        </div>
    )
}

export default App;