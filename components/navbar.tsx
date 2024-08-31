import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookText } from 'lucide-react';
import {ModeToggle} from "@/components/mode-toggle";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Sign } from "crypto";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-theme2 shadow-md px-4 py-5 flex flex-row justify-between gap-10 items-center h-auto mb-10">
      <div></div>
      <div className=" flex items-center flex-row space-x-4">
        <Link href="/" className="flex flex-row " passHref>
          <BookText size={40} className="text-white" />
            <span className="font-bold text-white text-3xl">Page</span>
            <span className="font-bold text-red-600 text-3xl">Pulse</span>

        </Link>
      </div>
      <div className="flex justify-center items-center space-x-6">
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
      <div className="flex items-center space-x-4 justify-center">
      <ModeToggle />
      <Link href="/sign-up" passHref>
      <SignedOut>
          <SignInButton>
            <Button variant="link" className="text-2xl text-white">
              Sign In
              </Button>
            </SignInButton>

        </SignedOut>
        <SignedIn>
          <div className="flex justify-center items-center">
          <UserButton appearance={{
    elements: {
      avatarBox: {
        height: '50px', // Adjust height as needed
        width: '50px'  // Adjust width as needed
      }
    }
  }}/></div>
          </SignedIn>
          </Link>

      </div>
      <div>

      </div>
    </nav>
  );
};

export default Navbar;
