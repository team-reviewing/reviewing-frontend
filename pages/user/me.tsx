import InformationTemplate from '../../components/UserInformation/InformationTemplate';
import HeadHoc from '../../components/Commons/HeadHoc';

const UserPage = () => {
  return (
    <main className="flex justify-center h-full px-6 mt-14">
      <InformationTemplate />
    </main>
  );
};

export default HeadHoc({ desc: '개인 페이지', Component: UserPage });
