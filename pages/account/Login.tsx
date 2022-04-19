import React from 'react';
import { NextPageWithLayout } from '../page';
import MainLayout from '@/components/commons/Layout/MainLayout';
import LoginView from '@/components/auth/Login/LoginView';
import ForgotPasswordView from '@/components/auth/ForgotPassword/ForgotPasswordView';
import NavDir from '@/components/commons/Nav/NavDir';

const Login: NextPageWithLayout = () => {
  return (
    <div>
      <NavDir />
      <LoginView />
      <ForgotPasswordView />
    </div>
  );
};
export default Login;

Login.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
