import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ReactDropDown from '@/components/ui/ReactDropDown';
import { dataCategory } from 'utils/data';
export interface ISidebarProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}
const Sidebar: React.FC<ISidebarProps> = ({ isOpen, handleCloseModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={handleCloseModal}
        >
          <div className="min-h-screen relative text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed bg-black bg-opacity-80 inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0  -translate-x-44 transform"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="  -translate-x-44 transform"
            >
              <div className="w-2/3 absolute top-0  h-screen    overflow-y-auto text-left transition-all transform bg-white shadow-xl ">
                <div className="mt-2 ">
                  <ReactDropDown categories={dataCategory} />
                </div>
              </div>
              {/* </div> */}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Sidebar;
