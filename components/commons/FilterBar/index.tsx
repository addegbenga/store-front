import { useState } from 'react';
import Sort from '@/components/ui/Sort/Sort';
import { HiChevronDown } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

interface IFilterbarProps {}

const Index: React.FC<IFilterbarProps> = () => {
  const [filterModalOpen, setIsFilterModalOpen] = useState<any>([
    {
      sorts: false,
      filter: false,
      show: false,
    },
  ]);

  const handleOpenFilterModal = ({ sortsProp, filterProp, showProp }: any) => {
    setIsFilterModalOpen({
      sorts: sortsProp && !filterModalOpen.sorts,
      filter: filterProp && !filterModalOpen.filter,
      show: showProp && !filterModalOpen.show,
    });
  };
  return (
    <div className=" gap-10 hidden lg:flex  py-7 border-b  items-center">
      <div className="flex gap-10 max-w-5xl mx-auto items-center w-full  justify-evenly ">
        {/* drop down for filtering */}
        <div className=" relative z-10 px-8 ">
          <Sort title="Alphabetically, A-Z">
            <div>
              <div
                className="cursor-pointer"
                onClick={() => handleOpenFilterModal({ sortsProp: true })}
              >
                <HiChevronDown />
              </div>
              {filterModalOpen.sorts && (
                <div>
                  <span
                    onClick={() => handleOpenFilterModal({ sortsProp: true })}
                    className="absolute z-10 top-2.5 right-2 cursor-pointer "
                  >
                    <FaTimes className="text-black text-opacity-50 text-sm" />
                  </span>

                  <div className="absolute bg-gray-100 shadow-xl border rounded w-full top-0 pt-2 px-5 pb-4 left-0">
                    <ul className="grid gap-2 cursor-pointer text-sm text-black text-opacity-70">
                      <li>Featured</li>
                      <li>Best selling</li>
                      <li>Alphabetically, A-Z</li>
                      <li>Alphabetically, Z-A</li>
                      <li>Price, low to high</li>
                      <li>Price, high to low</li>
                      <li>Date, old to new</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Sort>
        </div>
        {/* drop down for filtering */}

        <Sort title="Filter">
          <>
            <svg
              onClick={() => handleOpenFilterModal({ filterProp: true })}
              className="icon-svg icon-filter w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 20 15"
            >
              <path
                fillRule="evenodd"
                d="M7.304,2.040 C6.977,0.854 6.057,-0.003 4.976,-0.003 C3.895,-0.003 2.975,0.854 2.648,2.040 C0.789,2.040 0.789,2.040 0.789,2.040 C0.357,2.040 0.007,2.467 0.007,2.993 C0.007,3.520 0.357,3.947 0.789,3.947 C2.648,3.947 2.648,3.947 2.648,3.947 C2.975,5.133 3.895,5.990 4.976,5.990 C6.057,5.990 6.977,5.133 7.304,3.947 C19.211,3.947 19.211,3.947 19.211,3.947 C19.643,3.947 19.993,3.520 19.993,2.993 C19.993,2.467 19.643,2.040 19.211,2.040 L7.304,2.040 ZM4.083,2.993 C4.083,2.393 4.484,1.904 4.976,1.904 C5.468,1.904 5.869,2.393 5.869,2.993 C5.869,3.594 5.468,4.083 4.976,4.083 C4.484,4.083 4.083,3.594 4.083,2.993 ZM10.653,11.052 C10.326,9.866 9.406,9.009 8.325,9.009 C7.244,9.009 6.324,9.866 5.997,11.052 C0.789,11.052 0.789,11.052 0.789,11.052 C0.357,11.052 0.007,11.479 0.007,12.006 C0.007,12.532 0.357,12.959 0.789,12.959 C5.997,12.959 5.997,12.959 5.997,12.959 C6.324,14.146 7.244,15.002 8.325,15.002 C9.406,15.002 10.326,14.146 10.653,12.959 C19.211,12.959 19.211,12.959 19.211,12.959 C19.643,12.959 19.993,12.532 19.993,12.006 C19.993,11.479 19.643,11.052 19.211,11.052 L10.653,11.052 ZM7.432,12.006 C7.432,11.405 7.833,10.916 8.325,10.916 C8.818,10.916 9.218,11.405 9.218,12.006 C9.218,12.606 8.818,13.095 8.325,13.095 C7.833,13.095 7.432,12.606 7.432,12.006 Z"
              ></path>
            </svg>
            {filterModalOpen.filter && (
              <div>
                <h1>Hello world</h1>
              </div>
            )}
          </>
        </Sort>

        <div className="flex gap-3">
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 14 14"
            fill="#478107"
          >
            <path
              fillRule="evenodd"
              d="M8.000,13.967 L8.000,7.998 L13.968,7.998 L13.968,13.967 L8.000,13.967 ZM12.035,9.964 L9.965,9.964 L9.965,12.033 L12.035,12.033 L12.035,9.964 ZM8.000,-0.002 L13.968,-0.002 L13.968,5.968 L8.000,5.968 L8.000,-0.002 ZM9.965,4.033 L12.035,4.033 L12.035,1.963 L9.965,1.963 L9.965,4.033 ZM-0.000,7.998 L5.968,7.998 L5.968,13.967 L-0.000,13.967 L-0.000,7.998 ZM1.965,12.033 L4.035,12.033 L4.035,9.964 L1.965,9.964 L1.965,12.033 ZM-0.000,-0.002 L5.968,-0.002 L5.968,5.968 L-0.000,5.968 L-0.000,-0.002 ZM1.965,4.033 L4.035,4.033 L4.035,1.963 L1.965,1.963 L1.965,4.033 Z"
            ></path>
          </svg>
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 14 14"
          >
            <path
              fillRule="evenodd"
              d="M8.000,13.967 L8.000,7.998 L13.968,7.998 L13.968,13.967 L8.000,13.967 ZM12.035,9.964 L9.965,9.964 L9.965,12.033 L12.035,12.033 L12.035,9.964 ZM8.000,-0.002 L13.968,-0.002 L13.968,5.968 L8.000,5.968 L8.000,-0.002 ZM9.965,4.033 L12.035,4.033 L12.035,1.963 L9.965,1.963 L9.965,4.033 ZM-0.000,7.998 L5.968,7.998 L5.968,13.967 L-0.000,13.967 L-0.000,7.998 ZM1.965,12.033 L4.035,12.033 L4.035,9.964 L1.965,9.964 L1.965,12.033 ZM-0.000,-0.002 L5.968,-0.002 L5.968,5.968 L-0.000,5.968 L-0.000,-0.002 ZM1.965,4.033 L4.035,4.033 L4.035,1.963 L1.965,1.963 L1.965,4.033 Z"
            ></path>
          </svg>
        </div>
        <Sort title="Show :">
          <div>
            <div className="flex items-center">
              <p className="text-sm">16</p>
              <div onClick={() => handleOpenFilterModal({ showProp: true })}>
                <HiChevronDown />
              </div>
            </div>
            {filterModalOpen.show && (
              <div>
                <h1>Hello world</h1>
              </div>
            )}
          </div>
        </Sort>
      </div>
    </div>
  );
};

export default Index;
