import clsx from 'clsx';
import Image from 'next/image';
import { IGuideImageList } from './guideType';

function GuideImage({ imageList }: IGuideImageList) {
  return (
    <div
      className={clsx('justify-between msm:grid-cols-1 msm:space-y-3', {
        ['grid grid-cols-2 gap-3 items-center']: imageList.length > 1,
      })}>
      {imageList.map((img) => {
        return (
          <>
            <figure key={img.src}>
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} />
              <figcaption className="text-neutral400">{img.figcaption}</figcaption>
            </figure>
          </>
        );
      })}
    </div>
  );
}

export default GuideImage;
