
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function feed() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-background">
        <div className="container mx-auto py-6 md:py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Acme Inc</div>
                <div className="text-xs text-muted-foreground">@acme • 2h</div>
              </div>
            </div>
            <p className="mt-4">
              Excited to announce our latest product launch! Check it out and let us know what you think.
            </p>
          </Card>
          <Card className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">John Doe</div>
                <div className="text-xs text-muted-foreground">@johndoe • 4h</div>
              </div>
            </div>
            <p className="mt-4">Just finished an amazing hike in the mountains. The views were breathtaking!</p>
          </Card>
          <Card className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Sarah Adams</div>
                <div className="text-xs text-muted-foreground">@sarahadams • 6h</div>
              </div>
            </div>
            <p className="mt-4">Loving the new update to our company's website. The design team did an amazing job!</p>
          </Card>
          <Card className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Michael Johnson</div>
                <div className="text-xs text-muted-foreground">@michaelj • 8h</div>
              </div>
            </div>
            <p className="mt-4">Can't wait for the big game tonight! Who do you think will win?</p>
          </Card>
          <Card className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Emily Martinez</div>
                <div className="text-xs text-muted-foreground">@emilym • 10h</div>
              </div>
            </div>
            <p className="mt-4">Just discovered this amazing new cafe in town. The coffee is so good!</p>
          </Card>
          <Card className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>LW</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Lucas Wang</div>
                <div className="text-xs text-muted-foreground">@lucasw • 12h</div>
              </div>
            </div>
            <p className="mt-4">Excited to start a new project at work. Can't wait to see what we can create!</p>
          </Card>
        </div>
      </main>
    </div>
  )
}


