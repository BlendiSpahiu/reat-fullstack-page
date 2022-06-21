import dayjs from 'dayjs';
import { formatDate } from './formatDate';

export const getMembership = (date: string) => {
  // todays date
  const now = formatDate(new Date());

  console.log(now);

  // time difference
  const difference = dayjs(now).diff(date, 'months');

  // calculate membership time
  if (difference) {
    return `Member for ${difference} ${difference === 1 ? 'month' : 'months'}`;
  }
};
