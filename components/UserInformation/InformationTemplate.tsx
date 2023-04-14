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
    <div className="max-w-md wh-f">
      <h2 className="text-3xl text-center msm:text-2xl">계정 정보</h2>
      {user && <InformationForm data={user} setUser={setUser} />}
    </div>
  );
};

export default InformationTemplate;
