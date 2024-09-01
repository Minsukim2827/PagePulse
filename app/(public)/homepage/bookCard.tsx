import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link'; // Import Link from Next.js

interface BookCardProps {
  link: string;
  img: string;
  title: string;
  author: string;
}

const BookCard: React.FC<BookCardProps> = ({ link, img, title, author }) => {
  return (
<div className="w-full max-w-sm mx-auto rounded-3xl">
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{author}</CardDescription>
    </CardHeader>
    <CardContent>
      <Link href={link} passHref>
        <div className="relative h-60 md:h-80">
          <Image
            src={img}
            alt={`Cover of the book: ${title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </Link>
    </CardContent>
  </Card>
</div>
  );
}

export default BookCard;
