import React from 'react';
import { NextPageWithLayout } from '../page';
import MainLayout from '@/components/commons/Layout/MainLayout';
import NavDir from '@/components/commons/Nav/NavDir';
import ProductDetail from '@/components/ui/Product/ProductDetail';

const index: NextPageWithLayout = () => {
  return (
    <div>
      <NavDir />
      <ProductDetail />
    </div>
  );
};

export default index;

index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
