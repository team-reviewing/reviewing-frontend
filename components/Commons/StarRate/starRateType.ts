export interface IStarRatingPropsType {
  rateValue: number;
  setRate: (num: number) => void;
  readOnly: boolean;
}

export interface IStarRateFillColor {
  fillColor?: string;
}
