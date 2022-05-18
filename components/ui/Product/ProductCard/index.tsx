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
    <div className="flex gap-3 flex-col cursor-pointer">
      <div className="lg:h-[23rem] h-[14rem] brightness-95 lg:w-[20rem] relative   ">
        <Link href={`/products/${title}`} passHref={true}>
          <Image src={imgSrc} layout="fill" alt="product card" />
        </Link>
        <button className="bg-white shadow-xl border cursor-default border-gray-100 rounded-full p-2  z-20 absolute right-2 bottom-2 flex justify-center items-center">
          <AiOutlineHeart className="text-2xl" />
        </button>
      </div>
      <div className="">
        <p className="text-black text-sm text-opacity-70">{title}</p>
        <div className="flex items-end">
          <span className="text-black font-bold text-opacity-60">$</span>
          <h1 className="font-bold text-black text-opacity-60">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
