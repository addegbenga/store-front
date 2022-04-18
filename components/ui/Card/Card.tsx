import React from 'react';
interface ICardProps {
  className?: string;
  children: React.ReactNode;
  background?: string;
  width: number;
  height?: number;
  color?: string;
}
const Card: React.FC<ICardProps> = ({
  background,
  width,
  color,
  children,
  // eslint-disable-next-line no-unused-vars
  className,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: `${width}%`,
        background: color,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
