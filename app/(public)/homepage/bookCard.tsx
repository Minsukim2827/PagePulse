"use client"; // Ensure this component is treated as a client component

import { motion } from "framer-motion";
import Link from "next/link";
import { BookCard1 } from "@/components/component/book-card1"; // Import the BookCard1 component

const BookCard = ({ link, title, author, img }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05, // Slightly expand the card on hover
        boxShadow: "0 0 20px 10px rgba(192, 38, 211, 0.8)", // Glow effect with fuchsia-600 color
      }}
      whileTap={{
        scale: 0.95, // Slightly shrink the card when clicked
      }}
      initial={{ boxShadow: "0 0 0 0 rgba(192, 38, 211, 0)" }} // No glow initially
      animate={{ boxShadow: "0 0 0 0 rgba(192, 38, 211, 0)" }} // No glow when not hovered
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation
      className="w-full mx-auto rounded-3xl"
    >
      <BookCard1
        link={link}
        title={title}
        author={author}
        img={img}
      />
    </motion.div>
  );
};

export default BookCard;
