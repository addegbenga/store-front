import React from 'react';
import { MySwiper1 } from './Swiper';
import Card from '@/components/ui/Card/Cards';

export default function Gridx2() {
  return (
    <div>
      <div className="md:grid md:grid-cols-3 gap-1 mt-1 md:h-[70vh]  ">
        <div className="gap-1 md:grid md:col-span-2">
          <div className="grid gap-1 md:row-span-3 md:grid-cols-2 ">
            <Card
              className="relative w-full h-[20rem] md:h-full"
              imgProp="banner"
              layoutProps="fill"
              imgSrc="/assets/banner_2.jpg"
            >
              <div className="flex  absolute top-0 left-0 right-0 bottom-0 m-auto z-10 flex-col h-[20rem] md:h-full gap-4 text-white justify-center items-center">
                <h1 className="text-xl text-center md:text-2xl">
                  A RELAXED ELEGANCE
                </h1>
                <button className="bg-[#b99d6b] text-sm px-5 py-2 text-white">
                  ALL STORIES
                </button>
              </div>
            </Card>
            <Card
              className="absolute bg-[#ceb180] w-full h-full"
              imgProp="banner"
              layoutProps="fill"
              imgSrc=""
              isBg={true}
            >
              <div className="md:h-full relative z-10 h-[25rem] p-5">
                <div className="relative flex items-center justify-center h-full gap-3 border ">
                  <h1 className="text-white text-7xl lg:text-[8rem] md:leading-[9rem] border-y border-double border-y-4 font-bold">
                    SALE
                  </h1>
                </div>
              </div>
            </Card>
          </div>
          <div className="hidden md:grid ">
            <Card
              className="absolute bg-[#43474d] w-full h-full"
              imgProp="banner"
              layoutProps="fill"
              imgSrc=""
              isBg={true}
              // background="/assets/banner_2.jpg"
            >
              <div className="h-full p-5">
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 border ">
                  <h1 className="text-2xl text-white">
                    FREE SHIPPING ON OVER $100
                  </h1>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* <Cards width={100}> */}
        <div className=" relative h-[25rem]  md:h-full">
          <MySwiper1 />
        </div>
        {/* </Cards> */}

        <div className="grid md:hidden ">
          <Card
            className="absolute bg-[#43474d] w-full h-full"
            imgProp="banner"
            layoutProps="fill"
            imgSrc=""
            isBg={true}
          >
            <div className="md:h-full relative z-10 h-[10rem] p-5">
              <div className="flex flex-col items-center justify-center h-full border ">
                <h1 className="text-white">FREE SHIPPING ON OVER $100</h1>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
