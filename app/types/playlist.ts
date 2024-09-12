// types/playlist.ts

export interface Book {
  id: string;
  title: string;
  score: number;
  notes: string;
  genres: string[];
  image: string;
  created_at: string;
  updated_at: string;
}

export interface BookList {
  id: string;
  title: string;
  description: string;
  is_private: boolean;
  likes: number;
  dislikes: number;
  views: number;
  follower_count: number;
  created_at: string;
  updated_at: string;
  books: Book[];
}

export interface BookListProps {
  list: BookList;
  editingList: string | null;
  startEditingList: (listId: string) => void;
  stopEditingList: () => void;
  handleEditList: (listId: string, updatedList: Partial<BookList>) => Promise<void>;
  handleDeleteList: (listId: string) => Promise<void>;
  editingBook: { listId: string; bookId: string } | null;
  startEditingBook: (listId: string, bookId: string) => void;
  stopEditingBook: () => void;
  toggleList: (listId: string) => void;
  openBooks: string[];
  toggleBook: (bookId: string) => void;
}

export interface BookReviewProps {
  book: Book;
  listId: string;
  editingBook: { listId: string; bookId: string } | null;
  startEditingBook: (listId: string, bookId: string) => void;
  stopEditingBook: () => void;
  handleEditBook: (listId: string, bookId: string, updatedBook: Partial<Book>) => Promise<void>;
  handleDeleteBook: (listId: string, bookId: string) => Promise<void>;
}
