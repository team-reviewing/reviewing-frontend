import { ComponentProps } from 'react';
import { StrictPropsWithChildren } from '../globalType';

function ButtonWrapper({ children, className, onClick }: StrictPropsWithChildren<ComponentProps<'button'>>) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-center items-center bg-black text-white h-10 rounded-md ${
        className ? className : ''
      }`}>
      {children}
    </button>
  );
}

export default ButtonWrapper;
