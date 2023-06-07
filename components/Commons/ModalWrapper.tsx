import clsx from 'clsx';
import { ComponentProps } from 'react';
import { IModalWidthHeight, StrictPropsWithChildren } from './commonsType';

function ModalWrapper({
  children,
  onClick,
  width,
  height,
}: StrictPropsWithChildren<ComponentProps<'div'>> & IModalWidthHeight) {
  return (
    <div className="fixed inset-0 z-10 flex-cc-col">
      <div className="modal_bg" onClick={onClick} />
      <section
        className={clsx(
          'z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation',
          {
            [`h-[${height}rem]`]: height,
            [`min-w-[${width}rem]`]: width,
          },
        )}>
        {children}
      </section>
    </div>
  );
}

export default ModalWrapper;
