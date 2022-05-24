import Link from 'next/link';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Button from '@/components/ui/Button';
import { auth } from '../../../firebase';
export interface ILoginProps {}

export type IStateInput = {
  email: string;
  password: string;
};

const LoginView: React.FC<ILoginProps> = () => {
  const [formValue, setFormValues] = useState<IStateInput>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      setLoading(true);
      const result = await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormValues({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container flex mx-auto ">
      <div className="px-4 mt-10 lg:w-1/2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 md:h-9  bg-[#b99d6b]"></div>
          <h1 className="text-2xl md:text-4xl">Login Account</h1>
        </div>
        <p className="pt-2 text-gray-400">
          Get in touch and let us know how we can help.
        </p>
        <div className="my-20">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <h1 className="text-sm mb-1.5">Email</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                value={formValue.email}
                placeholder="Your email*"
              />
            </div>
            <div>
              <h1 className="text-sm mb-1.5">Password</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="password"
                name="password"
                value={formValue.password}
                onChange={(e) => handleChange(e)}
                placeholder="Your password*"
              />
            </div>
            <Button
              type="submit"
              loading={loading}
              className="w-full bg-[#b99d6b] text-white  border-[#b99d6b] text-sm p-2 md:p-3 pl-3 flex items-center justify-center text-center border "
            >
              LOGIN ACCOUNT
            </Button>

            <p className="text-center ">or</p>
            <div className="flex justify-center gap-3">
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/ForgotPassword">Forgot Password</Link>
              </p>{' '}
              <span className="text-[#b99d6b]">/</span>
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/Register">Create account</Link>
              </p>
              {/* <Button>CREATE ACCOUNT</Button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginView;
