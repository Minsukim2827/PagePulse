import React from 'react';
import Link from 'next/link';
import cardContents from './cardContents';
import { LogIn, Github, Book } from 'lucide-react';
import  BubbleButton  from '@/components/ui/bubbleButton/bubbleButton';


const DashCard: React.FC = () => {
  return (

    <div className="border-b-2 flex flex-col justify-center items-center p-4 h-auto relative gap-2 mx-auto">
      <h1 className="text-violet-700 dark:text-white text-2xl md:text-3xl lg:text-6xl lg:pt-10 font-bold text-center">The next-gen book platform.</h1>
      <h2 className="font-bold text-gray-700 dark:text-gray-400 text-lg text-center">Track, share and discover your favourite books.</h2>
<Link href="https://github.com/Minsukim2827/pagepulse" passHref>
      <BubbleButton >
        <Github size={20} className="text-violet-700 dark:text-fuchsia-400"/>
      Built by Min
      </BubbleButton>
      </Link>
      <div className="flex flex-row gap-6 mb-6">
<Link href="/sign-up" passHref>

<button className="flex flex-row gap-2 items-center justify-center rounded-l px-16 py-3 text-l text-white bg-zinc-800 hover:bg-zinc-700">Sign Up <LogIn size={20} className="text-white"/></button>

</Link>
<Link href="/sign-in" passHref>
<button className="flex flex-row gap-2 items-center justify-center px-16 py-3 text-l text-white bg-zinc-800 hover:bg-zinc-700 ">Sign In <LogIn size={20} className="text-white"/></button>

</Link>
      </div>

      <div className="border-t-2 border-zinc-700 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {cardContents.map((card, index) => (
          <div key={index} className="p-2 md:p-4 flex gap-4 md:gap-10 items-center">
            <div className="text-fuchsia-500 p-2">
              <Book size={60} />
            </div>
            <div className="row-span-2 flex flex-col justify-between">
              <div className="text-lg lg:text-2xl font-bold p-2 text-black dark:text-white">{card.top}</div>
              <div className="text-md lg:text-xl font-bold p-2 text-purple-500 dark:text-zinc-400">{card.bottom}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DashCard;
