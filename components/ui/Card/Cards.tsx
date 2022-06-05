import Image from 'next/image';
import cn from 'clsx';

export interface ICardsProps {
  children: React.ReactNode;
  imgSrc: string;
  imgProp: string;
  className: string;
  layoutProps: 'fixed' | 'responsive' | 'fill' | 'intrinsic';
  isBg?: Boolean;
  placeholder?: 'blur' | 'empty';
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
            className="absolute"
            // loader={myLoader}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mN8ev/+fwYgYIQxAE/LB0dS2AWzAAAAAElFTkSuQmCC"
            layout={layoutProps}
            alt={imgProp}
            src={imgSrc}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Cards;
