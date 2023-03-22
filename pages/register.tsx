import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import ReviewRegisterTemplate from '../components/ReviewRegister/ReviewRegisterTemplate';
import { IGetTokenType, ILinkUserIdType, IRegisterPropsType } from '../components/ReviewRegister/ReviewRegisterType';
import cookies from 'next-cookies';

const Register = ({ reviewerInfo }: IRegisterPropsType) => {
  return (
    <div className="h-full">
      <ReviewRegisterTemplate reviewerInfo={reviewerInfo} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const reviewerInfo = ctx.query as ILinkUserIdType;
  const requestToken = cookies(ctx) as IGetTokenType;
  // Refresh => Access로 추후 변경
  if (reviewerInfo.reviewerId && requestToken.refresh_token) {
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
