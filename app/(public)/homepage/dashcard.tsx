"use client"
import React from 'react';
import Link from 'next/link';
import cardContents from './cardContents';
import { Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashCard: React.FC = () => {
  return (
    <div className="bg-theme2 border-4 border-black flex flex-col items-center p-16 w-auto h-auto rounded-2xl relative gap-6">
      <h1 className="text-white text-5xl font-bold mb-2">The next-generation book platform</h1>
      <h2 className="font-bold text-theme10 text-3xl mb-4">Track, share and discover your favourite books.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full ">
        {cardContents.map((card, index) => (
          <div key={index} className="p-4 flex gap-10 items-center">
            <div className="col-span-1 row-span-2 text-theme10 p-2">
              <Book size={80} />
            </div>
            <div className="row-span-2 flex flex-col justify-between w-80">
              <div className="text-2xl font-bold p-2 text-white">{card.top}</div>
              <div className="text-xl font-bold p-2 text-theme10">{card.bottom}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 " style={{ transform: 'translate(-50%, calc(50%))' }}>
        <Link href="/sign-up" passHref>
          <Button variant="default" className="pt-10 pb-10 rounded-full font-bold text-4xl bg-theme5 text-white">
            Join Now &nbsp;
            <span className="flex items-center justify-center w-12 h-12 p-2 rounded-full border-4 border-white">&gt;</span>
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default DashCard;
