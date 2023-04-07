import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/userState';
import Loading from '../Loading';
import InformationForm from './InformationForm';
import useRedirectInduce from '../../useHooks/useRedirectInduce';
import useSetLocalPath from '../../useHooks/useSetLocalPath';

const InformationTemplate = () => {
  const user = useRecoilValue(userState);

  useSetLocalPath();
  useRedirectInduce();

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="h-full w-full max-w-md">
      <h2 className="text-center text-3xl">계정 정보</h2>
      <InformationForm data={user} />
    </div>
  );
};

export default InformationTemplate;
