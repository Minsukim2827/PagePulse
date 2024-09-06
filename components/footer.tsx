
import {Github} from 'lucide-react'
import Link from 'next/link'
const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between py-10 px-8 bg-zinc-800 mt-16">
            <div className="text-gray-400">
            © 2024 PagePulse Bt. All rights reserved.
            </div>
            <div>
               <Link href="https://github.com/Minsukim2827/pagepulse">
<Github size={24} className="text-black dark:text-white"></Github>
</Link>
            </div>
        </footer>
    );
};

export default Footer;