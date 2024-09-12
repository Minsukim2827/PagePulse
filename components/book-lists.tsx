'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CalendarIcon, EyeIcon, ThumbsUpIcon, ThumbsDownIcon, UserIcon, LockIcon, StarIcon, PlusIcon, EditIcon, TrashIcon } from "lucide-react"

// Mock data for demonstration
const initialBookLists = [
  {
    id: '1',
    title: 'My Favorite Sci-Fi Novels',
    likes: 150,
    dislikes: 30,
    views: 1000,
    followers: 75,
    creationDate: '2023-01-15',
    description: 'A collection of my all-time favorite science fiction novels.',
    isPrivate: false,
    lastUpdated: '2023-06-20',
    books: [
      {
        id: 'b1',
        title: 'Dune',
        imageUrl: '/placeholder.svg?height=100&width=70',
        score: 4.5,
        genres: ['Science Fiction', 'Space Opera'],
        creationDate: '2023-01-15',
        lastUpdate: '2023-03-10',
        notes: 'A masterpiece of world-building and political intrigue.'
      },
      {
        id: 'b2',
        title: 'Neuromancer',
        imageUrl: '/placeholder.svg?height=100&width=70',
        score: 4.2,
        genres: ['Cyberpunk', 'Science Fiction'],
        creationDate: '2023-02-01',
        lastUpdate: '2023-02-01',
        notes: 'The definitive cyberpunk novel that inspired a generation.'
      }
    ]
  },
]

