import { format, toZonedTime } from 'date-fns-tz';

export const formatTime = (created_at: string): string => {
  // Parse the created_at string into a Date object
  const utcDate = new Date(created_at);

  // Get the user's local timezone
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Convert the UTC date to the user's local timezone
  const zonedDate = toZonedTime(utcDate, timeZone);

  // Get the current date in the user's local timezone
  const now = new Date();

  // Calculate the difference in seconds
  const diffInSeconds = Math.floor((now.getTime() - zonedDate.getTime()) / 1000);

  // Determine the appropriate time difference message
  if (diffInSeconds < 60) return 'Just now';

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;

  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
};
