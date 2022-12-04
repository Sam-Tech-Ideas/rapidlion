import React from 'react'
import { Carousel } from 'flowbite-react';
import image from '../assets/rt.jpg'
import image2 from '../assets/tpo.jpg'
import image3 from '../assets/foam_ban.png'
const CarouselSIde = () => {
  return (
    <div >
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel className='' slideInterval={5000}>
          <img src={image} alt="..." className='z-2 h-full'/>
          <img src={image2} alt="..."  className=' bg-cover bg-center'/>
          <img src={image3} alt="..." className=' bg-cover bg-center'/>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselSIde