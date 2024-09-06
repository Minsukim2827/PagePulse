"use client";

import { useEffect, useState } from 'react';
import AnimateWrapper from '@/components/AnimateWrapper';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import axios from '@/lib/axios';

interface Post {
  id: number;
  username: string;
  content: string;
  created_at: string;
}

const Page: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const { data } = await axios.get('/api/feed/get-feed');
        if (data && Array.isArray(data)) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch (error) {
        setError('Error fetching feed');
        console.error('Error fetching feed:', error);
      }
    };

    fetchFeed();
  }, []);

  // Function to format the time based on the conditions
  const formatTime = (created_at: string) => {
    const postDate = new Date(created_at);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays < 30) {
      return `${diffInDays} days ago`;
    } else {
      return `${diffInMonths} months ago`;
    }
  };

  return (
    <AnimateWrapper>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 bg-background">
          <div className="container mx-auto py-6 md:py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {error ? (
              <p>{error}</p>
            ) : posts.length === 0 ? (
              <p>No posts available</p>
            ) : (
              posts.map((post) => (
                <Card key={post.id} className="bg-card p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" alt={`@${post.username}`} />
                      <AvatarFallback>{post.username.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{post.username}</div>
                      <div className="text-xs text-muted-foreground">
                        @{post.username} • {formatTime(post.created_at)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">{post.content}</p>
                </Card>
              ))
            )}
          </div>
        </main>
      </div>
    </AnimateWrapper>
  );
};

export default Page;
