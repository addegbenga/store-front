import React from 'react';
import Cards from '@/components/ui/Card';
import { MySwiper2 } from './Swiper';

export default function Gridx3() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 mt-1 md:h-[80vh]">
        <Cards width={100} height={27} background="/assets/banner_2.jpg">
          <div className="md:h-full h-[28rem]">
            <MySwiper2 />
          </div>
        </Cards>
        <Cards
          width={100}
          height={27}
          background="/assets/product4_01_78f7c272-feef-40c6-bbed-9cf1fdd77341_400x.jpg"
        >
          <div className="md:h-full h-[28rem]">
            <h1>A RELAXED ELEGANCE</h1>
          </div>
        </Cards>
      </div>
    </div>
  );
}
