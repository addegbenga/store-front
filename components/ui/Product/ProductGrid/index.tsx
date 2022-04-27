import React from 'react';
import Filterbar from '@/components/commons/FilterBar';
import ProductCard from '../ProductCard';
import { productData } from 'utils/data';

interface IProductGridProps {
  variant?: 'layout1' | 'layout2';
  className?: string;
}

const index: React.FC<IProductGridProps> = () => {
  return (
    <div>
      <Filterbar />
      <div>
        <div className="grid grid-cols-4  my-14 container  mx-auto">
          {productData.map((item, index) => (
            <ProductCard
              desc={item.title}
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
