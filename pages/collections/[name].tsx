import React from 'react';
import { NextPageWithLayout } from '../page';
import MainLayout from '@/components/commons/Layout/MainLayout';
import NavDir from '@/components/commons/Nav/NavDir';
import ProductGrid from '@/components/ui/Product/ProductGrid';

const Category: NextPageWithLayout = () => {
  return (
    <div>
      <NavDir />
      <ProductGrid />
    </div>
  );
};

export default Category;

Category.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
