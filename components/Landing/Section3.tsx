import React from 'react';
import Card from '@/components/ui/Card/Cards';
import { MySwiper2 } from './Swiper';

export default function Gridx3() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 mt-1 md:h-[80vh]">
        <div className="md:h-full h-[28rem]">
          <MySwiper2 />
        </div>

        <Card
          className="w-full h-full absolute"
          imgProp="banner"
          imgSrc="/assets/product4_01_78f7c272-feef-40c6-bbed-9cf1fdd77341_400x.jpg"
          layoutProps="fill"
        >
          <div className="md:h-full relative z-10 h-[28rem]">
            <h1>A RELAXED ELEGANCE</h1>
          </div>
        </Card>
      </div>
    </div>
  );
}
