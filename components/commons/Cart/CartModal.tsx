import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';

const CartModal: React.FC<any> = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-end  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full bg-white w-3/12  h-screen max-w-md transform overflow-hidden p-6 text-left align-middle shadow-xl transition-all">
                  <div className="my-2">
                    <h1 className="text-2xl">Shopping Cart</h1>
                    <p className="text-sm my-4">
                      Congratulations you have got free shipping
                    </p>
                  </div>
                  <div className="bg-gray-100 py-5 px-3 flex items-center gap-4 h-fit  bg-opacity-70">
                    <div className="h-36 w-32  bg-white">
                      <Image
                        src="/assets/product1.webp"
                        alt="cart_img"
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <span className="text-black text-opacity-60 text-sm">
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
                      <span className="font-bold text-sm">$1,050.00</span>
                    </div>
                    <div className="flex justify-between">
                      <p>Discounted</p>
                      <span className="font-bold text-sm">$0.00</span>
                    </div>
                    <div className="border-t flex justify-between my-3  pt-3">
                      <p className="font-bold">Total</p>
                      <span className="font-bold text-sm">$1,050.00</span>
                    </div>
                  </div>
                  {/* discount section */}
                  <div className="my-8">
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" />
                      <p className="text-sm">
                        I agree with the{' '}
                        <span className="text-green-700 font-semibold">
                          terms and conditions
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col my-5 gap-2">
                      <button className="border p-2">VIEW CART</button>
                      <button className="bg-green-700 p-2.5 text-sm text-white">
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
