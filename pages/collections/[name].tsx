import React from 'react';
import { NextPageWithLayout } from '../page';
import MainLayout from '@/components/commons/Layout/MainLayout';
import NavDir from '@/components/commons/Nav/NavDir';
import FilterBar from '@/components/commons/FilterBar';

const Category: NextPageWithLayout = () => {
  return (
    <div>
      <NavDir />
      <FilterBar />
      Category
    </div>
  );
};

export default Category;

Category.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
