import Link from 'next/link';
export interface ILoginProps {}

const ForgotPassowordView: React.FC<ILoginProps> = () => {
  return (
    <div className="container flex mx-auto ">
      <div className="px-4 mt-10 lg:w-1/2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 md:h-9  bg-[#b99d6b]"></div>
          <h1 className="text-2xl md:text-4xl">Reset your password</h1>
        </div>
        <p className="pt-2 text-gray-400">
          We will send you an email to reset your password.
        </p>
        <div className="my-20">
          <form className="grid gap-4">
            <div>
              <h1 className="text-sm mb-1.5">Email</h1>
              <input
                className="border md:p-2.5  w-full p-1.5 pl-3"
                type="text"
                name="email"
                placeholder="Your email*"
              />
            </div>
            <button className="w-full bg-[#b99d6b] text-white  border-[#b99d6b] text-sm p-2 md:p-3 pl-3 text-center border ">
              RESET PASSWORD
            </button>
            {/* <Button>CREATE ACCOUNT</Button> */}
            <p className="text-center ">or</p>
            <div className="flex justify-center gap-3">
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/ForgotPassword">Login account</Link>
              </p>{' '}
              <span className="text-[#b99d6b]">/</span>
              <p className="text-[#b99d6b]">
                {' '}
                <Link href="/account/Register">Create account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassowordView;
