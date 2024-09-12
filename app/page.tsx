import React from "react";
import DashCard from "./(public)/homepage/DashCard/DashCard";
import AnimateWrapper from "@/components/AnimateWrapper";
import HighlyRatedBooksGrid from "./(public)/homepage/HighlyRatedBooksGrid";

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
