import { StrictPropsWithChildren } from '../Commons/commonsType';

function GuideTitle({ children }: StrictPropsWithChildren) {
  return (
    <div>
      <p className="text-4xl msm:text-3xl">{children} </p>
    </div>
  );
}

export default GuideTitle;
