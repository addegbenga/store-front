import React from 'react';
import Filterbar from '@/components/commons/FilterBar';
import ProductCard from '../ProductCard';
import { productData } from 'utils/data';

interface IProductGridProps {
  variant?: 'layout1' | 'layout2';
  className?: string;
}

const index: React.FC<IProductGridProps> = ({ props }: any) => {
  console.log(productData);
  return (
    <div>
      <Filterbar />
      <div>
        <div className="grid grid-cols-4  my-14 container  mx-auto">
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      productData,
    },
  };
}
export default index;
