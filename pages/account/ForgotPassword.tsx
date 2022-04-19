import React from 'react';
import { NextPageWithLayout } from '../page';
import MainLayout from '@/components/commons/Layout/MainLayout';
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
