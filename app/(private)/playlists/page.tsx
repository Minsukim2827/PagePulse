'use client'
import { useEffect, useState } from 'react'
import AnimateWrapper from '@/components/AnimateWrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ThumbsUpIcon, ThumbsDownIcon, EyeIcon, UserIcon, CalendarIcon, LockIcon, StarIcon, PlusIcon, EditIcon, TrashIcon } from "lucide-react"
import axios from '@/lib/axios';
import { format} from 'date-fns';
import Image from 'next/image';


const Page: React.FC = () => {
  const [bookLists, setBookLists] = useState<any[]>([]);
  const [openLists, setOpenLists] = useState<string[]>([]);
  const [openBooks, setOpenBooks] = useState<string[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newList, setNewList] = useState({
    title: '',
    description: '',
    isPrivate: false
  });
  const [editingList, setEditingList] = useState<string | null>(null);
  const [editingBook, setEditingBook] = useState<{ listId: string, bookId: string } | null>(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd MM yyyy');
  };

useEffect(() => {
  const fetchPlaylistsAndReviews = async () => {
    try {
      const response = await axios.get('/api/playlists/get-playlists');
      const data = response.data;

      if (response.status === 200 && data) {
        const playlists = data.playlists || [];
        const reviews = data.reviews || [];

        // Combine playlists and their corresponding reviews
        const playlistsWithBooks = playlists.map((playlist: any) => ({
          ...playlist,
          books: reviews.filter((review: any) => review.playlist_id === playlist.id) || [],
        }));

        console.log(playlistsWithBooks);
        setBookLists(playlistsWithBooks);
      } else {
        console.error(data?.error || 'Unexpected API response');
      }
    } catch (error) {
      console.error('Failed to fetch playlists and reviews:', error);
    }
  };

  fetchPlaylistsAndReviews();
}, []);


  const toggleList = (listId: string) => {
    setOpenLists(prev => prev.includes(listId) ? prev.filter(id => id !== listId) : [...prev, listId]);
  }

  const toggleBook = (bookId: string) => {
    setOpenBooks(prev => prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]);
  }

  const handleAddList = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/playlists/create-list', {
        title: newList.title,
        description: newList.description,
        isPrivate: newList.isPrivate,
      });
  
      if (response.status === 201) {
        const newBookList = response.data;
        console.log(newBookList);
        setBookLists(prev => [newBookList, ...prev]);
        setNewList({ title: '', description: '', isPrivate: false });
        setShowAddForm(false);
      }
    } catch (error) {
      console.error('Failed to add book list:', error);
    }
  };
  

  const handleEditList = async (listId: string, updatedList: Partial<typeof bookLists[0]>) => {
    try {
      const response = await axios.put(`/api/playlists/edit-list/${listId}`, updatedList);
  
      if (response.status === 200) {
        const updatedBookList = response.data;
        setBookLists(prev => prev.map(list => {
          if (list.id === listId) {
            return { ...list, ...updatedBookList };  // Merges the updated list properties with existing properties
          }
          return list;
        }));
        setEditingList(null);
      }
    } catch (error) {
      console.error('Failed to update book list:', error);
    }
  };
  

  const handleDeleteList = async (listId: string) => {
    try {
      await axios.delete(`/api/playlists/delete-list/${listId}`);
      setBookLists(prev => prev.filter(list => list.id !== listId));
    } catch (error) {
      console.error('Failed to delete book list:', error);
    }
  };
  

  const handleEditBook = async (listId: string, bookId: string, updatedBook: Partial<typeof bookLists[0]['books'][0]>) => {
    try {
      const response = await axios.put(`/api/playlists/edit-book/${bookId}`, updatedBook);
  
      if (response.status === 200) {
        const updatedReview = response.data;
        setBookLists(prev => prev.map(list =>
          list.id === listId ? {
            ...list,
            books: list.books.map(book => book.id === bookId ? updatedReview : book)
          } : list
        ));
        setEditingBook(null);
      }
    } catch (error) {
      console.error('Failed to update book review:', error);
    }
  };
  

  const handleDeleteBook = async (listId: string, bookId: string) => {
    try {
      const response = await axios.delete(`/api/playlists/delete-book/${bookId}`);
      if (response.status === 200) {
        setBookLists(prev => prev.map(list =>
          list.id === listId ? {
            ...list,
            books: list.books.filter(book => book.id !== bookId)
          } : list
        ));
      }
    } catch (error) {
      console.error('Failed to delete book review:', error);
    }
  };
  
  

  return (
    <AnimateWrapper>
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
                      <span className="text-sm">{list.follower_count}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{formatDate(list.created_at)}</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 space-y-4">
                  {editingList === list.id ? (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      handleEditList(list.id, {
                        title: formData.get('title') as string,
                        description: formData.get('description') as string,
                        isPrivate: formData.get('isPrivate') === 'on'
                      });
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
                        {list.is_private ? (
                          <Badge variant="secondary">
                            <LockIcon className="w-4 h-4 mr-1 text-red-500" /> Private
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <LockIcon className="w-4 h-4 mr-1 text-green-500" /> Public
                          </Badge>
                        )}
                        <span className="text-sm">Updated: {formatDate(list.updated_at)}</span>
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
                  {Array.isArray(list.books) && list.books.map(book => (
  <AccordionItem key={book.id} value={book.id}>
    <AccordionTrigger onClick={() => toggleBook(book.id)} className="hover:no-underline">
      <div className="flex items-center space-x-4">
        <Image 
          src={book.image || "/placeholder-user.jpg"} 
          alt={book.title} 
          width={64} 
          height={96} 
          className="object-cover"
        />
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
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleEditBook(list.id, book.id, {
              score: parseFloat(formData.get('score') as string),
              notes: formData.get('notes') as string
            });
          }} className="space-y-4">
            <Input name="score" type="number" step="0.1" min="0" max="5" defaultValue={book.score} required />
            <Textarea name="notes" defaultValue={book.notes} required />
            <Button type="submit">Save Changes</Button>
          </form>
        ) : (
          <>
            <p>{book.notes}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Created: {formatDate(book.created_at)}</span>
              <span>Updated: {formatDate(book.updated_at)}</span>
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
    </AnimateWrapper>
  );
}

export default Page;
