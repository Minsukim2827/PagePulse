
import React, { useState } from 'react';
import useSubmitFeed from '@/app/hooks/useSubmitFeed';

interface AddFeedFormProps {
  onPostCreated: () => void;
}

const AddFeedForm: React.FC<AddFeedFormProps> = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const { isSubmitting, error, handleSubmit } = useSubmitFeed(onPostCreated);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(content);
    setContent('');
  };

  return (
    <form onSubmit={onSubmit} className="bg-card p-4 rounded-lg shadow-sm w-p6">
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting || !content.trim()}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {isSubmitting ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
};

export default AddFeedForm;
