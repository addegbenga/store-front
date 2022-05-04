import ProductSlider from '../ProductSlider';
import Button from '../../Button';
import { AiOutlineHeart } from 'react-icons/ai';

const index: React.FC = () => {
  return (
    <div className="container mx-auto  justify-center lg:gap-12 flex flex-col lg:flex-row  ">
      <ProductSlider />
      <div className="max-w-sm mx-2 lg:mx-0 my-4 lg:my-4  flex flex-col gap-4">
        <h1 className="text-xl font-normal">
          Polo Ralph Lauren x ASOS exclusive collab rugby polo shirt with chest
          circle logo in vertical stripe
        </h1>
        <h2 className="font-medium text-lg text-gray-600">£24.00</h2>
        <h1 className="text-xs font-semibold">
          COLOUR: <span className="font-normal text-sm">LilAC</span>
        </h1>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs font-semibold">SIZE:</h1>
          <div className="border h-12 flex items-center">
            <select
              className=" w-full p-2 outline-none border-none bg-none "
              name="cars"
              id="cars"
            >
              <option value="none" selected disabled hidden>
                Please an input
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="w-full flex gap-2 items-center ">
          <Button
            className="bg-green-700 w-full justify-center flex items-center text-white p-4 px-3"
            Component="button"
          >
            ADD TO BAG
          </Button>
          <button className="bg-gray-100 rounded-full p-4 w-14 h-104  flex justify-center items-center">
            <AiOutlineHeart className="text-xl" />
          </button>
        </div>
        <div className="border border-opacity-20 border-gray-600 pb-12 p-2.5 ">
          <p className="text-xs">Free Delivery:</p>
          <span className="text-xs">
            Ts&Cs apply. <span className="text-xs underline">Learn more</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
