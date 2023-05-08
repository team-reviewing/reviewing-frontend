import { StrictPropsWithChildren } from '../Commons/commonsType';

function GuideSubTitle({ children }: StrictPropsWithChildren) {
  return (
    <div>
      <p className="pb-3 text-3xl text-gray500 msm:text-2xl ">{children}</p>
    </div>
  );
}

export default GuideSubTitle;
