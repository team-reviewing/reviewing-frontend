import InformationTemplate from '../../components/UserInformation/InformationTemplate';
import HeadHoc from '../../components/Commons/HeadHoc';

const UserPage = () => {
  return (
    <div className="flex justify-center h-full px-6 mt-14">
      <InformationTemplate />
    </div>
  );
};

export default HeadHoc({ desc: '개인 페이지', Component: UserPage });
