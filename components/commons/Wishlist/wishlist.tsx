import React from 'react';

const wishlist: React.FC = () => {
  return (
    <div className="container flex mx-auto ">
      <div className="w-1/2 px-4 mt-10 mb-20 ">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 md:h-9  bg-[#b99d6b]"></div>
          <h1 className="text-2xl md:text-4xl">Wishlist</h1>
        </div>
        <p className="pt-2 text-gray-400">Your wishlist is empty</p>
        <button className="p-2 px-5 my-10 mt-20 border">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default wishlist;
