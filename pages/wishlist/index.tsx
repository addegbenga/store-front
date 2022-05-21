import React from 'react';
import { NextPageWithLayout } from '../page';
import MainLayout from '@/components/commons/Layout/MainLayout';
import WishlistView from '@/components/commons/Wishlist';
import NavDir from '@/components/commons/Nav/NavDir';

const Wishlist: NextPageWithLayout = () => {
  return (
    <div>
      <NavDir />
      <WishlistView />
    </div>
  );
};
export default Wishlist;

Wishlist.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
