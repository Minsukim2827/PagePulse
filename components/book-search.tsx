// BookSearch.tsx
'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Grid2X2, List } from 'lucide-react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import axiosInstance from '@/lib/axios' // Import axios instance

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export function BookSearch() {

  const { isLoaded, isSignedIn, user } = useUser();
  const [searchQuery, setSearchQuery] = useState('')
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isGridView, setIsGridView] = useState(true)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // For Google Books API, omit withCredentials
      const response = await axiosInstance.get(
        `https://www.googleapis.com/books/v1/volumes`, {
          params: {
            q: searchQuery,
            key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
          },
          withCredentials: false // Disable credentials for this request
        }
      );
  
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setIsLoading(false);
    }
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
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </form>
          <div className="flex items-center space-x-2">
            <Switch
              id="view-mode"
              checked={isGridView}
              onCheckedChange={setIsGridView}
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <Card key={book.id}>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{book.volumeInfo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-w-2 aspect-h-3 mb-4">
                    <Image
                      src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg'}
                      alt={book.volumeInfo.title}
                      width={128}
                      height={192}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="line-clamp-1">Author: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                  <p>Year: {book.volumeInfo.publishedDate?.split('-')[0] || 'Unknown'}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {books.map((book) => (
              <Card key={book.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <Image
                    src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg'}
                    alt={book.volumeInfo.title}
                    width={96}
                    height={144}
                    className="object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold line-clamp-1">{book.volumeInfo.title}</h3>
                    <p className="line-clamp-1">Author: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                    <p>Year: {book.volumeInfo.publishedDate?.split('-')[0] || 'Unknown'}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    )
  )
}
