import Link from 'next/link';
import { useState } from 'react';
import removeWhiteSpace from 'functions/removeWhiteSpace';

import { FaChevronDown } from 'react-icons/fa';

type CategoryTypes = {
  categories: {
    id: number;
    title: string;
    step: number;
    description: {
      name: string;
      list: string[];
    }[];
  }[];
};
type State = Array<Number | null | boolean>;

const CategoryTabs: React.FC<CategoryTypes> = ({ categories }) => {
  const [isOpenArrayState, setOpenArrayState] = useState<State>([]);

  return (
    <div className="w-full mt-14 ">
      {categories.map((category, index) => (
        <div key={category.id}>
          <div className="py-3 border-b">
            <div className="flex px-4 text-[0.95rem] justify-between items-center">
              <h1>{category.title}</h1>
              <button
                className={`${isOpenArrayState.map(() =>
                  isOpenArrayState.includes(index)
                    ? 'transform -rotate-180 ease-out transition duration-150'
                    : ' transform ease-out transition duration-150'
                )} transform ease-out transition duration-150  `}
                onClick={() =>
                  setOpenArrayState(
                    isOpenArrayState.includes(index)
                      ? [...isOpenArrayState.filter((item) => item !== index)]
                      : [...isOpenArrayState, index]
                  )
                }
              >
                <FaChevronDown size={13} />
              </button>
            </div>
            {isOpenArrayState.includes(index) ? (
              <div className="flex flex-col gap-2 px-4 mt-3">
                {category.description.map((item, index) =>
                  category.step === 2 ? (
                    <div key={index}>
                      <div className="">
                        <h1 className="text-[1rem] px-4">{item.name}</h1>
                        {item.list.map((item, index) => (
                          <p key={index} className="text-[0.9rem] py-1 pl-8 ">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div key={index}>
                      <div>
                        {item.list.map((item, index) => (
                          <div key={index} className="text-[1rem] py-1 pl-2 ">
                            <Link href={removeWhiteSpace(item)}>{item}</Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
