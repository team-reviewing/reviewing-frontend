import { atom } from 'recoil';
import { IUserInformationType } from '../components/UserInformation/informationType';

export const userState = atom<IUserInformationType | null>({
  key: 'userState',
  default: null,
});
