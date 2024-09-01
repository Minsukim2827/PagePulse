"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookText, Menu } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="min-w-screen bg-theme2 shadow-md px-4 py-5 flex flex-row justify-between gap-10 items-center h-auto mb-10">
      <div className="flex items-center flex-row space-x-4">
        <Link href="/" className="flex flex-row" passHref>
          <BookText size={40} className="text-white" />
          <span className="font-bold text-white text-3xl">Page</span>
          <span className="font-bold text-red-600 text-3xl">Pulse</span>
        </Link>
      </div>
      
      <div className="hidden xl:flex flex-grow justify-center items-center space-x-6">
        <Link href="/feed" passHref>
          <Button variant="link" className="text-2xl text-white">
            Feed
          </Button>
        </Link>
        <Link href="/discovery" passHref>
          <Button variant="link" className="text-2xl text-white">
            Discovery
          </Button>
        </Link>
        <Link href="/playlists" passHref>
          <Button variant="link" className="text-2xl text-white">
            Playlists
          </Button>
        </Link>
        <Link href="/profile" passHref>
          <Button variant="link" className="text-2xl text-white">
            Profile
          </Button>
        </Link>
      </div>

      <div className="hidden xl:flex items-center space-x-4">
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <Button variant="link" className="text-2xl text-white">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
            elements: {
              avatarBox: {
                height: '50px',
                width: '50px'
              }
            }
          }} />
        </SignedIn>

      </div>
      <button onClick={toggleMenu} className="xl:hidden text-white">
          <Menu size={40} />
        </button>
      {isMenuOpen && (
        <div className="xl:hidden absolute top-16 right-0 bg-theme2 shadow-md p-5 flex flex-col space-y-4 z-50">
          <Link href="/feed" passHref>
            <Button variant="link" className="text-xl text-white block">
              Feed
            </Button>
          </Link>
          <Link href="/discovery" passHref>
            <Button variant="link" className="text-xl text-white block">
              Discovery
            </Button>
          </Link>
          <Link href="/playlists" passHref>
            <Button variant="link" className="text-xl text-white block">
              Playlists
            </Button>
          </Link>
          <Link href="/profile" passHref>
            <Button variant="link" className="text-xl text-white block">
              Profile
            </Button>
          </Link>
          <div className="flex flex-row justify-between items-center space-x-4">
            <ModeToggle />
            <SignedIn>
              <UserButton appearance={{
                elements: {
                  avatarBox: {
                    height: '50px',
                    width: '50px'
                  }
                }
              }} />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
