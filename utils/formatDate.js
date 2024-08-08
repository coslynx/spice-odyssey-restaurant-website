import { format } from 'date-fns';

export const formatDate = (date) => {
  try {
    const formattedDate = format(new Date(date), 'yyyy-MM-dd');
    return formattedDate;
  } catch (error) {
    console.error('Error formatting date:', error);
    return null;
  }
};