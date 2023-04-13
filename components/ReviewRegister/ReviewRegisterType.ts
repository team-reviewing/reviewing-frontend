import { RefObject } from 'react';
import { UseFormSetValue, UseFormTrigger, UseFormSetError, UseFormGetValues } from 'react-hook-form';
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
  reviewerId: string;
}

export interface IReviewModifyApiType extends Pick<IReviewRegisterApiType, 'content' | 'reviewerId'> {
  reviewId: string;
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
  onBlur: (e: ReactQuill.Range) => void;
  placeholder: string;
  modules: typeof editorModule;
  formats: string[];
  theme: string;
}

export interface IRegisterType {
  setValue: UseFormSetValue<IReviewRegisterType>;
  setError: UseFormSetError<IReviewRegisterType>;
  trigger: UseFormTrigger<IReviewRegisterType>;
  editorRef: RefObject<ReactQuill>;
  getValue: UseFormGetValues<IReviewRegisterType>;
}

export interface IMentType {
  children: ReactNode;
}

export interface ILinkUserIdType extends ParsedUrlQuery {
  reviewId?: string;
  title?: string;
  content?: string;
  prUrl?: string;
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
