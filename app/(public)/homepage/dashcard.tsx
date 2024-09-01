import React from 'react';
import Link from 'next/link';
import cardContents from './cardContents';
import { Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashCard: React.FC = () => {
  return (

    <div className="bg-theme2 shadow-2xl flex flex-col justify-center items-center p-4 sm:p-8 md:p-16 h-auto rounded-2xl relative gap-4 w-11/12 sm:w-full md:w-4/5 lg:w-7/10 mx-auto">
      <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold mb-2 text-center">The next-generation book platform</h1>
      <h2 className="font-bold text-theme10 text-lg md:text-xl lg:text-3xl mb-4 text-center">Track, share and discover your favourite books.</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {cardContents.map((card, index) => (
          <div key={index} className="p-2 md:p-4 flex gap-4 md:gap-10 items-center">
            <div className="text-theme10 p-2">
              <Book size={60} />
            </div>
            <div className="row-span-2 flex flex-col justify-between">
              <div className="text-lg lg:text-2xl font-bold p-2 text-white">{card.top}</div>
              <div className="text-md lg:text-xl font-bold p-2 text-theme10">{card.bottom}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2" style={{ transform: 'translate(-50%, calc(50%))' }}>
        <Link href="/sign-up" passHref>
          <Button variant="default" className="shadow pt-4 pb-4 md:pt-10 md:pb-10 rounded-full font-bold text-lg sm:text-xl md:text-4xl bg-theme5 text-white">
            Join Now &nbsp;
            <span className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 p-1 md:p-2 rounded-full border-2 md:border-4 border-white">&gt;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashCard;
