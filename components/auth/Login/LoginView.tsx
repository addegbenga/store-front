import Button from '@/components/ui/Button';

export interface ILoginProps {}

const LoginView: React.FC<ILoginProps> = () => {
  return (
    <div>
      <div>
        <h1>LOGIN</h1>
        <p>Enter store using password</p>
      </div>
      <div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" />
        </div>
      </div>
      <Button>SIGN IN</Button>
      <Button>CREATE ACCOUNT</Button>
    </div>
  );
};
export default LoginView;
