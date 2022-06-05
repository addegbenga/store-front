import React from 'react';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';
const MainLayout = dynamic(
  () => import('@/components/commons/Layout/MainLayout'),
  { ssr: false }
);
import LoginView from '@/components/auth/Login/LoginView';
import NavDir from '@/components/commons/Nav/NavDir';

const Login: NextPageWithLayout = () => {
  return (
    <div>
      <NavDir />
      <LoginView />
    </div>
  );
};
export default Login;

Login.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
