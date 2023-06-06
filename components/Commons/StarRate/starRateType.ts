export interface IStarRatingPropsType {
  rateValue: number;
  setRate?: (num: number) => void;
  readOnly: boolean;
  size?: number;
}

export interface ISingleStarRatingPropsType {
  fillColor?: string;
  size?: number;
}
