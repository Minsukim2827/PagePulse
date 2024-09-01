import BookCard from "./bookCard";
import highlyRatedBooks2024 from "@/lib/highly-rated-books-2024";

const HighlyRatedBooksGrid: React.FC = () => {
  return (
    <div className="mt-20 min-h-screen w-full m-auto">
      <h1 className="text-center text-4xl">Highly Rated Books</h1>
      {Object.entries(highlyRatedBooks2024).map(([category, books]) => (
        <div key={category}>
          <h2 className="text-3xl text-center font-bold my-8 ">{category}</h2>

          <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-4 sm:gap-10">
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
        </div>
      ))}
    </div>
  );
};

export default HighlyRatedBooksGrid;