export function BookLists() {
  const [bookLists, setBookLists] = useState(initialBookLists)
  const [openLists, setOpenLists] = useState<string[]>([])
  const [openBooks, setOpenBooks] = useState<string[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newList, setNewList] = useState({
    title: '',
    description: '',
    isPrivate: false
  })
  const [editingList, setEditingList] = useState<string | null>(null)
  const [editingBook, setEditingBook] = useState<{ listId: string, bookId: string } | null>(null)

  const toggleList = (listId: string) => {
    setOpenLists(prev => 
      prev.includes(listId) ? prev.filter(id => id !== listId) : [...prev, listId]
    )
  }

  const toggleBook = (bookId: string) => {
    setOpenBooks(prev => 
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    )
  }

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault()
    const newBookList = {
      id: Date.now().toString(),
      ...newList,
      likes: 0,
      dislikes: 0,
      views: 0,
      followers: 0,
      creationDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      books: []
    }
    setBookLists(prev => [newBookList, ...prev])
    setNewList({ title: '', description: '', isPrivate: false })
    setShowAddForm(false)
  }

  const handleEditList = (listId: string, updatedList: Partial<typeof bookLists[0]>) => {
    setBookLists(prev => prev.map(list => 
      list.id === listId ? { ...list, ...updatedList, lastUpdated: new Date().toISOString() } : list
    ))
    setEditingList(null)
  }

  const handleDeleteList = (listId: string) => {
    setBookLists(prev => prev.filter(list => list.id !== listId))
  }

  const handleEditBook = (listId: string, bookId: string, updatedBook: Partial<typeof bookLists[0]['books'][0]>) => {
    setBookLists(prev => prev.map(list => 
      list.id === listId ? {
        ...list,
        books: list.books.map(book => 
          book.id === bookId ? { ...book, ...updatedBook, lastUpdate: new Date().toISOString() } : book
        )
      } : list
    ))
    setEditingBook(null)
  }

  const handleDeleteBook = (listId: string, bookId: string) => {
    setBookLists(prev => prev.map(list => 
      list.id === listId ? {
        ...list,
        books: list.books.filter(book => book.id !== bookId)
      } : list
    ))
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Book Lists</h1>
      
      <Button onClick={() => setShowAddForm(!showAddForm)} className="mb-4">
        <PlusIcon className="w-4 h-4 mr-2" />
        {showAddForm ? 'Cancel' : 'Add Book List'}
      </Button>

      {showAddForm && (
        <form onSubmit={handleAddList} className="bg-secondary p-4 rounded-lg mb-4 space-y-4">
          <Input
            placeholder="List Title"
            value={newList.title}
            onChange={(e) => setNewList({...newList, title: e.target.value})}
            required
          />
          <Textarea
            placeholder="List Description"
            value={newList.description}
            onChange={(e) => setNewList({...newList, description: e.target.value})}
            required
          />
          <div className="flex items-center space-x-2">
            <Switch
              id="private-mode"
              checked={newList.isPrivate}
              onCheckedChange={(checked) => setNewList({...newList, isPrivate: checked})}
            />
            <label htmlFor="private-mode">Private List</label>
          </div>
          <Button type="submit">Create List</Button>
        </form>
      )}

      <Accordion type="multiple" value={openLists} className="w-full">
        {bookLists.map(list => (
          <AccordionItem key={list.id} value={list.id}>
            <AccordionTrigger onClick={() => toggleList(list.id)} className="hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <span className="font-semibold">{list.title}</span>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <ThumbsUpIcon className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm">{list.likes}</span>
                    <ThumbsDownIcon className="w-4 h-4 text-red-500 ml-2 mr-1" />
                    <span className="text-sm">{list.dislikes}</span>
                  </div>
                  <div className="flex items-center">
                    <EyeIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{list.views}</span>
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{list.followers}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{new Date(list.creationDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4 space-y-4">
                {editingList === list.id ? (
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    handleEditList(list.id, {
                      title: formData.get('title') as string,
                      description: formData.get('description') as string,
                      isPrivate: formData.get('isPrivate') === 'on'
                    })
                  }} className="space-y-4">
                    <Input name="title" defaultValue={list.title} required />
                    <Textarea name="description" defaultValue={list.description} required />
                    <div className="flex items-center space-x-2">
                      <Switch name="isPrivate" defaultChecked={list.isPrivate} />
                      <label htmlFor="isPrivate">Private List</label>
                    </div>
                    <Button type="submit">Save Changes</Button>
                  </form>
                ) : (
                  <>
                    <p>{list.description}</p>
                    <div className="flex items-center space-x-4">
                      {list.isPrivate ? (
                        <Badge variant="secondary">
                          <LockIcon className="w-4 h-4 mr-1 text-red-500" /> Private
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <LockIcon className="w-4 h-4 mr-1 text-green-500" /> Public
                        </Badge>
                      )}
                      <span className="text-sm">Last updated: {new Date(list.lastUpdated).toLocaleDateString()}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setEditingList(list.id)}>
                        <EditIcon className="w-4 h-4 mr-2" /> Edit List
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDeleteList(list.id)}>
                        <TrashIcon className="w-4 h-4 mr-2" /> Delete List
                      </Button>
                    </div>
                  </>
                )}
                <Accordion type="multiple" value={openBooks} className="w-full">
                  {list.books.map(book => (
                    <AccordionItem key={book.id} value={book.id}>
                      <AccordionTrigger onClick={() => toggleBook(book.id)} className="hover:no-underline">
                        <div className="flex items-center space-x-4">
                          <img src={book.imageUrl} alt={book.title} className="w-16 h-24 object-cover" />
                          <div>
                            <h3 className="font-semibold">{book.title}</h3>
                            <div className="flex items-center">
                              <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                              <span>{book.score.toFixed(1)}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {book.genres.map(genre => (
                                <Badge key={genre} variant="outline">{genre}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 space-y-2">
                          {editingBook?.listId === list.id && editingBook?.bookId === book.id ? (
                            <form onSubmit={(e) => {
                              e.preventDefault()
                              const formData = new FormData(e.currentTarget)
                              handleEditBook(list.id, book.id, {
                                score: parseFloat(formData.get('score') as string),
                                notes: formData.get('notes') as string
                              })
                            }} className="space-y-4">
                              <Input name="score" type="number" step="0.1" min="0" max="5" defaultValue={book.score} required />
                              <Textarea name="notes" defaultValue={book.notes} required />
                              <Button type="submit">Save Changes</Button>
                            </form>
                          ) : (
                            <>
                              <p>{book.notes}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>Created: {new Date(book.creationDate).toLocaleDateString()}</span>
                                <span>Updated: {new Date(book.lastUpdate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex space-x-2 mt-2">
                                <Button variant="outline" size="sm" onClick={() => setEditingBook({ listId: list.id, bookId: book.id })}>
                                  <EditIcon className="w-4 h-4 mr-2" /> Edit Review
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDeleteBook(list.id, book.id)}>
                                  <TrashIcon className="w-4 h-4 mr-2" /> Delete Book
                                </Button>
                              </div>
                            </>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}