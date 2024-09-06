
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function profilepage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-start gap-6">
        <Avatar className="w-20 h-20 md:w-24 md:h-24">
          <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">Avid book enthusiast</p>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="grid gap-8">
        <section>
          <h2 className="text-xl font-bold mb-4">My Book Lists</h2>
          <div className="grid gap-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Fiction Favorites</h3>
                <Badge variant="secondary">10 books</Badge>
              </div>
              <p className="text-muted-foreground">A collection of my all-time favorite fiction novels.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">The Great Gatsby</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">F. Scott Fitzgerald</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">To Kill a Mockingbird</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">Harper Lee</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">Pride and Prejudice</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">Jane Austen</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">1984</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">George Orwell</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Non-Fiction Picks</h3>
                <Badge variant="secondary">8 books</Badge>
              </div>
              <p className="text-muted-foreground">A selection of my favorite non-fiction reads.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">Sapiens: A Brief History of Humankind</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">Yuval Noah Harari</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">Educated: A Memoir</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">Tara Westover</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">Atomic Habits</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">James Clear</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Book Cover"
                    width={150}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/200", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <div className="font-medium line-clamp-2">The Power of Habit</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">Charles Duhigg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">My Book Reviews</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <img
                src="/placeholder.svg"
                alt="Book Cover"
                width={100}
                height={150}
                className="rounded-lg"
                style={{ aspectRatio: "100/150", objectFit: "cover" }}
              />
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <div className="font-medium">The Kite Runner</div>
                  <div className="text-sm text-muted-foreground">Khaled Hosseini</div>
                </div>
                <p className="text-sm leading-normal">
                  This book is a powerful and emotional read that explores themes of guilt, redemption, and the enduring
                  bonds of friendship. The characters are complex and the story is beautifully written.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src="/placeholder.svg"
                alt="Book Cover"
                width={100}
                height={150}
                className="rounded-lg"
                style={{ aspectRatio: "100/150", objectFit: "cover" }}
              />
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <div className="font-medium">The Alchemist</div>
                  <div className="text-sm text-muted-foreground">Paulo Coelho</div>
                </div>
                <p className="text-sm leading-normal">
                  A captivating and inspiring story that reminds us to follow our dreams and trust the journey. The
                  writing is beautiful and the message is profound.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src="/placeholder.svg"
                alt="Book Cover"
                width={100}
                height={150}
                className="rounded-lg"
                style={{ aspectRatio: "100/150", objectFit: "cover" }}
              />
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <div className="font-medium">The Handmaid's Tale</div>
                  <div className="text-sm text-muted-foreground">Margaret Atwood</div>
                </div>
                <p className="text-sm leading-normal">
                  A chilling and thought-provoking dystopian novel that explores themes of power, oppression, and the
                  resilience of the human spirit. Atwood's writing is masterful and the story is deeply compelling.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
