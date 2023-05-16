import { StrictPropsWithChildren } from './commonsType';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
function Portal({ children }: StrictPropsWithChildren) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('portal'));
  }, []);

  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(children, element);
}
export default Portal;
