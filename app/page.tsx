import React from 'react';
import Link from 'next/link';
import DashCard from './(public)/homepage/dashcard';
import AnimateWrapper from '@/components/AnimateWrapper';
import HighlyRatedBooksGrid from './(public)/homepage/highly-rated-books-grid';

export default function Home() {
    return (
      
      <main className="flex justify-center">
        <AnimateWrapper>
<DashCard />
<HighlyRatedBooksGrid />
</AnimateWrapper>
      </main>
      
    );
  }

