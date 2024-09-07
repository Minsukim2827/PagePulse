'use client';

import { useState } from 'react';
import useSWR from 'swr';
import AnimateWrapper from '@/components/AnimateWrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ThumbsUpIcon, ThumbsDownIcon, EyeIcon, UserIcon, CalendarIcon, LockIcon, StarIcon } from "lucide-react";
import { format } from 'date-fns';
import Image from 'next/image';

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page: React.FC = () => {
  const [openPlaylists, setOpenPlaylists] = useState<string[]>([]);
  const [openReviews, setOpenReviews] = useState<string[]>([]);

  // Fetch user profile using SWR
  const { data: userProfile, error: profileError } = useSWR('/api/profile-page/get-profile', fetcher);

  // Fetch playlists and reviews using SWR
  const { data: playlistsAndReviews, error: dataError } = useSWR('/api/profile-page/get-playlists-and-reviews', fetcher);

  // Handle loading and error states
  if (profileError || dataError) {
    return <div>Failed to load data</div>;
  }

  if (!userProfile || !playlistsAndReviews) {
    return <div>Loading...</div>;
  }

  const { playlists, reviews } = playlistsAndReviews;

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date'; // Handle invalid date
    }
    return format(date, 'dd MM yyyy');
  };

  const toggleAccordion = (id: string, setOpen: React.Dispatch<React.SetStateAction<string[]>>, openList: string[]) => {
    setOpen(openList.includes(id) ? openList.filter(item => item !== id) : [...openList, id]);
  };

  return (
    <AnimateWrapper>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-8">
        {/* Profile Header */}
        {userProfile && (
          <div className="flex items-center gap-6 mb-8">
            <div className="flex-shrink-0">
              <Image
                src={userProfile.avatar ? userProfile.avatar : '/avatar-default.png'}
                alt={`${userProfile.username}'s avatar`}
                width={96}
                height={96}
              />
            </div>
            <div className="grid gap-2">
              <h1 className="text-2xl font-bold">{userProfile.username}</h1>
              <p className="text-sm text-muted-foreground">
                Profile created: {formatDate(userProfile.created.toString())}
              </p>
            </div>
          </div>
        )}

        {/* Top 5 Playlists */}
        <section>
          <h2 className="text-xl font-bold mb-4">Top 5 Most Recent Book Lists</h2>
          <Accordion type="multiple" value={openPlaylists} className="w-full">
            {playlists.map((playlist) => (
              <AccordionItem key={playlist.id} value={playlist.id}>
                <AccordionTrigger onClick={() => toggleAccordion(playlist.id, setOpenPlaylists, openPlaylists)}>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{playlist.title}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ThumbsUpIcon className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm">{playlist.likes}</span>
                        <ThumbsDownIcon className="w-4 h-4 text-red-500 ml-2 mr-1" />
                        <span className="text-sm">{playlist.dislikes}</span>
                      </div>
                      <div className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{playlist.views}</span>
                      </div>
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{playlist.follower_count}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{formatDate(playlist.created_at)}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 space-y-2">
                    <p>{playlist.description}</p>
                    <div className="flex items-center space-x-4">
                      {playlist.is_private ? (
                        <Badge variant="secondary">
                          <LockIcon className="w-4 h-4 mr-1 text-red-500" /> Private
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <LockIcon className="w-4 h-4 mr-1 text-green-500" /> Public
                        </Badge>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Top 5 Reviews */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Top 5 Most Recent Book Reviews</h2>
          <Accordion type="multiple" value={openReviews} className="w-full">
            {reviews.map((review) => (
              <AccordionItem key={review.id} value={review.id}>
                <AccordionTrigger onClick={() => toggleAccordion(review.id, setOpenReviews, openReviews)}>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.title}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                        <span>{review.score.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{formatDate(review.created_at)}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 space-y-2">
                    <p>{review.notes}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </AnimateWrapper>
  );
};

export default Page;
