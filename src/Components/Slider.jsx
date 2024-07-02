import React from "react";
import { CarroselConteiner,CustomNextButton,CustomPrevButton,H1} from "../styles";
import {Swiper,SwiperSlide,} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import logoCss from '../assets/logo-css.png';
import logoHtml from '../assets/logo-html.png';
import logoJs from '../assets/logo-js.png';
import logoTs from '../assets/logo-ts.png';
import logoNode from '../assets/logo-node.png';
import logoReact from '../assets/logo-react.png';

function Slider() {
  
    return(
    
    <CarroselConteiner>  
    <Swiper
    modules={[Navigation,Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation={{
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    }}
    pagination={{ clickable: true }}

    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
      480: {
        slidesPerView: 3,
        spaceBetween: 2,
      }, 
    }}
  >
  
   
    <SwiperSlide>
    <img  className="logoEdit" src={logoCss} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img className="logoEdit" src={logoHtml} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="logoEdit" src={logoJs} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="logoEdit"src={logoNode} alt="" />
    </SwiperSlide>
    
    <SwiperSlide>
    <img  className="logoEdit"src={logoTs} alt="" />
    </SwiperSlide>

    <SwiperSlide>
    <img  className="logoEdit" src={logoReact} alt="" />
    </SwiperSlide>

  

    </Swiper>
    <div>
    <CustomNextButton className="swiper-button-next-custom" />
    <CustomPrevButton className="swiper-button-prev-custom" />
   </div>
    </CarroselConteiner>
   
)

}

export default Slider;