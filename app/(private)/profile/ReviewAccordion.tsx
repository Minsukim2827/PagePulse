import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { StarIcon, CalendarIcon } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface ReviewAccordionProps {
  reviews: any[];
  openReviews: string[];
  setOpenReviews: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ReviewAccordion: React.FC<ReviewAccordionProps> = ({ reviews, openReviews, setOpenReviews }) => {
  const toggleAccordion = (id: string) => {
    setOpenReviews(openReviews.includes(id) ? openReviews.filter(item => item !== id) : [...openReviews, id]);
  };

  return (
    <Accordion type="multiple" value={openReviews} className="w-full">
      {reviews.map((review) => (
        <AccordionItem key={review.id} value={review.id}>
          <AccordionTrigger onClick={() => toggleAccordion(review.id)}>
            {/* Display review title */}
            <div className="flex items-center">
              <StarIcon className="mr-2" />
              {review.title}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {/* Display additional review information */}
            <p>Authors: {review.authors.join(', ')}</p>
            <p>Genres: {review.genres.join(', ')}</p>
            <p>Score: {review.score}</p>
            <div className="flex items-center">
              <CalendarIcon className="mr-1" />
              <span>Created on: {formatDate(review.created_at)}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
