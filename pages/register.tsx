import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import ReviewRegisterTemplate from '../components/ReviewRegister/ReviewRegisterTemplate';
import { ILinkUserIdType, IRegisterPropsType } from '../components/ReviewRegister/ReviewRegisterType';

const Register = ({ reviewerInfo }: IRegisterPropsType) => {
  return (
    <main className="h-full">
      <ReviewRegisterTemplate reviewerInfo={reviewerInfo} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const reviewerInfo = ctx.query as ILinkUserIdType;

  if (reviewerInfo.reviewerId) {
    if (reviewerInfo.reviewId) {
      return {
        props: {
          reviewerInfo: {
            reviewId: reviewerInfo.reviewId,
            title: reviewerInfo.title,
            content: reviewerInfo.content,
            prUrl: reviewerInfo.prUrl,
            reviewerId: reviewerInfo.reviewerId,
            reviewerName: reviewerInfo.username,
          },
        },
      };
    }
    return {
      props: {
        reviewerInfo: {
          reviewerId: reviewerInfo.reviewerId,
          reviewerName: reviewerInfo.username,
        },
      },
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
    props: {},
  };
};

export default Register;
