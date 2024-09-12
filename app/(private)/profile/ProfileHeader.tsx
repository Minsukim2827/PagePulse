import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface ProfileHeaderProps {
  userProfile: {
    username: string;
    avatar: string;
    created: string;
  };
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userProfile }) => {
    
  return (
    <div className="flex items-center gap-6 mb-8">
      <div className="flex-shrink-0">
        <Image
          src={userProfile.avatar ? userProfile.avatar : '/avatar-default.png'}
          alt={`${userProfile.username}'s avatar`}
          width={96}
          height={96}
        />
      </div>
      <div className="grid gap-2">
        <h1 className="text-2xl font-bold">{userProfile.username}</h1>
        <p className="text-sm text-muted-foreground">
  Profile created: {userProfile.created ? formatDate(userProfile.created) : 'Date not available'}
</p>

      </div>
    </div>
  );
};
