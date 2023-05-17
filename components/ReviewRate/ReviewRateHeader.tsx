import Image from 'next/image';
import cancel from '../../styles/images/cancel.svg';
import { IReviewRateModalProps } from './reviewRateType';

function ReviewRateHeader({ closeHandler }: Pick<IReviewRateModalProps, 'closeHandler'>) {
  return (
    <figure className="flex justify-end">
      <Image src={cancel} alt="modalOFF" width="15" height="15" className="cursor-pointer" onClick={closeHandler} />
    </figure>
  );
}

export default ReviewRateHeader;
