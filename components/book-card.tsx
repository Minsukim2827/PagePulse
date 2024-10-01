'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

interface BookCardProps {
  title: string
  author: string
  imageUrl: string
  publishedDate: string
  publisher: string
  isbn13: string
  isbn10: string
}

export function BookCard({
  title,
  author,
  imageUrl,
  publishedDate,
  publisher,
  isbn13,
  isbn10
}: BookCardProps = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  imageUrl: "/placeholder.svg?height=400&width=300",
  publishedDate: "1925-04-10",
  publisher: "Charles Scribner's Sons",
  isbn13: "9780743273565",
  isbn10: "0743273567"
}) {
  const [showMore, setShowMore] = useState(false)

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={`Cover of ${title}`}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-bold leading-tight">{title}</h3>
        <p className="mb-2 text-sm text-gray-600">{author}</p>
        <p className="text-xs text-gray-500">Published: {new Date(publishedDate).toLocaleDateString()}</p>
      </CardContent>
      <CardFooter className="block p-4 pt-0">
        <Button
          variant="ghost"
          className="w-full justify-between p-0 font-normal"
          onClick={() => setShowMore(!showMore)}
        >
          See More
          {showMore ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
        </Button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showMore ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 space-y-2 text-sm">
            <p><span className="font-semibold">Publisher:</span> {publisher}</p>
            <p><span className="font-semibold">ISBN-13:</span> {isbn13}</p>
            <p><span className="font-semibold">ISBN-10:</span> {isbn10}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}