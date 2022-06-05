import Image from 'next/image';
import Card from '@/components/ui/Card/Cards';
import { MySwiper } from './Swiper';
import { RiScissorsFill } from 'react-icons/ri';

const Section1: React.FC = () => {
  return (
    <div className="bg-white ">
      <div className=" md:grid gap-1 md:grid-cols-2  md:h-[100vh] mx-1">
        <div className="h-[28rem] mb-1  md:h-full">
          <MySwiper />
        </div>
        {/* </Cards> */}
        <div className="grid gap-1 md:grid-cols-2 ">
          <div className="grid gap-1 ">
            <Card
              layoutProps="fill"
              imgProp="banner"
              className="relative w-full h-[30rem] md:h-full"
              imgSrc="/assets/share_insta_1.jpg"
            >
              <div className="flex flex-col gap-1 absolute top-0 bottom-0 right-0 left-0 m-auto z-10 h-[25rem] justify-center items-center  md:h-full">
                <Image
                  src="/assets/insta.svg"
                  width={40}
                  height={40}
                  layout="fixed"
                  alt="logo"
                />
                <h1 className="text-2xl text-center text-white md:text-2xl ">
                  SHARE YOUR STORY
                </h1>
                <span className="text-white">#insta_vendor</span>
              </div>
            </Card>
            <Card
              layoutProps="fill"
              imgProp="banner"
              className="relative w-full h-[33rem] md:h-full "
              imgSrc="/assets/banner_3.jpg"
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center m-auto text-white md:h-full">
                <h1 className="flex items-center px-20 text-2xl font-semibold tracking-wider text-center lg:text-6xl md:px-0 md:tracking-normal">
                  TIMELESS DESIGN
                </h1>
              </div>
            </Card>
          </div>
          <div className="grid gap-1">
            <div className="grid row-span-2">
              <Card
                layoutProps="fill"
                imgProp="banner"
                className="relative w-full h-[30rem] md:h-full "
                imgSrc="/assets/slide_4_600x.jpg"
              >
                <div className="md:h-full  absolute top-0 right-0 left-0 bottom-0 m-auto z-10 h-[25rem] flex w-full text-center text-white justify-center items-center ">
                  <h1 className="text-xl md:text-5xl">LIMITED EDITION</h1>
                </div>
              </Card>
            </div>
            <div className="grid md:row-span-7">
              <Card
                layoutProps="fill"
                imgProp="bg"
                className=" bg-[#43474d] absolute w-full h-full  "
                imgSrc=""
                isBg={true}
              >
                <div className="md:h-full h-[25rem] relative z-10  p-5">
                  <div className="flex flex-col items-center justify-center h-full gap-3 border ">
                    <RiScissorsFill size={36} color="white" />
                    <h1 className="text-2xl text-center text-white">
                      CUSTOM TAILORED
                    </h1>
                    <button className="bg-[#b99d6b] px-3 py-2 text-white">
                      Made to Fit
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
