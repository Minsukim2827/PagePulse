"use client";

import { useEffect, useState } from 'react';
import AnimateWrapper from '@/components/AnimateWrapper';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import axios from '@/lib/axios'; // Import axios instance

const Page: React.FC = () => {
  const [userProfile, setUserProfile] = useState<{ username: string; avatar: string; created: number } | null>(null);

  // Fetch user profile from the backend API
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/profile-page/get-profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };

    fetchUserProfile();
  }, []);

  // Convert the `created` timestamp to a readable date format
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(); // You can customize the format if needed
  };

  return (
    <AnimateWrapper>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-start gap-6">
          <Avatar className="w-20 h-20 md:w-24 md:h-24">
            {userProfile && (
              <AvatarImage src={userProfile.avatar} alt={userProfile.username || 'User Avatar'} />
            )}
            <AvatarFallback>{userProfile?.username ? userProfile.username.charAt(0) : 'JD'}</AvatarFallback>
          </Avatar>
          <div className="grid gap-2">
            <h1 className="text-2xl font-bold">{userProfile?.username || 'John Doe'}</h1>
            <p className="text-sm text-muted-foreground">
              Profile created: {userProfile ? formatDate(userProfile.created) : 'Unknown'}
            </p>
            <p className="text-muted-foreground">Avid book enthusiast</p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid gap-8">
          <section>
            <h2 className="text-xl font-bold mb-4">My Latest Book Lists</h2>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-4">My Latest Book Reviews</h2>
            {/* Additional content can go here */}
          </section>
        </div>
      </div>
    </AnimateWrapper>
  );
};

export default Page;
