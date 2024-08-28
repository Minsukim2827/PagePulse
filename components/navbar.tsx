import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-theme_tomato shadow-md px-4 py-5 flex flex-row justify-between gap-10 items-center h-auto mb-10">
      <div></div>
      <div className="flex items-center space-x-4">
        <Link href="/" passHref>
          <span className="font-bold text-xl">
            <span className="text-white text-2xl">Page</span>
            <span className="text-red-600 text-2xl">Pulse</span>
          </span>
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-6">
        <Link href="/feed" passHref>
          <Button variant="link" className="text-xl">
            Feed
          </Button>
        </Link>
        <Link href="/discovery" passHref>
          <Button variant="link" className="text-xl">
            Discovery
          </Button>
        </Link>
        <Link href="/playlists" passHref>
          <Button variant="link" className="text-xl">
            Playlists
          </Button>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/signup" passHref>
          <Button variant="outline" className="text-xl">
            Sign Up
          </Button>
        </Link>
        <Link href="/signin" passHref>
          <Button variant="destructive" className="text-xl">
            Sign In
          </Button>
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
