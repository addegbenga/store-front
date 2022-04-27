import React from 'react';
import Image from 'next/image';

interface IProductCardProps {
  price: string;
  desc: string;
  imgSrc: string;
  variant?: boolean;
}
const ProductCard: React.FC<IProductCardProps> = ({ price, desc, imgSrc }) => {
  return (
    <div className="flex gap-3 flex-col">
      <div className="h-[23rem] brightness-95 w-[18rem]    ">
        <Image
          src={imgSrc}
          height={100}
          width={100}
          layout="fill"
          alt="product card"
        />
      </div>
      <div className="mb-10">
        <p className="text-black text-sm text-opacity-70">{desc}</p>
        <div className="flex items-end">
          <span className="text-black font-bold text-opacity-60">$</span>
          <h1 className="font-bold text-black text-opacity-60">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
