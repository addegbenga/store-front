import React from 'react';
import Filterbar from '@/components/commons/FilterBar';
import ProductCard from '../ProductCard';
import { productData } from 'utils/data';

interface IProductGridProps {
  variant?: 'layout1' | 'layout2';
  className?: string;
}

const index: React.FC<IProductGridProps> = () => {
  console.log(productData);
  return (
    <div>
      <Filterbar />
      <div>
        {/* Todo: sort and toggle switcher on mobile create a separate component for it */}
        <div className="flex md:hidden bg-gray-100 p-2 border-b  items-center ">
          <button className="bg-gray-100 w-full text-sm text-gray-500 font-semibold">
            Sort
          </button>
          <div className="h-5 w-1 bg-gray-400"></div>
          <button className="bg-gray-100 text-sm w-full  text-gray-500 font-semibold">
            Filter
          </button>
        </div>
        {/* Todo: sort and toggle switcher on mobile create a separate component for it */}
        <div className="grid gap-4 px-2 lg:px-0 lg:gap-0 grid-cols-2 lg:grid-cols-4  my-14 container  mx-auto">
          {productData.map((item: any, index: any) => (
            <ProductCard
              title={item.title}
              price={item.price}
              imgSrc={item.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
