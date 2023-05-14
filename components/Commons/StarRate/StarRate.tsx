import clsx from 'clsx';
import { MouseEvent, useRef, useState } from 'react';
import EmptyStarRate from './EmptyStarRate';
import FullStarRate from './FullStarRate';
import { IStarRatingPropsType } from './starRateType';

function StarRate({ rateValue, setRate, readOnly = false }: IStarRatingPropsType) {
  const rateUnit = 0.5;
  const maxRateNumber = 5;
  const [hoverRateValue, setHoverRateValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef<HTMLDivElement>(null);
  const calculateRating = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const { width, left } = ratingContainerRef.current?.getBoundingClientRect() || {};
    let percent = 0;
    if (width && left) {
      percent = (e.clientX - left) / width;
    }
    const numberInStars = percent * maxRateNumber;
    const nearestNumber = Math.round((numberInStars + rateUnit / 2) / rateUnit) * rateUnit;

    return Number(nearestNumber.toFixed(rateUnit.toString().split('.')[1]?.length || 0));
  };

  const starClickHandler = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (readOnly) return false;

    setIsHovered(false);
    setRate(calculateRating(e));
  };

  const starMouseMoveHandler = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (readOnly) return false;

    setIsHovered(true);
    setHoverRateValue(calculateRating(e));
  };

  const starMouseLeaveHandler = () => {
    if (readOnly) return false;
    setHoverRateValue(-1);
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center">
      <div
        className="inline-flex cursor-pointer"
        onClick={starClickHandler}
        onMouseMove={starMouseMoveHandler}
        onMouseLeave={starMouseLeaveHandler}
        ref={ratingContainerRef}>
        {[...new Array(maxRateNumber)].map((_, index) => {
          const activeState = isHovered ? hoverRateValue : rateValue;
          const showEmptyIcon = activeState === -1 || activeState < index + 1;
          const isActiveRating = activeState !== 1;
          const isRatingWithrateUnit = activeState % 1 !== 0;
          const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
          const showRatingWithrateUnit = isActiveRating && isRatingWithrateUnit && isRatingEqualToIndex;
          return (
            <div className="relative cursor-pointer" key={index}>
              <div
                className={clsx('overflow-hidden absolute', {
                  [`w-[50%]`]: showRatingWithrateUnit,
                  [`w-[0%]`]: !showRatingWithrateUnit,
                })}>
                <FullStarRate />
              </div>
              <div>{showEmptyIcon ? <EmptyStarRate /> : <FullStarRate />}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StarRate;
