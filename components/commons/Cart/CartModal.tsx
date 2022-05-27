import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';

interface ICartProps {
  isOpen: boolean;
  handleClose: () => void;
}
const CartModal: React.FC<ICartProps> = ({ isOpen, handleClose }) => {
  // const bool = typeof isOpen === 'undefined' ? false : isOpen;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-end min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-3/12 h-screen max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                  <div className="my-2">
                    <h1 className="text-2xl">Shopping Cart</h1>
                    <p className="my-4 text-sm">
                      Congratulations you have got free shipping
                    </p>
                  </div>
                  <div className="flex items-center gap-4 px-3 py-5 bg-gray-100 h-fit bg-opacity-70">
                    <div className="w-32 bg-white h-36">
                      <Image
                        src="/assets/product1.webp"
                        alt="cart_img"
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-black text-opacity-60">
                        M
                      </span>
                      <p className="text-sm">
                        Apparel Clothing <br /> Menswear White...
                      </p>
                      <span>3 x $350.00</span>
                      <div className="flex bg-white p-1.5 my-2 rounded-full justify-between">
                        <button>-</button>
                        <span>3</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                  {/* discount section */}
                  <div className="mt-10 ">
                    <div className="flex justify-between">
                      <p>Original</p>
                      <span className="text-sm font-bold">$1,050.00</span>
                    </div>
                    <div className="flex justify-between">
                      <p>Discounted</p>
                      <span className="text-sm font-bold">$0.00</span>
                    </div>
                    <div className="flex justify-between pt-3 my-3 border-t">
                      <p className="font-bold">Total</p>
                      <span className="text-sm font-bold">$1,050.00</span>
                    </div>
                  </div>
                  {/* discount section */}
                  <div className="my-8">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <p className="text-sm">
                        I agree with the{' '}
                        <span className="font-semibold text-green-700">
                          terms and conditions
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                      <button className="p-2 border outline-none">
                        VIEW CART
                      </button>
                      <button className="bg-green-700 outline-none  p-2.5 text-sm text-white">
                        CHECK OUT
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CartModal;
