import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Users, Ticket } from "lucide-react"
import Image from "next/image"

interface HorizontalEventCardProps {
  title: string
  description: string
  time: string
  location: string
  category: string
  image: string
  capacity?: string
  price?: string
  buttonText?: string
}

export function HorizontalEventCard({
  title,
  description,
  time,
  location,
  category,
  image,
  capacity,
  price,
  buttonText = "Ver Detalles",
}: HorizontalEventCardProps) {
  return (
    <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-colors">
      <div className="grid md:grid-cols-[240px_1fr] gap-6">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <Badge className="absolute top-3 left-3 bg-card/90 text-card-foreground border-0">{category}</Badge>
        </div>

        <CardContent className="p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="h-4 w-4" />
                <span>{time}</span>
              </div>

              {location && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
              )}

              {capacity && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{capacity}</span>
                </div>
              )}

              {price && (
                <div className="flex items-center gap-2">
                  <Ticket className="h-4 w-4" />
                  <span className="font-medium">{price}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <Button variant="outline" className="w-full md:w-auto bg-transparent">
              {buttonText}
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
