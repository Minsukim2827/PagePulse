import React from 'react';
import Link from 'next/link';
const DashCard: React.FC = () => {
  return (
    <div className="bg-theme2 border-4 border-black flex flex-col items-center p-4 w-auto h-auto rounded-2xl">
      <h1 className="text-white text-2xl font-bold mb-2">Dashboard</h1>
      <h2 className=" text-theme10 text-xl mb-4">Overview</h2>
      
      <div className="border-4 border-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
      {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="border-4 border-black p-4 grid grid-cols-2 grid-rows-2 gap-2">

            <div className="col-span-1 row-span-2 bg-gray-100 p-2">Right {index + 1}</div>
            <div className="row-span-2 flex flex-col justify-between">
              <div className="bg-gray-200 p-2">Left Top {index + 1}</div>
              <div className="bg-gray-200 p-2">Left Bottom {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
<Link href="/signup" passHref>
</Link>
      </div>
    </div>
  );
};

export default DashCard;
