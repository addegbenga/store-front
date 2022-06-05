import React from 'react';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';
const MainLayout = dynamic(
  () => import('@/components/commons/Layout/MainLayout'),
  { ssr: false }
);
import RegisterView from '@/components/auth/Register/RegisterView';
import NavDir from '@/components/commons/Nav/NavDir';

const Register: NextPageWithLayout = () => {
  return (
    <div className="mx-auto 2xl:container">
      <NavDir />
      <RegisterView />
      {/* <ForgotPasswordView /> */}
    </div>
  );
};
export default Register;

Register.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
