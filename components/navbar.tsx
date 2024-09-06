"use client";

import { useState } from 'react';
import Link from "next/link";
import { SquareUser, ListVideo, Telescope, Newspaper, BookText, Menu } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import NavButton from '@/components/ui/navButton/navButton'
import {Button} from '@/components/ui/button'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="min-w-screen shadow-md px-4 py-2 flex flex-row justify-between gap-10 items-center h-auto mb-10">
      <div className="flex items-center flex-row space-x-4">
        <Link href="/" className="flex flex-row" passHref>
          <BookText size={30} className="text-black dark:text-white" />
          <span className="font-bold text-black text-2xl dark:text-white">Page</span>
          <span className="font-bold text-violet-900 text-2xl">Pulse</span>
        </Link>
      </div>
      
      <div className="hidden xl:flex flex-grow justify-center items-center space-x-2">
        <Link href="/feed" passHref className="hidden lg:flex items-center justify-center flex-row">
        
          <NavButton>
          <Newspaper size={20} strokeWidth={1.5} className="text-black dark:text-lime-400"/>
            Feed
          </NavButton>
        </Link>
        <Link href="/discovery" passHref className="hidden lg:flex items-center justify-center flex-row">
        
          <NavButton>
          <Telescope size={20} strokeWidth={1.5} className="text-black dark:text-yellow-400"/>
            Discovery
          </NavButton>
        </Link>
        <Link href="/playlists" passHref className="hidden lg:flex items-center justify-center flex-row">
        
          <NavButton>
          <ListVideo size={20} strokeWidth={1.5} className="text-black dark:text-red-400"/>
            Playlists
          </NavButton>
        </Link>
        <Link href="/profile" passHref className="hidden lg:flex items-center justify-center flex-row">
          <NavButton>
          <SquareUser size={20} strokeWidth={1.5} className="text-black dark:text-cyan-400"/>
            Profile
          </NavButton>
        </Link>
      </div>

      <div className="hidden xl:flex items-center space-x-1">
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <NavButton>
              Sign In
            </NavButton>
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
