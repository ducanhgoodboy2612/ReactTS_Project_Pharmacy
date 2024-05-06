import { atom } from 'recoil';
import dayjs from 'dayjs';
export const cartState = atom({
  key: 'cartState',
  default: [],
});

export const searchTermState = atom({
  key: 'searchTermState',
  default: '',
});

interface SearchParams {
  startDate: string;
  endDate: string;
  phone: string;
}

export const searchParamsState = atom<SearchParams>({
  key: 'searchParamsState',
  default: {
    startDate: dayjs().toISOString(),
    endDate: dayjs().toISOString(),
    phone: '0000'
  }
});