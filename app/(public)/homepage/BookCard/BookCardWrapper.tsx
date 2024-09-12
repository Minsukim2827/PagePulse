"use client";

import { motion } from "framer-motion";
import BookCard from "./BookCard";

interface BookCardWrapperProps {
  link: string;
  title: string;
  author: string;
  img: string;
}

const BookCardWrapper: React.FC<BookCardWrapperProps> = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px 10px rgba(192, 38, 211, 0.8)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ boxShadow: "0 0 0 0 rgba(192, 38, 211, 0)" }}
      animate={{ boxShadow: "0 0 0 0 rgba(192, 38, 211, 0)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full mx-auto rounded-3xl"
    >
      <BookCard {...props} />
    </motion.div>
  );
};

export default BookCardWrapper;
