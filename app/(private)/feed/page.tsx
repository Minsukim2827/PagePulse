"use client"
import React, { useState, useEffect } from 'react';
import AnimateWrapper from '@/components/AnimateWrapper';
import PostCard from '@/app/(private)/feed/PostCard';
import ErrorMessage from '@/components/ui/ErrorMessage';
import LoadingCircle from '@/components/ui/loadingCircle/loadingCircle';
import AddFeedForm from '@/app/(private)/feed/AddFeedForm';
import useCurrentUserId from '@/app/hooks/useCurrentUserId';
import usePosts from '@/app/hooks/usePosts';

const FeedPage: React.FC = () => {
  const { posts, error, mutate, handleDeletePost } = usePosts();
  const [isLoading, setIsLoading] = useState(true);
  const currentUserId = useCurrentUserId();

  useEffect(() => {
    if (posts || error) {
      setIsLoading(false);
    }
  }, [posts, error]);

  const renderContent = () => {
    if (error) return <ErrorMessage message="Error fetching feed" />;
    if (isLoading) return <LoadingCircle />;
    if (!posts || posts.length === 0) return <ErrorMessage message="No posts available" />;

    return posts.map((post) => (
      <PostCard
        key={post.id}
        post={post}
        currentUserId={currentUserId}
        onDelete={handleDeletePost}
      />
    ));
  };

  return (
    <AnimateWrapper>
      <div className="flex flex-col min-h-screen items-center">
        <main className="flex-1 w-full max-w-p13 px-4">
          <div className="flex flex-col space-y-6 py-6 items-center">
            <AddFeedForm onPostCreated={mutate} />
            {renderContent()}
          </div>
        </main>
      </div>
    </AnimateWrapper>
  );
};

export default FeedPage;
