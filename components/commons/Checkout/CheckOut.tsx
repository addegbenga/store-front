import React from 'react';
import Image from 'next/image';
interface ICheckOutProps {}
const CheckOut: React.FC<ICheckOutProps> = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 ">
        {/* shipping info section */}
        <div className="w-full py-10 pl-32 pr-10 bg-white ">
          <h1 className="text-2xl font-semibold">KARA</h1>
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
                  <button className="p-4 px-5 text-sm text-white bg-blue-500 rounded">
                    Continue to Shipping
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* end of shipping info section */}
        <div className="h-screen py-10 bg-gray-100 ">
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
                  <span className="text-sm text-black text-opacity-60">M</span>
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
                  <span className="text-sm text-black text-opacity-60">M</span>
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
      </div>
    </div>
  );
};

export default CheckOut;
