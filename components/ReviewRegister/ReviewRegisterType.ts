import { RefObject } from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, UseFormTrigger } from 'react-hook-form';
import { ReactNode } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import ReactQuill from 'react-quill';

export const editorModule = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export interface IReviewRegisterApiType extends IReviewRegisterType {
  id: number;
}

export interface IReviewRegisterType {
  title: string;
  content: string;
  prUrl: string;
}

export interface IQuillEditorType<T> {
  forwardedRef: RefObject<T>;
  value: string;
  onChange: (e: string) => void;
  placeholder: string;
  modules: typeof editorModule;
  formats: string[];
  theme: string;
}

export interface IRegisterType {
  register: UseFormRegister<IReviewRegisterType>;
  setValue: UseFormSetValue<IReviewRegisterType>;
  watch: UseFormWatch<IReviewRegisterType>;
  trigger: UseFormTrigger<IReviewRegisterType>;
  editorRef: RefObject<ReactQuill>;
}

export interface IMentType {
  children: ReactNode;
}

export interface ILinkUserIdType extends ParsedUrlQuery {
  reviewerId: string;
  reviewerName: string;
}

export interface IRegisterPropsType {
  reviewerInfo: ILinkUserIdType;
}

export interface IGetTokenType extends NextApiRequestCookies {
  access_token: string;
  refresh_token: string;
}
