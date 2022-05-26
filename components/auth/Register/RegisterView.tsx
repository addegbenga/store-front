import Link from 'next/link';
import { useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Button from '@/components/ui/Button';
import { authContext } from '../../../state/context/authContext';
import { auth } from '../../../firebase';
interface IRegisterProps {}
export type IStateInput = {
  email: string;
  password: string;
};
const RegisterView: React.FC<IRegisterProps> = () => {
  const { dispatch } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValues] = useState<IStateInput>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      dispatch({ type: 'REGISTER', payload: result });
      setLoading(false);
      const resp = result.user;
      console.log(resp);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
          <h1 className="text-2xl md:text-4xl">Create Account</h1>
        </div>
        <p className="pt-2 text-gray-400">
          Get in touch and let us know how we can help.
        </p>
        <div className="py-16">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <h1 className="text-sm mb-1.5">Email</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="email"
                name="email"
                placeholder="Your email*"
                value={formValue.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <h1 className="text-sm mb-1.5">Password</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="password"
                name="password"
                placeholder="Your password*"
                value={formValue.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <Button
              type="submit"
              loading={loading}
              className="w-full bg-[#b99d6b] text-white  border-[#b99d6b] text-sm p-2 md:p-3 pl-3 flex items-center justify-center text-center border"
            >
              {' '}
              CREATE ACCOUNT
            </Button>

            {/* <Button>CREATE ACCOUNT</Button> */}
            <p className="text-center ">or</p>
            <div className="flex justify-center gap-3">
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/ForgotPassword">Forgot Password</Link>
              </p>{' '}
              <span className="text-[#b99d6b]">/</span>
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/Login">Login Account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterView;
