"use client";

import { useState } from 'react';
import Link from "next/link";
import { SquareUser, ListVideo, Telescope, Newspaper, BookText, Menu } from 'lucide-react';
import { ModeToggle } from "@/components/mode-toggle";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import NavButton from '@/components/ui/navButton/navButton';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-p13 m-auto px-4 py-2 flex flex-row justify-between gap-10 items-center h-auto mb-10">
      <div className="flex items-center flex-row space-x-4">
        <Link href="/" className="flex flex-row" passHref>
          <BookText size={30} className="text-violet-700 dark:text-violet-700" />
          <span className="font-bold text-black text-2xl dark:text-white">Page</span>
          <span className="font-bold text-fuchsia-700 dark:text-fuchsia-600 text-2xl">Pulse</span>
        </Link>
      </div>
      
      <div className="hidden xl:flex flex-grow justify-center items-center space-x-2">
        <Link href="/feed" passHref className="hidden lg:flex items-center justify-center flex-row">
          <NavButton>
            <Newspaper size={20} strokeWidth={1.5} className="text-lime-600 dark:text-lime-400"/>
            Feed
          </NavButton>
        </Link>
        <Link href="/discovery" passHref className="hidden lg:flex items-center justify-center flex-row">
          <NavButton>
            <Telescope size={20} strokeWidth={1.5} className="text-yellow-600 dark:text-yellow-400"/>
            Discovery
          </NavButton>
        </Link>
        <Link href="/playlists" passHref className="hidden lg:flex items-center justify-center flex-row">
          <NavButton>
            <ListVideo size={20} strokeWidth={1.5} className="text-red-600 dark:text-red-400"/>
            Playlists
          </NavButton>
        </Link>
        <Link href="/profile" passHref className="hidden lg:flex items-center justify-center flex-row">
          <NavButton>
            <SquareUser size={20} strokeWidth={1.5} className="text-cyan-600 dark:text-cyan-400"/>
            Profile
          </NavButton>
        </Link>
      </div>

      <div className="hidden xl:flex items-center space-x-1">
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <Link href="/sign-in" passHref>
            <NavButton>
              Sign In
            </NavButton>
            </Link>
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden absolute top-16 right-0 bg-gray-300 dark:bg-zinc-700 shadow-lg p-5 flex flex-col space-y-4 z-50 rounded-lg mr-2"
            style={{ boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)" }} // Background shadow
          >
            <Link href="/feed" passHref className="flex items-center justify-center flex-row">
              <NavButton>
                <Newspaper size={20} strokeWidth={1.5} className="text-lime-600 dark:text-lime-400"/>
                Feed
              </NavButton>
            </Link>
            <Link href="/discovery" passHref className="flex items-center justify-center flex-row">
              <NavButton>
                <Telescope size={20} strokeWidth={1.5} className="text-yellow-600 dark:text-yellow-400"/>
                Discovery
              </NavButton>
            </Link>
            <Link href="/playlists" passHref className="flex items-center justify-center flex-row">
              <NavButton>
                <ListVideo size={20} strokeWidth={1.5} className="text-red-600 dark:text-red-400"/>
                Playlists
              </NavButton>
            </Link>
            <Link href="/profile" passHref className="flex items-center justify-center flex-row">
              <NavButton>
                <SquareUser size={20} strokeWidth={1.5} className="text-cyan-600 dark:text-cyan-400"/>
                Profile
              </NavButton>
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
