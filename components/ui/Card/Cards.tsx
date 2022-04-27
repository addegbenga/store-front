import Image from 'next/image';
import cn from 'clsx';

export interface ICardsProps {
  children: React.ReactNode;
  imgSrc: string;
  imgProp: string;
  className: string;
  layoutProps: 'fixed' | 'responsive' | 'fill' | 'intrinsic';
  isBg?: Boolean;
}

const Cards: React.FC<ICardsProps> = ({
  children,
  imgSrc,
  imgProp,
  className,
  layoutProps,
  isBg = false,
}) => {
  const rootClassName = cn(className);

  return (
    <div className="relative ">
      <div className={rootClassName}>
        {!isBg && (
          <Image
            layout={layoutProps}
            alt={imgProp}
            src={imgSrc}
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Cards;
