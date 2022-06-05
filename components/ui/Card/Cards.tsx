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
const myLoader = () => {
  return '/assets/slide_8_50x.jpg';
};

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
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
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
