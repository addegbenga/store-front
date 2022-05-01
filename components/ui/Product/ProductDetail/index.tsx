import ProductSlider from '../ProductSlider';

const index: React.FC = () => {
  return (
    <div className="container mx-auto my-3 justify-center gap-12 flex  ">
      <ProductSlider />
      <div className="max-w-sm my-8 flex flex-col gap-4">
        <h1 className="text-xl">
          ASOS DESIGN boxy oversized revere shirt in lilac
        </h1>
        <h2 className="font-medium text-lg">£24.00</h2>
        <h1 className="text-xs font-bold">
          COLOUR: <span className="font-normal text-sm">LilAC</span>
        </h1>
        <div className="">
          <h1 className="text-xs font-bold">SIZE:</h1>
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
        <div className="w-full flex ">
          <button className="bg-green-700 w-full text-white p-2 px-3">
            ADD TO BAG
          </button>
          <button>lo</button>
        </div>
        <div className="border pb-12 p-1.5 ">
          <p>Free Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default index;
