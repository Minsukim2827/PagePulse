"use client"

import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Post } from '@/app/types/post';
import { formatTime } from '@/app/utils/dateFormatters';

interface PostCardProps {
  post: Post;
  currentUserId: number | null;
  onDelete: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, currentUserId, onDelete }) => {
  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <Card className="bg-card p-4 rounded-lg shadow-sm w-p6">
      <div className="flex items-center justify-between">
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
        {post.user_id === currentUserId && (
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        )}
      </div>
      <p className="mt-4">{post.content}</p>
    </Card>
  );
};

export default PostCard;
