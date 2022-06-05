import React from 'react';
import { NextPageWithLayout } from '../page';
import dynamic from 'next/dynamic';
const MainLayout = dynamic(
  () => import('@/components/commons/Layout/MainLayout'),
  { ssr: false }
);
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
