"use client";

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import AnimateWrapper from '@/components/AnimateWrapper';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import axios from '@/lib/axios';
import { Post } from '@/app/types/post';
import { formatTime } from '@/app/utils/dateFormatters';
import PostCard from '@/app/(private)/feed/PostCard';
import ErrorMessage from '@/components/ui/ErrorMessage';
import LoadingCircle from '@/components/ui/loadingCircle/loadingCircle';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const FeedPage: React.FC = () => {
  const { data: posts, error } = useSWR<Post[]>('/api/feed/get-feed', fetcher);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (posts || error) {
      setIsLoading(false);
    }
  }, [posts, error]);

  const renderContent = () => {
    if (error) return <ErrorMessage message="Error fetching feed" />;
    if (isLoading) return <LoadingCircle />;
    if (!posts || posts.length === 0) return <ErrorMessage message="No posts available" />;

    return posts.map((post) => <PostCard key={post.id} post={post} />);
  };

  return (
    <AnimateWrapper>
      <div className="flex flex-col min-h-screen ">
        <main className="flex-1 ">
          <div className="container mx-auto py-6 md:py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {renderContent()}
          </div>
        </main>
      </div>
    </AnimateWrapper>
  );
};

export default FeedPage;
