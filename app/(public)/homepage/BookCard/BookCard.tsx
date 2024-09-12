"use client";

import { BookCard1 } from "@/components/ui/book-card1";

interface BookCardProps {
  link: string;
  title: string;
  author: string;
  img: string;
}

const BookCard: React.FC<BookCardProps> = ({ link, title, author, img }) => {
  return (
    <BookCard1
      link={link}
      title={title}
      author={author}
      img={img}
    />
  );
};

export default BookCard;
