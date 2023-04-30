export interface ITagType {
  id: number;
  name: string;
}

export interface ICategoryType {
  id: number;
  name: string;
  tags: ITagType[];
}

export interface ICategoriesType {
  categories: ICategoryType[];
}

export interface ICategoryBoxPropsType {
  category: ICategoryType;
  selectedTags: ITagType[];
}

export interface ITechStackType {
  id: number;
  name: string;
}

export interface IReviewerType {
  id: number;
  username: string;
  imageUrl: string;
  profileUrl: string;
  job: string;
  career: string;
  techStack: ITechStackType[];
  introduction: string;
}

export interface IReviewersType {
  reviewers: IReviewerType[];
  hasNext: boolean;
}

export interface IGetReivewersType extends IReviewersType {
  currentPage: number;
}

export interface IReviewersRequestType {
  page?: number;
  size?: number;
  category?: number;
  tag?: number[];
}

export interface IFilterCategoryPropsType extends ICategoriesType {
  setCategory: React.Dispatch<React.SetStateAction<ICategoryType | undefined>>;
  setSelectedTags: React.Dispatch<React.SetStateAction<ITagType[]>>;
  selectedTags: ITagType[];
}

export interface ICategoryTagButtonPropsType {
  tag: ITagType;
  setSelectTags: React.Dispatch<React.SetStateAction<ITagType[]>>;
}

export interface ICategoryTagBoxPropsType extends Omit<ICategoryTagButtonPropsType, 'tag'> {
  tags: ITagType[];
}

export interface IReviewerQueryType {
  getNextPageParam: (lastPage: IGetReivewersType) => number | undefined;
}
