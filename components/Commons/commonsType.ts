export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export type HeadType<P> = {
  desc: string;
  Component: React.ComponentType<P & object>;
};

export interface IModalWidthHeight {
  width?: number;
  height?: number;
}
