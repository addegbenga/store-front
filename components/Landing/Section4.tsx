import React from 'react';
import Image from 'next/image';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import Card from '@/components/ui/Card/Cards';

export default function Gridx4() {
  function playPause() {
    const myVideo: any = document.getElementById('video1');
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  return (
    <div className="bg-white">
      <div className="grid mt-1 gap-1 md:grid-cols-2  mx-1">
        <div className="md:h-full  h-[12rem]">
          <video
            style={{ cursor: 'pointer' }}
            onClick={playPause}
            id="video1"
            autoPlay
          >
            <source src="/assets/production.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>

        <div className="grid md:grid-cols-2  gap-1 ">
          <div className="grid  gap-1 ">
            <Card
              layoutProps="fill"
              imgProp="bg"
              className="  bg-[#b99d6b]  absolute w-full h-full  "
              imgSrc=""
              isBg={true}
            >
              <div className="md:h-full h-[15rem] relative z-10  p-3">
                <div className="border h-full flex justify-center items-center  flex-col gap-3 ">
                  <AiOutlineTwitter size={40} color="white" />
                  <div>
                    <h1 className="text-white text-2xl text-center">
                      FOLLOW US ON
                    </h1>
                    <h1 className="text-white text-2xl text-center">TWITTER</h1>
                  </div>
                </div>
              </div>
            </Card>
            <Card
              layoutProps="fill"
              imgProp="bg"
              className=" bg-[#43474d] absolute w-full h-full  "
              imgSrc=""
              isBg={true}
            >
              <div className="md:h-full h-[15rem] relative z-10  p-3">
                <div className="border h-full flex justify-center items-center  flex-col gap-2 ">
                  <FaFacebookF size={40} color="white" />
                  <div>
                    <h1 className="text-white text-2xl text-center">
                      FOLLOW US ON
                    </h1>
                    <h1 className="text-white text-2xl text-center">
                      FACEBOOK
                    </h1>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid  gap-1">
            <div className="grid ">
              {/* <Card
                className="w-full h-full absolute"
                imgProp="banner"
                imgSrc="/assets/banner_3.jpg"
                layoutProps="fill"
              >
                <div className="md:h-full relative z-10 h-[12rem]">
                
                </div>
              </Card> */}
              <Card
                layoutProps="fill"
                imgProp="banner"
                className=" absolute w-full h-full  "
                imgSrc="/assets/banner_3.jpg"
              >
                <div className="flex flex-col gap-1 relative z-10 h-[30rem] justify-center items-center  md:h-full">
                  <Image
                    src="/assets/insta.svg"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="logo"
                  />

                  <div>
                    <h1 className="text-white text-2xl text-center">
                      FOLLOW US ON
                    </h1>
                    <h1 className="text-white text-2xl text-center">
                      INSTAGRAM
                    </h1>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
