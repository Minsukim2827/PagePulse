import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function BookCard1({ link, title, author, img }) {
  return (
    <Card className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <Link href={link} className="group block relative overflow-hidden" prefetch={false}>
        <Image
          src={img}
          alt={`Cover of the book: ${title}`}
          width={500}
          height={700}
          className="w-full h-[500px] sm:h-[400px] md:h-[350px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ aspectRatio: "500/700", objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{author}</p>
        </div>
      </Link>
    </Card>
  );
}
