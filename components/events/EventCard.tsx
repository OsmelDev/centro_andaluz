import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Ticket } from "lucide-react"

interface EventCardProps {
  title: string
  description: string
  time: string
  location: string
  category: string
  image: string
  price?: string
  buttonText?: string
  buttonVariant?: "default" | "secondary" | "outline"
}

export function EventCard({
  title,
  description,
  time,
  location,
  category,
  image,
  price,
  buttonText = "Reservar entrada",
  buttonVariant = "secondary",
}: EventCardProps) {
  return (
    <Card className="overflow-hidden py-0 pb-6 border border-app-primary bg-app-primary/30 border-t-8 border-t-app-primary hover:border-app-primary/50 transition-colors">
      <div className="relative aspect-[16/9]">
        <img src={image || "/placeholder.svg"} alt={title}  className="object-cover" />
        <Badge className="absolute top-3 right-3 bg-card/90 text-card-foreground border-0">{category}</Badge>
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted/50">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>

        <div className="text-muted">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted/70">{description}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-green-500">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        {price && (
          <div className="flex items-center gap-2 text-sm">
            <Ticket className="h-4 w-4" />
            <span className="font-medium">{price}</span>
          </div>
        )}

        <Button variant={buttonVariant} className="w-full bg-app-primary">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
