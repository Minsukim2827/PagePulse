"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import BookCardWrapper from "../BookCard/BookCardWrapper";
import { useScrollDirection } from "@/app/hooks/useScrollDirection";

interface CategorySectionProps {
  category: string;
  books: any[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, books }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? -50 : 50,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={variants}
    >
      <h2 className="text-3xl text-center font-bold my-8">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 sm:gap-10">
        {books.map((book: any) => (
          <BookCardWrapper
            key={book["book-title"]}
            link={book["goodreads-link"]}
            img={book["img"]}
            title={book["book-title"]}
            author={book["book-author"]}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CategorySection;
