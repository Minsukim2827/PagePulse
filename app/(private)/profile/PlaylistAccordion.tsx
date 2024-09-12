import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ThumbsUpIcon, ThumbsDownIcon, EyeIcon, UserIcon, CalendarIcon, LockIcon } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface PlaylistAccordionProps {
  playlists: any[];
  openPlaylists: string[];
  setOpenPlaylists: React.Dispatch<React.SetStateAction<string[]>>;
}

export const PlaylistAccordion: React.FC<PlaylistAccordionProps> = ({ playlists, openPlaylists, setOpenPlaylists }) => {
  const toggleAccordion = (id: string) => {
    setOpenPlaylists(openPlaylists.includes(id) ? openPlaylists.filter(item => item !== id) : [...openPlaylists, id]);
  };

  return (
    <Accordion type="multiple" value={openPlaylists} className="w-full">
      {playlists.map((playlist) => (
        <AccordionItem key={playlist.id} value={playlist.id}>
          <AccordionTrigger onClick={() => toggleAccordion(playlist.id)}>
            {/* Display playlist title */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <UserIcon className="mr-2" />
                {playlist.title}
              </div>
              {playlist.is_private && (
                <LockIcon className="ml-2 text-red-500" />
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {/* Display additional playlist information */}
            <p>{playlist.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <ThumbsUpIcon className="mr-1" />
                <span>{playlist.likes}</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="mr-1" />
                <span>{playlist.views}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="mr-1" />
                <span>Created on: {formatDate(playlist.created_at)}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
