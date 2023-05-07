import { StrictPropsWithChildren } from '../Commons/commonsType';

function GuideContent({ children }: StrictPropsWithChildren) {
  return <div className="w-full space-y-4">{children}</div>;
}

export default GuideContent;
