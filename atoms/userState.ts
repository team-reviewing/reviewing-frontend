import { atom } from 'recoil';
import { UserType } from '../components/userInfomation/informationType';

export const userState = atom<Pick<UserType, 'imageUrl'> | null>({
  key: 'userState',
  default: null,
});
