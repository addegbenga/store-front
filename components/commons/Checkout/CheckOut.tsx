import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
interface ICheckOutProps {}

const CheckOut: React.FC<ICheckOutProps> = () => {
  const [toggleCheckoutMobile, setToggleCheckoutMobile] =
    useState<boolean>(true);
  const handleCheckoutToggleMobile = () => {
    setToggleCheckoutMobile(!toggleCheckoutMobile);
  };
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 ">
        {/* shipping info section */}
        <div className="w-full px-5 bg-white border-r lg:px-0 lg:py-10 lg:pl-32 lg:pr-10 ">
          <h1 className="hidden text-2xl font-semibold lg:block">KARA</h1>
          <div className="flex gap-2 my-2 text-sm">
            <p>Information</p>
            &gt;
            <p>Shipping</p>
            &gt;
            <p>Payment</p>
          </div>

          <div>
            <div className="flex justify-between my-3 mt-5">
              <h1>Contact Information</h1>
              <p className="text-sm">
                Already have an account ?{' '}
                <span className="text-blue-500">Log in</span>
              </p>
            </div>
            <form>
              <input
                className="w-full p-2.5 border rounded placeholder:text-xs"
                type="text"
                placeholder="Email or mobile phone number"
              />
              <div className="flex items-center my-2 text-sm gap-1.5">
                <input type="checkbox" />
                <p>Email me with news and offers</p>
              </div>
              <div className="grid gap-2 my-8">
                <h1 className="mb-3">Shipping Address</h1>
                <select
                  className="w-full p-3 text-xs bg-white border rounded"
                  name="cars"
                  id="cars"
                >
                  <option className="text-sm " value="" disabled selected>
                    select country/region
                  </option>
                  <option value="volvo">Nigeria</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <div className="flex gap-2">
                  <input
                    className="w-full p-2.5 border rounded placeholder:text-xs"
                    type="text"
                    placeholder="First name(optional)"
                  />
                  <input
                    className="w-full p-2.5 border rounded placeholder:text-xs"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="grid gap-2">
                  <input
                    className="w-full p-2.5 border rounded placeholder:text-xs"
                    type="text"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    className="w-full p-2.5 border rounded placeholder:text-xs"
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    className="w-full p-2.5 border rounded placeholder:text-xs"
                    type="text"
                    placeholder="City"
                  />
                  <input
                    className="w-full p-2.5 border rounded placeholder:text-xs"
                    type="text"
                    placeholder="State"
                  />
                  <input
                    className="w-full p-2.5 border rounded placeholder:text-xs"
                    type="text"
                    placeholder="Postal code"
                  />
                </div>
                <div className="flex items-center gap-2 mt-1.5 mb-4 text-sm">
                  <input type="checkbox" />
                  <p>Save this information for next time</p>
                </div>
                <div>
                  <button className="w-full p-4 px-5 text-sm text-white bg-blue-500 rounded lg:w-fit">
                    Continue to Shipping
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* end of shipping info section */}
        <section>
          <div className="flex justify-between px-5 py-5 bg-gray-100 border-b lg:hidden">
            <div
              onClick={() => handleCheckoutToggleMobile()}
              className="flex items-center gap-1 text-blue-500 cursor-pointer"
            >
              <AiOutlineShoppingCart className="text-xl" />
              <p className="text-sm">
                {toggleCheckoutMobile
                  ? 'Show order summary'
                  : 'Hide order summary'}
              </p>
              <MdKeyboardArrowDown
                className={` ${
                  toggleCheckoutMobile
                    ? 'transform rotate-0 transition-transform'
                    : 'transform rotate-180 transition-transform '
                } mt-1`}
              />
            </div>

            <span>$1,109.00</span>
          </div>
          <div
            className={`${
              toggleCheckoutMobile
                ? ' h-0 transition-[height]  overflow-hidden bg-gray-100 lg:h-screen lg:py-10 '
                : ' overflow-hidden transition-[height] h-[25rem]  py-4 px-5 bg-gray-100 lg:h-screen lg:py-10 '
            }`}
          >
            <div className="flex flex-col max-w-lg gap-2 mx-auto">
              <div className="flex items-center justify-between h-fit">
                <div className="flex items-center gap-4">
                  <div className="bg-white border rounded w-[6rem] h-[6rem">
                    <Image
                      src="/assets/product1.webp"
                      alt="cart_img"
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Apparel Clothing</p>
                    <span className="text-sm text-black text-opacity-60">
                      M
                    </span>
                  </div>
                </div>
                <span>$350.00</span>
              </div>
              <div className="flex items-center justify-between h-fit">
                <div className="flex items-center gap-4">
                  <div className="bg-white border rounded w-[6rem] h-[6rem">
                    <Image
                      src="/assets/product1.webp"
                      alt="cart_img"
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Apparel Clothing</p>
                    <span className="text-sm text-black text-opacity-60">
                      M
                    </span>
                  </div>
                </div>
                <span>$350.00</span>
              </div>

              {/* discount section */}
              <div className="grid gap-2 mt-4 ">
                <div className="flex items-center justify-between pt-3 border-t">
                  <p>Subtotal</p>
                  <span className="text-sm font-medium">$1,050.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <span className="text-sm ">Calculated at next step</span>
                </div>
                <div className="flex items-center justify-between pt-3 my-3 border-t">
                  <p className="font-medium">Total</p>
                  <span className="flex items-center gap-2 text-xl font-medium ">
                    <span className="text-xs text-gray-400">USD</span>$1,050.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckOut;
