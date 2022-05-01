import ProductSlider from '../ProductSlider';
import { AiOutlineHeart } from 'react-icons/ai';

const index: React.FC = () => {
  return (
    <div className="container mx-auto  justify-center gap-12 flex  ">
      <ProductSlider />
      <div className="max-w-sm my-8 flex flex-col gap-4">
        <h1 className="text-xl">
          ASOS DESIGN boxy oversized revere shirt in lilac
        </h1>
        <h2 className="font-medium text-lg text-gray-600">£24.00</h2>
        <h1 className="text-xs font-semibold">
          COLOUR: <span className="font-normal text-sm">LilAC</span>
        </h1>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs font-semibold">SIZE:</h1>
          <div>
            <select className="border w-full p-2" name="cars" id="cars">
              <option value="none" selected disabled hidden>
                Please an input
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="w-full flex gap-2 ">
          <button className="bg-green-700 w-full text-white p-1 px-3">
            ADD TO BAG
          </button>
          <button className="bg-gray-100 rounded-full p-2  flex justify-center items-center">
            <AiOutlineHeart className="text-xl" />
          </button>
        </div>
        <div className="border border-opacity-20 border-gray-600 pb-12 p-1.5 ">
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
