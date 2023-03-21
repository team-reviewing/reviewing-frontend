import { GetServerSideProps } from 'next';
import Header from '../components/Header';
import ReviewRegisterTemplate from '../components/ReviewRegister/ReviewRegisterTemplate';
import { IGetTokenType, ILinkUserIdType, IRegisterPropsType } from '../components/ReviewRegister/ReviewRegisterType';
import cookies from 'next-cookies';

const Register = ({ reviewerInfo }: IRegisterPropsType) => {
  return (
    <div className="h-full">
      <Header />
      <div className="h-full">
        <ReviewRegisterTemplate reviewerInfo={reviewerInfo} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const reviewerInfo = ctx.query as ILinkUserIdType;
  const requestToken = cookies(ctx) as IGetTokenType;

  // Refresh => Access로 추후 변경
  if (reviewerInfo.reviewerId && requestToken.refresh_token) {
    return {
      props: {
        reviewerInfo: {
          reviewerId: reviewerInfo.reviewerId,
          reviewerName: reviewerInfo.username,
        },
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
};

export default Register;
