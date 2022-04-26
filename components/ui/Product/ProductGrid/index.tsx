import React from 'react';

interface IProductGridProps {
  layout?: boolean;
}

const index: React.FC<IProductGridProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default index;
