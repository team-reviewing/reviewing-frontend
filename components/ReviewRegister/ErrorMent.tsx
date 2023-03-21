import { IMentType } from './ReviewRegisterType';

function ErrorMent({ children }: IMentType) {
  return <p className="text-rose-500">{children}</p>;
}

export default ErrorMent;
