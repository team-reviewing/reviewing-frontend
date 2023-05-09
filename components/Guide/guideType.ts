export interface IGuideImageOption {
  src: string;
  alt: string;
  width: number;
  height: number;
  figcaption: string;
}

export interface IGuideImageList {
  imageList: IGuideImageOption[];
}
