import React from 'react';
import Link from 'next/link';
import DashCard from './(public)/homepage/dashcard';
import AnimateWrapper from '@/components/AnimateWrapper';
import HighlyRatedBooksGrid from './(public)/homepage/highly-rated-books-grid';
import { useUser } from '@clerk/nextjs';

export default function Home() {

  
    return (
      
      <main className="flex justify-center max-w-p13 m-auto">
        <AnimateWrapper>
<DashCard />
<HighlyRatedBooksGrid />
  
</AnimateWrapper>
      </main>
      
    );
  }

