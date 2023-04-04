import { IMentType } from './ReviewRegisterType';

function ErrorMent({ children }: IMentType) {
  return <p className="text-red500">{children}</p>;
}

export default ErrorMent;
