export interface IData {
  image_url: string;
}

export interface IAllPagePropsData extends IData {
  isLogIn: boolean;
}

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};
