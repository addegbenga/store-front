import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Link from 'next/link';

const MySwiper = () => {
  return (
    <Swiper
      style={{ height: '100%', width: '100%' }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{
        clickable: true,
      }}
      draggable="true"
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_1.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-500  duration-700 '
                  : 'h-[25rem] opacity-0 ease-in-out delay-500  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <Link passHref={true} href="/collections/wearable">
                  <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                    TAKE A LOOK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_2.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-500  duration-700 '
                  : 'h-[25rem] opacity-0 ease-in-out delay-500  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_3.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-500  duration-700 '
                  : 'h-[25rem] opacity-0 ease-in-out delay-500  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

const MySwiper1 = () => {
  return (
    <Swiper
      style={{ height: '100%', width: '100%' }}
      grabCursor={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{
        clickable: true,
      }}
      draggable="true"
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_2.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-200  duration-700 '
                  : 'h-[25rem] opacity-0  ease-in-out delay-100  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_7_1000x.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-200  duration-700 '
                  : 'h-[25rem]  opacity-0 ease-in-out delay-100  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_8_1000x.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-200  duration-700 '
                  : 'h-[25rem]  opacity-0 ease-in-out delay-100  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
const MySwiper2 = () => {
  return (
    <Swiper
      style={{ height: '100%', width: '100%' }}
      //   className={styles.swiper-pagination}

      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      pagination={{
        clickable: true,
      }}
      draggable="true"
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_2.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-200  duration-700 '
                  : 'h-[25rem] opacity-0  ease-in-out delay-100  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_7_1000x.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-200  duration-700 '
                  : 'h-[25rem]  opacity-0 ease-in-out delay-100  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: 'url(/assets/slide_8_1000x.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: 'center',
        }}
        className="h-full bg-red-100  flex justify-center items-center  "
      >
        {({ isActive }) => (
          <div className="relative ">
            <div
              className={
                isActive
                  ? 'opacity-100     ease-in-out delay-200  duration-700 '
                  : 'h-[25rem]  opacity-0 ease-in-out delay-100  duration-700  md:h-full'
              }
            >
              {/* <h1>Timeless Design</h1> */}
              <div className="  text-white z-10 gap-4 flex flex-col justify-center items-center   ">
                <h1 className="lg:text-[10rem] text-7xl font-bold lg:leading-[8rem]">
                  300+
                </h1>
                <h1 className="md:text-2xl text-sm text-center">
                  NEW STYLES JUST LANDED
                </h1>
                <button className="bg-[#b99d6b] text-sm md:text-base w-11/12 p-2">
                  TAKE A LOOK
                </button>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export { MySwiper, MySwiper1, MySwiper2 };
