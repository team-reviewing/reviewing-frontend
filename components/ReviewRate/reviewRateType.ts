import { UseMutateFunction } from '@tanstack/react-query';
import { StrictPropsWithChildren } from '../Commons/commonsType';
import { IReviewDetailInfoApiPropsType } from '../ReviewModal/reviewModalType';

export interface IReviewEvaluationProps
  extends IReviewDetailInfoApiPropsType,
    Pick<IReviewRateModalProps, 'closeHandler'> {
  status: string;
}

export interface IReviewEvaluationDataType {
  id: number;
  score: number;
  content: string;
}

export type ReviewEvaluationRegisterDataType = Omit<IReviewEvaluationDataType, 'id'> & IReviewDetailInfoApiPropsType;

export type ReviewEvaluationRegisterMutateType = ReviewEvaluationRegisterDataType &
  Pick<IReviewRateModalProps, 'closeHandler'>;

export interface IReviewEvaluationContentType {
  readOnly: boolean;
  evaluationContent: string;
  setEvaluationContentHandler: (str: string) => void;
}

export interface IReviewRateModalProps extends StrictPropsWithChildren {
  closeHandler: () => void;
}

export interface IReviewRateButtonGroupMutateProps {
  mutateRateRegister: UseMutateFunction<void, unknown, void, unknown>;
}
