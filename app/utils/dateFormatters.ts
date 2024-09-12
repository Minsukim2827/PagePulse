
import { format } from 'date-fns';

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'dd MM yyyy');
};


export const formatTime = (created_at: string): string => {
    const postDate = new Date(created_at);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);
  
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
  
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays < 30) return `${diffInDays} days ago`;
    return `${diffInMonths} months ago`;
  };
  