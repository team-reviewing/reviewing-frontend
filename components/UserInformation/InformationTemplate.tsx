import { useRecoilState } from 'recoil';
import { userState } from '../../atoms/userState';
import InformationForm from './InformationForm';
import useRedirectInduce from '../../useHooks/useRedirectInduce';
import useSetLocalPath from '../../useHooks/useSetLocalPath';

const InformationTemplate = () => {
  const [user, setUser] = useRecoilState(userState);

  useSetLocalPath();
  useRedirectInduce();

  return (
    <div className="h-full w-full max-w-md">
      <h2 className="text-center text-3xl">계정 정보</h2>
      {user && <InformationForm data={user} setUser={setUser} />}
    </div>
  );
};

export default InformationTemplate;
