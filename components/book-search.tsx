  import { useState } from 'react';
  import Link from 'next/link';
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Switch } from "@/components/ui/switch";
  import { Label } from "@/components/ui/label";
  import { Grid2X2, List, ChevronDown, ChevronUp } from 'lucide-react';
  import Image from 'next/image';
  import { useUser } from '@clerk/nextjs';
  import axiosInstance from '@/lib/axios';

  interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      publishedDate?: string;
      imageLinks?: {
        thumbnail: string;
      };
      publisher?: string;
      industryIdentifiers?: { type: string; identifier: string }[];
      infoLink?: string;
    };
  }

  export function BookSearch() {
    const { isSignedIn } = useUser();
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isGridView, setIsGridView] = useState(true);
    const [expandedBook, setExpandedBook] = useState<string | null>(null);
    const [page, setPage] = useState(0);
    const resultsPerPage = 9;

    const handleSearch = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(
          `https://www.googleapis.com/books/v1/volumes`, {
            params: {
              q: searchQuery,
              key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
              startIndex: 0,
              maxResults: 40 // Fetch a good number of results for pagination
            },
            withCredentials: false
          }
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const toggleExpand = (bookId: string) => {
      setExpandedBook((prev) => (prev === bookId ? null : bookId));
    };

    const handleNextPage = () => setPage((prev) => prev + 1);
    const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 0));

    const startIndex = page * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const paginatedBooks = books.slice(startIndex, endIndex);

    const mapBooksToCardProps = (books) => {
      return books.map((book) => ({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.join(', ') || 'Unknown',
        imageUrl: book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg',
        detailsLink: book.volumeInfo.infoLink || '#',
        publishYear: book.volumeInfo.publishedDate?.split('-')[0] || 'Unknown',
        genre: book.volumeInfo.categories?.join(', ') || 'Unknown'
      }));
    };

    return (
      isSignedIn && (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Book Search</h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <form onSubmit={handleSearch} className="flex gap-2 flex-grow">
              <Input
                type="text"
                placeholder="Search for books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" disabled={isLoading} className="transition-all duration-300 ease-in-out">
                {isLoading ? 'Searching...' : 'Search'}
              </Button>
            </form>
            <div className="flex items-center space-x-2">
              <Switch
                id="view-mode"
                checked={isGridView}
                onCheckedChange={setIsGridView}
                className="transition-transform duration-300 ease-in-out"
              />
              <Label htmlFor="view-mode" className="flex items-center gap-2">
                {isGridView ? (
                  <>
                    <Grid2X2 className="h-4 w-4" />
                    <span className="sr-only">Grid View</span>
                  </>
                ) : (
                  <>
                    <List className="h-4 w-4" />
                    <span className="sr-only">List View</span>
                  </>
                )}
              </Label>
            </div>
          </div>

          {isGridView ? (
            <div className="grid gap-4 md:grid-cols-3 transition-all duration-300 ease-in-out">
              {paginatedBooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <CardHeader className="text-center">
                    <CardTitle className="break-words">{book.volumeInfo.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <Image
                        src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg'}
                        alt={book.volumeInfo.title}
                        width={128}
                        height={192}
                        className="object-cover rounded-md"
                      />
                    </div>
                    <p className="break-words text-center">Author: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                    <p className="text-center">Year: {book.volumeInfo.publishedDate?.split('-')[0] || 'Unknown'}</p>
                    <Button onClick={() => toggleExpand(book.id)} variant="link" className="mt-2">
                      {expandedBook === book.id ? 'Show Less' : 'Show More'}
                      {expandedBook === book.id ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                    {expandedBook === book.id && (
                      <div className="mt-4 transition-all duration-300 ease-in-out">
                        <p>Publisher: {book.volumeInfo.publisher || 'Unknown'}</p>
                        {book.volumeInfo.industryIdentifiers?.map((id) => (
                          <p key={id.identifier}>{id.type}: {id.identifier}</p>
                        ))}
                        <Link href={book.volumeInfo.infoLink || '#'} passHref>
                          <Button variant="link" className="text-blue-500 hover:underline">
                            More Info
                          </Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4 transition-all duration-300 ease-in-out">
              {paginatedBooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Image
                      src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg'}
                      alt={book.volumeInfo.title}
                      width={96}
                      height={144}
                      className="object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold break-words">{book.volumeInfo.title}</h3>
                      <p className="break-words">Author: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                      <p>Year: {book.volumeInfo.publishedDate?.split('-')[0] || 'Unknown'}</p>
                      <Button onClick={() => toggleExpand(book.id)} variant="link" className="mt-2">
                        {expandedBook === book.id ? 'Show Less' : 'Show More'}
                        {expandedBook === book.id ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                      {expandedBook === book.id && (
                        <div className="mt-4 transition-all duration-300 ease-in-out">
                          <p>Publisher: {book.volumeInfo.publisher || 'Unknown'}</p>
                          {book.volumeInfo.industryIdentifiers?.map((id) => (
                            <p key={id.identifier}>{id.type}: {id.identifier}</p>
                          ))}
                          <Link href={book.volumeInfo.infoLink || '#'} passHref>
                            <Button variant="link" className="text-blue-500 hover:underline">
                              More Info
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="flex justify-center gap-4 mt-8">
            <Button onClick={handlePreviousPage} disabled={page === 0} className="transition-all duration-300 ease-in-out">
              Previous
            </Button>
            <Button onClick={handleNextPage} disabled={endIndex >= books.length} className="transition-all duration-300 ease-in-out">
              Next
            </Button>
          </div>
        </div>
      )
    );
  }
