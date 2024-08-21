import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col gap-2 p-5 max-w-xs bg-slate-800 text-white w-full">
      <div className="text-center my-4">PagePulse</div>
      <div>
        Welcome to PagePulse
      </div>
      </div>
    </main>
  );
}
