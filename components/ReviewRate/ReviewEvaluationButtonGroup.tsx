import ButtonWrapper from '../Commons/ButtonWrapper';
import { IReviewRateButtonGroupMutateProps } from './reviewRateType';

function ReviewEvaluationButtonGroup({ mutateRateRegister }: IReviewRateButtonGroupMutateProps) {
  return (
    <div className="flex justify-center">
      <ButtonWrapper onClick={() => mutateRateRegister()}>제출</ButtonWrapper>
    </div>
  );
}

export default ReviewEvaluationButtonGroup;
