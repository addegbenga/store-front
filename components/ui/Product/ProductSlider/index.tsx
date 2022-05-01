import './Product.module.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

export default function Index() {
  const [ref] = useKeenSlider<HTMLDivElement>();
  return (
    <div className="w-[37rem] gap-3 flex h-[43rem]  ">
      {/* slider thumbnail start */}
      <div className=" flex flex-col gap-5 my-4">
        <div className="keen-slider__slide cursor-pointer number-slide1 w-12 ">
          <Image
            layout="responsive"
            width={100}
            height={100}
            alt="product img"
            src="/assets/banner_2.jpg"
          />
        </div>
        <div className="keen-slider__slide cursor-pointer number-slide1 w-12 ">
          <Image
            layout="responsive"
            width={100}
            height={100}
            alt="product img"
            src="/assets/banner_2.jpg"
          />
        </div>
        <div className="keen-slider__slide cursor-pointer number-slide1 w-12 ">
          <Image
            layout="responsive"
            width={100}
            height={100}
            alt="product img"
            src="/assets/banner_2.jpg"
          />
        </div>
      </div>
      {/* slider thumbnail end */}
      <div ref={ref} className="keen-slider w-20 h-full">
        <div className="keen-slider__slide number-slide1 ">
          <Image layout="fill" alt="product img" src="/assets/banner_2.jpg" />
        </div>
        <div className="keen-slider__slide number-slide1 ">
          <Image layout="fill" alt="product img" src="/assets/banner_3.jpg" />
        </div>
        <div className="keen-slider__slide number-slide1 ">
          <Image layout="fill" alt="product img" src="/assets/banner_13.jpg" />
        </div>
      </div>
    </div>
  );
}
