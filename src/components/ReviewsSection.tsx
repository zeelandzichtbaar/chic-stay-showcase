import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    author: "Sarah",
    avatar: "S",
    rating: 5,
    date: "August 2024",
    text: "Absolutely stunning villa with incredible views! Maria was an amazing host and the property exceeded all our expectations. The infinity pool was our favorite spot to relax."
  },
  {
    id: 2,
    author: "James",
    avatar: "J",
    rating: 5,
    date: "July 2024",
    text: "Perfect location and beautifully designed space. The kitchen was fully equipped and the bedrooms were comfortable. We'll definitely be back!"
  },
  {
    id: 3,
    author: "Emma",
    avatar: "E",
    rating: 5,
    date: "June 2024",
    text: "This place is a dream! Everything was spotless and exactly as described. The sunset views from the terrace are unforgettable. Highly recommend!"
  }
];

const ReviewsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 fill-primary text-primary" />
          <span className="text-xl font-semibold">4.9</span>
        </div>
        <span className="text-xl font-semibold">47 reviews</span>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <Card key={review.id} className="shadow-card">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{review.avatar}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{review.author}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;