
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar: React.FC = () => {
    return (
      <nav className="bg-grey shadow-md px-4 py-2 flex flex-row justify-between gap-10 items-center h-auto fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl">
            <span className="text-brown-600 text-2xl">Page</span>
            <span className="text-red-600 text-2xl">Pulse</span>
          </span>
        </div>
        <div className="flex justify-center items-center space-x-6">
          <Link href="/feed" passHref>
            <Button variant="link" className="text-xl">Feed</Button>
          </Link>
          <Link href="/profile" passHref>
            <Button variant="link" className="text-xl">Profile</Button>
          </Link>
          <Link href="/following" passHref>
            <Button variant="link" className="text-xl">Following</Button>
          </Link>
          <Link href="/followers" passHref>
            <Button variant="link" className="text-xl">Followers</Button>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/signup" passHref>
            <Button variant="outline" className="text-xl">Sign Up</Button>
          </Link>
          <Link href="/signin" passHref>
            <Button variant="destructive" className="text-xl">Sign In</Button>
          </Link>
        </div>
      </nav>
    );
};
  
  export default Navbar;
  