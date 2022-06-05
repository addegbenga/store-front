import React from 'react';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';
const MainLayout = dynamic(
  () => import('@/components/commons/Layout/MainLayout'),
  { ssr: false }
);
import ForgotPasswordView from '@/components/auth/ForgotPassword';
import NavDir from '@/components/commons/Nav/NavDir';

const ForgotPassword: NextPageWithLayout = () => {
  return (
    <div>
      <NavDir />
      <ForgotPasswordView />
    </div>
  );
};
export default ForgotPassword;

ForgotPassword.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
