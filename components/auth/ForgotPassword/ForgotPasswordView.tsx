import Button from '@/components/ui/Button';
import React from 'react';
interface IForgotPasswordProps {}
const ForgotPasswordView: React.FC<IForgotPasswordProps> = () => {
  return (
    <div>
      <div>
        <h1>Reset your Password</h1>
        <p>we will send you an email to reset your password</p>
      </div>
      <div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" />
        </div>
        <Button>SUBMIT</Button>
      </div>
    </div>
  );
};

export default ForgotPasswordView;
