import { StrictPropsWithChildren } from './commonsType';

function CarouselCard({ children }: StrictPropsWithChildren) {
  return (
    <div className="h-full mx-auto flex-cc max-w-7xl bg-carouselBg">
      <div className="flex justify-center w-full text-4xl font-bold leading-10 tracking-widest ">
        <div className="w-full max-w-3xl flex-cc-col">
          <span className="text-2xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-neutral100 ">{children}</span>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
