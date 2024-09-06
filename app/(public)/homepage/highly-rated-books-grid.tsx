"use client";
import CategorySection from "./CategorySection";
import highlyRatedBooks2024 from "@/lib/highly-rated-books-2024";

const HighlyRatedBooksGrid: React.FC = () => {
  return (
    <div className="mt-12 min-h-screen w-full m-auto">
      <h1 className="text-center text-4xl text-purple-500">Highly Rated Books</h1>
      {Object.entries(highlyRatedBooks2024).map(([category, books]) => (
        <CategorySection key={category} category={category} books={books} />
      ))}
    </div>
  );
};

export default HighlyRatedBooksGrid;
