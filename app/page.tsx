import React from 'react';
import Link from 'next/link';
import DashCard from './(public)/homepage/dashcard';
import AnimateWrapper from '@/components/AnimateWrapper';

export default function Home() {
    return (
      
      <main className="flex justify-center">
        <AnimateWrapper>
<DashCard />
</AnimateWrapper>
      </main>
      
    );
  }

