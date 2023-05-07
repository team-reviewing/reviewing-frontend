import { StrictPropsWithChildren } from '../Commons/commonsType';

function GuideSubTitle({ children }: StrictPropsWithChildren) {
  return (
    <div>
      <p className="text-3xl text-gray500 msm:text-2xl ">{children}</p>
    </div>
  );
}

export default GuideSubTitle;
