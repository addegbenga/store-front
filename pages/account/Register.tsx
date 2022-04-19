import React from 'react';
import { NextPageWithLayout } from '../page';
import MainLayout from '@/components/commons/Layout/MainLayout';
import RegisterView from '@/components/auth/Register/RegisterView';
import NavDir from '@/components/commons/Nav/NavDir';

const Register: NextPageWithLayout = () => {
  return (
    <div className=" 2xl:container mx-auto ">
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
