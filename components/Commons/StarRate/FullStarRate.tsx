import { ISingleStarRatingPropsType } from './starRateType';

function FullStarRate({ fillColor = '#ffc342', size = 40 }: ISingleStarRatingPropsType) {
  return (
    <svg height={size} viewBox="0 0 24 24">
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={fillColor}
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default FullStarRate;
