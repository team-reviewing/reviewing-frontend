import { StrictPropsWithChildren } from '../Commons/commonsType';

function ErrorMent({ children }: StrictPropsWithChildren) {
  return <p className="mt-2 text-red500">{children}</p>;
}

export default ErrorMent;
