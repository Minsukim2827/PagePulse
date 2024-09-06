import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BookCard from "./bookCard";

interface CategorySectionProps {
  category: string;
  books: any[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, books }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this value to control when the animation triggers
    triggerOnce: false, // Set to false to allow the animation to trigger multiple times
  });

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

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
      y: scrollDirection === "down" ? -50 : 50, // Fade in from above when scrolling down, from below when scrolling up
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
          <BookCard
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
