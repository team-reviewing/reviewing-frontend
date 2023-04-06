import { atom } from 'recoil';
import { UserType } from '../components/UserInformation/informationType';

export const userState = atom<UserType | null>({
  key: 'userState',
  default: null,
});
