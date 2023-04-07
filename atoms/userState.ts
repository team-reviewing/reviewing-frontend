import { atom } from 'recoil';
import { UserInformationType } from '../components/UserInformation/informationType';

export const userState = atom<UserInformationType | null>({
  key: 'userState',
  default: null,
});
