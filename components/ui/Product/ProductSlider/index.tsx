import { useState } from 'react';
import './Product.module.css';
import { useKeenSlider } from 'keen-slider/react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

const productImage = [
  {
    id: 1,
    img: '/assets/mp4.webp',
  },
  {
    id: 2,
    img: '/assets/mp4.webp',
  },
  {
    id: 3,
    img: '/assets/mp3.webp',
  },
];

export default function Index() {
  // eslint-disable-next-line no-unused-vars
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="lg:w-[35rem] h-[27rem] lg:gap-3 flex lg:h-[43rem]  ">
      {/* slider thumbnail start */}
      <div className="  hidden lg:flex flex-col gap-5 my-4">
        {productImage.map((item, index) => (
          <div key={item.id}>
            <div
              onClick={() => {
                instanceRef.current?.moveToIdx(index);
              }}
              className="keen-slider__slide cursor-pointer number-slide1 w-12  "
            >
              <Image
                layout="responsive"
                width="100%"
                height="100%"
                alt="product img"
                src={item.img}
              />
            </div>
          </div>
        ))}
      </div>
      {/* slider thumbnail end */}
      <div ref={sliderRef} className="keen-slider w-20 h-full relative">
        <div className="bg-red-100 h-full flex items-center">
          <button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            className="absolute hidden lg:block  text-black  z-10"
          >
            <BsChevronLeft className="text-4xl" />
          </button>
        </div>
        {productImage.map((item, index) => (
          <div key={index} className="keen-slider__slide number-slide1 ">
            <Image layout="fill" alt="product img" src={item.img} />
          </div>
        ))}
        <div className="bg-red-100 h-full flex items-center">
          <button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            className="absolute hidden lg:block text-black right-0  z-10"
          >
            {' '}
            <BsChevronRight className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
