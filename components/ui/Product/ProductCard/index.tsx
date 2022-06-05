import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

interface IProductCardProps {
  price: string;
  title: string;
  imgSrc: string;
  variant?: boolean;
}
const ProductCard: React.FC<IProductCardProps> = ({ price, title, imgSrc }) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer">
      <Link href={`/products/${title}`} passHref={true}>
        <div className="lg:h-[23rem] h-[14rem] brightness-95 lg:w-[20rem] relative   ">
          <Image src={imgSrc} layout="fill" alt="product card" />

          <button className="absolute z-20 flex items-center justify-center p-2 bg-white border border-gray-100 rounded-full shadow-xl cursor-default right-2 bottom-2">
            <AiOutlineHeart className="text-2xl" />
          </button>
        </div>
      </Link>
      <div className="">
        <p className="text-sm text-black text-opacity-70">{title}</p>
        <div className="flex items-end">
          <span className="font-bold text-black text-opacity-60">$</span>
          <h1 className="font-bold text-black text-opacity-60">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
