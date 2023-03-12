import { GetServerSideProps } from 'next';
import InformationTemplate from '../../components/userInfomation/InformationTemplate';
import { IUserGetType, UserPageProps } from '../../components/userInfomation/informationType';
import { userGet } from '../api/userInfo';

const UserPage = ({ data }: UserPageProps) => {
  return (
    <div className="h-full flex justify-center mt-14 px-6">
      <InformationTemplate data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const user = await userGet();
    const data: IUserGetType = {
      userInfo: user,
    };
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        userInfo: '',
      },
    };
  }
};

export default UserPage;
